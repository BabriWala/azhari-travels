import ExcelJS from "exceljs";
import { createHash } from "node:crypto";
import { responseKey } from "./leadResponses";

export function normalizeLeadPhone(value: string) {
    let digits = value.replace(/[০-৯]/g, c => String(c.charCodeAt(0) - 0x09e6)).replace(/\D/g, "");
    if (digits.startsWith("00")) digits = digits.slice(2);
    if (/^01\d{9}$/.test(digits)) digits = `88${digits}`;
    return digits;
}

export function decodeLeadText(buffer: Buffer) {
    if (buffer[0] === 0xff && buffer[1] === 0xfe) return buffer.subarray(2).toString("utf16le");
    if (buffer[0] === 0xfe && buffer[1] === 0xff) return new TextDecoder("utf-16be").decode(buffer.subarray(2));
    // Some spreadsheet exports omit the BOM; ASCII header bytes still reveal UTF-16.
    const sample = buffer.subarray(0, Math.min(buffer.length, 100));
    let oddNulls = 0, evenNulls = 0;
    sample.forEach((byte, index) => { if (byte === 0) { if (index % 2) oddNulls++; else evenNulls++; } });
    if (oddNulls > sample.length / 5) return buffer.toString("utf16le");
    if (evenNulls > sample.length / 5) return new TextDecoder("utf-16be").decode(buffer);
    return buffer.toString("utf8").replace(/^\uFEFF/, "");
}

function delimiterFor(text: string) {
    const counts = new Map([[",", 0], ["\t", 0], [";", 0]]);
    let quoted = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '"') { if (quoted && text[i + 1] === '"') i++; else quoted = !quoted; }
        else if (!quoted && (c === "\n" || c === "\r")) break;
        else if (!quoted && counts.has(c)) counts.set(c, counts.get(c)! + 1);
    }
    return [...counts].sort((a, b) => b[1] - a[1])[0][0];
}

export function parseCsv(text: string): string[][] {
    const rows: string[][] = [];
    let row: string[] = [], cell = "", quoted = false;
    text = text.replace(/^\uFEFF/, "").replace(/^(?:[ \t]*\r?\n)+/, "");
    const separatorHint = text.match(/^sep=([,;\t])\r?\n/i);
    if (separatorHint) text = text.slice(separatorHint[0].length);
    const delimiter = separatorHint?.[1] || delimiterFor(text);
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '"') {
            if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
            else if (quoted || cell === "") quoted = !quoted;
            else cell += c;
        } else if (c === delimiter && !quoted) { row.push(cell); cell = ""; }
        else if ((c === "\n" || c === "\r") && !quoted) {
            if (c === "\r" && text[i + 1] === "\n") i++;
            row.push(cell); rows.push(row); row = []; cell = "";
        } else cell += c;
    }
    if (quoted) throw new Error("CSV contains an unclosed quoted field.");
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows.filter(r => r.some(c => c.trim()));
}

export const aliases: Record<string, string[]> = {
    name: ["name", "full name", "lead name", "customer name", "client name", "নাম", "পুরো নাম"], email: ["email address", "email"],
    phone: ["phone", "phone number", "mobile", "mobile number"],
    source: ["source", "platform"], form: ["form", "form name", "campaign", "campaign name"], preferredContact: ["channel", "preferred contact"],
    status: ["stage", "status", "lead status"], owner: ["owner", "assigned to", "assignee"], labels: ["labels", "tags"],
    secondaryPhone: ["secondary phone number", "secondary phone"], whatsapp: ["whatsapp number", "whatsapp", "আপনার whatsapp/হোয়াটসএ্যাপ নাম্বারটি দিন"],
    importedCreated: ["created", "created at", "created time", "date"], service: ["service"], message: ["message", "notes"],
};
export type ImportedLead = ReturnType<typeof mapRows>["leads"][number];
export type ImportOptions = { flexible?: boolean; mapping?: Record<string,number>; sheet?: string; headerRow?: number };
export function mapRows(rows: string[][], options:ImportOptions = {}) {
    if (rows.length < 2) throw new Error("The file needs a header row and at least one lead.");
    if (rows.length > 5001) throw new Error("Import at most 5,000 leads at a time.");
    let headers = rows[0].map(h => h.replace(/[\uFEFF\u200B-\u200F]/g, "").trim());
    if(options.flexible) {
        const used=new Set<string>();
        headers=headers.map((header,index)=>{const base=header||"Column "+(index+1);let unique=base,n=2;while(used.has(responseKey(unique.replace(/-/g," "))))unique=base+" ("+(n++)+")";used.add(responseKey(unique.replace(/-/g," ")));return unique;});
    }
    const normalized = headers.map(h => responseKey(h.replace(/-/g, " ")));
    if (new Set(normalized).size !== normalized.length || normalized.some(h => !h)) throw new Error("Each column needs a unique, nonempty header.");
    if (!options.flexible && !normalized.some(h => aliases.name.includes(h))) throw new Error('Could not find a Name or full_name column. Use the original CSV/XLSX export with its header row. Comma, tab and semicolon separators are supported.');
    const mapped = Object.fromEntries(Object.entries(aliases).map(([key, names]) => [key, names.map(n => normalized.indexOf(responseKey(n))).find(i => i >= 0) ?? -1]));
    if(options.mapping) {
        const indexes=Object.values(options.mapping).filter(i=>i>=0);
        if(Object.entries(options.mapping).some(([key,i])=>!Object.hasOwn(aliases,key)||!Number.isInteger(i)||i < -1||i>=headers.length)||new Set(indexes).size!==indexes.length)throw new Error("Choose different valid columns for each CRM field.");
        Object.assign(mapped,options.mapping);
    }
    const warnings: string[] = [];
    if(options.flexible && mapped.name<0)warnings.push("No name column selected. Rows will use their phone/email or a generated Record label.");
    const leads = rows.slice(1).flatMap((row, index) => {
        const get = (key: string) => (row[mapped[key]] ?? "").trim();
        if (!options.flexible && !get("name")) { warnings.push(`Row ${index + 2}: skipped because the name is empty.`); return []; }
        if (row.length > headers.length || row.some(c => c.length > 10000)) throw new Error(`Row ${index + 2} has extra columns or an oversized cell.`);
        const phone = get("phone").replace(/^p:\s*/i, ""), email = get("email");
        if (/^p:\s*\+?\d/i.test(get("name")) || phone && !/^[+\d০-৯\s().-]+$/.test(phone)) {
            warnings.push(`Row ${index + 2}: name/phone fields appear shifted or invalid; skipped. Export this row again rather than moving answers between columns.`);
            return [];
        }
        const identity = normalizeLeadPhone(phone) || email.toLowerCase() || (get("name") ? `${get("name").toLowerCase()}|${get("importedCreated")}` : "record:"+JSON.stringify([headers,row]));
        return [{ name: get("name") || email || phone || `Record ${index+2}`, phone, email: email || null, source: get("source") || "File import", form: get("form"),
            preferredContact: get("preferredContact") || "phone", status: get("status") === "CREATED" ? "New" : get("status") || "New", owner: get("owner") || "Unassigned",
            labels: get("labels"), secondaryPhone: get("secondaryPhone"), whatsapp: get("whatsapp"), importedCreated: get("importedCreated"),
            service: get("service") || get("form") || "General enquiry", message: get("message"),
            extraFields: JSON.stringify(Object.fromEntries(headers.flatMap((h, i) => !options.flexible && Object.values(mapped).includes(i) && !/[\u0980-\u09ff]/.test(h) && !["created time", "form name", "platform", "lead status"].includes(normalized[i]) ? [] : [[h, (row[i] ?? "").trim()]]))),
            importKey: (identity.startsWith("record:")?"record:":"")+createHash("sha256").update(identity).digest("hex") }];
    });
    return { leads, warnings, headers, mapped: Object.entries(mapped).filter(([, i]) => i >= 0).map(([field, i]) => ({ field, column: headers[i] })) };
}

export async function readLeadRows(file:File, options:ImportOptions={}) {
    if (!file.size || file.size > 10*1024*1024)throw new Error("Choose a nonempty spreadsheet up to 10 MB.");
    const headerRow=options.headerRow??1;
    if(!Number.isInteger(headerRow)||headerRow<1||headerRow>100)throw new Error("Header row must be between 1 and 100.");
    const buffer=Buffer.from(await file.arrayBuffer());
    let rows:string[][],sheets:string[];
    if(/\.(csv|tsv)$/i.test(file.name)){rows=parseCsv(decodeLeadText(buffer));sheets=["CSV / TSV"];}
    else {
        if(!/\.(xlsx|xlsm)$/i.test(file.name))throw new Error("Use .xlsx, .xlsm, .csv or .tsv. Save older .xls files as .xlsx first.");
        const workbook=new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer as unknown as Parameters<typeof workbook.xlsx.load>[0]);
        sheets=workbook.worksheets.map(s=>s.name);
        const sheet=options.sheet?workbook.getWorksheet(options.sheet):workbook.worksheets.find(s=>s.actualRowCount>0);
        if(!sheet)throw new Error("Choose a worksheet containing data.");
        if(sheet.rowCount>5100||sheet.columnCount>100)throw new Error("Use up to 5,000 records and 100 columns per worksheet.");
        rows=[];
        for(let r=1;r<=sheet.rowCount;r++){
            const row=sheet.getRow(r),cells:string[]=[];
            for(let c=1;c<=sheet.columnCount;c++){const cell=row.getCell(c);cells.push(cell.value instanceof Date?cell.value.toISOString():cell.text);}
            rows.push(cells);
        }
        options={...options,sheet:sheet.name};
    }
    rows=rows.slice(headerRow-1);
    if(rows.length)rows=[rows[0],...rows.slice(1).filter(row=>row.some(cell=>cell.trim()))];
    if(!rows.length||rows.length>5001||rows.some(row=>row.length>100))throw new Error("Choose a header row with up to 5,000 records and 100 columns below it.");
    return {rows,sheets,sheet:options.sheet||sheets[0]};
}
export async function readLeadFile(file:File,options:ImportOptions={}) {
    const data=await readLeadRows(file,options);
    return {...mapRows(data.rows,options),sheets:data.sheets,sheet:data.sheet};
}

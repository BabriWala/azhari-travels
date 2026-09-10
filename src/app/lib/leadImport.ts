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

const aliases: Record<string, string[]> = {
    name: ["name", "full name", "lead name"], email: ["email address", "email"],
    phone: ["phone", "phone number", "mobile", "mobile number"],
    source: ["source", "platform"], form: ["form", "form name", "campaign", "campaign name"], preferredContact: ["channel", "preferred contact"],
    status: ["stage", "status", "lead status"], owner: ["owner", "assigned to", "assignee"], labels: ["labels", "tags"],
    secondaryPhone: ["secondary phone number", "secondary phone"], whatsapp: ["whatsapp number", "whatsapp", "আপনার whatsapp/হোয়াটসএ্যাপ নাম্বারটি দিন"],
    importedCreated: ["created", "created at", "created time", "date"], service: ["service"], message: ["message", "notes"],
};
export type ImportedLead = ReturnType<typeof mapRows>["leads"][number];
export function mapRows(rows: string[][]) {
    if (rows.length < 2) throw new Error("The file needs a header row and at least one lead.");
    if (rows.length > 5001) throw new Error("Import at most 5,000 leads at a time.");
    const headers = rows[0].map(h => h.replace(/[\uFEFF\u200B-\u200F]/g, "").trim());
    const normalized = headers.map(h => responseKey(h.replace(/-/g, " ")));
    if (new Set(normalized).size !== normalized.length || normalized.some(h => !h)) throw new Error("Each column needs a unique, nonempty header.");
    if (!normalized.some(h => aliases.name.includes(h))) throw new Error('Could not find a Name or full_name column. Use the original CSV/XLSX export with its header row. Comma, tab and semicolon separators are supported.');
    const mapped = Object.fromEntries(Object.entries(aliases).map(([key, names]) => [key, names.map(n => normalized.indexOf(responseKey(n))).find(i => i >= 0) ?? -1]));
    const warnings: string[] = [];
    const leads = rows.slice(1).flatMap((row, index) => {
        const get = (key: string) => (row[mapped[key]] ?? "").trim();
        if (!get("name")) { warnings.push(`Row ${index + 2}: skipped because the name is empty.`); return []; }
        if (row.length > headers.length || row.some(c => c.length > 10000)) throw new Error(`Row ${index + 2} has extra columns or an oversized cell.`);
        const phone = get("phone").replace(/^p:\s*/i, ""), email = get("email");
        if (/^p:\s*\+?\d/i.test(get("name")) || phone && !/^[+\d০-৯\s().-]+$/.test(phone)) {
            warnings.push(`Row ${index + 2}: name/phone fields appear shifted or invalid; skipped. Export this row again rather than moving answers between columns.`);
            return [];
        }
        const identity = normalizeLeadPhone(phone) || email.toLowerCase() || `${get("name").toLowerCase()}|${get("importedCreated")}`;
        return [{ name: get("name"), phone, email: email || null, source: get("source") || "File import", form: get("form"),
            preferredContact: get("preferredContact") || "phone", status: get("status") === "CREATED" ? "New" : get("status") || "New", owner: get("owner") || "Unassigned",
            labels: get("labels"), secondaryPhone: get("secondaryPhone"), whatsapp: get("whatsapp"), importedCreated: get("importedCreated"),
            service: get("service") || get("form") || "General enquiry", message: get("message"),
            extraFields: JSON.stringify(Object.fromEntries(headers.flatMap((h, i) => Object.values(mapped).includes(i) && !/[\u0980-\u09ff]/.test(h) && !["created time", "form name", "platform", "lead status"].includes(normalized[i]) ? [] : [[h, (row[i] ?? "").trim()]]))),
            importKey: createHash("sha256").update(identity).digest("hex") }];
    });
    return { leads, warnings, headers, mapped: Object.entries(mapped).filter(([, i]) => i >= 0).map(([field, i]) => ({ field, column: headers[i] })) };
}

export async function readLeadFile(file: File) {
    if (!file.size || file.size > 10 * 1024 * 1024) throw new Error("Choose a nonempty CSV or XLSX file up to 10 MB.");
    const buffer = Buffer.from(await file.arrayBuffer());
    if (/\.csv$/i.test(file.name)) return mapRows(parseCsv(decodeLeadText(buffer)));
    if (!/\.xlsx$/i.test(file.name)) throw new Error("Only .csv and .xlsx files are supported.");
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer as unknown as Parameters<typeof workbook.xlsx.load>[0]);
    const sheet = workbook.worksheets[0];
    if (!sheet || sheet.rowCount > 5001 || sheet.columnCount > 100) throw new Error("The first worksheet must contain no more than 5,000 leads and 100 columns.");
    const rows: string[][] = [];
    sheet.eachRow(row => {
        const cells: string[] = [];
        for (let i = 1; i <= sheet.columnCount; i++) {
            const cell = row.getCell(i);
            // Read values only. Formula expressions and hyperlinks are never executed.
            cells.push(cell.value instanceof Date ? cell.value.toISOString() : cell.text);
        }
        rows.push(cells);
    });
    return mapRows(rows);
}

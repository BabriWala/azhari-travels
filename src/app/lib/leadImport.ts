import ExcelJS from "exceljs";
import { createHash } from "node:crypto";

export function parseCsv(text: string): string[][] {
    const rows: string[][] = [];
    let row: string[] = [], cell = "", quoted = false;
    text = text.replace(/^\uFEFF/, "");
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '"') {
            if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
            else if (quoted || cell === "") quoted = !quoted;
            else cell += c;
        } else if (c === "," && !quoted) { row.push(cell); cell = ""; }
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
    source: ["source"], form: ["form", "campaign"], preferredContact: ["channel", "preferred contact"],
    status: ["stage", "status"], owner: ["owner", "assigned to", "assignee"], labels: ["labels", "tags"],
    secondaryPhone: ["secondary phone number", "secondary phone"], whatsapp: ["whatsapp number", "whatsapp"],
    importedCreated: ["created", "created at", "date"], service: ["service"], message: ["message", "notes"],
};
export type ImportedLead = ReturnType<typeof mapRows>["leads"][number];
export function mapRows(rows: string[][]) {
    if (rows.length < 2) throw new Error("The file needs a header row and at least one lead.");
    if (rows.length > 5001) throw new Error("Import at most 5,000 leads at a time.");
    const headers = rows[0].map(h => h.trim());
    const normalized = headers.map(h => h.toLowerCase().replace(/[_-]/g, " ").replace(/\s+/g, " "));
    if (new Set(normalized).size !== normalized.length || normalized.some(h => !h)) throw new Error("Each column needs a unique, nonempty header.");
    if (!normalized.some(h => aliases.name.includes(h))) throw new Error('A "Name" column is required.');
    const mapped = Object.fromEntries(Object.entries(aliases).map(([key, names]) => [key, normalized.findIndex(h => names.includes(h))]));
    const warnings: string[] = [];
    const leads = rows.slice(1).flatMap((row, index) => {
        const get = (key: string) => (row[mapped[key]] ?? "").trim();
        if (!get("name")) { warnings.push(`Row ${index + 2}: skipped because the name is empty.`); return []; }
        if (row.length > headers.length || row.some(c => c.length > 10000)) throw new Error(`Row ${index + 2} has extra columns or an oversized cell.`);
        const phone = get("phone"), email = get("email");
        const identity = phone.replace(/\D/g, "") || email.toLowerCase() || `${get("name").toLowerCase()}|${get("importedCreated")}`;
        return [{ name: get("name"), phone, email: email || null, source: get("source") || "File import", form: get("form"),
            preferredContact: get("preferredContact") || "phone", status: get("status") || "New", owner: get("owner") || "Unassigned",
            labels: get("labels"), secondaryPhone: get("secondaryPhone"), whatsapp: get("whatsapp"), importedCreated: get("importedCreated"),
            service: get("service") || get("form") || "General enquiry", message: get("message"),
            extraFields: JSON.stringify(Object.fromEntries(headers.flatMap((h, i) => Object.values(mapped).includes(i) ? [] : [[h, row[i] ?? ""]]))),
            importKey: createHash("sha256").update(identity).digest("hex") }];
    });
    return { leads, warnings, headers, mapped: Object.entries(mapped).filter(([, i]) => i >= 0).map(([field, i]) => ({ field, column: headers[i] })) };
}

export async function readLeadFile(file: File) {
    if (!file.size || file.size > 10 * 1024 * 1024) throw new Error("Choose a nonempty CSV or XLSX file up to 10 MB.");
    const buffer = Buffer.from(await file.arrayBuffer());
    if (/\.csv$/i.test(file.name)) return mapRows(parseCsv(buffer.toString("utf8")));
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

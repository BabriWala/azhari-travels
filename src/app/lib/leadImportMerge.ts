import type { ImportedLead } from "./leadImport";
import { normalizeLeadPhone } from "./leadImport";
import { readExtraFields, responseKey } from "./leadResponses";

type ExistingLead = Omit<ImportedLead, "importKey"> & { id: string; importKey: string | null };
type Enrichment = Partial<Pick<ImportedLead, "extraFields" | "phone" | "email" | "whatsapp" | "secondaryPhone" | "form">>;

function enrichment(existing: ExistingLead, incoming: ImportedLead): Enrichment {
    const previous = readExtraFields(existing.extraFields), next = { ...previous };
    const fields = readExtraFields(incoming.extraFields);
    const time = (values: Record<string, string>) => Date.parse(Object.entries(values).find(([k]) => responseKey(k) === "created time")?.[1] || "");
    const older = time(fields) < time(previous);
    for (const [key, value] of Object.entries(fields)) {
        const existingKey = Object.keys(next).find(k => responseKey(k) === responseKey(key)) || key;
        if (!(existingKey in next) || value.trim() && (!older || !next[existingKey]?.trim())) next[existingKey] = value;
    }
    const data: Enrichment = {};
    if (JSON.stringify(previous) !== JSON.stringify(next)) data.extraFields = JSON.stringify(next);
    // Imported answers must not overwrite staff-managed stages, owners or conversations.
    for (const field of ["phone", "email", "whatsapp", "secondaryPhone", "form"] as const) {
        if (!existing[field] && incoming[field]) data[field] = incoming[field];
    }
    return data;
}

export function planLeadImport(existing: ExistingLead[], incoming: ImportedLead[]) {
    const index = new Map<string, Set<string>>(), records = new Map(existing.map(l => [l.id, l]));
    const identities = (lead: Pick<ExistingLead, "phone" | "email" | "importKey" | "extraFields">) => {
        const phone = normalizeLeadPhone(lead.phone), email = lead.email?.trim().toLowerCase();
        const externalId = Object.entries(readExtraFields(lead.extraFields)).find(([k]) => ["id", "lead id"].includes(responseKey(k)))?.[1];
        return [phone && `phone:${phone}`, email && `email:${email}`, lead.importKey && `key:${lead.importKey}`, externalId && `external:${externalId}`].filter(Boolean) as string[];
    };
    const add = (lead: ExistingLead) => { for (const key of identities(lead)) { const ids = index.get(key) || new Set(); ids.add(lead.id); index.set(key, ids); } };
    existing.forEach(add);
    const seen = new Set<string>(), creates: ImportedLead[] = [], updates: { id: string; data: Enrichment; lead: ExistingLead }[] = [];
    let duplicates = 0;
    const warnings: string[] = [];
    incoming.forEach((lead, row) => {
        const matches = new Set(identities(lead).flatMap(key => [...(index.get(key) || [])]));
        if (matches.size > 1) { warnings.push(`Data row ${row + 1}: phone, email or lead ID matches multiple contacts; skipped for review.`); return; }
        const id = [...matches][0];
        if (id) {
            if (seen.has(id)) { duplicates++; return; }
            seen.add(id);
            const record = records.get(id)!;
            const data = enrichment(record, lead);
            if (Object.keys(data).length) {
                const updated = { ...record, ...data };
                updates.push({ id, data, lead: updated }); records.set(id, updated); add(updated);
            } else duplicates++;
        } else {
            const record = { ...lead, id: `pending:${row}` };
            creates.push(lead); records.set(record.id, record); seen.add(record.id); add(record);
        }
    });
    return { creates, updates, duplicates, warnings };
}

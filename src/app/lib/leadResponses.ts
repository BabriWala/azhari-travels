// Shared by the import pipeline and the browser. Values remain plain text.
export function readableResponse(value: string) {
    return value.normalize("NFKC").replace(/_/g, " ").replace(/\s+/g, " ").trim();
}

export function responseKey(value: string) {
    return readableResponse(value).toLowerCase();
}

const metadata = new Set([
    "id", "lead id", "created time", "created at", "created", "ad id", "ad name", "adset id", "adset name",
    "campaign id", "campaign name", "form id", "form name", "is organic", "platform", "lead status",
    "full name", "name", "phone", "phone number", "email", "email address", "source", "stage", "status", "owner", "labels", "retailer item id",
]);

export function readExtraFields(json: string): Record<string, string> {
    try {
        const parsed: unknown = JSON.parse(json);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
        return Object.fromEntries(Object.entries(parsed).filter(([, v]) => typeof v === "string"));
    } catch { return {}; }
}

export function responseEntries(json: string) {
    return Object.entries(readExtraFields(json)).filter(([question]) => !metadata.has(responseKey(question)))
        .map(([question, answer]) => ({ key: responseKey(question), question: readableResponse(question), answer: readableResponse(answer) }));
}

export function responseMetadata(json: string) {
    return Object.fromEntries(Object.entries(readExtraFields(json)).filter(([question]) => metadata.has(responseKey(question))));
}

export type ResponseFilter = { question: string; mode: "equals" | "contains" | "answered" | "unanswered"; answer: string; answers?: string[] };

export function matchesResponses(json: string, filters: ResponseFilter[], combination: "all" | "any" = "all") {
    const entries = responseEntries(json);
    const active = filters.filter(filter => filter.question && (filter.mode === "answered" || filter.mode === "unanswered" || filter.answer.trim() || filter.mode === "equals" && filter.answers?.length));
    if (!active.length) return true;
    const matches = (filter: ResponseFilter) => {
        const answer = entries.find(entry => entry.key === filter.question)?.answer || "";
        if (filter.mode === "answered") return !!answer;
        if (filter.mode === "unanswered") return !answer;
        if (filter.mode === "equals" && filter.answers?.length) return filter.answers.some(value => responseKey(value) === responseKey(answer));
        if (!filter.answer.trim()) return true;
        return filter.mode === "contains" ? responseKey(answer).includes(responseKey(filter.answer)) : responseKey(answer) === responseKey(filter.answer);
    };
    return combination === "any" ? active.some(matches) : active.every(matches);
}

export function searchableResponses(json: string) {
    return responseEntries(json).map(entry => `${entry.question} ${entry.answer}`).join(" ");
}

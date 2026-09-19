export const questionTypes = ["single", "multiple", "select", "yesno", "text", "textarea", "number", "date", "phone", "email", "consent"] as const;
export type QuestionType = typeof questionTypes[number];
export const contactFields = ["", "name", "phone", "email", "whatsapp", "service", "passport", "budget", "location", "education", "experience"] as const;
export type Answer = string | string[] | boolean;
export type Answers = Record<string, Answer>;
export type Question = {
    id: string; label: string; type: QuestionType; step: number; required: boolean; active: boolean;
    field: typeof contactFields[number]; options: string[];
    condition?: { questionId: string; value: string };
    rules: { operator: "equals" | "contains" | "gte" | "lte"; value: string; points: number; disqualify: boolean }[];
};
export type CampaignConfig = {
    description: string; information: string; cta: string; confirmation: string; privacy: string;
    steps: string[]; questions: Question[]; thresholds: { hot: number; qualified: number; warm: number };
};
export const qualificationStatuses = ["Partial", "Hot", "Qualified", "Warm", "Nurture", "Not Qualified", "Converted", "Lost"];
export function defaultCampaign(): CampaignConfig {
    const q = (id: string, label: string, type: QuestionType, step: number, field: Question["field"] = "", options: string[] = []): Question => ({ id, label, type, step, field, options, active: true, required: true, rules: [] });
    return {
        description: "Tell us about your plans. Our team will help you choose your next step.", information: "", cta: "Start assessment", confirmation: "Thank you. Your assessment has been received. Our team will follow up using your preferred contact details.",
        privacy: "Your answers are saved as you continue, including incomplete assessments, so our team can help with your enquiry. Please do not include passwords, payment details or document numbers.",
        steps: ["About you", "Your plans", "Contact & consent"], thresholds: { hot: 80, qualified: 60, warm: 30 },
        questions: [q("name", "Your name", "text", 0, "name"), q("phone", "Phone number", "phone", 0, "phone"),
            { ...q("passport", "Do you have a passport?", "yesno", 1, "passport", ["Yes", "No"]), rules: [{ operator: "equals", value: "Yes", points: 40, disqualify: false }] },
            { ...q("budget", "Is your budget ready?", "yesno", 1, "budget", ["Yes", "No"]), rules: [{ operator: "equals", value: "Yes", points: 40, disqualify: false }] },
            { ...q("email", "Email address (optional)", "email", 2, "email"), required: false },
            { ...q("consent", "I agree to be contacted about this enquiry.", "consent", 2), rules: [{ operator: "equals", value: "true", points: 20, disqualify: false }] }],
    };
}
export function validateConfig(value: unknown): CampaignConfig {
    if (!value || typeof value !== "object") throw new Error("Provide a campaign configuration.");
    const c = value as CampaignConfig;
    for (const key of ["description", "information", "cta", "confirmation", "privacy"] as const) if (typeof c[key] !== "string" || c[key].length > (key === "information" ? 10000 : 2000)) throw new Error(`Invalid ${key}.`);
    if (!c.cta.trim() || !c.privacy.trim() || !c.confirmation.trim()) throw new Error("Add button text, a privacy notice and confirmation text.");
    if (!Array.isArray(c.steps) || !c.steps.length || c.steps.length > 12 || c.steps.some(s => typeof s !== "string" || !s.trim() || s.length > 100)) throw new Error("Use 1–12 named steps.");
    if (!Array.isArray(c.questions) || !c.questions.length || c.questions.length > 60) throw new Error("Use 1–60 questions.");
    const ids = new Set<string>(), fields = new Set<string>();
    for (const q of c.questions) {
        if (!q || !/^[a-zA-Z0-9_-]{1,60}$/.test(q.id) || ["__proto__", "constructor", "prototype"].includes(q.id) || ids.has(q.id)) throw new Error("Question IDs must be unique.");
        if (typeof q.label !== "string" || !q.label.trim() || q.label.length > 500 || !questionTypes.includes(q.type) || !contactFields.includes(q.field) || typeof q.active !== "boolean" || typeof q.required !== "boolean" || !Number.isInteger(q.step) || q.step < 0 || q.step >= c.steps.length) throw new Error("Check question labels, types and steps.");
        if (q.active && q.field) { if (fields.has(q.field)) throw new Error(`Only one active question can map to ${q.field}.`); fields.add(q.field); }
        if (q.field === "email" && q.type !== "email" || ["phone", "whatsapp"].includes(q.field) && q.type !== "phone") throw new Error("Email and phone contact fields must use the matching question type.");
        if (!Array.isArray(q.options) || q.options.length > 50 || q.options.some(s => typeof s !== "string" || !s.trim() || s.length > 200) || new Set(q.options).size !== q.options.length || (["single", "multiple", "select"].includes(q.type) && !q.options.length)) throw new Error("Choice questions need unique, nonempty options.");
        if (q.condition) { const parent = c.questions.find(p => p.id === q.condition?.questionId); if (!parent || !ids.has(parent.id) || parent.step > q.step || !parent.active || typeof q.condition.value !== "string" || q.condition.value.length > 200) throw new Error("Conditions must refer to an earlier active question in this or a previous step."); }
        if (!Array.isArray(q.rules) || q.rules.length > 20 || q.rules.some(r => !["equals", "contains", "gte", "lte"].includes(r.operator) || typeof r.value !== "string" || r.value.length > 200 || !Number.isInteger(r.points) || r.points < 0 || r.points > 100 || typeof r.disqualify !== "boolean" || (["gte", "lte"].includes(r.operator) && (!r.value.trim() || !Number.isFinite(Number(r.value)))))) throw new Error("Check scoring rules (0–100 points each).");
        ids.add(q.id);
    }
    if (!c.questions.some(q => q.active && q.required && !q.condition && ["phone", "email", "whatsapp"].includes(q.field) && ["phone", "email"].includes(q.type))) throw new Error("Include an unconditional, required phone or email question mapped to a contact field.");
    if (!c.questions.some(q => q.active && q.required && !q.condition && q.type === "consent")) throw new Error("Include an unconditional, required consent checkbox.");
    if (!c.thresholds || [c.thresholds.hot, c.thresholds.qualified, c.thresholds.warm].some(n => !Number.isInteger(n) || n < 0 || n > 100) || c.thresholds.hot < c.thresholds.qualified || c.thresholds.qualified < c.thresholds.warm) throw new Error("Thresholds must satisfy Hot ≥ Qualified ≥ Warm, between 0 and 100.");
    return c;
}
export function visibleQuestions(config: CampaignConfig, answers: Answers) {
    const visible = new Set<string>();
    return config.questions.filter(q => {
        const a = q.condition && answers[q.condition.questionId];
        const show = q.active && (!q.condition || visible.has(q.condition.questionId) && (Array.isArray(a) ? a.includes(q.condition.value) : String(a ?? "") === q.condition.value));
        if (show) visible.add(q.id);
        return show;
    });
}
export function validateAnswers(config: CampaignConfig, input: unknown, step: number, complete: boolean) {
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Invalid answers.");
    const answers: Answers = {};
    for (const q of config.questions) {
        if (!visibleQuestions(config, answers).some(v => v.id === q.id)) continue;
        const value = (input as Answers)[q.id];
        const missing = value === undefined || value === "" || value === false || Array.isArray(value) && !value.length;
        if (missing) { if (q.required && (complete || q.step <= step)) throw new Error(`Please answer: ${q.label}`); continue; }
        if (q.type === "consent") { if (value !== true) throw new Error(`Please confirm: ${q.label}`); answers[q.id] = true; continue; }
        const options = q.type === "yesno" ? ["Yes", "No"] : q.options;
        if (q.type === "multiple") { if (!Array.isArray(value) || value.length > options.length || value.some(v => !options.includes(v)) || new Set(value).size !== value.length) throw new Error(`Invalid choices: ${q.label}`); answers[q.id] = value; continue; }
        if (typeof value !== "string" || value.length > (q.type === "textarea" ? 4000 : 500) || !value.trim()) throw new Error(`Invalid answer: ${q.label}`);
        const v = value.trim();
        if (["single", "select", "yesno"].includes(q.type) && !options.includes(v)) throw new Error(`Choose an option: ${q.label}`);
        if (q.type === "number" && !Number.isFinite(Number(v))) throw new Error(`Enter a number: ${q.label}`);
        if (q.type === "date" && (!/^\d{4}-\d{2}-\d{2}$/.test(v) || !Number.isFinite(Date.parse(v)) || new Date(v).toISOString().slice(0, 10) !== v)) throw new Error(`Enter a valid date: ${q.label}`);
        if ((q.type === "email" || q.field === "email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) throw new Error(`Enter a valid email: ${q.label}`);
        if ((q.type === "phone" || ["phone", "whatsapp"].includes(q.field)) && (!/^\+?[\d ()-]{7,30}$/.test(v) || v.replace(/\D/g, "").length < 7 || v.replace(/\D/g, "").length > 15)) throw new Error(`Enter a valid phone: ${q.label}`);
        answers[q.id] = v;
    }
    return answers;
}
export function evaluate(config: CampaignConfig, answers: Answers, complete: boolean) {
    let score = 0, rejected = false;
    for (const q of visibleQuestions(config, answers)) for (const r of q.rules) {
        const a = answers[q.id]; if (a === undefined) continue;
        const values = Array.isArray(a) ? a : [String(a)];
        const matches = values.some(v => r.operator === "equals" ? v.toLowerCase() === r.value.toLowerCase() : r.operator === "contains" ? v.toLowerCase().includes(r.value.toLowerCase()) : Number.isFinite(Number(v)) && (r.operator === "gte" ? Number(v) >= Number(r.value) : Number(v) <= Number(r.value)));
        if (matches) { score += r.points; rejected ||= r.disqualify; }
    }
    score = Math.min(100, score);
    return { score, qualification: !complete ? "Partial" : rejected ? "Not Qualified" : score >= config.thresholds.hot ? "Hot" : score >= config.thresholds.qualified ? "Qualified" : score >= config.thresholds.warm ? "Warm" : "Nurture" };
}
export function mappedAnswers(config: CampaignConfig, answers: Answers) {
    return Object.fromEntries(visibleQuestions(config, answers).filter(q => q.field && answers[q.id] !== undefined).map(q => [q.field, String(answers[q.id])]));
}
export function publicConfig(config: CampaignConfig) { return { ...config, questions: config.questions.map(q => ({ ...q, rules: [] })), thresholds: { hot: 0, qualified: 0, warm: 0 } }; }

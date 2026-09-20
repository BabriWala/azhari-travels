export const questionTypes = ["single", "multiple", "select", "yesno", "text", "textarea", "number", "date", "phone", "email", "consent"] as const;
export type QuestionType = typeof questionTypes[number];
export const contactFields = ["", "name", "phone", "email", "whatsapp", "service", "passport", "budget", "location", "education", "experience"] as const;
export type Answer = string | string[] | boolean;
export type Answers = Record<string, Answer>;
export type CampaignDesign = { layout: "card" | "split"; primary: string; accent: string; background: string; surface: string; text: string; radius: number; brand: string; logo: string; homeUrl: string; footer: string; footerImage: string; finishUrl: string; showProgress: boolean; showIntro: boolean };
export type CampaignLink = { label: string; url: string; newTab: boolean };
export type CampaignPage = { links?: CampaignLink[]; showCompletionButton?: boolean; heading?: string; description?: string; footer?: string; button?: string; backButton?: string; image?: string; showHeader?: boolean; showFooter?: boolean };
export type StepRoute = { from: number; questionId: string; answer: string; to: number; autoAdvance: boolean };
export const defaultDesign: CampaignDesign = { layout: "card", primary: "#06113c", accent: "#b80050", background: "#f5f6fa", surface: "#ffffff", text: "#06113c", radius: 16, brand: "", logo: "", homeUrl: "", footer: "", footerImage: "", finishUrl: "", showProgress: true, showIntro: false };
export function designFor(c: CampaignConfig): CampaignDesign {
    const d = { ...defaultDesign, ...c.design };
    // Remove branding inherited from the original template, including saved forms.
    if (d.brand === "Azhari Travels & Tours") d.brand = "";
    if (d.logo === "/al-azhar/azhari-logo.svg") d.logo = "";
    if (d.footer === "Azhari Travels & Tours · Your next journey starts here") d.footer = "";
    return d;
}
export const isRequired = (q: Question) => q.required && q.type !== "email" && q.type !== "consent" && q.field !== "email";
export class AnswerError extends Error {
    constructor(message: string, public questionId: string) { super(message); }
}
export function pageFor(c: CampaignConfig, key: string): CampaignPage { return { showHeader: true, showFooter: true, ...c.pages?.[key] }; }
export function safeCampaignUrl(url: string, image = false) { return !/[\\\u0000-\u0020]/.test(url) && ((url.startsWith("/") && !url.startsWith("//")) || /^https:\/\//i.test(url)) && (!image || !url.includes("#")); }
export type Question = {
    id: string; label: string; type: QuestionType; step: number; required: boolean; active: boolean;
    field: typeof contactFields[number]; options: string[];
    condition?: { questionId: string; value: string };
    rules: { operator: "equals" | "contains" | "gte" | "lte"; value: string; points: number; disqualify: boolean }[];
};
export type CampaignConfig = {
    design?: Partial<CampaignDesign>; pages?: Record<string, CampaignPage>; routes?: StepRoute[]; stepNext?: Record<string, number>;
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
            { ...q("consent", "I agree to be contacted about this enquiry.", "consent", 2), required: false, rules: [{ operator: "equals", value: "true", points: 20, disqualify: false }] }],
    };
}
export function validateConfig(value: unknown): CampaignConfig {
    if (!value || typeof value !== "object") throw new Error("Campaign settings are missing. Reopen the campaign editor and try saving again.");
    const c = value as CampaignConfig;
    for (const key of ["description", "information", "cta", "confirmation", "privacy"] as const) if (typeof c[key] !== "string" || c[key].length > (key === "information" ? 10000 : 2000)) throw new Error(`Campaign ${key} is invalid or too long. Enter text up to ${key === "information" ? 10000 : 2000} characters in Campaign → Landing page content.`);
    if (!c.cta.trim() || !c.privacy.trim() || !c.confirmation.trim()) throw new Error("Add button text, a privacy notice and confirmation text.");
    if (!Array.isArray(c.steps) || !c.steps.length || c.steps.length > 12 || c.steps.some(s => typeof s !== "string" || !s.trim() || s.length > 100)) throw new Error("Step names are missing or invalid. In Questions → Steps, enter 1–12 nonempty names, one per line (up to 100 characters each).");
    if (!Array.isArray(c.questions) || !c.questions.length || c.questions.length > 60) throw new Error("The question list is empty or too long. Add at least one question and keep the total at 60 or fewer.");
    const ids = new Set<string>(), fields = new Set<string>();
    for (const q of c.questions) {
        try {
        if (!q || !/^[a-zA-Z0-9_-]{1,60}$/.test(q.id) || ["__proto__", "constructor", "prototype"].includes(q.id) || ids.has(q.id)) throw new Error("Question IDs must be unique. Remove the duplicated question and add it again using Add question.");
        if (typeof q.label !== "string" || !q.label.trim() || q.label.length > 500 || !questionTypes.includes(q.type) || !contactFields.includes(q.field) || typeof q.active !== "boolean" || typeof q.required !== "boolean" || !Number.isInteger(q.step) || q.step < 0 || q.step >= c.steps.length) throw new Error("A question has an empty label, invalid type or missing step. Open its card, enter a label (up to 500 characters) and select an existing step.");
        if (q.active && q.field) { if (fields.has(q.field)) throw new Error(`More than one question maps to ${q.field}. Keep one active question for this contact field and set the others to Custom answer.`); fields.add(q.field); }
        if (q.field === "email" && q.type !== "email" || ["phone", "whatsapp"].includes(q.field) && q.type !== "phone") throw new Error("A contact mapping does not match its question type. Use Email for an email field or Phone number for phone/WhatsApp; otherwise select Custom answer.");
        if (!Array.isArray(q.options) || q.options.length > 50 || q.options.some(s => typeof s !== "string" || !s.trim() || s.length > 200) || new Set(q.options).size !== q.options.length || (["single", "multiple", "select"].includes(q.type) && !q.options.length)) throw new Error("A choice question has missing or repeated options. Enter one unique answer per line, remove blank lines, and keep 1–50 options (up to 200 characters each).");
        if (q.condition) { const parent = c.questions.find(p => p.id === q.condition?.questionId); if (!parent || !ids.has(parent.id) || parent.step > q.step || !parent.active || typeof q.condition.value !== "string" || q.condition.value.length > 200) throw new Error("Conditions must refer to an earlier active question. Select one in Show only when, or choose Always show."); }
        if (!Array.isArray(q.rules) || q.rules.length > 20 || q.rules.some(r => !["equals", "contains", "gte", "lte"].includes(r.operator) || typeof r.value !== "string" || r.value.length > 200 || !Number.isInteger(r.points) || r.points < 0 || r.points > 100 || typeof r.disqualify !== "boolean" || (["gte", "lte"].includes(r.operator) && (!r.value.trim() || !Number.isFinite(Number(r.value)))))) throw new Error("A scoring rule is incomplete. Set a match value and 0–100 whole-number points; number comparisons need a numeric value.");
        ids.add(q.id);
        } catch (error) { throw new Error(`Question "${q?.label || "Untitled"}": ${(error as Error).message}`); }
    }
    if (!c.questions.some(q => q.active && isRequired(q) && !q.condition && ["phone", "whatsapp"].includes(q.field) && q.type === "phone")) throw new Error("A required contact question is missing. Add a Phone number question, map it to Phone or WhatsApp, enable Active and Required, and choose Always show. This lets the team contact the lead.");
    if (!c.thresholds || [c.thresholds.hot, c.thresholds.qualified, c.thresholds.warm].some(n => !Number.isInteger(n) || n < 0 || n > 100) || c.thresholds.hot < c.thresholds.qualified || c.thresholds.qualified < c.thresholds.warm) throw new Error("Qualification scores are out of order. Use whole numbers from 0–100 with Hot ≥ Qualified ≥ Warm, for example 80, 60, 30.");
    const design = designFor(c);
    if (!["card", "split"].includes(design.layout) || !Number.isInteger(design.radius) || design.radius < 0 || design.radius > 32 || typeof design.showProgress !== "boolean" || typeof design.showIntro !== "boolean") throw new Error("A design setting is invalid. Use rounded corners between 0 and 32 pixels and the design checkboxes for visibility.");
    for (const color of [design.primary, design.accent, design.background, design.surface, design.text]) if (!/^#[0-9a-f]{6}$/i.test(color)) throw new Error("A color is invalid. Use the color picker or a six-digit hex color such as #06113c.");
    for (const text of [design.brand, design.footer]) if (typeof text !== "string" || text.length > 1000) throw new Error("Brand or footer text is too long. Shorten each to 1,000 characters or fewer in Design.");
    for (const url of [design.logo, design.footerImage, design.homeUrl, design.finishUrl]) if (typeof url !== "string" || url.length > 2000 || url && !safeCampaignUrl(url)) throw new Error("Links must be relative paths or HTTPS URLs, such as /contact or https://example.com. Remove spaces and unsupported link formats in Design.");
    if (c.pages && (typeof c.pages !== "object" || Array.isArray(c.pages))) throw new Error("Page settings could not be read. Reopen Design, choose a page and save its settings again.");
    for (const [key, page] of Object.entries(c.pages || {})) {
        if (!["intro", "complete", ...c.steps.map((_, i) => `step-${i}`)].includes(key) || !page || typeof page !== "object") throw new Error("Design settings refer to a removed step. Restore that step before saving.");
        for (const field of ["heading", "description", "footer", "button", "backButton", "image"] as const) if (page[field] !== undefined && (typeof page[field] !== "string" || page[field]!.length > 2000)) throw new Error("Page text is too long. Shorten the affected heading, description, footer or button label to 2,000 characters or fewer.");
        if (page.image && !safeCampaignUrl(page.image, true)) throw new Error("The page image URL is invalid. Upload an image or use a direct HTTPS image URL without spaces.");
        for (const field of ["showHeader", "showFooter", "showCompletionButton"] as const) if (page[field] !== undefined && typeof page[field] !== "boolean") throw new Error("Invalid page visibility setting. Use the visibility checkboxes in Design.");
        if (page.links !== undefined) {
            if (!Array.isArray(page.links) || page.links.length > 8) throw new Error(`Page ${key}: keep up to 8 link buttons. Remove extra buttons in Design.`);
            for (const [i, link] of page.links.entries()) {
                if (!link || typeof link.label !== "string" || !link.label.trim() || link.label.length > 100) throw new Error(`Page ${key}, button ${i + 1}: add a label of 1–100 characters, such as Contact us.`);
                if (typeof link.url !== "string" || link.url.length > 2000 || !safeCampaignUrl(link.url)) throw new Error(`Page ${key}, button ${i + 1}: enter an HTTPS link (https://wa.me/8801318185954) or local path (/contact), without spaces.`);
                if (typeof link.newTab !== "boolean") throw new Error(`Page ${key}, button ${i + 1}: choose whether to open the link in a new tab.`);
            }
        }
    }
    if (c.routes && (!Array.isArray(c.routes) || c.routes.length > 100)) throw new Error("There are too many navigation rules. Remove unused rules in Navigation and keep no more than 100.");
    const branches = new Set<string>();
    if (c.stepNext && (typeof c.stepNext !== "object" || Array.isArray(c.stepNext))) throw new Error("Default navigation settings are invalid. Choose the next step for each page in Navigation.");
    for (const [from, to] of Object.entries(c.stepNext || {})) {
        if (!/^\d+$/.test(from) || !Number.isInteger(to) || Number(from) >= c.steps.length || to <= Number(from) || to >= c.steps.length) throw new Error("The default next step must be a later step. Choose a step after the current one to avoid sending visitors in a loop.");
        if (c.questions.some(q => q.active && isRequired(q) && !q.condition && q.step > Number(from) && q.step < to && (q.type === "consent" || ["phone", "email", "whatsapp"].includes(q.field)))) throw new Error("Default navigation skips a required contact step. Route through that step or move the contact question to a shared step.");
    }
    for (const route of c.routes || []) {
        const q = c.questions.find(q => q.id === route.questionId && q.active && q.step === route.from);
        if (!q || !Number.isInteger(route.from) || !Number.isInteger(route.to) || route.to <= route.from || route.to >= c.steps.length || typeof route.answer !== "string" || !route.answer.trim() || route.answer.length > 200 || typeof route.autoAdvance !== "boolean") throw new Error("A navigation rule is incomplete. Select an active question, its matching answer and a later step in Navigation.");
        const options = q.type === "yesno" ? ["Yes", "No"] : q.type === "consent" ? ["true"] : q.options;
        if (["single", "multiple", "select", "yesno", "consent"].includes(q.type) && !options.includes(route.answer)) throw new Error("A navigation answer does not match an option. Select an existing answer exactly as shown in the question options.");
        if (route.autoAdvance && !["single", "select", "yesno"].includes(q.type)) throw new Error("Automatic navigation needs a single choice, dropdown or yes/no question. Change the question type or turn off Continue when answer is selected.");
        const key = `${route.from}:${q.id}:${route.answer}`; if (branches.has(key)) throw new Error("Two navigation rules match the same answer. Remove one duplicate so the next step is unambiguous."); branches.add(key);
        if (c.questions.some(q => q.active && isRequired(q) && !q.condition && q.step > route.from && q.step < route.to && (q.type === "consent" || ["phone", "email", "whatsapp"].includes(q.field)))) throw new Error("Navigation skips a required contact question. Move it to a shared step or change the destination to include it.");
    }
    return c;
}
export function matchingRoute(config: CampaignConfig, answers: Answers, step: number) {
    const visible = visibleQuestions(config, answers);
    return config.routes?.find(r => r.from === step && visible.some(q => q.id === r.questionId) && (Array.isArray(answers[r.questionId]) ? (answers[r.questionId] as string[]).includes(r.answer) : String(answers[r.questionId] ?? "") === r.answer));
}
export function nextStep(config: CampaignConfig, answers: Answers, step: number): number | null { return matchingRoute(config, answers, step)?.to ?? config.stepNext?.[String(step)] ?? (step + 1 < config.steps.length ? step + 1 : null); }
export function stepPath(config: CampaignConfig, answers: Answers): number[] {
    const path: number[] = []; let step: number | null = 0; const visitedAnswers: Answers = {};
    while (step !== null && path.length < config.steps.length) {
        path.push(step);
        for (const q of config.questions.filter(q => q.step === step)) if (answers[q.id] !== undefined) visitedAnswers[q.id] = answers[q.id];
        const next = nextStep(config, visitedAnswers, step); if (next !== null && next <= step) break;
        step = next;
    }
    return path;
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
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("The answers could not be read. Reload the form and enter your answers again.");
    const answers: Answers = {};
    const path = stepPath(config, input as Answers);
    if (!path.includes(step)) throw new Error("This step is not on your selected path. Go back and choose your answer again.");
    if (complete && nextStep(config, input as Answers, step) !== null) throw new Error("Please complete the remaining steps. Use Save & continue until you reach the final Submit button.");
    for (const q of config.questions) {
        if (!path.includes(q.step)) continue;
        if (!visibleQuestions(config, answers).some(v => v.id === q.id)) continue;
        const value = (input as Answers)[q.id];
        const missing = value === undefined || typeof value === "string" && !value.trim() || value === false || Array.isArray(value) && !value.length;
        if (missing) { if (isRequired(q) && (complete || q.step <= step)) throw new AnswerError(`Please answer: ${q.label}. ${["single", "select", "yesno"].includes(q.type) ? "Select one option to continue." : q.type === "multiple" ? "Select at least one option to continue." : "This field is required; enter an answer to continue."}`, q.id); continue; }
        if (q.type === "consent") { if (value !== true) throw new AnswerError(`Please confirm: ${q.label}. Tick the checkbox to agree, or leave it unticked to skip this optional question.`, q.id); answers[q.id] = true; continue; }
        const options = q.type === "yesno" ? ["Yes", "No"] : q.options;
        if (q.type === "multiple") { if (!Array.isArray(value) || value.length > options.length || value.some(v => !options.includes(v)) || new Set(value).size !== value.length) throw new AnswerError(`Invalid choices: ${q.label}. Select one or more listed options, with no duplicates.`, q.id); answers[q.id] = value; continue; }
        if (typeof value !== "string" || value.length > (q.type === "textarea" ? 4000 : 500) || !value.trim()) throw new AnswerError(`Invalid answer: ${q.label}. ${["single", "select", "yesno"].includes(q.type) ? "Select exactly one listed option." : `Enter text up to ${q.type === "textarea" ? 4000 : 500} characters.`}`, q.id);
        const v = value.trim();
        if (["single", "select", "yesno"].includes(q.type) && !options.includes(v)) throw new AnswerError(`Choose an option: ${q.label}. Select exactly one answer from the displayed list.`, q.id);
        if (q.type === "number" && !Number.isFinite(Number(v))) throw new AnswerError(`Enter a number: ${q.label}. Use digits, for example 25 or 25.5.`, q.id);
        if (q.type === "date" && (!/^\d{4}-\d{2}-\d{2}$/.test(v) || !Number.isFinite(Date.parse(v)) || new Date(v).toISOString().slice(0, 10) !== v)) throw new AnswerError(`Enter a valid date: ${q.label}. Choose a calendar date, for example 2026-09-20.`, q.id);
        if ((q.type === "email" || q.field === "email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) throw new AnswerError(`Enter a valid email: ${q.label}. Use name@example.com, or leave this optional field empty.`, q.id);
        if ((q.type === "phone" || ["phone", "whatsapp"].includes(q.field)) && (!/^\+?[\d ()-]{7,30}$/.test(v) || v.replace(/\D/g, "").length < 7 || v.replace(/\D/g, "").length > 15)) throw new AnswerError(`Enter a valid phone: ${q.label}. Use 7–15 digits with an optional country code, for example +8801712345678.`, q.id);
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
export function publicConfig(config: CampaignConfig) { return { ...config, questions: config.questions.map(q => ({ ...q, required: isRequired(q), rules: [] })), thresholds: { hot: 0, qualified: 0, warm: 0 } }; }

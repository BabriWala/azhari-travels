"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Answers, CampaignConfig, Question, visibleQuestions, nextStep, matchingRoute, stepPath, pageFor, designFor, validateAnswers, AnswerError } from "../../lib/campaigns";
import CampaignShell from "../CampaignShell";
type Loaded = { title: string; service: string; config: CampaignConfig; saved: null | { answers: Answers; step: number; version: number; completed: boolean } };
export default function Assessment({ slug }: { slug: string }) {
    const [data, setData] = useState<Loaded | null>(null), [answers, setAnswers] = useState<Answers>({}), [step, setStep] = useState(0), [version, setVersion] = useState(0);
    const [started, setStarted] = useState(true), [complete, setComplete] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState(""), [notice, setNotice] = useState("");
    const [invalidQuestion, setInvalidQuestion] = useState("");
    const reported = useRef(new Set<string>());
    const formRef = useRef<HTMLFormElement>(null), saving = useRef(false);
    const [autoQuestion, setAutoQuestion] = useState<string | null>(null);
    useEffect(() => {
        const controller = new AbortController();
        fetch('/api/campaigns/' + slug, { cache: "no-store", signal: controller.signal }).then(async r => { const d = await r.json(); if (!r.ok) throw new Error(d.error?.message || "Unable to load assessment."); setData(d); setStarted(!designFor(d.config).showIntro); if (d.saved) { setAnswers(d.saved.answers); setStep(d.saved.step); setVersion(d.saved.version); setStarted(true); setComplete(d.saved.completed); setNotice("Your saved progress has been restored."); } }).catch(e => { if (!controller.signal.aborted) setError(e.message); });
        return () => controller.abort();
    }, [slug]);
    useEffect(() => {
        if (!autoQuestion || !data || busy) return;
        setAutoQuestion(null);
        const rule = matchingRoute(data.config, answers, step);
        if (rule?.autoAdvance && rule.questionId === autoQuestion && formRef.current?.checkValidity()) formRef.current.requestSubmit();
    }, [autoQuestion, data, answers, step, busy]);
    async function reportIssue(code: string, questionId = "", issueStep = step) {
        const key = JSON.stringify({ code, questionId, step: issueStep });
        if (reported.current.has(key)) return;
        reported.current.add(key);
        try { await fetch('/api/campaigns/' + slug + '/issues', { method: "POST", headers: { "Content-Type": "application/json" }, body: key, keepalive: true }); }
        catch { reported.current.delete(key); }
    }
    async function nextHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); if (!data || saving.current) return;
        setError(""); setInvalidQuestion(""); setNotice("");
        try { validateAnswers(data.config, answers, step, nextStep(data.config, answers, step) === null); }
        catch (e) {
            setError((e as Error).message);
            if (e instanceof AnswerError) {
                const q = data.config.questions.find(q => q.id === e.questionId);
                setInvalidQuestion(e.questionId); if (q) setStep(q.step);
                void reportIssue(e.message.startsWith("Please answer") ? "required" : "invalid", e.questionId, q?.step ?? step);
                setTimeout(() => document.getElementById('question-' + e.questionId)?.querySelector<HTMLElement>('input,select,textarea')?.focus(), 0);
            }
            return;
        }
        saving.current = true; setBusy(true);
        try {
            const tracking = Object.fromEntries(new URLSearchParams(window.location.search));
            tracking.referrer = document.referrer; tracking.landing_page = window.location.origin + window.location.pathname;
            const last = nextStep(data.config, answers, step) === null;
            const r = await fetch('/api/campaigns/' + slug, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers, step, version, complete: last, tracking, website: new FormData(event.currentTarget).get("website") }) });
            const result = await r.json().catch(() => { void reportIssue("rejected"); throw new Error("The server is temporarily unavailable. Your answers are still here. Please try again."); }); if (!r.ok) { if (![422, 503].includes(r.status)) void reportIssue("rejected"); throw new Error(result.error?.message || "Could not save. Please retry."); }
            setVersion(result.version); setComplete(result.completed); if (result.answers) setAnswers(result.answers); if (!result.completed) setStep(result.nextStep);
            setNotice("Progress saved."); window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (e) { if (e instanceof TypeError) { setError("Connection interrupted. Your answers are still here. Check your internet connection, then try again."); window.addEventListener("online", () => { void reportIssue("network"); }, { once: true }); void reportIssue("network"); } else setError((e as Error).message); } finally { saving.current = false; setBusy(false); }
    }
    if (!data) return <div className="campaign-ui assessment"><section className="campaign-card"><p role="status">{error || "Loading assessment…"}</p>{error && <button onClick={() => window.location.reload()}>Try again</button>}</section></div>;
    const pageKey = complete ? "complete" : started ? 'step-' + step : "intro", p = pageFor(data.config, pageKey), d = designFor(data.config), path = stepPath(data.config, answers), index = path.indexOf(step);
    const next = nextStep(data.config, answers, step);
    return <CampaignShell config={data.config} title={data.title} service={data.service} pageKey={pageKey}>
        {complete ? <><span className="campaign-success-mark" aria-hidden="true">✓</span><p className="preserve-lines">{data.config.confirmation}</p>{d.finishUrl && <a className="campaign-primary button" href={d.finishUrl}>{p.button || "Continue"}</a>}</> : !started ? <><p className="preserve-lines">{data.config.information}</p><p className="campaign-notice">{data.config.privacy}</p><button className="campaign-primary campaign-wide-button" onClick={() => setStarted(true)}>{p.button || data.config.cta} →</button></> : <>
            {d.showProgress && <><div className="campaign-progress-label"><span>Step {index + 1} of {path.length}</span><span>{Math.round((index + 1) / path.length * 100)}%</span></div><progress aria-label="Assessment progress" max={path.length} value={index + 1} /></>}
            {step === 0 && data.config.information && <details className="campaign-information"><summary>Read campaign details</summary><p className="preserve-lines">{data.config.information}</p></details>}<form noValidate ref={formRef} onSubmit={nextHandler}><div className="campaign-trap" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                {visibleQuestions(data.config, answers).filter(q => q.step === step).map(q => <div id={"question-" + q.id} key={q.id} className={invalidQuestion === q.id ? "campaign-invalid-field" : ""} role="group" aria-invalid={invalidQuestion === q.id} aria-describedby={invalidQuestion === q.id ? "campaign-form-error" : undefined}><QuestionInput question={q} value={answers[q.id]} disabled={busy} onChange={v => { setAnswers(previous => ({ ...previous, [q.id]: v })); setAutoQuestion(q.id); if (invalidQuestion === q.id) { setInvalidQuestion(""); setError(""); } }} /></div>)}
                <p className="campaign-notice">{data.config.privacy}</p>{error && <p id="campaign-form-error" role="alert" className="campaign-error">{error}</p>}<p role="status">{notice}</p>
                <div className="campaign-actions"><button type="button" disabled={busy || index <= 0} onClick={() => { setStep(path[index - 1]); setError(""); }}>{p.backButton || "← Back"}</button><button className="campaign-primary" disabled={busy}>{busy ? "Saving…" : p.button || (next === null ? "Submit assessment" : "Save & continue →")}</button></div>
            </form>
        </>}
    </CampaignShell>;
}
function QuestionInput({ question: q, value, disabled, onChange }: { question: Question; value: Answers[string] | undefined; disabled: boolean; onChange: (v: Answers[string]) => void }) {
    const choices = q.type === "yesno" ? ["Yes", "No"] : q.options;
    if (["single", "multiple", "yesno"].includes(q.type)) return <fieldset disabled={disabled}><legend>{q.label}{q.required && " *"}</legend>{choices.map(choice => <label className="campaign-choice" key={choice}><input type={q.type === "multiple" ? "checkbox" : "radio"} name={q.id} required={q.required && q.type !== "multiple"} checked={Array.isArray(value) ? value.includes(choice) : value === choice} onChange={e => onChange(q.type === "multiple" ? e.target.checked ? [...(Array.isArray(value) ? value : []), choice] : (Array.isArray(value) ? value : []).filter(v => v !== choice) : choice)} />{choice}</label>)}</fieldset>;
    if (q.type === "consent") return <label className="campaign-choice"><input disabled={disabled} type="checkbox" checked={value === true} required={q.required} onChange={e => onChange(e.target.checked)} />{q.label}{q.required && " *"}</label>;
    return <label className="campaign-field">{q.label}{q.required && " *"}{q.type === "textarea" ? <textarea disabled={disabled} required={q.required} maxLength={4000} value={String(value || "")} onChange={e => onChange(e.target.value)} /> : q.type === "select" ? <select disabled={disabled} required={q.required} value={String(value || "")} onChange={e => onChange(e.target.value)}><option value="">Choose an option</option>{choices.map(c => <option key={c}>{c}</option>)}</select> : <input disabled={disabled} type={q.type === "phone" ? "tel" : ["email", "number", "date"].includes(q.type) ? q.type : "text"} step={q.type === "number" ? "any" : undefined} required={q.required} maxLength={500} value={String(value ?? "")} onChange={e => onChange(e.target.value)} />}</label>;
}

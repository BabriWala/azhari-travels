"use client";
import { FormEvent, useEffect, useState } from "react";
import { Answers, CampaignConfig, Question, visibleQuestions } from "../../lib/campaigns";

type Loaded = { title: string; service: string; config: CampaignConfig; saved: null | { answers: Answers; step: number; version: number; completed: boolean } };
export default function Assessment({ slug }: { slug: string }) {
    const [data, setData] = useState<Loaded | null>(null), [answers, setAnswers] = useState<Answers>({}), [step, setStep] = useState(0), [version, setVersion] = useState(0);
    const [started, setStarted] = useState(false), [complete, setComplete] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState(""), [notice, setNotice] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        fetch(`/api/campaigns/${slug}`, { cache: "no-store", signal: controller.signal }).then(async r => { const d = await r.json(); if (!r.ok) throw new Error(d.error?.message || "Unable to load assessment."); setData(d); if (d.saved) { setAnswers(d.saved.answers); setStep(d.saved.step); setVersion(d.saved.version); setStarted(true); setComplete(d.saved.completed); setNotice("Your saved progress has been restored."); } }).catch(e => { if (!controller.signal.aborted) setError(e.message); });
        return () => controller.abort();
    }, [slug]);
    async function next(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); if (!data || busy) return;
        setBusy(true); setError(""); setNotice("");
        try {
            const tracking = Object.fromEntries(new URLSearchParams(window.location.search));
            tracking.referrer = document.referrer; tracking.landing_page = window.location.origin + window.location.pathname;
            const last = step === data.config.steps.length - 1;
            const r = await fetch(`/api/campaigns/${slug}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers, step, version, complete: last, tracking, website: new FormData(event.currentTarget).get("website") }) });
            const result = await r.json(); if (!r.ok) throw new Error(result.error?.message || "Could not save. Please retry.");
            setVersion(result.version); setComplete(result.completed); if (!result.completed) setStep(step + 1);
            setNotice("Progress saved."); window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
    }
    return <main className="campaign-ui assessment"><a href="/" className="campaign-brand"><img src="/al-azhar/azhari-logo.svg" alt="Azhari Travels" />Azhari Travels & Tours</a>
        {!data ? <section className="campaign-card"><p role="status">{error || "Loading assessment…"}</p>{error && <button onClick={() => window.location.reload()}>Try again</button>}</section> : <>
            <header><span className="campaign-eyebrow">{data.service || "Plan your next journey"}</span><h1>{data.title}</h1><p>{data.config.description}</p></header>
            {complete ? <section className="campaign-card"><span className="campaign-eyebrow">Assessment received</span><h2>Thank you</h2><p className="preserve-lines">{data.config.confirmation}</p><a href="/">Return to website</a></section> : !started ? <section className="campaign-card"><p className="preserve-lines">{data.config.information}</p><h2>A few questions to guide you</h2><p>{data.config.steps.length} short steps · You can continue later on this browser.</p><p className="campaign-notice">{data.config.privacy}</p><button className="campaign-primary" onClick={() => setStarted(true)}>{data.config.cta} →</button></section> : <section className="campaign-card">
                <p className="campaign-eyebrow">Step {step + 1} of {data.config.steps.length}</p><progress aria-label="Assessment progress" max={data.config.steps.length} value={step + 1} /><h2>{data.config.steps[step]}</h2>
                <form onSubmit={next}><div className="campaign-trap" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                    {visibleQuestions(data.config, answers).filter(q => q.step === step).map(q => <QuestionInput key={q.id} question={q} value={answers[q.id]} disabled={busy} onChange={v => setAnswers(previous => ({ ...previous, [q.id]: v }))} />)}
                    <p className="campaign-notice">{data.config.privacy}</p>{error && <p role="alert" className="campaign-error">{error}</p>}<p role="status">{notice}</p>
                    <div className="campaign-actions"><button type="button" disabled={busy || step === 0} onClick={() => { setStep(step - 1); setError(""); }}>← Back</button><button className="campaign-primary" disabled={busy}>{busy ? "Saving…" : step === data.config.steps.length - 1 ? "Submit assessment" : "Save & continue →"}</button></div>
                </form></section>}
        </>}
    </main>;
}
function QuestionInput({ question: q, value, disabled, onChange }: { question: Question; value: Answers[string] | undefined; disabled: boolean; onChange: (v: Answers[string]) => void }) {
    const choices = q.type === "yesno" ? ["Yes", "No"] : q.options;
    if (["single", "multiple", "yesno"].includes(q.type)) return <fieldset disabled={disabled}><legend>{q.label}{q.required && " *"}</legend>{choices.map(choice => <label className="campaign-choice" key={choice}><input type={q.type === "multiple" ? "checkbox" : "radio"} name={q.id} required={q.required && q.type !== "multiple"} checked={Array.isArray(value) ? value.includes(choice) : value === choice} onChange={e => onChange(q.type === "multiple" ? e.target.checked ? [...(Array.isArray(value) ? value : []), choice] : (Array.isArray(value) ? value : []).filter(v => v !== choice) : choice)} />{choice}</label>)}</fieldset>;
    if (q.type === "consent") return <label className="campaign-choice"><input disabled={disabled} type="checkbox" checked={value === true} required={q.required} onChange={e => onChange(e.target.checked)} />{q.label}{q.required && " *"}</label>;
    return <label className="campaign-field">{q.label}{q.required && " *"}{q.type === "textarea" ? <textarea disabled={disabled} required={q.required} maxLength={4000} value={String(value || "")} onChange={e => onChange(e.target.value)} /> : q.type === "select" ? <select disabled={disabled} required={q.required} value={String(value || "")} onChange={e => onChange(e.target.value)}><option value="">Choose an option</option>{choices.map(c => <option key={c}>{c}</option>)}</select> : <input disabled={disabled} type={q.type === "phone" ? "tel" : ["email", "number", "date"].includes(q.type) ? q.type : "text"} step={q.type === "number" ? "any" : undefined} required={q.required} maxLength={500} value={String(value ?? "")} onChange={e => onChange(e.target.value)} />}</label>;
}

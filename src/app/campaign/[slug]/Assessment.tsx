"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Answers, CampaignConfig, Question, visibleQuestions, nextStep, matchingRoute, stepPath, pageFor, designFor, validateAnswers, AnswerError } from "../../lib/campaigns";
import QuestionInput from "../QuestionInput";
import CampaignShell from "../CampaignShell";
type Loaded = { title: string; service: string; config: CampaignConfig; hasUpdatedForm?: boolean; saved: null | { answers: Answers; step: number; version: number; completed: boolean } };
export default function Assessment({ slug }: { slug: string }) {
    const [data, setData] = useState<Loaded | null>(null), [answers, setAnswers] = useState<Answers>({}), [step, setStep] = useState(0), [version, setVersion] = useState(0);
    const [started, setStarted] = useState(true), [complete, setComplete] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState(""), [notice, setNotice] = useState("");
    const [restartError, setRestartError] = useState("");
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
    async function restart() {
        setBusy(true); setRestartError("");
        try {
            const response = await fetch('/api/campaigns/' + slug, { method: "DELETE" });
            if (!response.ok) throw new Error("Could not start the updated form. Please retry; your previous saved response is preserved.");
            window.location.reload();
        } catch (e) { setRestartError(e instanceof TypeError ? "Connection interrupted. Check your internet connection and try Start updated form again. Your saved response is unchanged." : (e as Error).message); setBusy(false); }
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
        {data.hasUpdatedForm && <div className="campaign-notice"><p>This form has been updated. Your saved response uses the previous questions. Start the latest version to see the new options; you will enter your answers again. Previously saved responses remain in the CRM.</p><button type="button" disabled={busy} onClick={() => void restart()}>Start updated form</button>{restartError && <p role="alert" className="campaign-error">{restartError}</p>}</div>}
        {complete ? <><span className="campaign-success-mark" aria-hidden="true">✓</span><p className="preserve-lines">{data.config.confirmation}</p>{d.finishUrl && p.showCompletionButton !== false && <a className="campaign-primary button" href={d.finishUrl}>{p.button || "Continue"}</a>}</> : !started ? <><p className="preserve-lines">{data.config.information}</p><p className="campaign-notice">{data.config.privacy}</p><button className="campaign-primary campaign-wide-button" onClick={() => setStarted(true)}>{p.button || data.config.cta} →</button></> : <>
            {d.showProgress && <><div className="campaign-progress-label"><span>Step {index + 1} of {path.length}</span><span>{Math.round((index + 1) / path.length * 100)}%</span></div><progress aria-label="Assessment progress" max={path.length} value={index + 1} /></>}
            {step === 0 && data.config.information && <details className="campaign-information"><summary>Read campaign details</summary><p className="preserve-lines">{data.config.information}</p></details>}<form noValidate ref={formRef} onSubmit={nextHandler}><div className="campaign-trap" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                {visibleQuestions(data.config, answers).filter(q => q.step === step).map(q => <div id={"question-" + q.id} key={q.id} className={invalidQuestion === q.id ? "campaign-invalid-field" : ""} role="group" aria-invalid={invalidQuestion === q.id} aria-describedby={invalidQuestion === q.id ? "campaign-form-error" : undefined}><QuestionInput question={q} value={answers[q.id]} disabled={busy} onChange={v => { setAnswers(previous => ({ ...previous, [q.id]: v })); setAutoQuestion(q.id); if (invalidQuestion === q.id) { setInvalidQuestion(""); setError(""); } }} /></div>)}
                <p className="campaign-notice">{data.config.privacy}</p>{error && <p id="campaign-form-error" role="alert" className="campaign-error">{error}</p>}<p role="status">{notice}</p>
                <div className="campaign-actions"><button type="button" disabled={busy || index <= 0} onClick={() => { setStep(path[index - 1]); setError(""); }}>{p.backButton || "← Back"}</button><button className="campaign-primary" disabled={busy}>{busy ? "Saving…" : p.button || (next === null ? "Submit assessment" : "Save & continue →")}</button></div>
            </form>
        </>}
    </CampaignShell>;
}

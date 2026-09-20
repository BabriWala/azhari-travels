"use client";
import { useCallback, useEffect, useState } from "react";
type Issue = { id: string; step: number; message: string; occurrences: number; updatedAt: string; resolvedAt: string | null; campaign?: { title: string; slug: string } };
export default function CampaignIssues({ token, active, onCount }: { token: string; active: boolean; onCount: (n: number) => void }) {
    const [issues, setIssues] = useState<Issue[]>([]), [resolved, setResolved] = useState(false), [error, setError] = useState(""), [busy, setBusy] = useState("");
    const refresh = useCallback(async () => {
        try {
            const r = await fetch(`/api/admin/campaign-issues?resolved=${resolved}`, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
            const result = await r.json(); if (!r.ok) throw new Error(result.error?.message || "Could not load form issues.");
            setIssues(result.data.issues); onCount(result.data.count); setError("");
        } catch (e) { setError((e as Error).message); }
    }, [token, resolved, onCount]);
    useEffect(() => { void refresh(); const timer = setInterval(() => { if (!document.hidden) void refresh(); }, 30000); return () => clearInterval(timer); }, [refresh]);
    async function resolve(id: string) {
        setBusy(id);
        try {
            const r = await fetch("/api/admin/campaign-issues", { method: "PATCH", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
            const result = await r.json(); if (!r.ok) throw new Error(result.error?.message || "Could not resolve issue."); await refresh();
        } catch (e) { setError((e as Error).message); } finally { setBusy(""); }
    }
    return <section hidden={!active} className="campaign-card"><div className="campaign-actions"><div><h2>Form issues</h2><p>See where visitors need help. Updates every 30 seconds while this page is open.</p></div><button onClick={() => void refresh()}>Refresh</button></div>
        <p className="campaign-notice">Repeated problems are grouped by campaign, question and day. These reports contain no visitor answers. Connection failures can be reported only when the browser reconnects while the form remains open.</p>
        <div className="campaign-tabs"><button aria-pressed={!resolved} onClick={() => setResolved(false)}>Needs attention</button><button aria-pressed={resolved} onClick={() => setResolved(true)}>Resolved</button></div>
        {error && <p role="alert" className="campaign-error">{error}</p>}
        {!error && !issues.length && <p>No {resolved ? "resolved" : "open"} form issues.</p>}
        {issues.map(i => <article className="campaign-issue" key={i.id}><div><span className="campaign-eyebrow">{i.campaign?.title || "Campaign"} · Step {i.step + 1}</span><h3>{i.message}</h3><p>{i.occurrences} occurrence{i.occurrences === 1 ? "" : "s"} · Last reported {new Date(i.updatedAt).toLocaleString()}</p></div>{!i.resolvedAt && <button disabled={!!busy} onClick={() => void resolve(i.id)}>{busy === i.id ? "Saving…" : "Mark resolved"}</button>}</article>)}
        {issues.length === 100 && <p>Showing the 100 most recent issues.</p>}
    </section>;
}

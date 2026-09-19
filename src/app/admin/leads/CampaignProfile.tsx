"use client";
import { useEffect, useState } from "react";
type Assessment = { id: string; campaign: string; score: number; qualification: string; completedAt: string | null; stepName: string; answers: { question: string; answer: unknown }[]; tracking: Record<string, string> };
export default function CampaignProfile({ leadId, token }: { leadId: string; token: string }) {
    const [rows, setRows] = useState<Assessment[]>([]), [error, setError] = useState("");
    useEffect(() => { const controller = new AbortController(); fetch(`/api/admin/campaign-responses?lead=${encodeURIComponent(leadId)}`, { headers: { Authorization: `Bearer ${token}` }, signal: controller.signal }).then(async r => { const d = await r.json(); if (!r.ok) throw new Error("Could not load campaign assessments."); setRows(d.data.rows); }).catch(e => { if (!controller.signal.aborted) setError(e.message); }); return () => controller.abort(); }, [leadId, token]);
    if (error) return <p role="alert">{error}</p>;
    if (!rows.length) return null;
    return <section><h3>Campaign assessments</h3>{rows.map(r => <details key={r.id}><summary>{r.campaign} · {r.qualification} · {r.score}/100</summary><p>{r.completedAt ? "Completed" : `Partial: ${r.stepName}`}</p>{r.answers.map((a, i) => <p key={i}><strong>{a.question}</strong><br />{Array.isArray(a.answer) ? a.answer.join(", ") : String(a.answer)}</p>)}{Object.entries(r.tracking).map(([key, value]) => <p key={key} style={{ overflowWrap: "anywhere" }}><strong>{key}:</strong> {value}</p>)}</details>)}<a href={`/admin/campaigns?lead=${encodeURIComponent(leadId)}`}>Manage qualification & view all assessments →</a></section>;
}

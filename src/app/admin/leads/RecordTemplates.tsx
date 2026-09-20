"use client";
import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

type Template = { id: string; title: string; stage: string; text: string; status: string };
type Lead = { name: string; phone: string; status: string };

export default function RecordTemplates({ lead, api }: { lead: Lead; api: (path: string, options?: RequestInit) => Promise<{ templates: Template[] }> }) {
    const [items, setItems] = useState<Template[]>([]), [loading, setLoading] = useState(true), [error, setError] = useState(""), [copied, setCopied] = useState("");
    const [retry, setRetry] = useState(0);
    useEffect(() => {
        let active = true;
        const controller = new AbortController();
        async function load() {
            try {
                const data = await api("/templates", { signal: controller.signal, cache: "no-store" });
                if (active) { setItems(data.templates); setError(""); }
            } catch (e) { if (active) setError((e as Error).message); }
            finally { if (active) setLoading(false); }
        }
        void load();
        const timer = setInterval(() => { if (!document.hidden) void load(); }, 30000);
        return () => { active = false; controller.abort(); clearInterval(timer); };
    }, [api, retry]);
    useEffect(() => { setCopied(""); }, [lead.name, lead.phone, lead.status, items]);
    const assigned = items.filter(t => t.status === "active" && (!t.stage || t.stage === lead.status))
        .sort((a, b) => Number(!a.stage) - Number(!b.stage));
    const fill = (text: string) => text.replace(/\{(name|phone|stage)\}/g, (placeholder, field: string) => ({ name: lead.name, phone: lead.phone, stage: lead.status })[field] || placeholder);
    return <section className="lw-record-templates" aria-label="Assigned message templates">
        <div className="lw-section-title"><h3>Assigned message templates</h3><span>{lead.status}</span></div>
        {loading ? <p className="lw-muted" role="status">Loading templates…</p> : assigned.map(t => <article key={t.id}>
            <div className="lw-section-title"><strong>{t.title}</strong><button type="button" aria-label={`Copy ${t.title}`} onClick={async () => {
                try { await navigator.clipboard.writeText(fill(t.text)); setCopied(t.id); setError(""); }
                catch { setError("Copy unavailable. Select the message below and copy it manually."); }
            }}>{copied === t.id ? <Check size={14} /> : <Copy size={14} />}{copied === t.id ? "Copied" : "Copy"}</button></div>
            {!t.stage && <small className="lw-muted">Every stage</small>}
            <p className="lw-record-template-message" tabIndex={0}>{fill(t.text)}</p>
        </article>)}
        {!loading && !error && !assigned.length && <p className="lw-muted">No active message templates assigned to this stage.</p>}
        {error && <div><p className="lw-error" role="alert">{error}</p><button type="button" onClick={() => { setLoading(true); setRetry(v => v + 1); }}>Retry</button></div>}
        <span className="lw-sr-only" role="status">{copied ? "Message copied to clipboard." : ""}</span>
    </section>;
}

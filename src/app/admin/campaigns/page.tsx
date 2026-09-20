"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CampaignConfig, defaultCampaign } from "../../lib/campaigns";
import CampaignEditor from "./CampaignEditor";
import CampaignReports from "./CampaignReports";
import "../../campaigns.css";
export type Campaign = { id?: string; deletedAt?: string | null; slug: string; title: string; service: string; published: boolean; config: CampaignConfig; spend: number; currency: string; defaultOwner: string };
export default function CampaignAdmin() {
    const [token, setToken] = useState(""), [ready, setReady] = useState(false), [campaigns, setCampaigns] = useState<Campaign[]>([]), [people, setPeople] = useState<string[]>([]), [root, setRoot] = useState(false);
    const [edit, setEdit] = useState<Campaign | null>(null), [tab, setTab] = useState("campaigns"), [error, setError] = useState(""), [busy, setBusy] = useState(false), [notice, setNotice] = useState("");
    const [trash, setTrash] = useState(false), [deleting, setDeleting] = useState<Campaign | null>(null), [confirmation, setConfirmation] = useState("");
    async function refresh(t: string) {
        const r = await fetch("/api/admin/campaigns", { headers: { Authorization: `Bearer ${t}` }, cache: "no-store" });
        const result = await r.json(); if (!r.ok) throw new Error(result.error?.message || "Could not load campaigns.");
        setCampaigns(result.data.campaigns); setPeople(result.data.people.map((p: { name: string }) => p.name)); setRoot(result.data.user.role === "superadmin");
    }
    useEffect(() => { if (new URLSearchParams(window.location.search).has("lead")) setTab("reports"); const t = localStorage.getItem("azhari_admin_token") || ""; setToken(t); setReady(true); if (t) refresh(t).catch(e => setError(e.message)); }, []);
    async function save(campaign: Campaign) {
        setBusy(true); setError(""); setNotice("");
        try { const r = await fetch("/api/admin/campaigns", { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(campaign) }); const result = await r.json(); if (!r.ok) throw new Error(result.error?.message || "Could not save."); await refresh(token); setEdit(result.data); setNotice("Campaign saved successfully."); }
        catch (e) { setError((e as Error).message); } finally { setBusy(false); }
    }
    async function removeOrRestore(c: Campaign, restore = false) {
        setBusy(true); setError(""); setNotice("");
        try { const r = await fetch("/api/admin/campaigns", { method: restore ? "PATCH" : "DELETE", headers: { Authorization: 'Bearer ' + token, "Content-Type": "application/json" }, body: JSON.stringify({ id: c.id, confirmation, action: "restore" }) }); const result = await r.json(); if (!r.ok) throw new Error(result.error?.message || "Could not update campaign."); await refresh(token); setDeleting(null); setConfirmation(""); setEdit(null); setNotice(restore ? "Campaign restored as a draft." : "Campaign deleted. Collected leads and assessment history are preserved."); } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
    }
    return <main className="campaign-ui"><nav className="campaign-actions"><Link href="/admin/leads">← Lead workspace</Link><Link href="/admin/content">Content admin</Link></nav><span className="campaign-eyebrow">Azhari · Campaign studio</span><h1>Campaign studio</h1><p>Create a guided enquiry journey, then follow every response in your lead workspace.</p>
        {!ready ? <p>Loading…</p> : !token ? <section className="campaign-card"><p>Sign in with your admin account to continue.</p><Link href="/admin/leads">Sign in</Link></section> : <>
            <div className="campaign-actions"><div className="campaign-actions"><button aria-pressed={tab === "campaigns"} onClick={() => setTab("campaigns")}>Campaigns</button><button aria-pressed={tab === "reports"} onClick={() => setTab("reports")}>Leads & performance</button></div>{root && tab === "campaigns" && <button className="campaign-primary" onClick={() => { setError(""); setEdit({ slug: "", title: "", service: "", published: false, spend: 0, currency: "BDT", defaultOwner: "Unassigned", config: defaultCampaign() }); }}>+ Create campaign</button>}</div>
            {error && <p role="alert" className="campaign-error">{error}</p>}
            {tab === "campaigns" && <div className="campaign-tabs"><button aria-pressed={!trash} onClick={() => { setTrash(false); setEdit(null); }}>Active campaigns ({campaigns.filter(c => !c.deletedAt).length})</button><button aria-pressed={trash} onClick={() => { setTrash(true); setEdit(null); }}>Deleted ({campaigns.filter(c => c.deletedAt).length})</button></div>}
            {deleting && <section className="campaign-card" aria-label="Delete campaign"><h2>Delete {deleting.title}?</h2><p>The landing page will stop accepting responses. Leads and assessment history stay in your CRM. You can restore this campaign from Deleted.</p><label className="campaign-field">Type {deleting.slug} to confirm<input autoFocus value={confirmation} onChange={e => setConfirmation(e.target.value)} /></label><div className="campaign-actions"><button disabled={busy} onClick={() => { setDeleting(null); setConfirmation(""); }}>Cancel</button><button disabled={busy || confirmation !== deleting.slug} onClick={() => removeOrRestore(deleting)}>Delete campaign</button></div></section>}
            {notice && <p role="status">{notice}</p>}
            {tab === "reports" ? <CampaignReports token={token} campaigns={campaigns} /> : edit && root ? <CampaignEditor key={edit.id || "new"} value={edit} token={token} people={people} busy={busy} onSave={save} onClose={() => setEdit(null)} /> : <div className="campaign-grid">{campaigns.filter(c => trash ? !!c.deletedAt : !c.deletedAt).map(c => <section className="campaign-card" key={c.id}><span className="campaign-eyebrow">{c.published ? "Published" : "Draft / paused"}</span><h2>{c.title}</h2><p>{c.service || "All services"} · {c.config.questions.filter(q => q.active).length} questions</p><p>{c.currency} {c.spend.toLocaleString()} campaign spend</p><div className="campaign-actions">{root && (c.deletedAt ? <button disabled={busy} onClick={() => removeOrRestore(c, true)}>Restore as draft</button> : <><button onClick={() => { setError(""); setEdit(c); }}>Open studio →</button><button disabled={busy} onClick={() => { setDeleting(c); setConfirmation(""); }}>Delete</button></>)}{c.published && <a href={`/campaign/${c.slug}`} target="_blank" rel="noopener noreferrer">Open landing page ↗</a>}</div><small>/campaign/{c.slug}</small></section>)}{!campaigns.length && <p>No campaigns yet. Create a draft to start building your questionnaire.</p>}</div>}
        </>}
    </main>;
}

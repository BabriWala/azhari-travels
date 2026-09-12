"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, FileSpreadsheet, Loader2, LogOut, MessageSquare, Mic, Paperclip, Plus, RefreshCw, Search, Send, Square, Upload, Users, X } from "lucide-react";
import "./workspace.css";
import "./responses.css";
import "./sales.css";
import AddLead from "./AddLead";
import UploadBadge, { UploadBatch, uploadDay, batchLabel } from "./UploadBadge";
import TeamManagement from "./TeamManagement";
import StageManagement from "./StageManagement";
import Templates from "./Templates";
import Followups, { Reminder, LeadNote } from "./Followups";
import useDebouncedValue from "./useDebouncedValue";
import ResponseFilters from "./ResponseFilters";
import WhatsAppLink from "./WhatsAppLink";
import DeleteLeadsDialog from "./DeleteLeadsDialog";
import FormResponses from "./FormResponses";
import { ResponseFilter, matchesResponses, readableResponse, responseEntries, responseMetadata, searchableResponses } from "../../lib/leadResponses";

type Lead = { uploads:UploadBatch[]; conversations:LeadNote[]; notes:string; reminders:Reminder[]; id: string; name: string; phone: string; email: string | null; status: string; owner: string; source: string; form: string; labels: string; secondaryPhone: string; whatsapp: string; importedCreated: string; createdAt: string; updatedAt: string; service: string; message: string; preferredContact: string; extraFields: string; _count: { conversations: number } };
type Named = { id: string; name: string };
type Entry = { id: string; party: string; author: string; text: string; audioType: string | null; audioName: string | null; createdAt: string };
type Preview = { imported: number; updated: number; duplicates: number; warnings: string[]; mapped: { column: string; field: string }[]; preview: (Lead & { action: string })[] };
const date = (value: string) => new Date(value).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

function Voice({ id, token }: { id: string; token: string }) {
    const [url, setUrl] = useState(""), [error, setError] = useState("");
    useEffect(() => {
        let active = true, objectUrl = "";
        fetch(`/api/admin/leads/audio/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(async r => {
            if (!r.ok) throw new Error("Audio could not be loaded.");
            objectUrl = URL.createObjectURL(await r.blob());
            if (active) setUrl(objectUrl); else URL.revokeObjectURL(objectUrl);
        }).catch(e => { if (active) setError(e.message); });
        return () => { active = false; if (objectUrl) URL.revokeObjectURL(objectUrl); };
    }, [id, token]);
    return error ? <small role="alert">{error}</small> : url ? <audio controls preload="metadata" src={url} /> : <small>Loading audio…</small>;
}

export default function LeadsWorkspace() {
    const [addLeadOpen,setAddLeadOpen]=useState(false),[uploadDate,setUploadDate]=useState(""),[uploadBatch,setUploadBatch]=useState("");
    const [user,setUser] = useState<{id:string;name:string;email:string;role:string}|null>(null);
    const isSuperadmin=user?.role === "superadmin";
    const [templatesOpen,setTemplatesOpen]=useState(false),[reminderFilter,setReminderFilter]=useState("");
    const [teamOpen,setTeamOpen]=useState(false),[helpOpen,setHelpOpen]=useState(false),[deleteBatch,setDeleteBatch]=useState(false);
    const [token, setToken] = useState(""), [ready, setReady] = useState(false);
    const [leads, setLeads] = useState<Lead[]>([]), [stages, setStages] = useState<Named[]>([]), [people, setPeople] = useState<Named[]>([]);
    const [search, setSearch] = useState(""), [stage, setStage] = useState(""), [owner, setOwner] = useState(""), [source, setSource] = useState("");
    const [responseFilters, setResponseFilters] = useState<ResponseFilter[]>([]);
    const debouncedSearch = useDebouncedValue(search);
    const debouncedResponseFilters = useDebouncedValue(responseFilters);
    const [responseCombination, setResponseCombination] = useState<"all" | "any">("all");
    const [pageSize, setPageSize] = useState(100);
    const [deleteTargets, setDeleteTargets] = useState<{id: string; name: string}[]>([]);
    const [selected, setSelected] = useState<string[]>([]), [activeId, setActiveId] = useState("");
    const [messages, setMessages] = useState<Entry[]>([]), [messagesLoading, setMessagesLoading] = useState(false);
    const [busy, setBusy] = useState(false), [loading, setLoading] = useState(false), [notice, setNotice] = useState(""), [error, setError] = useState("");
    const [importOpen, setImportOpen] = useState(false), [file, setFile] = useState<File | null>(null), [preview, setPreview] = useState<Preview | null>(null);
    const [manage, setManage] = useState<"stage" | "">("");
    const [email, setEmail] = useState(""), [password, setPassword] = useState("");
    const [text, setText] = useState(""), [party, setParty] = useState("staff"), [author, setAuthor] = useState("");
    const [audio, setAudio] = useState<File | null>(null), [recording, setRecording] = useState(false), [page, setPage] = useState(1);
    const recorder = useRef<MediaRecorder | null>(null), stream = useRef<MediaStream | null>(null), recordingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const interactionRef = useRef({busy,recording}); interactionRef.current={busy,recording};
    const activeRef = useRef(activeId); activeRef.current = activeId;
    const active = leads.find(l => l.id === activeId);

    useEffect(() => {
        if (!activeId && !importOpen && !manage && !deleteTargets.length && !teamOpen && !helpOpen && !templatesOpen) return;
        const previous = document.activeElement as HTMLElement | null;
        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const dialog = document.querySelector<HTMLElement>('.lw [role="dialog"]');
        const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea, summary, audio[controls]') || []);
        focusable()[0]?.focus({preventScroll:true});
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && !interactionRef.current.busy && !interactionRef.current.recording) { setTemplatesOpen(false); setTeamOpen(false); setHelpOpen(false); setActiveId(""); setImportOpen(false); setManage(""); setDeleteTargets([]); }
            if (event.key === "Tab") {
                const items = focusable(), first = items[0], last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
            }
        };
        document.addEventListener("keydown", onKey);
        return () => { document.body.style.overflow = oldOverflow; document.removeEventListener("keydown", onKey); previous?.focus({preventScroll:true}); };
    }, [activeId, importOpen, manage, deleteTargets.length, teamOpen, helpOpen, templatesOpen]);

    useEffect(() => { setToken(localStorage.getItem("azhari_admin_token") || ""); setAuthor(localStorage.getItem("azhari_admin_email") || "Team"); setReady(true); }, []);
    const api = useCallback(async (path = "", options: RequestInit = {}) => {
        const response = await fetch(`/api/admin/leads${path}`, { ...options, headers: { Authorization: `Bearer ${token}`, ...options.headers } });
        const data = await response.json();
        if (response.status === 401) { setToken(""); localStorage.removeItem("azhari_admin_token"); }
        if (!response.ok) throw new Error(typeof data.error === "string" ? data.error : data.error?.message || "Request failed. Please retry.");
        return data;
    }, [token]);
    const refresh = useCallback(async () => {
        setLoading(true);
        try { const data = await api(); setLeads(data.leads); setStages(data.stages); setPeople(data.people); setUser(data.user); setAuthor(data.user.name); }
        catch (e) { setError((e as Error).message); } finally { setLoading(false); }
    }, [api]);
    useEffect(() => { if (token) void refresh(); }, [token, refresh]);
    const loadMessages = useCallback(async (id: string) => {
        if (!id) return;
        const data = await api(`/${id}/messages`);
        if (activeRef.current === id) setMessages(data.messages);
    }, [api]);
    useEffect(() => {
        setMessages([]); setText(""); setAudio(null); setParty("staff");
        if (!activeId) return;
        setMessagesLoading(true);
        loadMessages(activeId).catch(e => setError(e.message)).finally(() => { if (activeRef.current === activeId) setMessagesLoading(false); });
    }, [activeId, loadMessages]);
    useEffect(() => {
        if (!token) return;
        const timer = setInterval(() => { void refresh(); if (activeRef.current) void loadMessages(activeRef.current).catch(() => {}); }, 30000);
        return () => clearInterval(timer);
    }, [token, refresh, loadMessages]);
    useEffect(() => () => { if (recordingTimer.current) clearTimeout(recordingTimer.current); if (recorder.current) { recorder.current.onstop = null; if (recorder.current.state === "recording") recorder.current.stop(); } stream.current?.getTracks().forEach(t => t.stop()); }, []);
    const run = async (action: () => Promise<void>) => { setBusy(true); setError(""); setNotice(""); try { await action(); } catch (e) { setError((e as Error).message); } finally { setBusy(false); } };
    async function login(e: FormEvent) {
        e.preventDefault(); await run(async () => {
            const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
            const data = await r.json(); if (!r.ok) throw new Error("Invalid email or password.");
            localStorage.setItem("azhari_admin_token", data.data.token); localStorage.setItem("azhari_admin_email", email);
            setToken(data.data.token); setAuthor(email); setPassword("");
        });
    }
    async function update(ids: string[], field: string, value: string, bulk = false) {
        if (!value) return;
        await run(async () => { await api("", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ids, field, value, bulk }) }); await refresh(); if (activeId) await loadMessages(activeId); setSelected([]); setNotice("Lead updated."); });
    }
    async function deleteLeads(ids: string[], confirmation: string) {
        setBusy(true);
        try {
            const result = await api("", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ids, confirmation, confirmations: 3, bulk: deleteBatch }) });
            setDeleteTargets([]); setSelected(previous => previous.filter(id => !ids.includes(id)));
            if (ids.includes(activeId)) setActiveId("");
            setLeads(previous => previous.filter(lead => !ids.includes(lead.id)));
            await refresh(); setNotice(result.deleted + " leads deleted.");
        } finally { setBusy(false); }
    }
    async function importFile(commit: boolean) {
        if (!file) return;
        await run(async () => {
            const form = new FormData(); form.set("file", file); form.set("commit", String(commit));
            const data = await api("/import", { method: "POST", body: form });
            if (commit) { setImportOpen(false); setFile(null); setPreview(null); setNotice(`${data.imported} new leads imported. ${data.updated} existing leads updated. ${data.duplicates} unchanged or duplicate rows skipped.`); await refresh(); }
            else setPreview(data);
        });
    }
    async function send(e: FormEvent) {
        e.preventDefault(); const id = activeId;
        await run(async () => {
            const form = new FormData(); form.set("text", text); form.set("party", party); form.set("author", party === "customer" ? active?.name || "Customer" : author); if (audio) form.set("audio", audio);
            await api(`/${id}/messages`, { method: "POST", body: form });
            if (activeRef.current === id) { setText(""); setAudio(null); await loadMessages(id); } await refresh();
        });
    }
    async function startRecording() {
        setError("");
        try {
            if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error("Recording needs HTTPS and a supported browser. You can attach an audio file instead.");
            const captureId = activeId;
            stream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (activeRef.current !== captureId) { stream.current.getTracks().forEach(t => t.stop()); return; }
            const instance = new MediaRecorder(stream.current), chunks: BlobPart[] = [];
            recorder.current = instance;
            instance.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
            instance.onstop = () => {
                if (recordingTimer.current) clearTimeout(recordingTimer.current);
                const mime = instance.mimeType || "audio/webm";
                if (activeRef.current === captureId) setAudio(new File(chunks, `voice-note.${mime.includes("mp4") ? "m4a" : mime.includes("ogg") ? "ogg" : "webm"}`, { type: mime }));
                stream.current?.getTracks().forEach(t => t.stop()); setRecording(false);
            };
            instance.start(); setRecording(true);
            recordingTimer.current = setTimeout(() => { if (instance.state === "recording") instance.stop(); }, 180000);
        } catch (e) { stream.current?.getTracks().forEach(t => t.stop()); setError((e as Error).message); }
    }
    function chooseLead(id: string) { if (recording || busy) return; setActiveId(id); }
    const filtered = useMemo(() => leads.filter(l => (!uploadDate || l.uploads.some(b=>uploadDay(b.createdAt)===uploadDate)) && (!uploadBatch || l.uploads.some(b=>String(b.id)===uploadBatch)) && (!reminderFilter || l.reminders.some(r=>reminderFilter === "completed" ? r.status === "completed" : r.status === "pending" && (reminderFilter === "pending" || (reminderFilter === "overdue" ? Date.parse(r.dueAt)<=Date.now() : new Date(r.dueAt).toDateString() === new Date().toDateString())))) && (!stage || l.status === stage) && (!owner || l.owner === owner) && (!source || l.source === source) && [l.name, l.phone, l.email, l.form, l.labels, l.owner, l.secondaryPhone, l.whatsapp, l.source, l.service, l.notes, ...l.conversations.map(n=>n.text), ...l.reminders.map(r=>r.notes), searchableResponses(l.extraFields)].join(" ").toLowerCase().includes(readableResponse(debouncedSearch).toLowerCase()) && matchesResponses(l.extraFields, debouncedResponseFilters, responseCombination)), [leads, uploadDate, uploadBatch, debouncedSearch, stage, owner, source, debouncedResponseFilters, responseCombination, reminderFilter]);
    useEffect(() => { setPage(1); setSelected([]); }, [uploadDate, uploadBatch, debouncedSearch, owner, source, debouncedResponseFilters, responseCombination, pageSize, reminderFilter]);
    const maxPage = Math.max(1, Math.ceil(filtered.length / pageSize)), currentPage = Math.min(page, maxPage), visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const allStages = [...new Set([...stages.map(s => s.name), ...leads.map(l => l.status)])];
    const allPeople = [...new Set(["Unassigned", ...people.map(p => p.name), ...leads.map(l => l.owner)])];

    const uploadBatches=useMemo(()=>[...new Map(leads.flatMap(l=>l.uploads).map(b=>[b.id,b])).values()].sort((a,b)=>b.id-a.id),[leads]);
    const pendingReminders=leads.flatMap(lead=>lead.reminders.filter(r=>r.status === "pending").map(r=>({...r,leadId:lead.id,leadName:lead.name}))).sort((a,b)=>Date.parse(a.dueAt)-Date.parse(b.dueAt));
    const dueReminders=pendingReminders.filter(r=>Date.parse(r.dueAt)<=Date.now());
    if (!ready) return <div className="lw"><div className="lw-login">Loading workspace…</div></div>;
    if (!token) return <div className="lw"><div className="lw-login"><div className="lw-brand"><img src="/Logo.png" alt="" /> AZHARI <span>LEADS</span></div><h1>Your next journey<br />starts with a conversation.</h1><p>Sign in with your existing admin account to manage your leads.</p><form onSubmit={login}><label>Email<input type="email" required autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} /></label><label>Password<input type="password" required autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} /></label>{error && <p className="lw-error" role="alert">{error}</p>}<button className="lw-primary" disabled={busy}>{busy ? "Signing in…" : "Open lead workspace"}<ArrowUpRight size={17} /></button></form><Link href="/">Back to website</Link></div></div>;

    return <div className="lw">
        <header className="lw-top"><Link href="/admin/leads" className="lw-brand"><img src="/Logo.png" alt="" />AZHARI <span>LEADS</span></Link><div className="lw-top-actions"><span className="lw-live">{user?.name} · {isSuperadmin ? "Superadmin" : "Subadmin"}</span><button onClick={()=>setHelpOpen(true)}>How CRM works</button>{isSuperadmin && <Link href="/admin/content">Content admin <ArrowUpRight size={14} /></Link>}<button aria-label="Sign out" onClick={() => { void fetch("/api/admin/logout",{method:"POST",headers:{Authorization:`Bearer ${token}`}}); localStorage.removeItem("azhari_admin_token"); setUser(null); setToken(""); setLeads([]); setActiveId(""); }}><LogOut size={18} /></button></div></header>
        <div className="lw-container"><div className="lw-heading"><div><div className="lw-eyebrow">YOUR SALES COMMAND CENTRE</div><h1>Turn enquiries into<br />confirmed journeys<span>.</span></h1><p>One pipeline. A focused team. Every follow-up moves a lead forward.</p></div><div className="lw-heading-actions"><button className="lw-primary" onClick={()=>setAddLeadOpen(true)}><Plus size={17}/>Add lead</button><button onClick={()=>setTemplatesOpen(true)}><MessageSquare size={17}/>Templates</button>{isSuperadmin && <button onClick={() => setTeamOpen(true)}><Users size={17} />Manage team</button>}<button onClick={() => setManage("stage")}><Plus size={17} />Stages</button><button className="lw-primary" onClick={() => { setImportOpen(true); setPreview(null); setFile(null); }}><Upload size={17} />Import leads</button></div></div>
        <div className="lw-stats"><div><span>Total leads</span><strong>{leads.length.toLocaleString()}</strong><small>Opportunities in your pipeline</small></div><div><span>Unassigned</span><strong>{leads.filter(l => l.owner === "Unassigned").length}</strong><button onClick={() => { setOwner("Unassigned"); setStage(""); }}>Find their next owner <ChevronRight size={14} /></button></div><div><span>Office visits</span><strong>{leads.filter(l => /office visit/i.test(l.status)).length}</strong><small>Ready for a personal consultation</small></div><div><span>Conversations</span><strong>{leads.reduce((n, l) => n + l._count.conversations, 0)}</strong><small>Messages & activity recorded</small></div></div>
        <section className="lw-pipeline" aria-label="Sales pipeline"><div className="lw-pipeline-heading"><div><span className="lw-eyebrow">MOVE THE NEXT CONVERSATION FORWARD</span><h2>Your sales pipeline</h2></div><button onClick={()=>setManage("stage")}><Plus size={16}/>Create custom stage</button></div><div className="lw-pipeline-track">{allStages.map((name,i)=><button key={name} className={stage===name?"is-selected":""} onClick={()=>setStage(stage===name?"":name)}><small>STEP {String(i+1).padStart(2,"0")}</small><strong>{leads.filter(l=>l.status===name).length}</strong><span>{name}</span><i style={{width:`${Math.max(5,leads.filter(l=>l.status===name).length/Math.max(1,leads.length)*100)}%`}}/></button>)}</div></section>
        <section className="lw-reminder-dashboard" aria-label="Follow-up reminders"><div className="lw-section-title"><div><span className="lw-eyebrow">NEVER MISS THE NEXT STEP</span><h2>Follow-up reminders</h2></div><span role="status">{dueReminders.length} due / overdue · {pendingReminders.length} pending</span></div><div className="lw-inline-actions"><button aria-pressed={reminderFilter === "overdue"} onClick={()=>setReminderFilter(reminderFilter === "overdue" ? "" : "overdue")}>Due / overdue ({dueReminders.length})</button><button aria-pressed={reminderFilter === "today"} onClick={()=>setReminderFilter(reminderFilter === "today" ? "" : "today")}>Due today</button><button aria-pressed={reminderFilter === "pending"} onClick={()=>setReminderFilter(reminderFilter === "pending" ? "" : "pending")}>All pending</button><button aria-pressed={reminderFilter === "completed"} onClick={()=>setReminderFilter(reminderFilter === "completed" ? "" : "completed")}>Completed</button>{reminderFilter && <button onClick={()=>setReminderFilter("")}>Clear reminder filter</button>}</div><div className="lw-due-list">{pendingReminders.map(r=><button key={r.id} className={Date.parse(r.dueAt)<=Date.now()?"is-overdue":""} onClick={()=>chooseLead(r.leadId)}><strong>{r.leadName}</strong><span>{date(r.dueAt)}</span><small>{r.notes||"Follow up with this lead"}</small></button>)}</div>{!pendingReminders.length && <p>No pending reminders. Open a lead to schedule a follow-up.</p>}</section>
        {error && <div className="lw-error lw-banner" role="alert">{error}<button onClick={() => setError("")} aria-label="Dismiss error"><X size={16} /></button></div>}{notice && <div className="lw-notice lw-banner" role="status"><Check size={16} />{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={16} /></button></div>}
        <div className="lw-board"><div className="lw-board-top"><div><h2>All leads <span>{filtered.length}</span></h2><p>Find your next follow-up. Open a lead to assign, change stage or log a conversation.</p></div><button aria-label="Refresh leads" disabled={loading} onClick={() => { void refresh(); if (activeId) void loadMessages(activeId).catch(e => setError(e.message)); }}><RefreshCw size={17} className={loading ? "lw-spin" : ""} /></button></div>
        <div className="lw-filters"><label className="lw-search"><Search size={18} /><input aria-label="Search leads" placeholder="Search contacts, questions or answers…" value={search} onChange={e => setSearch(e.target.value)} /></label><select aria-label="Filter by stage" value={stage} onChange={e => setStage(e.target.value)}><option value="">All stages</option>{allStages.map(s => <option key={s}>{s}</option>)}</select><select aria-label="Filter by owner" value={owner} onChange={e => setOwner(e.target.value)}><option value="">All owners</option>{allPeople.map(p => <option key={p}>{p}</option>)}</select><select aria-label="Filter by source" value={source} onChange={e => setSource(e.target.value)}><option value="">All sources</option>{[...new Set(leads.map(l => l.source))].map(s => <option key={s}>{s}</option>)}</select><select aria-label="Filter by upload date" value={uploadDate} onChange={e=>{setUploadDate(e.target.value);setUploadBatch("");}}><option value="">All upload dates (Dhaka)</option>{[...new Set(uploadBatches.map(b=>uploadDay(b.createdAt)))].map(day=><option key={day}>{day}</option>)}</select><select aria-label="Filter by upload batch" value={uploadBatch} onChange={e=>setUploadBatch(e.target.value)}><option value="">All upload batches</option>{uploadBatches.filter(b=>!uploadDate||uploadDay(b.createdAt)===uploadDate).map(b=><option key={b.id} value={b.id}>{batchLabel(b)}</option>)}</select>{(search || stage || owner || source || uploadDate || uploadBatch || responseFilters.length > 0) && <button onClick={() => { setSearch(""); setUploadDate(""); setUploadBatch(""); setStage(""); setOwner(""); setSource(""); setResponseFilters([]); setResponseCombination("all"); }}>Clear</button>}</div>
        <ResponseFilters leads={leads} filters={responseFilters} onChange={setResponseFilters} combination={responseCombination} onCombinationChange={setResponseCombination} />
        {isSuperadmin && !!selected.length && <div className="lw-bulk"><strong>{selected.length} selected</strong><select aria-label="Bulk assign owner" disabled={busy} value="" onChange={e => void update(selected, "owner", e.target.value)}><option value="">Assign to…</option>{allPeople.map(p => <option key={p}>{p}</option>)}</select>{isSuperadmin && <><select aria-label="Bulk change stage" disabled={busy} value="" onChange={e => void update(selected, "status", e.target.value, true)}><option value="">Move to stage…</option>{stages.map(s => <option key={s.id}>{s.name}</option>)}</select><button className="lw-danger" disabled={busy || recording} onClick={() => {setDeleteBatch(true); setDeleteTargets(leads.filter(lead => selected.includes(lead.id)).map(({id, name}) => ({id, name})));}}>Delete selected</button></>}<button onClick={() => setSelected([])}>Clear selection</button></div>}
        <div className="lw-table"><div className="lw-row lw-table-head">{isSuperadmin ? <input type="checkbox" aria-label="Select visible leads" checked={visible.length > 0 && visible.every(l => selected.includes(l.id))} onChange={e => setSelected(e.target.checked ? [...new Set([...selected, ...visible.map(l => l.id)])] : selected.filter(id => !visible.some(l => l.id === id)))} /> : <span/>}<div className="lw-serial">SL.</div><span>NAME / CONTACT</span><span>STAGE</span><span>OWNER</span><span className="lw-source">SOURCE</span><span className="lw-activity">ACTIVITY</span><span /></div>
        {visible.map((l, index) => <div className={`lw-row ${activeId === l.id ? "lw-row-active" : ""}`} key={l.id}>{isSuperadmin ? <input type="checkbox" aria-label={`Select ${l.name}`} checked={selected.includes(l.id)} onChange={e => setSelected(e.target.checked ? [...selected, l.id] : selected.filter(id => id !== l.id))} /> : <span/>}<div className="lw-serial" aria-label={`Serial number ${(currentPage - 1) * pageSize + index + 1}`}>{(currentPage - 1) * pageSize + index + 1}</div><div className="lw-contact-cell"><button className="lw-person" onClick={() => chooseLead(l.id)}><span className="lw-avatar">{l.name.slice(0, 1)}</span><strong>{l.name}</strong></button><div className="lw-contact-number"><span>{l.phone || l.email || "No contact details"}</span>{l.phone && <WhatsAppLink phone={l.phone} />}</div>{responseEntries(l.extraFields).some(entry => entry.answer) && <small className="lw-response-badge">{responseEntries(l.extraFields).filter(entry => entry.answer).length} form answers</small>}<UploadBadge uploads={l.uploads} createdAt={l.createdAt} source={l.source}/>{l.reminders.map(r=><div className="lw-row-reminder" key={r.id}><strong>Follow-up: {date(r.dueAt)}</strong><span className="lw-reminder-status">{r.status}</span><p>{r.notes||"No reminder notes"}</p></div>)}</div><div><span className="lw-stage">{l.status}</span></div><div className="lw-owner">{l.owner === "Unassigned" ? <span className="lw-muted">Unassigned</span> : l.owner}</div><div className="lw-source">{l.source}<small title={l.form}>{l.form || l.service}</small></div><span className="lw-activity"><MessageSquare size={14} />{l._count.conversations}</span><button className="lw-open" aria-label={`Open ${l.name}`} onClick={() => chooseLead(l.id)}><ChevronRight size={18} /></button></div>)}
        {!visible.length && <div className="lw-empty"><FileSpreadsheet size={38} /><h3>{loading ? "Loading your leads…" : leads.length ? "No matching leads" : "Make room for your next customer"}</h3><p>{leads.length ? "Try another search or clear your filters." : "Import a CSV or Excel file to bring your contacts together."}</p>{!leads.length && !loading && <button className="lw-primary" onClick={() => setImportOpen(true)}><Upload size={17} />Import your first file</button>}</div>}</div>
        <div className="lw-pagination"><span>{filtered.length ? (currentPage - 1) * pageSize + 1 : 0}–{Math.min(currentPage * pageSize, filtered.length)} of {filtered.length} leads</span><label className="lw-page-size">Rows per page<select aria-label="Rows per page" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}><option value={100}>100</option><option value={200}>200</option><option value={500}>500</option></select></label><div><button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>Previous</button><span>{currentPage} / {maxPage}</span><button disabled={currentPage >= maxPage} onClick={() => setPage(currentPage + 1)}>Next</button></div></div></div><p className="lw-footnote">Azhari Travels & Tours · Lead management</p></div>

        {addLeadOpen&&<AddLead stages={stages.map(s=>s.name)} people={["Unassigned",...people.map(p=>p.name)]} api={api} onClose={()=>setAddLeadOpen(false)} onSaved={async id=>{await refresh();setAddLeadOpen(false);chooseLead(id);}}/>}
        {active && !addLeadOpen && !deleteTargets.length && !manage && !teamOpen && !helpOpen && !templatesOpen && <div className="lw-overlay" onClick={() => chooseLead("")}><section className="lw-drawer" role="dialog" aria-modal="true" aria-label={`Lead details for ${active.name}`} onClick={e => e.stopPropagation()}><div className="lw-drawer-header"><button onClick={() => chooseLead("")} disabled={recording || busy}><ArrowLeft size={17} />All leads</button><span className="lw-stage">{active.status}</span>{isSuperadmin && <button className="lw-danger" disabled={busy || recording} onClick={() => {setDeleteBatch(false); setDeleteTargets([{id: active.id, name: active.name}]);}}>Delete lead</button>}</div><div className="lw-detail"><span className="lw-avatar lw-avatar-large">{active.name.slice(0, 1)}</span><h2>{active.name}</h2><p>{active.phone || active.email || "Contact details not provided"} {active.phone && <WhatsAppLink phone={active.phone} />}</p><div className="lw-contact-links">{active.phone && <a href={`tel:${active.phone.replace(/[^+\d]/g, "")}`}>Call lead <ArrowUpRight size={14} /></a>}{active.whatsapp && <span>{active.whatsapp} <WhatsAppLink phone={active.whatsapp} /></span>}</div><div className="lw-detail-controls"><label>Assigned to<select disabled={busy} value={active.owner} onChange={e => void update([active.id], "owner", e.target.value)}>{allPeople.map(p => <option key={p}>{p}</option>)}</select></label><label>Current stage<select disabled={busy} value={active.status} onChange={e => void update([active.id], "status", e.target.value)}>{allStages.map(s => <option key={s}>{s}</option>)}</select></label></div><button className="lw-add-stage" onClick={()=>setManage("stage")}><Plus size={15}/>Create a custom stage</button><UploadBadge uploads={active.uploads} createdAt={active.createdAt} source={active.source}/><Followups key={active.id} lead={active} isAdmin={isSuperadmin} api={api} onSaved={async()=>{await refresh();await loadMessages(active.id);}}/><FormResponses extraFields={active.extraFields} /><details><summary>Contact & import details</summary><dl>{Object.entries({ Email: active.email, Phone: active.phone, "Secondary phone": active.secondaryPhone, WhatsApp: active.whatsapp, Source: active.source, Form: active.form, Labels: active.labels, Channel: active.preferredContact, Service: active.service, "Original created": active.importedCreated, "Added to workspace": date(active.createdAt), Notes: active.message, ...responseMetadata(active.extraFields) }).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{String(v || "—")}{["Phone", "Secondary phone", "WhatsApp"].includes(k) && v ? <> <WhatsAppLink phone={String(v)} /></> : null}</dd></div>)}</dl></details></div><div className="lw-history"><div className="lw-history-heading"><h3>Conversation history</h3><span>{messages.length} entries</span></div><p className="lw-muted">Log conversations from either party. Entries are internal records.</p>{messagesLoading ? <p>Loading history…</p> : !messages.length ? <div className="lw-chat-empty"><MessageSquare size={26} /><p>A new conversation starts here.<br />Add a message or a voice note below.</p></div> : messages.map(m => m.party === "system" ? <div className="lw-system" key={m.id}><Check size={13} /><span>{m.text}<small>{date(m.createdAt)}</small></span></div> : <article className={`lw-message lw-message-${m.party}`} key={m.id}><div><strong>{m.author}</strong><span>{m.party === "customer" ? "Customer" : m.party === "note" ? "Lead note" : "Team"}</span></div>{m.text && <p>{m.text}</p>}{m.audioType && <Voice id={m.id} token={token} />}<time>{date(m.createdAt)}</time></article>)}</div><form className="lw-composer" onSubmit={send}><button type="button" disabled={busy || recording} onClick={()=>setTemplatesOpen(true)}>Choose message template</button><div className="lw-compose-fields"><div className="lw-party-field"><span>Message from</span><div className="lw-party-buttons" role="group" aria-label="Message from"><button type="button" aria-pressed={party === "staff"} disabled={busy || recording} onClick={() => setParty("staff")}>Our team</button><button type="button" aria-pressed={party === "customer"} disabled={busy || recording} onClick={() => setParty("customer")}>Customer</button></div></div>{party === "staff" && <label>Staff name<input required maxLength={100} value={author} readOnly /></label>}</div><textarea aria-label="Conversation message" placeholder={party === "customer" ? "What did the customer say?" : "Add a message, call summary or follow-up…"} value={text} maxLength={10000} onChange={e => setText(e.target.value)} />{audio && <div className="lw-audio-chip"><Paperclip size={14} /><span>{audio.name}</span><button type="button" aria-label="Remove audio" onClick={() => setAudio(null)}><X size={14} /></button></div>}<div className="lw-compose-actions"><label className="lw-attach" title="Attach audio"><Paperclip size={18} /><span>Audio</span><input type="file" accept="audio/*,.m4a,.webm,.ogg" aria-label="Attach audio file" onChange={e => { const f = e.target.files?.[0]; if (f && f.size > 10 * 1024 * 1024) setError("Audio must be under 10 MB."); else setAudio(f || null); e.target.value = ""; }} /></label><button type="button" className={recording ? "lw-recording" : ""} onClick={() => recording ? recorder.current?.stop() : void startRecording()}>{recording ? <Square size={16} /> : <Mic size={18} />}{recording ? "Stop" : "Record"}</button><button className="lw-primary" disabled={busy || recording || (!text.trim() && !audio)}>{busy ? <Loader2 size={17} className="lw-spin" /> : <Send size={17} />}Save</button></div><small>Audio up to 10 MB · Record up to 3 minutes</small>{error && <p className="lw-error" role="alert">{error}</p>}</form></section></div>}

        {templatesOpen && <Templates stages={stages} lead={active} isAdmin={isSuperadmin} api={api} onClose={()=>setTemplatesOpen(false)} onUse={message=>{setText(previous=>previous ? previous+"\n\n"+message : message);setParty("staff");setTemplatesOpen(false);}}/>}
        {teamOpen && isSuperadmin && <TeamManagement api={api} onClose={()=>setTeamOpen(false)} onSaved={refresh}/>}
        {helpOpen && <div className="lw-overlay"><section className="lw-modal" role="dialog" aria-modal="true" aria-labelledby="help-title"><div className="lw-modal-heading"><h2 id="help-title">How your CRM works</h2><button aria-label="Close CRM help" onClick={()=>setHelpOpen(false)}>✕</button></div><div className="lw-help"><h3>1. Bring leads together</h3><p>Import CSV or XLSX files, preview the mapping, then save. Matching contacts receive new answers; existing assignments and history remain. Search contacts and combine response filters.</p><h3>2. Own the next step</h3><p>Assign a person and choose a current stage. Create stages for your process: communicated, office visit, documents, processing or completion. Stage and owner changes are recorded in the history.</p><h3>3. Save the conversation</h3><p>Click Save to store a message or audio recording under the lead. You can log either party. These are internal records: WhatsApp links open WhatsApp, but messages there do not automatically sync here.</p><h3>Technology & storage</h3><p>Next.js, React and TypeScript run the interface and server APIs. Prisma stores leads, form answers and conversation records in a SQLite database on the website server. Audio files are stored as private binary data in that database and require login to play. Browser recording uses MediaRecorder; Excel imports use ExcelJS.</p><h3>Accounts & permissions</h3><p>Superadmins manage team logins and exclusively control all deletion and bulk actions. Subadmins share the workspace and manage individual leads. Team passwords are hashed; team sessions expire after 7 days. The workspace refreshes every 30 seconds. Unsaved text is not automatically saved.</p></div></section></div>}
        {isSuperadmin && !!deleteTargets.length && <DeleteLeadsDialog leads={deleteTargets} onCancel={() => setDeleteTargets([])} onDelete={deleteLeads} />}
        {importOpen && <div className="lw-overlay"><section className="lw-modal" role="dialog" aria-modal="true" aria-labelledby="import-title"><div className="lw-modal-heading"><div><div className="lw-eyebrow">GROW YOUR NETWORK</div><h2 id="import-title">Import leads</h2></div><button aria-label="Close import" disabled={busy} onClick={() => setImportOpen(false)}><X size={20} /></button></div><p>Upload contacts or form responses. Matching leads receive answers and missing contact details; assignments, stages and history stay intact.</p><label className="lw-drop"><FileSpreadsheet size={36} /><strong>{file?.name || "Choose a CSV or Excel file"}</strong><span>.csv or .xlsx · Up to 10 MB / 5,000 leads</span><input type="file" accept=".csv,.xlsx" disabled={busy} onChange={e => { setFile(e.target.files?.[0] || null); setPreview(null); setError(""); }} /></label><small>Excel imports use the first worksheet. Keep phone numbers as text to preserve “+” and leading zeros.</small>{preview && <div className="lw-preview"><h3>{preview.imported} new leads · {preview.updated} updates</h3><p>{preview.duplicates} unchanged or duplicate rows will be skipped. Nonempty answers update matching leads; blank answers never erase saved answers.</p><details><summary>{preview.mapped.length} columns matched</summary>{preview.mapped.map(m => <p key={m.field}>{m.column} → {m.field}</p>)}</details><div className="lw-preview-rows">{preview.preview.map((l, i) => <div key={i}><small className="lw-preview-action">{l.action}</small><strong>{l.name}</strong><span>{l.phone || l.email}</span><small>{l.status} · {l.owner} · {responseEntries(l.extraFields).filter(entry => entry.answer).length} answers</small><details><summary>Preview responses</summary>{responseEntries(l.extraFields).map(entry => <p key={entry.key}><strong>{entry.question}</strong><br />{entry.answer || "Not answered"}</p>)}</details></div>)}</div>{preview.warnings.length > 0 && <details><summary>{preview.warnings.length} skipped rows</summary>{preview.warnings.map(w => <p key={w}>{w}</p>)}</details>}</div>}{error && <p className="lw-error" role="alert">{error}</p>}<div className="lw-modal-actions"><button disabled={busy} onClick={() => setImportOpen(false)}>Cancel</button><button className="lw-primary" disabled={busy || !file || !!preview && !(preview.imported + preview.updated)} onClick={() => void importFile(!!preview)}>{busy ? <Loader2 size={16} className="lw-spin" /> : <Upload size={16} />}{busy ? "Processing…" : preview ? `Import ${preview.imported} / update ${preview.updated}` : "Preview import"}</button></div></section></div>}
        {manage && <StageManagement stages={stages} counts={Object.fromEntries(stages.map(s=>[s.name,leads.filter(l=>l.status===s.name).length]))} isSuperadmin={isSuperadmin} api={api} onClose={()=>setManage("")} onSaved={async(oldName,newName)=>{if(oldName && stage===oldName)setStage(newName||"");await refresh();if(activeId)await loadMessages(activeId);}}/>}
    </div>;
}

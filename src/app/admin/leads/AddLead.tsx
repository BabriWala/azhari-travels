"use client";
import { useState, FormEvent } from "react";

export default function AddLead({stages,people,api,onClose,onSaved}:{stages:string[];people:string[];api:(path:string,options?:RequestInit)=>Promise<any>;onClose:()=>void;onSaved:(id:string)=>Promise<void>}) {
    const [form,setForm]=useState({name:"",phone:"",email:"",service:"",notes:"",owner:"Unassigned",status:stages[0]||""});
    const [busy,setBusy]=useState(false),[error,setError]=useState("");
    const field=(key:keyof typeof form,value:string)=>setForm(current=>({...current,[key]:value}));
    async function submit(e:FormEvent) {
        e.preventDefault();setBusy(true);setError("");
        try { const result=await api("/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});await onSaved(result.id); }
        catch(e){setError((e as Error).message);}finally{setBusy(false);}
    }
    return <div className="lw-overlay" onKeyDown={e=>{if(e.key==="Escape"){e.stopPropagation();if(!busy)onClose();}}}><section className="lw-modal" role="dialog" aria-modal="true" aria-labelledby="add-lead-title"><div className="lw-modal-heading"><h2 id="add-lead-title">Add a lead</h2><button disabled={busy} aria-label="Close add lead" onClick={onClose}>✕</button></div><p>Enter a contact directly. Provide a phone number or email address.</p><form className="lw-manual-lead" onSubmit={submit}><fieldset disabled={busy}><label>Name<input autoFocus required maxLength={100} value={form.name} onChange={e=>field("name",e.target.value)}/></label><div className="lw-followup-fields"><label>Phone<input type="tel" required={!form.email.trim()} maxLength={40} value={form.phone} onChange={e=>field("phone",e.target.value)}/></label><label>Email<input type="email" required={!form.phone.trim()} maxLength={254} value={form.email} onChange={e=>field("email",e.target.value)}/></label></div><label>Service / interest<input maxLength={200} value={form.service} onChange={e=>field("service",e.target.value)}/></label><div className="lw-followup-fields"><label>Stage<select required value={form.status} onChange={e=>field("status",e.target.value)}>{stages.map(s=><option key={s}>{s}</option>)}</select></label><label>Owner<select value={form.owner} onChange={e=>field("owner",e.target.value)}>{people.map(p=><option key={p}>{p}</option>)}</select></label></div><label>First note (optional)<textarea maxLength={10000} value={form.notes} onChange={e=>field("notes",e.target.value)}/></label></fieldset>{error&&<p className="lw-error" role="alert">{error}</p>}<div className="lw-modal-actions"><button type="button" disabled={busy} onClick={onClose}>Cancel</button><button className="lw-primary" disabled={busy||!form.status}>{busy?"Saving…":"Add lead"}</button></div></form></section></div>;
}

"use client";
import { FormEvent, useState } from "react";

export default function DeleteLeadsDialog({ leads, onCancel, onDelete }: { leads: { id: string; name: string }[]; onCancel: () => void; onDelete: (ids: string[], confirmation: string) => Promise<void> }) {
    const [step, setStep] = useState(1), [confirmation, setConfirmation] = useState(""), [busy, setBusy] = useState(false), [error, setError] = useState("");
    const phrase = `DELETE ${leads.length}`;
    async function submit(event: FormEvent) {
        event.preventDefault();
        if (step < 3) { setStep(step + 1); return; }
        if (confirmation !== phrase || busy) return;
        setBusy(true); setError("");
        try { await onDelete(leads.map(lead => lead.id), confirmation); }
        catch (e) { setError((e as Error).message); } finally { setBusy(false); }
    }
    return <div className="lw-overlay"><section className="lw-modal lw-delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-title">
        <div className="lw-eyebrow">CONFIRMATION {step} OF 3</div>
        <h2 id="delete-title">{step === 1 ? `Delete ${leads.length} lead${leads.length === 1 ? "" : "s"}?` : step === 2 ? "Delete their history and audio too?" : "Final confirmation"}</h2>
        <p>{step === 1 ? "Review the selected contacts before continuing." : step === 2 ? "This permanently removes these leads, their form responses, conversation history and audio attachments. This cannot be undone in the CRM." : `Type ${phrase} to permanently delete only the contacts listed below.`}</p>
        <ul className="lw-delete-names">{leads.map(lead => <li key={lead.id}>{lead.name}</li>)}</ul>
        <form onSubmit={submit}>
            {step === 3 && <label>Type {phrase}<input autoComplete="off" autoFocus aria-label="Final deletion confirmation" value={confirmation} onChange={e => setConfirmation(e.target.value)} disabled={busy} /></label>}
            {error && <p className="lw-error" role="alert">{error}</p>}
            <div className="lw-modal-actions"><button type="button" onClick={onCancel} disabled={busy}>Cancel deletion</button><button className="lw-danger" disabled={busy || step === 3 && confirmation !== phrase}>{busy ? "Deleting…" : step === 1 ? "Yes, continue" : step === 2 ? "Yes, delete history too" : "Permanently delete"}</button></div>
        </form>
    </section></div>;
}

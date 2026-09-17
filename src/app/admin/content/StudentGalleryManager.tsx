"use client";

import { FormEvent, useEffect, useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";

type GalleryPhoto = { id: string; url: string; alt: string | null; visible: boolean; deletedAt: string | null; isLocal: boolean; filename: string };

export default function StudentGalleryManager({ token }: { token: string }) {
    const [files, setFiles] = useState<File[]>([]);
    const [caption, setCaption] = useState("");
    const [busy, setBusy] = useState(false);
    const [message, setMessage] = useState("");
    const [photos, setPhotos] = useState<GalleryPhoto[]>([]);

    const [filter, setFilter] = useState("active");
    const [loading, setLoading] = useState(true);

    async function refresh() {
        const response = await fetch("/api/admin/student-gallery", { cache: "no-store", headers: { Authorization: `Bearer ${token}` } });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error?.message || "Could not load gallery");
        setPhotos(payload.data);
    }
    useEffect(() => { refresh().catch(error => setMessage(error.message)).finally(() => setLoading(false)); }, [token]);

    async function upload(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!files.length || busy) return;
        const form = event.currentTarget;
        const invalid = files.find(file => !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type) || file.size > 5 * 1024 * 1024 || file.size === 0);
        if (invalid) { setMessage(`${invalid.name}: choose a JPG, PNG, WebP or GIF image up to 5 MB.`); return; }
        setBusy(true);
        let uploaded = 0;
        try {
            for (const file of files) {
                const body = new FormData();
                body.set("file", file);
                body.set("category", "al-azhar-students");
                body.set("alt", caption.trim());
                const response = await fetch("/api/admin/upload", { method: "POST", headers: { Authorization: `Bearer ${token}` }, body });
                const payload = await response.json();
                if (!response.ok) throw new Error(payload.error?.message || "Upload failed");
                uploaded++;
                setMessage(`Uploaded ${uploaded} of ${files.length} photos…`);
            }
            setFiles([]); setCaption(""); form.reset();
            await refresh();
            setMessage(`${uploaded} photo(s) uploaded. They now appear in the Al-Azhar student carousel.`);
        } catch (error) {
            setFiles(files.slice(uploaded));
            setMessage(`${uploaded} photo(s) uploaded. ${error instanceof Error ? error.message : "Upload failed"}. Retry the remaining photos.`);
            refresh().catch(() => {});
        } finally { setBusy(false); }
    }

    async function change(photo: GalleryPhoto, action: string, values = {}) {
        if (busy) return;
        setBusy(true); setMessage("");
        try {
            const response = await fetch("/api/admin/student-gallery", { method: "PATCH", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ id: photo.id, action, ...values }) });
            const payload = await response.json();
            if (!response.ok) throw new Error(payload.error?.message || "Could not save change");
            await refresh();
            setMessage(action === "trash" ? "Photo removed from the gallery. You can restore it from Removed." : "Gallery updated. Refresh the university page to see the change.");
        } catch (error) { setMessage(error instanceof Error ? error.message : "Could not save change"); }
        finally { setBusy(false); }
    }
    const active = photos.filter(photo => !photo.deletedAt);
    const shown = photos.filter(photo => filter === "removed" ? !!photo.deletedAt : !photo.deletedAt && (filter === "active" || (filter === "visible" ? photo.visible : !photo.visible)));

    return <details id="student-gallery-manager" className="mt-6 rounded-3xl border border-pink-100 bg-white p-5 shadow-sm sm:p-7">
        <summary className="cursor-pointer text-lg font-bold text-[#06113C]">Al-Azhar student gallery · Manage photos</summary>
        <p className="mt-3 text-sm leading-6 text-slate-600">Upload photos, edit descriptions, change their order, or hide them from the university page. These controls include the existing local photos.</p>
        <form onSubmit={upload} className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">Gallery photos
                <input disabled={busy} type="file" multiple accept="image/jpeg,image/png,image/webp,image/gif" onChange={event => { setFiles(Array.from(event.target.files || [])); setMessage(""); }} className="mt-2 block w-full rounded-xl border border-slate-200 p-3" />
                <span className="mt-1 block text-xs text-slate-500">JPG, PNG, WebP or GIF · Maximum 5 MB per photo</span>
            </label>
            <label className="text-sm font-semibold">Photo description (optional)
                <input disabled={busy} value={caption} maxLength={300} onChange={event => setCaption(event.target.value)} placeholder="Describe this student moment" className="mt-2 block w-full rounded-xl border border-slate-200 p-3" />
            </label>
            <button disabled={busy || !files.length} className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#B80050] px-5 py-3 text-sm font-bold text-white disabled:opacity-50">{busy ? <Loader2 size={18} className="animate-spin" /> : <ImagePlus size={18} />} {busy ? "Uploading…" : `Upload${files.length ? ` ${files.length} photo(s)` : " photos"}`}</button>
        </form>
        <p role="status" className="mt-3 text-sm text-slate-700">{message}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
            <label className="text-sm font-bold">Show photos <select value={filter} onChange={event => setFilter(event.target.value)} className="ml-2 rounded-lg border border-slate-200 p-2">
                <option value="active">All ({active.length})</option><option value="visible">Visible ({active.filter(photo => photo.visible).length})</option><option value="hidden">Hidden ({active.filter(photo => !photo.visible).length})</option><option value="removed">Removed ({photos.filter(photo => photo.deletedAt).length})</option>
            </select></label>
            <button disabled={busy || loading} onClick={() => { setLoading(true); refresh().catch(error => setMessage(error.message)).finally(() => setLoading(false)); }} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold disabled:opacity-50">Refresh</button>
        </div>
        {loading ? <p className="mt-5" role="status">Loading gallery…</p> : shown.length === 0 ? <p className="mt-5 text-sm text-slate-500">No photos in this view.</p> : <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{shown.map(photo => <PhotoEditor key={photo.id + (photo.alt || "") + photo.visible + photo.deletedAt} photo={photo} busy={busy} first={active[0]?.id === photo.id} last={active[active.length - 1]?.id === photo.id} onChange={change} />)}</div>}
        <a href="/al-azhar-university#student-gallery" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-bold text-[#B80050] underline">View student gallery ↗</a>
    </details>;
}

function PhotoEditor({ photo, busy, first, last, onChange }: { photo: GalleryPhoto; busy: boolean; first: boolean; last: boolean; onChange: (photo: GalleryPhoto, action: string, values?: object) => Promise<void> }) {
    const [description, setDescription] = useState(photo.alt || "");
    const [visible, setVisible] = useState(photo.visible);
    const buttonClass = "rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40";
    return <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img src={photo.url} alt={photo.alt || "Student gallery photo"} width={400} height={300} loading="lazy" className="aspect-[4/3] w-full bg-slate-50 object-contain" />
        <div className="space-y-3 p-4">
            <div className="flex items-center justify-between gap-2 text-xs font-semibold"><span>{photo.isLocal ? "Existing local photo" : "Uploaded photo"}</span><span className="rounded-full bg-slate-100 px-3 py-1">{photo.deletedAt ? "Removed" : photo.visible ? "Visible" : "Hidden"}</span></div>
            {photo.deletedAt ? <button disabled={busy} onClick={() => onChange(photo, "restore")} className={buttonClass}>Restore photo</button> : <>
                <label className="block text-sm font-semibold">Description<textarea disabled={busy} maxLength={300} value={description} onChange={event => setDescription(event.target.value)} rows={2} className="mt-1 block w-full resize-y rounded-lg border border-slate-200 p-2 font-normal" /></label>
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" disabled={busy} checked={visible} onChange={event => setVisible(event.target.checked)} /> Show on university page</label>
                <div className="flex flex-wrap gap-2"><button disabled={busy || (description === (photo.alt || "") && visible === photo.visible)} onClick={() => onChange(photo, "save", { alt: description, visible })} className={buttonClass + " bg-[#06113C] text-white"}>Save changes</button><button disabled={busy} onClick={() => onChange(photo, "trash")} className={buttonClass}>Remove</button></div>
                <div className="flex gap-2 border-t border-slate-100 pt-3"><button disabled={busy || first} onClick={() => onChange(photo, "earlier")} className={buttonClass} aria-label="Move photo earlier">← Earlier</button><button disabled={busy || last} onClick={() => onChange(photo, "later")} className={buttonClass} aria-label="Move photo later">Later →</button></div>
            </>}
        </div>
    </article>;
}

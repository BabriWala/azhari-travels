"use client";
import { useState } from "react";
import { dailyStatus, dailyWorkLabels, DailyWorkRecord, DailyWorkStatus } from "../../lib/leadDailyWork";

export default function DailyWork({leadId,leadName,records,day,onSave}:{leadId:string;leadName:string;records:DailyWorkRecord[];day:string;onSave:(id:string,status:DailyWorkStatus,day:string)=>Promise<void>}) {
    const [busy,setBusy]=useState(false),[error,setError]=useState("");
    const status=dailyStatus(records,day),record=records.find(r=>r.day===day);
    return <div className={"lw-daily-work lw-daily-"+status}><label>Today's work · {day}<select aria-label={"Today's work for "+leadName} value={status} disabled={busy} onChange={async e=>{const next=e.target.value as DailyWorkStatus;setBusy(true);setError("");try{await onSave(leadId,next,day);}catch(e){setError((e as Error).message);}finally{setBusy(false);}}}>{Object.entries(dailyWorkLabels).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>{busy?<small role="status">Saving…</small>:record?<small>{record.author} · {new Date(record.updatedAt).toLocaleTimeString("en-GB",{timeZone:"Asia/Dhaka",hour:"2-digit",minute:"2-digit"})} Dhaka</small>:<small>No daily update yet</small>}{error&&<p className="lw-error" role="alert">{error}</p>}</div>;
}

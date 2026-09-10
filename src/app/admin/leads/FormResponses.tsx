import { responseEntries } from "../../lib/leadResponses";

export default function FormResponses({ extraFields }: { extraFields: string }) {
    const entries = responseEntries(extraFields);
    return <section className="lw-form-responses" aria-label="Form responses">
        <div><h3>Form responses</h3><span>{entries.filter(entry => entry.answer).length} answered</span></div>
        {entries.length ? <dl>{entries.map(entry => <div key={entry.key}><dt>{entry.question}</dt><dd className={entry.answer ? "" : "lw-muted"}>{entry.answer || "Not answered"}</dd></div>)}</dl>
            : <p>Responses haven’t been imported for this lead yet. Upload the form response export to match it by phone or email.</p>}
    </section>;
}

"use client";

import { useMemo } from "react";
import { Plus, X } from "lucide-react";
import { ResponseFilter, responseEntries } from "../../lib/leadResponses";

type Props = { leads: { extraFields: string }[]; filters: ResponseFilter[]; onChange: (filters: ResponseFilter[]) => void };

export default function ResponseFilters({ leads, filters, onChange }: Props) {
    const questions = useMemo(() => {
        const values = new Map<string, { label: string; answers: Set<string> }>();
        for (const lead of leads) for (const entry of responseEntries(lead.extraFields)) {
            const question = values.get(entry.key) || { label: entry.question, answers: new Set<string>() };
            if (entry.answer) question.answers.add(entry.answer);
            values.set(entry.key, question);
        }
        return [...values].sort((a, b) => a[1].label.localeCompare(b[1].label));
    }, [leads]);
    const update = (index: number, patch: Partial<ResponseFilter>) => onChange(filters.map((filter, i) => i === index ? { ...filter, ...patch } : filter));

    return <section className="lw-response-filters" aria-label="Form response filters">
        <div className="lw-response-filter-heading">
            <div><h3>Filter by form responses</h3><p>{questions.length ? "Combine questions to find leads matching every answer." : "Import a form response export to filter by its answers."}</p></div>
            <button disabled={!questions.length} onClick={() => onChange([...filters, { question: "", mode: "equals", answer: "" }])}><Plus size={15} />Add response filter</button>
        </div>
        {filters.map((filter, index) => {
            const question = questions.find(([key]) => key === filter.question)?.[1];
            return <div className="lw-response-filter" key={index}>
                <label>Question {index + 1}<select aria-label={`Response question ${index + 1}`} value={filter.question} onChange={e => update(index, { question: e.target.value, answer: "" })}>
                    <option value="">Choose a question…</option>
                    {questions.map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}
                </select></label>
                <label>Match<select aria-label={`Response match ${index + 1}`} value={filter.mode} onChange={e => update(index, { mode: e.target.value as ResponseFilter["mode"], answer: "" })}>
                    <option value="equals">Exact answer</option><option value="contains">Contains text</option><option value="answered">Has an answer</option><option value="unanswered">Not answered</option>
                </select></label>
                {filter.mode === "equals" && <label>Answer<select aria-label={`Response answer ${index + 1}`} disabled={!question} value={filter.answer} onChange={e => update(index, { answer: e.target.value })}>
                    <option value="">Choose an answer…</option>{[...(question?.answers || [])].sort().map(answer => <option key={answer}>{answer}</option>)}
                </select></label>}
                {filter.mode === "contains" && <label>Answer contains<input aria-label={`Response text ${index + 1}`} disabled={!question} placeholder="Search within this answer…" value={filter.answer} onChange={e => update(index, { answer: e.target.value })} /></label>}
                <button className="lw-remove-filter" aria-label={`Remove response filter ${index + 1}`} onClick={() => onChange(filters.filter((_, i) => i !== index))}><X size={16} /></button>
                {question && <p className="lw-filter-question">{question.label}{filter.answer && <> · <strong>{filter.answer}</strong></>}</p>}
            </div>;
        })}
        {!!filters.length && <button className="lw-clear-responses" onClick={() => onChange([])}>Clear response filters</button>}
    </section>;
}

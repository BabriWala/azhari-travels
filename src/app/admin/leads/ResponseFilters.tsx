"use client";

import { useMemo } from "react";
import { Plus, X } from "lucide-react";
import { ResponseFilter, responseEntries } from "../../lib/leadResponses";

type Props = { leads: { extraFields: string }[]; filters: ResponseFilter[]; onChange: (filters: ResponseFilter[]) => void; combination: "all" | "any"; onCombinationChange: (value: "all" | "any") => void };

export default function ResponseFilters({ leads, filters, onChange, combination, onCombinationChange }: Props) {
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
            <div><h3>Filter by form responses</h3><p>{questions.length ? "Select multiple answers per question, and add more questions below." : "Import a form response export to filter by its answers."}</p></div>
            <button disabled={!questions.length} onClick={() => onChange([...filters, { question: "", mode: "equals", answer: "" }])}><Plus size={15} />Add response filter</button>
        </div>
        {!!filters.length && <label className="lw-filter-combination">Combine response filters<select aria-label="Combine response filters" value={combination} onChange={e => onCombinationChange(e.target.value as "all" | "any")}><option value="all">Match ALL questions (AND)</option><option value="any">Match ANY question (OR)</option></select></label>}
        {filters.map((filter, index) => {
            const question = questions.find(([key]) => key === filter.question)?.[1];
            return <div className="lw-response-filter" key={index}>
                <label>Question {index + 1}<select aria-label={`Response question ${index + 1}`} value={filter.question} onChange={e => update(index, { question: e.target.value, answer: "", answers: [] })}>
                    <option value="">Choose a question…</option>
                    {questions.map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}
                </select></label>
                <label>Match<select aria-label={`Response match ${index + 1}`} value={filter.mode} onChange={e => update(index, { mode: e.target.value as ResponseFilter["mode"], answer: "", answers: [] })}>
                    <option value="equals">Any selected answer</option><option value="contains">Contains text</option><option value="answered">Has an answer</option><option value="unanswered">Not answered</option>
                </select></label>
                {filter.mode === "equals" && <div className="lw-answer-picker"><span>Answers (choose multiple)</span><details><summary>{filter.answers?.length ? `${filter.answers.length} answers selected` : "Choose answers…"}</summary><div className="lw-answer-options">{[...(question?.answers || [])].sort().map(answer => <label key={answer}><input type="checkbox" aria-label={`Question ${index + 1}: ${answer}`} checked={filter.answers?.includes(answer) || false} onChange={e => update(index, { answer: "", answers: e.target.checked ? [...(filter.answers || []), answer] : filter.answers?.filter(value => value !== answer) })} /><span>{answer}</span></label>)}{!question && <p>Choose a question first.</p>}</div></details></div>}
                {filter.mode === "contains" && <label>Answer contains<input aria-label={`Response text ${index + 1}`} disabled={!question} placeholder="Search within this answer…" value={filter.answer} onChange={e => update(index, { answer: e.target.value })} /></label>}
                <button className="lw-remove-filter" aria-label={`Remove response filter ${index + 1}`} onClick={() => onChange(filters.filter((_, i) => i !== index))}><X size={16} /></button>
                {question && <p className="lw-filter-question">{question.label}{(filter.answer || filter.answers?.length) ? <> · <strong>{filter.answers?.length ? filter.answers.join(" / ") : filter.answer}</strong></> : null}</p>}
            </div>;
        })}
        {!!filters.length && <button className="lw-clear-responses" onClick={() => onChange([])}>Clear response filters</button>}
    </section>;
}

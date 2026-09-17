"use client";

export default function WhatsAppContactText({ text }: { text: string }) {
    const parts = text.split(/((?<!\d)(?:\+?88[\s-]*)?013[\s-]*1818[\s-]*5954(?!\d))/g);
    return <>{parts.map((part, index) => index % 2 === 1
        ? <a key={index} href="https://wa.me/8801318185954" aria-label={`${part} — WhatsApp`} className="underline underline-offset-4 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4" onClick={event => event.stopPropagation()}>{part}</a>
        : part)}</>;
}

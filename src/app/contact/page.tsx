"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { contactCards } from "../data/marketingPages";
import { Eyebrow, IconBadge, InfoCard, PageShell, Section, gradientButton } from "../components/Marketing/PagePrimitives";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
    };

    return (
        <PageShell>
            <Section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <Eyebrow>Contact</Eyebrow>
                    <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                        Tell us what you are planning.
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                        Share your travel, visa, Umrah, or student consultancy need. Our team will respond with the next practical step.
                    </p>

                    <div className="mt-8 grid gap-4">
                        {contactCards.map((item) => (
                            <InfoCard key={item.label} className="flex items-start gap-4 p-5">
                                <IconBadge icon={item.icon} />
                                <div>
                                    <p className="text-sm font-black uppercase tracking-wider text-slate-500">{item.label}</p>
                                    <p className="mt-1 font-bold">{item.value}</p>
                                </div>
                            </InfoCard>
                        ))}
                    </div>
                </div>

                <InfoCard className="p-5 shadow-xl sm:p-8">
                    <div className="mb-7 flex items-center gap-4 border-b border-[#F7025B]/15 pb-6">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06113C] text-white">
                            <MessageCircle />
                        </span>
                        <div>
                            <h2 className="text-2xl font-black">Send a message</h2>
                            <p className="mt-1 text-sm text-slate-500">We usually reply as soon as possible.</p>
                        </div>
                    </div>

                    {submitted && (
                        <div className="mb-5 rounded-2xl border border-[#F7025B]/20 bg-[#FFF8FB] px-4 py-3 font-semibold">
                            Thank you. Your message is ready for our team.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="grid gap-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <FormField name="name" label="Name" placeholder="Your name" />
                            <FormField name="phone" label="Phone" placeholder="+880..." />
                        </div>

                        <label className="grid gap-2 text-sm font-bold text-slate-700">
                            Service
                            <select
                                name="service"
                                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#F7025B] focus:bg-white"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>Select a service</option>
                                <option>Visa Services</option>
                                <option>Tour Packages</option>
                                <option>Umrah Support</option>
                                <option>Student Consultancy</option>
                                <option>Other</option>
                            </select>
                        </label>

                        <label className="grid gap-2 text-sm font-bold text-slate-700">
                            Message
                            <textarea
                                name="message"
                                required
                                rows={6}
                                className="resize-none rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#F7025B] focus:bg-white"
                                placeholder="Write your question or travel plan"
                            />
                        </label>

                        <button className={gradientButton}>
                            Send message
                            <Send size={18} />
                        </button>
                    </form>
                </InfoCard>
            </Section>
        </PageShell>
    );
}

function FormField({ name, label, placeholder }: { name: string; label: string; placeholder: string }) {
    return (
        <label className="grid gap-2 text-sm font-bold text-slate-700">
            {label}
            <input
                name={name}
                required
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#F7025B] focus:bg-white"
                placeholder={placeholder}
            />
        </label>
    );
}

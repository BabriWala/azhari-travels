"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const contactCards = [
    { icon: Phone, label: "Phone", value: "+88 013 1818 5954" },
    { icon: Mail, label: "Email", value: "azharitravels.info@gmail.com" },
    { icon: MapPin, label: "Office", value: "2/A - R#7 - Nabinagar Housing - Mohammadpur - Dhaka" },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
    };

    return (
        <main className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] text-[#06113C]">
                <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
                    <div>
                        <p className="w-fit rounded-xl border border-[#F7025B]/20 bg-white px-4 py-2 text-sm font-black text-[#F7025B] shadow-sm">
                            Contact
                        </p>
                        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                            Tell us what you are planning.
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                            Share your travel, visa, Umrah, or student consultancy need. Our team will respond with the next practical step.
                        </p>

                        <div className="mt-8 grid gap-4">
                            {contactCards.map((item) => (
                                <div key={item.label} className="flex items-start gap-4 bg-white p-5 shadow-sm">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F7025B]/10 text-[#F7025B]">
                                        <item.icon size={22} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-black uppercase tracking-wider text-slate-500">{item.label}</p>
                                        <p className="mt-1 font-bold text-[#06113C]">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-5 shadow-xl sm:p-8">
                        <div className="mb-7 flex items-center gap-4 border-b border-[#F7025B]/15 pb-6">
                            <span className="flex h-14 w-14 items-center justify-center bg-[#06113C] text-white">
                                <MessageCircle />
                            </span>
                            <div>
                                <h2 className="text-2xl font-black">Send a message</h2>
                                <p className="mt-1 text-sm text-slate-500">We usually reply as soon as possible.</p>
                            </div>
                        </div>

                        {submitted && (
                            <div className="mb-5 border border-[#F7025B]/20 bg-[#FFF8FB] px-4 py-3 font-semibold text-[#06113C]">
                                Thank you. Your message is ready for our team.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="grid gap-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="grid gap-2 text-sm font-bold text-slate-700">
                                    Name
                                    <input
                                        name="name"
                                        required
                                        className="border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#F7025B] focus:bg-white"
                                        placeholder="Your name"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-bold text-slate-700">
                                    Phone
                                    <input
                                        name="phone"
                                        required
                                        className="border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#F7025B] focus:bg-white"
                                        placeholder="+880..."
                                    />
                                </label>
                            </div>

                            <label className="grid gap-2 text-sm font-bold text-slate-700">
                                Service
                                <select
                                    name="service"
                                    className="border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#F7025B] focus:bg-white"
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
                                    className="resize-none border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#F7025B] focus:bg-white"
                                    placeholder="Write your question or travel plan"
                                />
                            </label>

                            <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-6 py-4 font-black text-white shadow-[0_16px_35px_rgba(247,2,91,0.22)] transition hover:-translate-y-1">
                                Send message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </section>
        </main>
    );
}

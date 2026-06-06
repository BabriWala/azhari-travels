// @ts-nocheck
"use client";

import { useState } from "react";
import {
    ChevronDown,
    CalendarClock,
    GraduationCap,
    Plane,
    Briefcase,
    Headphones,
    HelpCircle,
} from "lucide-react";

import { FaKaaba } from "react-icons/fa";

const faqs = [
    {
        icon: CalendarClock,
        question: "Q1. How long does visa processing take?",
        answer: "Processing time varies depending on the country and visa type.",
    },
    {
        icon: GraduationCap,
        question: "Q2. Do you provide student visa support?",
        answer: "Yes, we offer complete student admission and visa assistance.",
    },
    {
        icon: Plane,
        question: "Q3. Can you arrange air tickets?",
        answer: "Yes, we provide domestic and international ticket booking.",
    },
    {
        icon: Briefcase,
        question: "Q4. Do you offer customized tour packages?",
        answer: "Yes, packages can be tailored according to your requirements.",
    },
    {
        icon: FaKaaba,
        question: "Q5. Do you provide Umrah packages?",
        answer: "Yes, we offer multiple Umrah package options.",
    },
    {
        icon: Headphones,
        question: "Q6. Can I apply online?",
        answer: "Yes, our team can assist you remotely through WhatsApp and email.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,2,91,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.06),transparent_35%)]" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                <div className="mx-auto max-w-[950px] text-center">
                    <div className="mb-4 flex items-center justify-center gap-5 text-[#F7025B] sm:gap-8">
                        <span className="h-[2px] w-16 bg-[#F7025B] sm:w-28" />
                        <HelpCircle size={54} strokeWidth={1.8} />
                        <span className="h-[2px] w-16 bg-[#F7025B] sm:w-28" />
                    </div>

                    <h2 className="text-4xl font-semibold leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                        Frequently Asked <span className="text-[#F7025B]">Questions</span>
                    </h2>

                    <p className="mt-5 text-base font-medium leading-8 text-slate-600 sm:text-lg">
                        Find quick answers to common questions about our services.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-[1100px] space-y-4">
                    {faqs.map(({ icon: Icon, question, answer }, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <button
                                key={question}
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="group w-full rounded-3xl border border-slate-200 bg-white/95 px-5 py-4 text-left shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.11)] sm:px-7"
                            >
                                <div className="flex items-start gap-4 sm:items-center sm:gap-5">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F7025B]/10 text-[#F7025B] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F7025B] group-hover:text-white sm:h-20 sm:w-20">
                                        <Icon size={38} strokeWidth={1.8} />
                                    </div>

                                    <div className="hidden h-16 w-[3px] rounded-full bg-[#F7025B] sm:block" />

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-[#06113C] sm:text-2xl">
                                            {question}
                                        </h3>

                                        <p className="mt-3 text-sm font-medium leading-7 text-slate-600 sm:text-lg">
                                            {answer}
                                        </p>

                                        {isOpen && (
                                            <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500 sm:text-base">
                                                Contact our team for country-specific requirements,
                                                document checklist, fees, and estimated processing time.
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#F7025B]/25 text-[#F7025B] transition-all duration-300 group-hover:border-[#F7025B] group-hover:bg-[#F7025B] group-hover:text-white sm:h-12 sm:w-12">
                                        <ChevronDown
                                            size={28}
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
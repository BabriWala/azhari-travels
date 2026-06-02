// @ts-nocheck
"use client"
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
    const [active, setActive] = useState(0);

    const faqs = [
        {
            q: "What services does Azhari Travels 2.0 provide?",
            a: "We provide visa processing support, air ticket assistance, hotel booking, Umrah package support, custom travel packages and Al-Azhar University admission guidance.",
        },
        {
            q: "Do you help with Al-Azhar University admission?",
            a: "Yes. We assist students with offer letter, visa support, air ticket guidance and full support until admission completion.",
        },
        {
            q: "Do you provide Egypt visa approval?",
            a: "Yes. We provide support for Egypt visa approval, OK to Board and required document checking.",
        },
        {
            q: "Is Umrah included with any package?",
            a: "Some packages may include Umrah opportunity, but transport, hotel and food costs may not be included depending on the package.",
        },
        {
            q: "How can I contact Azhari Travels?",
            a: "You can call us directly at 013 1818 5954 or visit our office location through Google Maps.",
        },
    ];

    return (
        <section id="faq" className="bg-[#fff8f1] px-5 py-24 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                {/* Left */}
                <div>
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-orange-400 text-white">
                        <HelpCircle size={34} />
                    </div>

                    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-pink-600">
                        FAQ
                    </p>

                    <h2 className="text-4xl font-black leading-tight text-[#08103A] sm:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-5 max-w-md leading-8 text-gray-600">
                        Find quick answers about our travel, visa, Umrah and Al-Azhar
                        admission services.
                    </p>
                </div>

                {/* Right */}
                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = active === index;

                        return (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl bg-white shadow-md"
                            >
                                <button
                                    onClick={() => setActive(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                                >
                                    <span className="text-lg font-black text-[#08103A]">
                                        {item.q}
                                    </span>

                                    <ChevronDown
                                        className={`shrink-0 text-pink-600 transition ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="border-t border-gray-100 px-6 pb-6 pt-4 leading-8 text-gray-600">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
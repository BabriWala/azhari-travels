import {
    MessageCircle,
    ShieldCheck,
    Timer,
    Headphones,
    Tag,
    Plane,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

const trustItems = [
    {
        icon: ShieldCheck,
        title: "Trusted by Thousands",
        text: "Join thousands of satisfied clients who trust us.",
    },
    {
        icon: Timer,
        title: "Fast Processing",
        text: "Quick and efficient service delivery you can count on.",
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        text: "Our experts are always here to assist you.",
    },
    {
        icon: Tag,
        title: "Transparent Pricing",
        text: "No hidden charges, 100% transparency.",
    },
];

export default function CTABanner() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F7025B]/6 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0F766E]/6 blur-3xl" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/95 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.09)] backdrop-blur sm:p-8 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        {/* Left */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 text-[#F7025B]">
                                <Plane size={54} fill="#F7025B" className="-rotate-12" />
                                <span className="h-px w-28 border-t border-dashed border-[#F7025B]" />
                            </div>

                            <h2 className="text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-7xl">
                                Ready to
                                <br />
                                <span className="text-[#F7025B]">Start Your Journey?</span>
                            </h2>

                            <div className="mt-6 h-[5px] w-28 rounded-full bg-[#F7025B]" />

                            <p className="mt-8 max-w-[720px] text-base font-medium leading-8 text-slate-600 sm:text-lg lg:text-2xl lg:leading-10">
                                Whether you need a visa, tour package, student admission, or
                                Umrah services, our experts are here to help.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <button className="group inline-flex items-center justify-center gap-4 rounded-xl bg-[#F7025B] px-7 py-5 text-lg font-bold text-white shadow-[0_16px_35px_rgba(247,2,91,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e6004f] hover:shadow-[0_24px_50px_rgba(247,2,91,0.35)]">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:scale-110">
                                        <MessageCircle size={28} fill="white" />
                                    </span>
                                    Get Free Consultation
                                </button>

                                <button className="group inline-flex items-center justify-center gap-4 rounded-xl border-2 border-[#16A34A] bg-white px-7 py-5 text-lg font-bold text-[#16A34A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16A34A] hover:text-white hover:shadow-[0_20px_40px_rgba(22,163,74,0.22)]">
                                    <FaWhatsapp className="text-4xl transition-transform duration-300 group-hover:scale-110" />
                                    Contact on WhatsApp
                                </button>
                            </div>
                        </div>

                        {/* Right Trust Box */}
                        <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-6 shadow-inner">
                            <div className="space-y-6">
                                {trustItems.map(({ icon: Icon, title, text }) => (
                                    <div key={title} className="group flex items-center gap-5">
                                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-[#F7025B] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F7025B] group-hover:text-white">
                                            <Icon size={42} strokeWidth={1.8} />
                                        </div>

                                        <div className="h-16 w-px bg-slate-300" />

                                        <div>
                                            <h3 className="text-xl font-black text-[#06113C]">
                                                {title}
                                            </h3>

                                            <p className="mt-2 text-base font-medium leading-7 text-slate-600">
                                                {text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Trust Bar */}
                    <div className="mt-10 rounded-3xl border border-[#F7025B]/15 bg-white px-6 py-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {trustItems.map(({ icon: Icon, title, text }, index) => (
                                <div
                                    key={title}
                                    className={`flex items-center gap-5 ${index !== trustItems.length - 1
                                        ? "xl:border-r xl:border-[#F7025B]/15"
                                        : ""
                                        }`}
                                >
                                    <Icon
                                        size={52}
                                        strokeWidth={1.8}
                                        className="shrink-0 text-[#F7025B]"
                                    />

                                    <div>
                                        <h3 className="text-lg font-black text-[#06113C]">
                                            {title}
                                        </h3>

                                        <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
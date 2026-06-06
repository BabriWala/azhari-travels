import {
    Plane,
    Bus,
    Users,
    CalendarDays,
    ArrowRight,
    CheckCircle,
    Crown,
    Gem,
    Tag,
    Building2,
    HandHeart,
} from "lucide-react";

import { FaPassport, FaMosque } from "react-icons/fa";

const includedServices = [
    {
        icon: FaPassport,
        title: "Visa Processing",
        text: "Fast and hassle-free visa assistance.",
    },
    {
        icon: Plane,
        title: "Air Ticket",
        text: "Domestic & international air ticket booking.",
    },
    {
        icon: Building2,
        title: "Hotel Booking",
        text: "Comfortable hotels near holy sites.",
    },
    {
        icon: Bus,
        title: "Transportation",
        text: "Airport transfers and local transportation.",
    },
    {
        icon: Users,
        title: "Group Guidance",
        text: "Experienced guides for a smooth spiritual journey.",
    },
    {
        icon: HandHeart,
        title: "Religious Assistance",
        text: "24/7 support during your Umrah / Hajj journey.",
    },
];

const packages = [
    {
        icon: Tag,
        title: "Economy Package",
        text: "Affordable and comfortable travel.",
        color: "#F7025B",
        items: ["Affordable hotels", "Shared transportation", "Essential services"],
    },
    {
        icon: Crown,
        title: "Standard Package",
        text: "Balanced comfort and great value.",
        color: "#2563EB",
        items: ["Quality hotels", "Private transportation", "Best value for money"],
    },
    {
        icon: Gem,
        title: "Premium Package",
        text: "Luxury accommodation and premium services.",
        color: "#7C3AED",
        items: [
            "5★ hotel accommodation",
            "VIP transportation",
            "Personalized assistance",
        ],
    },
];

export default function UmrahHajjServices() {
    return (
        <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,2,91,0.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.06),transparent_35%)]" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <div className="mb-10 inline-flex items-center gap-3 rounded-xl border border-[#F7025B]/20 bg-white px-5 py-3 text-[#F7025B] shadow-sm">
                            <FaMosque className="text-2xl" />
                            <span className="text-sm font-semibold uppercase tracking-[2px]">
                                Umrah & Hajj Services
                            </span>
                        </div>

                        <h2 className="text-4xl font-semibold leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                            Umrah & Hajj
                            <br />
                            <span className="text-[#F7025B]">Travel Services</span>
                        </h2>

                        <div className="mt-7 h-[4px] w-20 rounded-full bg-[#F7025B]" />

                        <p className="mt-8 max-w-[480px] text-base font-medium leading-8 text-slate-600 sm:text-lg">
                            Experience a spiritually fulfilling journey with our carefully
                            planned religious travel packages.
                        </p>
                    </div>

                    <div>
                        <div className="mb-7 flex items-center justify-center gap-5">
                            <span className="h-[3px] w-16 rounded-full bg-[#F7025B]" />
                            <h3 className="text-center text-2xl font-semibold text-[#06113C]">
                                Our Included Services
                            </h3>
                            <span className="h-[3px] w-16 rounded-full bg-[#F7025B]" />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            {includedServices.map(({ icon: Icon, title, text }) => (
                                <div
                                    key={title}
                                    className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
                                >
                                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F7025B]/10 text-[#F7025B] ring-1 ring-[#F7025B]/15 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F7025B] group-hover:text-white">
                                        <Icon size={42} />
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold text-[#06113C]">
                                            {title}
                                        </h4>
                                        <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 xl:grid-cols-[1.4fr_0.6fr]">
                    <div>
                        <div className="mb-8 flex items-center justify-center gap-5">
                            <span className="h-[3px] w-16 rounded-full bg-[#F7025B]" />
                            <h3 className="text-center text-2xl font-semibold text-[#06113C]">
                                Our Umrah Packages
                            </h3>
                            <span className="h-[3px] w-16 rounded-full bg-[#F7025B]" />
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {packages.map(({ icon: Icon, title, text, color, items }) => (
                                <div
                                    key={title}
                                    className="group relative rounded-3xl border border-slate-200 bg-white px-8 pb-8 pt-20 text-center shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
                                >
                                    <div
                                        className="absolute left-0 right-0 top-0 h-4 rounded-t-3xl"
                                        style={{ backgroundColor: color }}
                                    />

                                    <div
                                        className="absolute left-1/2 top-[-35px] flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-4xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                                        style={{ color }}
                                    >
                                        <Icon size={46} />
                                    </div>

                                    <h4 className="text-2xl font-semibold text-[#06113C]">
                                        {title}
                                    </h4>

                                    <p className="mx-auto mt-4 max-w-[220px] text-base font-medium leading-7 text-slate-600">
                                        {text}
                                    </p>

                                    <div className="my-6 flex items-center justify-center gap-3">
                                        <span className="h-px w-20 bg-slate-200" />
                                        <span
                                            className="h-[3px] w-8 rounded-full"
                                            style={{ backgroundColor: color }}
                                        />
                                        <span className="h-px w-20 bg-slate-200" />
                                    </div>

                                    <div className="space-y-4 text-left">
                                        {items.map((item) => (
                                            <div key={item} className="flex items-center gap-3">
                                                <CheckCircle
                                                    size={22}
                                                    fill={color}
                                                    strokeWidth={0}
                                                    style={{ color }}
                                                />
                                                <span className="font-semibold text-[#06113C]">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center rounded-3xl border border-[#F7025B]/15 bg-[#F7025B]/5 p-8 shadow-[0_18px_45px_rgba(247,2,91,0.08)]">
                        <div>
                            <h3 className="text-3xl font-semibold leading-tight text-[#06113C]">
                                Ready for your spiritual journey?
                            </h3>

                            <div className="mt-5 h-[4px] w-16 rounded-full bg-[#F7025B]" />

                            <p className="mt-6 text-base font-medium leading-8 text-slate-600">
                                We make your Umrah & Hajj experience seamless, comfortable and
                                memorable.
                            </p>

                            <button className="group mt-8 flex w-full items-center justify-between gap-5 rounded-xl bg-[#F7025B] px-6 py-4 text-lg font-bold text-white shadow-[0_16px_35px_rgba(247,2,91,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e6004f] hover:shadow-[0_24px_45px_rgba(247,2,91,0.35)]">
                                <span className="flex items-center gap-4">
                                    <CalendarDays size={32} />
                                    Book Your Umrah Package
                                </span>

                                <span className="rounded-full bg-white p-2 text-[#F7025B] transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={22} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
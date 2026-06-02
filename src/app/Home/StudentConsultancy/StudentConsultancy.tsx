import {
    ArrowRight,
    GraduationCap,
    Users,
    ShieldCheck,
    Globe2,
    School,
    FileCheck,
    BookOpenCheck,
    Home,
    Luggage,
} from "lucide-react";

import { GiEgyptianPyramids } from "react-icons/gi";
import { FaMosque } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdOutlineLocationCity } from "react-icons/md";

const services = [
    {
        icon: School,
        title: "University Admission",
        text: "Application support for universities worldwide.",
        color: "#F7025B",
    },
    {
        icon: FileCheck,
        title: "Offer Letter Assistance",
        text: "Help with securing admission offers.",
        color: "#2563EB",
    },
    {
        icon: BookOpenCheck,
        title: "Visa Processing",
        text: "Student visa documentation and submission.",
        color: "#16A34A",
    },
    {
        icon: GraduationCap,
        title: "Scholarship Guidance",
        text: "Information on available scholarships.",
        color: "#7C3AED",
    },
    {
        icon: Home,
        title: "Accommodation Support",
        text: "Student housing assistance.",
        color: "#F97316",
    },
    {
        icon: Luggage,
        title: "Pre-Departure Guidance",
        text: "Preparation before traveling abroad.",
        color: "#0EA5A8",
    },
];

const highlights = [
    {
        icon: Users,
        title: "Expert Guidance",
        text: "Experienced consultants to guide you at every step.",
        color: "#F7025B",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Support",
        text: "Reliable assistance for a smooth journey.",
        color: "#2563EB",
    },
    {
        icon: Globe2,
        title: "Global Opportunities",
        text: "Connecting students to top universities worldwide.",
        color: "#16A34A",
    },
];

const destinations = [
    {
        icon: GiEgyptianPyramids,
        name: "Egypt",
        color: "#F7025B",
    },
    {
        icon: MdOutlineLocationCity,
        name: "Malaysia",
        color: "#2563EB",
    },
    {
        icon: FaMosque,
        name: "Turkey",
        color: "#F97316",
    },
    {
        icon: FaMosque,
        name: "Saudi Arabia",
        color: "#16A34A",
    },
    {
        icon: TbBuildingSkyscraper,
        name: "UAE",
        color: "#7C3AED",
    },
];

export default function StudentConsultancy() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#FFF8FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F7025B]/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0F766E]/6 blur-3xl" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.35fr]">
                    {/* Left Content */}
                    <div>
                        <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-[#F7025B]/20 bg-white px-5 py-3 text-[#F7025B] shadow-sm">
                            <GraduationCap size={24} />

                            <span className="text-sm font-black uppercase tracking-[3px]">
                                Student Consultancy
                            </span>
                        </div>

                        <h2 className="text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                            Study Abroad &
                            <br />
                            Student <span className="text-[#F7025B]">Consultancy</span>
                        </h2>

                        <div className="mt-6 h-[4px] w-20 rounded-full bg-[#F7025B]" />

                        <p className="mt-7 max-w-[570px] text-base font-medium leading-8 text-slate-600 sm:text-lg">
                            We help students achieve their educational goals through expert
                            admission and visa guidance.
                        </p>

                        <div className="my-8 h-px w-full bg-slate-200" />

                        <div className="space-y-7">
                            {highlights.map(({ icon: Icon, title, text, color }) => (
                                <div key={title} className="group flex items-start gap-5">
                                    <div
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            color,
                                            borderColor: `${color}30`,
                                            backgroundColor: `${color}10`,
                                        }}
                                    >
                                        <Icon size={28} strokeWidth={1.8} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-black text-[#06113C]">
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

                    {/* Right Services */}
                    <div>
                        <div className="mb-8 flex items-center justify-center gap-5">
                            <span className="h-[3px] w-12 rounded-full bg-[#F7025B]" />

                            <h3 className="text-2xl font-black text-[#06113C]">
                                Our Services
                            </h3>

                            <span className="h-[3px] w-12 rounded-full bg-[#F7025B]" />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {services.map(({ icon: Icon, title, text, color }) => (
                                <div
                                    key={title}
                                    className="group rounded-3xl border border-white/70 bg-white/95 p-7 text-center shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(15,23,42,0.12)]"
                                >
                                    <div
                                        className="mx-auto flex h-24 w-24 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            color,
                                            backgroundColor: `${color}14`,
                                            boxShadow: `0 12px 28px ${color}18`,
                                        }}
                                    >
                                        <Icon size={48} strokeWidth={1.7} />
                                    </div>

                                    <h4 className="mt-6 text-xl font-black text-[#06113C]">
                                        {title}
                                    </h4>

                                    <div
                                        className="mx-auto my-5 h-[3px] w-10 rounded-full"
                                        style={{ backgroundColor: color }}
                                    />

                                    <p className="mx-auto max-w-[220px] text-base font-medium leading-7 text-slate-600">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Area */}
                <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.75fr]">
                    {/* Popular Destinations */}
                    <div className="rounded-[28px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur sm:p-8">
                        <h3 className="text-2xl font-black text-[#06113C]">
                            Popular Destinations
                        </h3>

                        <div className="mt-4 h-[3px] w-12 rounded-full bg-[#F7025B]" />

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                            {destinations.map(({ icon: Icon, name, color }) => (
                                <div
                                    key={name}
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,42,0.10)]"
                                >
                                    <div
                                        className="mx-auto flex h-24 w-24 items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110"
                                        style={{ color }}
                                    >
                                        <Icon />
                                    </div>

                                    <h4 className="mt-4 font-black text-[#06113C]">{name}</h4>

                                    <div
                                        className="mx-auto mt-4 h-[3px] w-9 rounded-full"
                                        style={{ backgroundColor: color }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-[28px] bg-[#F7025B] p-8 text-white shadow-[0_20px_55px_rgba(247,2,91,0.28)]">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#F7025B] shadow-lg">
                                <GraduationCap size={54} />
                            </div>

                            <div>
                                <h3 className="text-3xl font-black leading-tight">
                                    Ready to Begin Your Study Journey?
                                </h3>

                                <p className="mt-5 text-base font-medium leading-7 text-white/90">
                                    Let our experts guide you to the best education opportunities
                                    abroad.
                                </p>

                                <button className="group mt-6 inline-flex items-center gap-5 rounded-xl bg-[#06113C] px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(6,17,60,0.35)]">
                                    Start Your Study Journey

                                    <span className="rounded-full bg-white p-2 text-[#06113C] transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight size={20} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
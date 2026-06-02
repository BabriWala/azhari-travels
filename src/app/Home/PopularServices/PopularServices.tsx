import {
    Plane,
    GraduationCap,
    ShieldCheck,
    FileCheck,
    Hotel,
    Headphones,
} from "lucide-react";

import { FaPassport, FaSuitcaseRolling } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const services = [
    {
        no: "01",
        icon: FaPassport,
        title: "Visa Processing",
        text: "Complete visa application assistance with accuracy and fast processing.",
        color: "#F7025B",
    },
    {
        no: "02",
        icon: Plane,
        title: "Air Ticket Booking",
        text: "Domestic and international flight reservations at the best fares.",
        color: "#2563EB",
    },
    {
        no: "03",
        icon: FaSuitcaseRolling,
        title: "Tour Packages",
        text: "Customized holiday packages for memorable travel experiences.",
        color: "#2FA91F",
    },
    {
        no: "04",
        icon: GraduationCap,
        title: "Student Consultancy",
        text: "University admission support and guidance worldwide.",
        color: "#7C3AED",
    },
    {
        no: "05",
        icon: Hotel,
        title: "Hotel Reservation",
        text: "Affordable and comfortable accommodation booking worldwide.",
        color: "#F97316",
    },
    {
        no: "06",
        icon: ShieldCheck,
        title: "Travel Insurance",
        text: "Secure your journey with comprehensive travel insurance plans.",
        color: "#0EA5A8",
    },
    {
        no: "07",
        icon: Headphones,
        title: "Airport Assistance",
        text: "Meet and greet services for a smooth airport experience.",
        color: "#F7025B",
    },
    {
        no: "08",
        icon: FileCheck,
        title: "Document Legalization",
        text: "Attestation and document verification support for all needs.",
        color: "#2563EB",
    },
];

export default function PopularServices() {
    return (
        <section className="relative overflow-hidden bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,2,91,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.07),transparent_35%)]" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                <div className="mx-auto max-w-[900px] text-center">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-[#F7025B] shadow-sm ring-1 ring-[#F7025B]/10">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7025B] text-white">
                            <MdWorkspacePremium size={24} />
                        </span>

                        <span className="text-sm font-black uppercase tracking-[2px] sm:text-base">
                            Popular Services
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                        Our Popular <span className="text-[#F7025B]">Services</span>
                    </h2>

                    <div className="mt-5 flex items-center justify-center gap-3">
                        <span className="h-[4px] w-16 rounded-full bg-[#F7025B]" />
                        <span className="h-3 w-3 rounded-full bg-[#F7025B]" />
                        <span className="h-[4px] w-16 rounded-full bg-[#F7025B]" />
                    </div>

                    <p className="mx-auto mt-6 max-w-[850px] text-base font-medium leading-8 text-slate-600 sm:text-lg">
                        Complete travel solutions under one roof. From visa processing to
                        travel arrangements, we make your journey smooth and stress-free.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {services.map(({ no, icon: Icon, title, text, color }) => (
                        <div
                            key={no}
                            className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
                        >
                            <div
                                className="absolute right-0 top-0 flex h-16 w-20 items-start justify-center rounded-bl-[36px] pt-3 text-xl font-black text-white"
                                style={{ backgroundColor: color }}
                            >
                                {no}
                            </div>

                            <div
                                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full text-4xl shadow-sm transition-all duration-300 group-hover:scale-105"
                                style={{
                                    color,
                                    backgroundColor: `${color}18`,
                                }}
                            >
                                <Icon size={42} />
                            </div>

                            <h3 className="text-2xl font-black text-[#06113C]">{title}</h3>

                            <div
                                className="my-4 h-[4px] w-11 rounded-full"
                                style={{ backgroundColor: color }}
                            />

                            <p className="max-w-[270px] text-base font-medium leading-7 text-slate-600">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
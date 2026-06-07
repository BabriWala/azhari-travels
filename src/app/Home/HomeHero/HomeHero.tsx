// @ts-nocheck
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    Menu,
    X,
    Users,
    Globe2,
    Briefcase,
    GraduationCap,
    Plane,
    Landmark,
    ArrowRight,
    Gift,
    TrendingUp,
    ShieldCheck,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaWhatsapp,
    FaPassport,
} from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaMosque } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";

import { BsPeopleFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaBriefcase } from "react-icons/fa6";
import { LuChartNoAxesCombined } from "react-icons/lu";





const navItems = ["Home", "Visa Services", "Tour Packages", "About Us", "Blog", "Contact"];

const features = [
    { icon: FaPassport, title: "Fast Visa", text: "Processing", color: "#F7025B" },
    { icon: FaSuitcase, title: "Affordable", text: "Tour Packages", color: "#FF6B1A" },
    { icon: FaGraduationCap, title: "Student", text: "Admission Support", color: "#5B32D6" },
    { icon: BiSolidPlaneAlt, title: "Air Ticket", text: "Booking", color: "#2563EB" },
    { icon: FaMosque, title: "Umrah &", text: "Religious Travel", color: "#16A34A" },
    { icon: SiAdguard, title: "Secure & Reliable", text: "Services", color: "#F7025B" },
];

const stats = [
    { icon: BsPeopleFill, value: "5000+", label: "Happy Clients", color: "#F7025B" },
    { icon: TfiWorld, value: "25+", label: "Countries Covered", color: "#FF6B1A" },
    { icon: FaBriefcase, value: "10+", label: "Years Experience", color: "#5B32D6" },
    { icon: LuChartNoAxesCombined, value: "98%", label: "Success Rate", color: "#16A34A" },
];

export default function HomeHero() {
    const [open, setOpen] = useState(false);

    return (


        <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF7FA] via-[#F8FAFC] to-[#ECFDF5] px-4 pb-16 pt-20 lg:pb-20 lg:pt-24">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#F7025B]/10 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#0F766E]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <p className="mb-6 flex items-center gap-3 text-base font-semibold text-[#06113C]">
                            Plan Your Journey, We Handle the Rest
                            <span className="h-px w-20 bg-gradient-to-r from-[#F7025B] to-[#FF7A1A]" />
                        </p>

                        <h2 className="max-w-[670px] text-4xl font-semibold leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                            Your Trusted Partner for Visa,{" "}
                            <span className="bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] bg-clip-text text-transparent">
                                Travel & Study
                            </span>{" "}
                            Abroad Solutions
                        </h2>

                        <p className="mt-6 max-w-[600px] text-base font-semibold leading-8 text-slate-600 md:text-lg">
                            From visa processing and tour packages to student consultancy and Umrah services —
                            we make your journey smooth, secure, and stress-free.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="#"
                                className="group flex items-center justify-center gap-5 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-9 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(247,2,91,0.30)]"
                            >
                                Explore Visas
                                <span className="rounded-full bg-white p-2 text-[#F7025B] transition duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={22} />
                                </span>
                            </Link>

                            <Link
                                href="#"
                                className="group flex items-center justify-center gap-5 rounded-xl border border-[#06113C] bg-white/80 px-9 py-4 text-lg font-semibold text-[#06113C] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#F7025B] hover:text-[#F7025B] hover:shadow-lg"
                            >
                                Explore Packages
                                <ArrowRight size={24} className="transition duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {features.map(({ icon: Icon, title, text, color }) => (
                            <div
                                key={title}
                                className="flex min-h-[190px] flex-col items-center justify-center rounded-2xl bg-white/90 p-6 text-center shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
                            >
                                <Icon size={56} style={{ color }} />

                                <h3 className="mt-6 text-xl font-semibold leading-7 text-[#06113C]">
                                    {title}
                                    <br />
                                    {text}
                                </h3>

                                <div className="mt-5 h-[3px] w-12 rounded-full" style={{ backgroundColor: color }} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 grid gap-8 rounded-3xl bg-white/95 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-2 lg:grid-cols-4">
                    {stats.map(({ icon: Icon, value, label, color }, index) => (
                        <div
                            key={label}
                            className={`flex items-center justify-center gap-5 ${index !== stats.length - 1 ? "lg:border-r lg:border-slate-200" : ""
                                }`}
                        >
                            <div
                                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${color}15`, color }}
                            >
                                <Icon size={38} />
                            </div>

                            <div>
                                <h3 className="text-4xl  font-semibold" style={{ color }}>
                                    {value}
                                </h3>
                                <p className="font-medium text-[#06113C]">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

function TopInfo({ icon, text }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-[#F7025B]">{icon}</span>
            <span>{text}</span>
        </div>
    );
}

function SocialIcon({ children }) {
    return (
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#06113C] shadow-md transition hover:-translate-y-0.5 hover:text-[#F7025B]">
            {children}
        </button>
    );
}
// @ts-nocheck
"use client";
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
    // Passport,
    Gift,
    TrendingUp,
} from "lucide-react";
import { ShieldCheck } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaWhatsapp,
    FaPassport,
} from "react-icons/fa";
import { useState } from "react";

const navItems = [
    "Home",
    "Visa Services",
    // "Visa",
    // "Tour",
    "Tour Packages",
    // "Student Consultancy",
    // "Student",
    // "Umrah Services",
    // "Air Ticket",
    "About Us",
    "Blog",
    "Contact",
];

const features = [
    { icon: FaPassport, title: "Fast Visa", text: "Processing", color: "#F7025B" },
    { icon: Gift, title: "Affordable", text: "Tour Packages", color: "#FF6B1A" },
    { icon: GraduationCap, title: "Student", text: "Admission Support", color: "#5B32D6" },
    { icon: Plane, title: "Air Ticket", text: "Booking", color: "#2563EB" },
    { icon: Landmark, title: "Umrah &", text: "Religious Travel", color: "#16A34A" },
    { icon: ShieldCheck, title: "Secure & Reliable", text: "Services", color: "#F7025B" },
];

const stats = [
    { icon: Users, value: "5000+", label: "Happy Clients", color: "#F7025B" },
    { icon: Globe2, value: "25+", label: "Countries Covered", color: "#FF6B1A" },
    { icon: Briefcase, value: "10+", label: "Years Experience", color: "#5B32D6" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "#16A34A" },
];


export default function HomeHero() {
    const [open, setOpen] = useState(false);

    return (
        <section className="min-h-screen bg-[#F8FAFC] font-[Inter] text-[#06113C]">
            {/* Top Bar */}
            <div className="mx-auto flex max-w-7xl items-center justify-between py-3 text-sm font-semibold">
                <div className="hidden flex-1 items-center justify-center gap-5 lg:flex">
                    <TopInfo icon={<Phone size={16} />} text="+880 1XXX-XXXXXX" />
                    <span className="h-5 w-px bg-slate-300" />
                    <TopInfo icon={<Mail size={16} />} text="info@azharitravels.com" />
                    <span className="h-5 w-px bg-slate-300" />
                    <TopInfo icon={<MapPin size={16} />} text="Dhaka, Bangladesh" />
                </div>

                <div className="ml-auto flex items-center gap-3">
                    <SocialIcon><FaFacebookF /></SocialIcon>
                    <SocialIcon><FaInstagram /></SocialIcon>
                    <SocialIcon><FaYoutube /></SocialIcon>
                    <SocialIcon><FaLinkedinIn /></SocialIcon>
                </div>
            </div>

            {/* Navbar */}
            <div className="sticky top-3 z-50 mx-auto max-w-7xl ">
                <nav className="rounded-2xl bg-white px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="text-5xl font-black leading-none">
                                <span className="bg-gradient-to-br from-[#F7025B] to-[#FF7A1A] bg-clip-text text-transparent">
                                    A
                                </span>
                            </div>

                            <div className="h-12 w-px bg-slate-300" />

                            <div>
                                <h1 className="text-2xl font-black leading-6 text-[#06113C]">
                                    Azhari
                                </h1>
                                <p className="text-lg font-bold text-[#F7025B]">
                                    Travels & Tours
                                </p>
                            </div>
                        </div>

                        <div className="hidden items-center gap-7 xl:flex">
                            {navItems.map((item, index) => (
                                <a
                                    key={item}
                                    href="#"
                                    className={`relative text-sm font-bold transition hover:text-[#F7025B] ${index === 0 ? "text-[#F7025B]" : "text-[#06113C]"
                                        }`}
                                >
                                    {item}
                                    {index === 0 && (
                                        <span className="absolute -bottom-5 left-0 h-[3px] w-full rounded-full bg-[#F7025B]" />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* <a
                            href="https://wa.me/8801XXXXXXXXX"
                            className="hidden items-center gap-3 rounded-full bg-[#12B955] px-5 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 lg:flex"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#12B955]">
                                <FaWhatsapp size={22} />
                            </span>
                            WhatsApp Us
                        </a> */}
                        <div className="hidden lg:block">
                            <a
                                href="#"
                                className="relative flex items-center gap-3 rounded-full bg-[#22C55E] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#22C55E]">
                                    <FaWhatsapp size={22} />
                                </span>

                                WhatsApp Us

                                <span className="absolute -right-1 top-0 h-4 w-4 rounded-full border-2 border-white bg-green-400" />
                            </a>
                        </div>

                        <button onClick={() => setOpen(!open)} className="xl:hidden">
                            {open ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>

                    {open && (
                        <div className="mt-5 grid gap-3 border-t pt-5 xl:hidden">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-slate-100"
                                >
                                    {item}
                                </a>
                            ))}

                            <a
                                href="https://wa.me/8801XXXXXXXXX"
                                className="flex items-center justify-center gap-2 rounded-full bg-[#12B955] px-5 py-3 font-bold text-white"
                            >
                                <FaWhatsapp />
                                WhatsApp Us
                            </a>
                        </div>
                    )}
                </nav>
            </div>

            {/* Hero */}
            {/* Hero */}
            <section className="px-4 pb-16 pt-24 lg:pb-20 lg:pt-28">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        {/* Left Content */}
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-base font-semibold text-[#06113C]">
                                Plan Your Journey, We Handle the Rest
                                <span className="h-px w-20 bg-gradient-to-r from-[#F7025B] to-[#FF7A1A]" />
                            </p>

                            <h2 className="max-w-[670px] text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                                Your Trusted Partner for Visa,{" "}
                                <span className="bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] bg-clip-text text-transparent">
                                    Travel & Study
                                </span>{" "}
                                Abroad Solutions
                            </h2>

                            <p className="mt-6 max-w-[600px] text-base font-medium leading-8 text-slate-600 md:text-lg">
                                From visa processing and tour packages to student consultancy and
                                Umrah services — we make your journey smooth, secure, and stress-free.
                            </p>

                            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                <a className="flex items-center justify-center gap-5 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-9 py-4 text-lg font-bold text-white shadow-xl">
                                    Apply for Visa
                                    <span className="rounded-full bg-white p-2 text-[#F7025B]">
                                        <ArrowRight size={22} />
                                    </span>
                                </a>

                                <a className="flex items-center justify-center gap-5 rounded-xl border border-[#06113C] bg-white px-9 py-4 text-lg font-bold text-[#06113C]">
                                    Explore Packages
                                    <ArrowRight size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Right Feature Cards */}
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {features.map(({ icon: Icon, title, text, color }) => (
                                <div
                                    key={title}
                                    className="flex min-h-[190px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-2"
                                >
                                    <Icon size={56} style={{ color }} />

                                    <h3 className="mt-6 text-xl font-black leading-7 text-[#06113C]">
                                        {title}
                                        <br />
                                        {text}
                                    </h3>

                                    <div
                                        className="mt-5 h-[3px] w-12 rounded-full"
                                        style={{ backgroundColor: color }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 grid gap-8 rounded-3xl bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:grid-cols-2 lg:grid-cols-4">
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
                                    <h3 className="text-4xl font-black" style={{ color }}>
                                        {value}
                                    </h3>
                                    <p className="font-medium text-[#06113C]">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
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
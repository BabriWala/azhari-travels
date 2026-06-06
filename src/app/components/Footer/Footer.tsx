// @ts-nocheck
import {
    Home,
    Users,
    Briefcase,
    Luggage,
    Pencil,
    Mail,
    PhoneCall,
    MapPin,
    Plane,
    GraduationCap,
    Send,
    ArrowUpRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
    { icon: Home, label: "Home" },
    { icon: Users, label: "About Us" },
    { icon: Briefcase, label: "Services" },
    { icon: Luggage, label: "Tours" },
    { icon: Pencil, label: "Blog" },
    { icon: Mail, label: "Contact" },
];

const services = [
    { icon: Briefcase, label: "Visa Processing" },
    { icon: GraduationCap, label: "Student Consultancy" },
    { icon: Luggage, label: "Tour Packages" },
    { icon: Plane, label: "Air Ticket" },
    { icon: Home, label: "Umrah Services" },
];

const socials = [
    { icon: FaFacebookF, label: "Facebook", color: "bg-blue-600" },
    { icon: FaInstagram, label: "Instagram", color: "bg-pink-500" },
    { icon: FaYoutube, label: "YouTube", color: "bg-red-600" },
    { icon: FaWhatsapp, label: "WhatsApp", color: "bg-green-500" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#031945] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F7025B]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0F766E]/15 blur-3xl" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1.2fr_1.05fr]">
                    <div>
                        <div className="mb-6">
                            <h2 className="text-4xl font-black tracking-wider sm:text-5xl">
                                AZHARI
                            </h2>
                            <p className="mt-2 text-lg font-bold tracking-[4px] text-[#F7025B] sm:text-xl">
                                TRAVELS & TOURS
                            </p>
                        </div>

                        <p className="max-w-[340px] text-base font-medium leading-8 text-white/80 sm:text-lg">
                            Azhari Travels & Tours is a trusted travel agency providing visa
                            processing, tour packages, student consultancy, Umrah services,
                            and air ticket booking.
                        </p>
                    </div>

                    <FooterColumn title="Quick Links">
                        {quickLinks.map(({ icon: Icon, label }) => (
                            <FooterLink key={label} icon={Icon} label={label} />
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Services">
                        {services.map(({ icon: Icon, label }) => (
                            <FooterLink
                                key={label}
                                icon={Icon}
                                label={label}
                                iconClass="text-[#F7025B]"
                            />
                        ))}
                    </FooterColumn>

                    <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-1">
                        <FooterColumn title="Contact Information">
                            <FooterLink
                                icon={PhoneCall}
                                label="+88013 1818 5954"
                                iconClass="text-[#F7025B]"
                            />
                            <FooterLink
                                icon={Mail}
                                label="azharitravels.info@gmail.com"
                                iconClass="text-[#F7025B]"
                            />
                            <FooterLink
                                icon={MapPin}
                                label="2/A - R#7 - Nabinagar Housing - Mohammadpur - Dhaka"
                                iconClass="text-[#F7025B]"
                            />
                        </FooterColumn>

                        <FooterColumn title="Social Media">
                            {socials.map(({ icon: Icon, label, color }) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="group flex items-center gap-5"
                                >
                                    <span
                                        className={`flex h-10 w-10 items-center justify-center rounded-full ${color} transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110`}
                                    >
                                        <Icon className="text-xl text-white" />
                                    </span>

                                    <span className="text-lg font-medium text-white/80 transition group-hover:text-[#F7025B]">
                                        {label}
                                    </span>
                                </a>
                            ))}
                        </FooterColumn>
                    </div>
                </div>

                <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8 lg:p-10">
                    <div className="grid gap-8 grid-cols-1 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#F7025B] ring-1 ring-white/15">
                                <Mail size={42} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-black uppercase">Newsletter</h3>
                                <p className="mt-3 max-w-[460px] text-base font-medium leading-7 text-white/80">
                                    Subscribe to receive travel offers, visa updates, and tour
                                    promotions.
                                </p>
                            </div>
                        </div>

                        <form className="flex flex-col gap-4 sm:flex-row">

                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-16 inline-block flex-1 rounded-xl border border-white/20 bg-white/10 px-6 text-white outline-none transition placeholder:text-white/45 focus:border-[#F7025B] focus:bg-white/15"
                                />

                            </div>

                            <button
                                type="button"
                                className="group inline-flex h-16 items-center justify-center gap-3 rounded-xl bg-[#F7025B] px-8 text-lg font-bold text-white shadow-[0_16px_35px_rgba(247,2,91,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e6004f] hover:shadow-[0_24px_45px_rgba(247,2,91,0.35)]"
                            >
                                <Send
                                    size={24}
                                    fill="white"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
                    <p className="text-base text-white/75">
                        © 2026 Azhari Travels & Tours. All Rights Reserved.
                    </p>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-base font-semibold text-white/75 transition hover:text-[#F7025B]"
                    >
                        Back to top
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children }) {
    return (
        <div>
            <h3 className="text-xl font-black uppercase text-white">{title}</h3>
            <div className="mt-5 h-[3px] w-12 rounded-full bg-[#F7025B]" />
            <div className="mt-8 space-y-6">{children}</div>
        </div>
    );
}

function FooterLink({ icon: Icon, label, iconClass = "text-white" }) {
    return (
        <a
            href="#"
            className="group flex items-center gap-5 text-lg font-medium text-white/80 transition hover:text-[#F7025B]"
        >
            <div>
                <Icon
                    size={26}
                    className={`${iconClass} transition-transform duration-300 group-hover:scale-110`}
                    strokeWidth={1.7}
                />
            </div>
            <span>
                {label}
            </span>
        </a>
    );
}
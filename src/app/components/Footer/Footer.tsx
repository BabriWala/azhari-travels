import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight, Briefcase, Mail, MapPin, PhoneCall, Plane, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Visa Services", href: "/visa-services" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

const serviceLinks = [
    { label: "Al-Azhar Admission", href: "/package/student-package" },
    { label: "Umrah Package", href: "/package/umrah-package" },
    { label: "Umrah & Egypt", href: "/package/umrah-and-egypt-package" },
    { label: "Egypt Tour", href: "/package/egypt-tour" },
];

const legalLinks = [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
];

const socials = [
    { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/azharitravels2.0" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/azhari_travels_and_tours/" },
    { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@azhari_travels" },
];

export default function Footer() {
    return (
        <footer className="bg-[#06113C] px-3 py-14 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr_0.95fr_1.1fr]">
                    <div className="min-w-0 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-7">
                        <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
                            <img src="/Logo.svg" alt="Azhari Travels" className="h-14 w-14 rounded-2xl bg-white p-2" />
                            <div className="min-w-0">
                                <h2 className="truncate text-2xl font-black">Azhari Travels</h2>
                                <p className="text-sm font-bold text-[#FF7A1A]">Travels & Tours</p>
                            </div>
                        </Link>
                        <p className="mt-6 max-w-sm break-words text-base font-medium leading-8 text-white/72">
                            Visa processing, Umrah planning, Egypt student consultancy and curated tour support from one organized team.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {socials.map(({ icon: Icon, label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:-translate-y-1 hover:bg-[#F7025B]"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </Link>
                            ))}
                            <Link
                                href="https://wa.me/8801318185954"
                                target="_blank"
                                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7025B] text-white transition hover:-translate-y-1 hover:bg-[#FF7A1A]"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={21} />
                            </Link>
                        </div>
                    </div>

                    <FooterColumn title="Quick Links">
                        {quickLinks.map((item) => (
                            <FooterLink key={item.href} {...item} />
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Packages">
                        {serviceLinks.map((item) => (
                            <FooterLink key={item.href} {...item} />
                        ))}
                    </FooterColumn>

                    <div className="min-w-0 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-7">
                        <div className="flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7025B]/20 text-[#F7025B]">
                                <Briefcase size={22} />
                            </span>
                            <h3 className="text-xl font-black">Contact</h3>
                        </div>

                        <div className="mt-6 space-y-4 text-sm font-semibold leading-7 text-white/76">
                            <p className="flex min-w-0 gap-3"><PhoneCall className="mt-1 shrink-0 text-[#FF7A1A]" size={18} /> <span className="min-w-0 break-words">+88013 1818 5954</span></p>
                            <p className="flex min-w-0 gap-3"><Mail className="mt-1 shrink-0 text-[#FF7A1A]" size={18} /> <span className="min-w-0 break-all">azharitravels.info@gmail.com</span></p>
                            <p className="flex min-w-0 gap-3"><MapPin className="mt-1 shrink-0 text-[#FF7A1A]" size={18} /> <span className="min-w-0 break-words">2/A - R#7 - Nabinagar Housing - Mohammadpur - Dhaka</span></p>
                        </div>

                        <form className="mt-7 flex overflow-hidden rounded-2xl bg-white p-1">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="min-w-0 flex-1 rounded-xl px-4 text-sm font-semibold text-[#06113C] outline-none placeholder:text-slate-400"
                            />
                            <button type="button" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7025B] text-white">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 flex min-w-0 flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {legalLinks.map((item) => (
                            <Link key={item.href} href={item.href} className="text-sm font-bold text-white/70 transition hover:text-[#FF7A1A]">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <p className="text-sm font-semibold text-white/60">© 2026 Azhari Travels & Tours. All rights reserved.</p>
                        <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7A1A]">
                            Back to top
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="min-w-0 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-7">
            <h3 className="text-xl font-black">{title}</h3>
            <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#F7025B] to-[#FF7A1A]" />
            <div className="mt-6 grid gap-3">{children}</div>
        </div>
    );
}

function FooterLink({ label, href }: { label: string; href: string }) {
    return (
        <Link href={href} className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl px-3 py-2 text-sm font-bold text-white/72 transition hover:bg-white/10 hover:text-white">
            <span className="min-w-0 break-words">{label}</span>
            <Plane className="text-[#F7025B] opacity-0 transition group-hover:opacity-100" size={15} />
        </Link>
    );
}

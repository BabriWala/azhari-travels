"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, PhoneCall, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import MetaWhatsAppSalesLink from "../MetaWhatsAppSalesLink";

const navItems = [
    { label: "Home", link: "/" },
    { label: "Visa Services", link: "/visa-services" },
    { label: "Tour Packages", link: "/tour-packages" },
    { label: "About Us", link: "/about-us" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const trackAlAzharSale = pathname === "/al-azhar-university";

    return (
        <header className="sticky top-0 z-[9999] border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="hidden h-10 items-center justify-between border-b border-slate-100 text-xs font-semibold text-slate-500 lg:flex">
                    <div className="flex items-center gap-5">
                        <a href="tel:+8801318185954" className="inline-flex items-center gap-2 transition hover:text-[#F7025B]">
                            <PhoneCall size={14} />
                            +88 013 1818 5954
                        </a>
                        <a href="mailto:azharitravels.info@gmail.com" className="inline-flex items-center gap-2 transition hover:text-[#F7025B]">
                            <Mail size={14} />
                            azharitravels.info@gmail.com
                        </a>
                    </div>
                    <p className="text-slate-400">Visa, Umrah, student consultancy and tour support</p>
                </div>

                <nav className="flex min-h-20 items-center justify-between gap-4">
                    <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm p-2 shadow-sm transition group-hover:-translate-y-0.5">
                            <img src="/Logo.png" alt="Azhari Travels & Tours" className="h-full w-full object-contain" />
                        </span>
                        <span className="min-w-0">
                            <span className="block truncate text-xl font-black leading-6 text-[#06113C]">Azhari Travels</span>
                            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#F7025B]">Make Dreams to Reality</span>
                        </span>
                    </Link>

                    <div className="hidden items-center gap-1 rounded-2xl bg-[#F8FAFC] p-1 xl:flex">
                        {navItems.map((item) => {
                            const isActive = pathname === item.link || (item.link !== "/" && pathname.startsWith(item.link));

                            return (
                                <Link
                                    key={item.label}
                                    href={item.link}
                                    className={`rounded-xl px-4 py-3 text-sm font-bold transition ${isActive
                                        ? "bg-white text-[#F7025B] shadow-sm ring-1 ring-slate-200"
                                        : "text-slate-600 hover:bg-white hover:text-[#06113C]"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        <MetaWhatsAppSalesLink
                            href="https://wa.me/8801318185954"
                            sectionName="Header WhatsApp"
                            enabled={trackAlAzharSale}
                            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-5 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(247,2,91,0.22)] transition hover:-translate-y-0.5 lg:inline-flex"
                        >
                            <FaWhatsapp size={18} />
                            WhatsApp
                        </MetaWhatsAppSalesLink>

                        <button
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#06113C] shadow-sm transition hover:border-[#F7025B]/30 hover:text-[#F7025B] xl:hidden"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>

                {open && (
                    <div className="border-t border-slate-100 pb-5 pt-3 xl:hidden">
                        <div className="grid gap-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.link || (item.link !== "/" && pathname.startsWith(item.link));

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.link}
                                        onClick={() => setOpen(false)}
                                        className={`rounded-xl px-4 py-3 text-sm font-bold transition ${isActive
                                            ? "bg-[#FFF8FB] text-[#F7025B] ring-1 ring-[#F7025B]/10"
                                            : "text-slate-700 hover:bg-[#F8FAFC]"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="mt-4 grid gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                            <a href="tel:+8801318185954" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600">
                                <PhoneCall size={16} className="text-[#F7025B]" />
                                +88 013 1818 5954
                            </a>
                            <MetaWhatsAppSalesLink
                                href="https://wa.me/8801318185954"
                                sectionName="Mobile Header WhatsApp"
                                enabled={trackAlAzharSale}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-5 py-3 text-sm font-black text-white"
                            >
                                <FaWhatsapp size={18} />
                                WhatsApp Us
                            </MetaWhatsAppSalesLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

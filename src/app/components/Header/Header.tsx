// @ts-nocheck
"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Visa Services",
        link: "/"
    },
    {
        label: "Tour Packages",
        link: "/"
    },
    {
        label: "About Us",
        link: "/"
    },
    {
        label: "Blog",
        link: "/"
    },
    {
        label: "Contact",
        link: "/"
    },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Top Bar - Normal */}
            <div className="bg-white font-[Inter] text-[#06113C]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm font-semibold">
                    <div className="hidden flex-1 items-center justify-center gap-5 lg:flex">
                        <TopInfo icon={<FaPhoneAlt size={16} />} text="+88 013 1818 5954" />

                        <span className="h-5 w-px bg-slate-300" />

                        <TopInfo icon={<IoMdMail size={16} />} text="azharitravels.info@gmail.com" />
                        <span className="h-5 w-px bg-slate-300" />

                        <TopInfo
                            icon={<IoLocationSharp size={16} />}
                            text="2/A - R#7 - Nabinagar Housing - Mohammadpur - Dhaka"
                        />
                    </div>

                    <div className="ml-auto flex items-center gap-3">
                        <Link href="https://www.facebook.com/azharitravels2.0" target="_blank">
                            <SocialIcon className="">
                                <FaFacebookF />
                            </SocialIcon>
                        </Link>

                        <Link href="https://www.instagram.com/azhari_travels_and_tours/" target="_blank">
                            <SocialIcon className="">
                                <FaInstagram />
                            </SocialIcon>
                        </Link>

                        <Link href="https://www.youtube.com/@azhari_travels" target="_blank">
                            <SocialIcon className="">
                                <FaYoutube />
                            </SocialIcon>
                        </Link>

                        <Link href="https://x.com/azhari__travels" target="_blank">
                            <SocialIcon className="">
                                <FaXTwitter />
                            </SocialIcon>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sticky Navbar Only */}
            <div className="sticky top-3 z-[9999] mx-auto max-w-7xl px-4 lg:px-0">
                <nav className="rounded-2xl bg-white px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="/Logo.png"
                                alt="Azhari Travels & Tours"
                                className="h-10 w-10"
                            />

                            {/* <h1 className="bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] bg-clip-text text-2xl font-bold leading-6 text-transparent"> */}
                            <h1 className=" text-[#06113C] text-2xl font-bold leading-6 ">
                                Azhari Travels
                            </h1>
                        </div>

                        <div className="hidden items-center gap-7 xl:flex">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.link}
                                    className={`relative text-sm font-semibold transition hover:text-[#F7025B] ${index === 0 ? "text-[#F7025B]" : "text-[#06113C]"
                                        }`}
                                >
                                    {item.label}

                                    {index === 0 && (
                                        <span className="absolute -bottom-5 left-0 h-[3px] w-full rounded-full bg-[#F7025B]" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:block">
                            <Link
                                href="https://wa.me/8801318185954"
                                target="_blank"
                                className="relative flex items-center gap-3 rounded-full bg-[#22C55E] px-6 py-3 font-normal text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(34,197,94,0.35)]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#22C55E]">
                                    <FaWhatsapp size={22} />
                                </span>

                                WhatsApp Us

                                <span className="absolute -right-1 top-0 h-4 w-4 rounded-full border-2 border-white bg-green-400" />
                            </Link>
                        </div>

                        <button onClick={() => setOpen(!open)} className="xl:hidden">
                            {open ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>

                    {open && (
                        <div className="mt-5 grid gap-3 border-t pt-5 xl:hidden">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.link}
                                    className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-100"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link
                                href="https://wa.me/8801318185954"
                                target="_blank"
                                className="flex items-center justify-center gap-2 rounded-full bg-[#12B955] px-5 py-3 font-normal text-white"
                            >
                                <FaWhatsapp />
                                WhatsApp Us
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </>
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
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#06113C] shadow-md transition hover:-translate-y-0.5 hover:text-[#F7025B] cursor-pointer">
            {children}
        </button>
    );
}
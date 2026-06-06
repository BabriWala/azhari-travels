// @ts-nocheck
import {
    Plane,
    ChevronRight,
    Phone,
    Mail,
    MapPin,
    Send,
    ShieldCheck,
    Clock3,
    Headphones,
    Tag,
    FileText,
    GraduationCap,
    BriefcaseBusiness,
    Landmark,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

const quickLinks = ["Home", "About Us", "Services", "Tours", "Blog", "Contact"];

const services = [
    { name: "Visa Processing", icon: FileText },
    { name: "Student Consultancy", icon: GraduationCap },
    { name: "Tour Packages", icon: BriefcaseBusiness },
    { name: "Air Ticket", icon: Plane },
    { name: "Umrah Services", icon: Landmark },
];

const trustItems = [
    {
        title: "Trusted & Reliable",
        text: "Trusted by thousands of happy clients",
        icon: ShieldCheck,
        color: "text-[#ff2f7d]",
    },
    {
        title: "Fast Processing",
        text: "Quick visa approvals and bookings",
        icon: Clock3,
        color: "text-[#2f93ff]",
    },
    {
        title: "Dedicated Support",
        text: "24/7 support from our travel experts",
        icon: Headphones,
        color: "text-[#32d086]",
    },
    {
        title: "Best Price Guarantee",
        text: "Transparent pricing with no hidden charges",
        icon: Tag,
        color: "text-[#ff8a1f]",
    },
];

export default function Footer() {
    return (
        <footer className="font-['Inter',sans-serif] bg-[#031b34] text-white">
            <div className="bg-[radial-gradient(circle_at_top_left,#082b52_0%,#031b34_45%,#021324_100%)]">
                {/* Top Footer */}
                <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 lg:pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1.05fr_1.35fr_1.25fr] gap-10 lg:gap-0 pb-16">
                        {/* Logo */}
                        <div className="lg:pr-14 lg:border-r lg:border-white/10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-[72px] h-[72px] flex items-center justify-center">
                                    <div className="absolute w-14 h-14 rounded-full border-[10px] border-[#ff2f7d] border-r-transparent rotate-[-25deg]" />
                                    <Plane className="relative w-10 h-10 text-white -rotate-12" />
                                </div>

                                <div>
                                    <h2 className="text-[34px] md:text-[40px] leading-none font-extrabold tracking-[0.16em]">
                                        AZHARI
                                    </h2>
                                    <p className="mt-2 text-[15px] font-bold tracking-[0.18em]">
                                        TRAVELS & TOURS
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#b7c3d4] text-[17px] leading-[2.05] max-w-[310px]">
                                Azhari Travels & Tours is a trusted travel agency providing visa
                                processing, tour packages, student consultancy, Umrah services,
                                and air ticket booking.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:px-12 lg:border-r lg:border-white/10">
                            <FooterTitle title="Quick Links" />
                            <ul className="space-y-6">
                                {quickLinks.map((link) => (
                                    <li key={link}>
                                        <a className="flex items-center gap-5 text-[17px] text-white hover:text-[#ff2f7d] transition">
                                            <ChevronRight className="w-5 h-5 text-[#ff2f7d]" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="lg:px-12 lg:border-r lg:border-white/10">
                            <FooterTitle title="Services" />
                            <ul className="space-y-6">
                                {services.map(({ name, icon: Icon }) => (
                                    <li key={name}>
                                        <a className="flex items-center gap-5 text-[17px] text-white hover:text-[#ff2f7d] transition">
                                            <Icon className="w-8 h-8 text-[#ff2f7d]" />
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="lg:px-12 lg:border-r lg:border-white/10">
                            <FooterTitle title="Contact Information" />

                            <div className="space-y-7">
                                <ContactItem icon={Phone} text="+880 1XXX-XXXXXX" color="bg-[#4a163d]" />
                                <ContactItem icon={Mail} text="info@azharitravels.com" color="bg-[#123f68]" />
                                <ContactItem icon={MapPin} text="Dhaka, Bangladesh" color="bg-[#16624d]" />
                            </div>

                            <div className="mt-9 pt-7 border-t border-white/10">
                                <div className="flex flex-wrap gap-5">
                                    <Social icon={FaFacebookF} label="Facebook" bg="bg-[#3159ad]" />
                                    <Social icon={FaInstagram} label="Instagram" bg="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
                                    <Social icon={FaYoutube} label="YouTube" bg="bg-[#ff1f1f]" />
                                    <Social icon={FaWhatsapp} label="WhatsApp" bg="bg-[#36c765]" />
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="lg:pl-12">
                            <FooterTitle title="Newsletter" />

                            <p className="text-[#b7c3d4] text-[17px] leading-8 mb-7">
                                Subscribe to receive travel offers, visa updates, and tour
                                promotions.
                            </p>

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full h-[58px] rounded-lg bg-white/5 border border-white/20 px-5 text-white text-[16px] placeholder:text-[#9daac0] outline-none focus:border-[#ff2f7d]"
                            />

                            <button className="mt-5 w-full h-[58px] rounded-lg bg-gradient-to-r from-[#ff1f73] to-[#ff7a22] text-white text-[17px] font-extrabold tracking-wide flex items-center justify-center gap-3 hover:opacity-90 transition">
                                SUBSCRIBE NOW
                                <Send className="w-5 h-5 fill-white" />
                            </button>

                            <div className="hidden lg:flex justify-end mt-12 opacity-20">
                                <Plane className="w-20 h-20 text-white rotate-[-20deg]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Bar */}
                <div className="border-y border-white/10">
                    <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
                            {trustItems.map(({ title, text, icon: Icon, color }) => (
                                <div key={title} className="flex items-start gap-5">
                                    <Icon className={`w-[58px] h-[58px] shrink-0 ${color}`} />
                                    <div>
                                        <h4 className="text-[19px] font-extrabold mb-2">{title}</h4>
                                        <p className="text-[#b7c3d4] text-[17px] leading-7 max-w-[245px]">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <p className="text-[#b7c3d4] text-[17px] text-center lg:text-left">
                            © 2026 Azhari Travels & Tours. All Rights Reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {["VISA", "Mastercard", "AMERICAN EXPRESS", "bkash", "নগদ"].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="h-11 min-w-[92px] px-5 rounded-md bg-white text-[#08305c] flex items-center justify-center text-sm font-extrabold shadow-md"
                                    >
                                        {item}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterTitle({ title }) {
    return (
        <div className="mb-8">
            <h3 className="text-[20px] font-extrabold uppercase tracking-[0.06em]">
                {title}
            </h3>
            <div className="mt-4 w-10 h-[4px] rounded-full bg-[#ff2f7d]" />
        </div>
    );
}

function ContactItem({ icon: Icon, text, color }) {
    return (
        <div className="flex items-center gap-5">
            <div className={`w-[52px] h-[52px] rounded-full ${color} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-[17px] text-white">{text}</p>
        </div>
    );
}

function Social({ icon: Icon, label, bg }) {
    return (
        <a href="#" className="text-center group">
            <div
                className={`w-[52px] h-[52px] rounded-full ${bg} flex items-center justify-center shadow-lg group-hover:scale-105 transition`}
            >
                <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="mt-2 text-[12px] text-white">{label}</p>
        </a>
    );
}
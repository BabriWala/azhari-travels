"use client";

import {
    ArrowRight,
    Plane,
    Briefcase,
    Award,
    Headphones,
    ShieldCheck,
    CalendarDays,
} from "lucide-react";

import {
    GiEgyptianPyramids,
    GiCastle,
    GiCamel,
    GiAirBalloon,
} from "react-icons/gi";

import {
    FaMosque,
    FaKaaba,
    FaShip,
    FaCity,
    FaUmbrellaBeach,
} from "react-icons/fa";

import { MdOutlineLocationCity } from "react-icons/md";

const packages = [
    {
        country: "Egypt",
        type: "Tour Package",
        image: "/tour/egypt.jpg",
        color: "#F7025B",
        icon: GiEgyptianPyramids,
        places: [
            { icon: FaMosque, name: "Cairo" },
            { icon: GiEgyptianPyramids, name: "Pyramids" },
            { icon: FaShip, name: "Nile Cruise" },
            { icon: FaMosque, name: "Islamic Heritage Tour" },
        ],
    },
    {
        country: "Turkey",
        type: "Tour Package",
        image: "/tour/turkey.jpg",
        color: "#2563EB",
        icon: FaMosque,
        places: [
            { icon: FaMosque, name: "Istanbul" },
            { icon: GiAirBalloon, name: "Cappadocia" },
            { icon: GiCastle, name: "Bursa" },
            { icon: FaShip, name: "Bosphorus Cruise" },
        ],
    },
    {
        country: "Dubai",
        type: "Tour Package",
        image: "/tour/dubai.jpg",
        color: "#16A34A",
        icon: MdOutlineLocationCity,
        places: [
            { icon: MdOutlineLocationCity, name: "Burj Khalifa" },
            { icon: GiCamel, name: "Desert Safari" },
            { icon: FaCity, name: "City Tour" },
        ],
    },
    {
        country: "Malaysia",
        type: "Tour Package",
        image: "/tour/malaysia.jpg",
        color: "#7C3AED",
        icon: FaCity,
        places: [
            { icon: FaCity, name: "Kuala Lumpur" },
            { icon: GiCastle, name: "Genting Highlands" },
            { icon: FaUmbrellaBeach, name: "Langkawi" },
        ],
    },
    {
        country: "Saudi Arabia",
        type: "Religious Tour",
        image: "/tour/saudi.jpg",
        color: "#F59E0B",
        icon: FaMosque,
        places: [
            { icon: FaKaaba, name: "Makkah" },
            { icon: FaMosque, name: "Madinah" },
            { icon: GiCastle, name: "Historical Sites" },
        ],
    },
];

const benefits = [
    {
        icon: Award,
        title: "Best Price",
        text: "Guaranteed",
        color: "#F7025B",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        text: "We are here to help",
        color: "#2563EB",
    },
    {
        icon: ShieldCheck,
        title: "Trusted & Safe",
        text: "Secure & reliable services",
        color: "#16A34A",
    },
    {
        icon: CalendarDays,
        title: "Customizable",
        text: "Packages for you",
        color: "#7C3AED",
    },
];

export default function PopularTourPackages() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#0F766E]/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F7025B]/5 blur-3xl" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                {/* Heading */}
                <div className="mx-auto max-w-[1000px] text-center">
                    <div className="mb-5 flex items-center justify-center gap-3 text-[#F7025B]">
                        <span className="h-[2px] w-10 bg-[#F7025B]" />
                        <Briefcase size={22} />
                        <span className="text-sm font-black uppercase tracking-[3px] sm:text-lg">
                            Popular Tour Packages
                        </span>
                        <span className="h-[2px] w-10 bg-[#F7025B]" />
                    </div>

                    <h2 className="text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                        Best Selling{" "}
                        <span className="text-[#F7025B]">Tour Packages</span>
                    </h2>

                    <div className="mt-7 flex items-center justify-center gap-4 text-[#F7025B]">
                        <span className="h-[2px] w-16 bg-slate-300" />
                        <Plane size={26} fill="#F7025B" />
                        <span className="h-[2px] w-16 bg-slate-300" />
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {packages.map((item) => {
                        const MainIcon = item.icon;

                        return (
                            <div
                                key={item.country}
                                className="group overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
                            >
                                <div className="h-[230px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.country}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="relative px-5 pb-6 pt-8">
                                    <div
                                        className="absolute -top-9 left-5 flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-white bg-white text-3xl shadow-md"
                                        style={{ color: item.color }}
                                    >
                                        <MainIcon />
                                    </div>

                                    <div
                                        className="absolute -top-5 left-[72px] rounded-r-full px-7 py-2 text-xl font-black text-white"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        {item.country}
                                    </div>

                                    <p className="mt-4 text-center text-xl font-semibold italic text-slate-600">
                                        {item.type}
                                    </p>

                                    <div
                                        className="mx-auto my-5 h-[3px] w-16 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />

                                    <div className="space-y-4">
                                        {item.places.map(({ icon: Icon, name }) => (
                                            <div key={name} className="flex items-center gap-4">
                                                <Icon
                                                    className="text-2xl"
                                                    style={{ color: item.color }}
                                                />

                                                <span className="text-base font-medium text-[#06113C]">
                                                    {name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className="mt-7 flex w-full items-center justify-center gap-4 rounded-xl border px-4 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:text-white"
                                        style={{
                                            borderColor: item.color,
                                            color: item.color,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = item.color;
                                            e.currentTarget.style.color = "#ffffff";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.color = item.color;
                                        }}
                                    >
                                        View Package Details
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits */}
                <div className="mt-10 grid gap-6 rounded-[28px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map(({ icon: Icon, title, text, color }, index) => (
                        <div
                            key={title}
                            className={`flex items-center justify-center gap-4 text-center sm:text-left ${index !== benefits.length - 1
                                ? "lg:border-r lg:border-slate-200"
                                : ""
                                }`}
                        >
                            <div
                                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                                style={{
                                    color,
                                    backgroundColor: `${color}14`,
                                    boxShadow: `0 10px 25px ${color}18`,
                                }}
                            >
                                <Icon size={34} />
                            </div>

                            <div>
                                <h3 className="text-lg font-black" style={{ color }}>
                                    {title}
                                </h3>

                                <p className="text-sm font-medium text-slate-600">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <button className="group inline-flex items-center gap-8 rounded-xl bg-[#06113C] px-8 py-4 text-lg font-bold text-white shadow-[8px_8px_0_#F7025B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_#F7025B]">
                        View All Packages
                        <ArrowRight className="text-[#F7025B] transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
"use client";

import Link from "next/link";
import {
    ArrowRight,
    Plane,
    Briefcase,
    Award,
    Headphones,
    ShieldCheck,
    CalendarDays,
    MapPin,
    Clock,
    Users,
    CheckCircle,
} from "lucide-react";

import { FaKaaba, FaShip, FaUmbrellaBeach, FaMosque } from "react-icons/fa";
import {
    GiEgyptianPyramids,
    GiCastle,
    GiCamel,
    GiAirBalloon,
} from "react-icons/gi";
import { MdOutlineLocationCity } from "react-icons/md";

type PackageItem = {
    slug: string;
    title: string;
    subtitle?: string;
    category?: string;
    image?: string;
    price?: string;
    duration?: string;
    audience?: string;
    route?: string;
    includes?: string[];
};

const colors = ["#F7025B", "#2563EB", "#16A34A", "#7C3AED", "#F59E0B", "#0F766E"];

function packageType(category?: string) {
    if (category === "umrah") return "Religious Tour";
    if (category === "student-consultancy") return "Student Package";
    return "Tour Package";
}

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

export default function PopularTourPackages({ items = [] }: { items?: PackageItem[] }) {
    const packages = items.slice(0, 6).map((item, index) => ({
        country: item.title,
        type: packageType(item.category),
        slug: item.slug,
        image: item.image || "/home/visa-services/egypt.png",
        color: colors[index % colors.length],
        duration: item.duration || "Custom itinerary",
        groupSize: item.audience || "Family Friendly",
        price: item.price || "Custom Price",
        places: (item.includes?.length ? item.includes : [item.route, item.subtitle, "Travel support", "Guided service"])
            .filter(Boolean)
            .slice(0, 4)
            .map((name, placeIndex) => ({
                icon: [FaMosque, GiEgyptianPyramids, FaShip, MdOutlineLocationCity][placeIndex % 4],
                name: String(name),
            })),
    }));

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
                        <span className="text-sm font-semibold uppercase tracking-[3px] sm:text-lg">
                            Popular Tour Packages
                        </span>
                        <span className="h-[2px] w-10 bg-[#F7025B]" />
                    </div>

                    <h2 className="text-4xl font-semibold leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
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
                {packages.length ? (
                    <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                        {packages.map((item) => (
                        <div
                            key={item.country}
                            className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={`${item.country} tour package`}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#06113C]/90 via-[#06113C]/35 to-transparent" />

                                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[1.5px] shadow-sm backdrop-blur">
                                    <span style={{ color: item.color }}>{item.type}</span>
                                </div>

                                <div className="absolute bottom-5 left-5 right-5">
                                    <h3 className="text-2xl font-semibold text-white">
                                        {item.country}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap gap-3">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                                            <Clock size={14} />
                                            {item.duration}
                                        </span>

                                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                                            <Users size={14} />
                                            {item.groupSize}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-7">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[1.5px] text-slate-500">
                                            Package starts from
                                        </p>
                                        <h4
                                            className="mt-1 text-2xl font-semibold"
                                            style={{ color: item.color }}
                                        >
                                            {item.price}
                                        </h4>
                                    </div>

                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                                        style={{
                                            color: item.color,
                                            backgroundColor: `${item.color}14`,
                                        }}
                                    >
                                        <MapPin size={30} />
                                    </div>
                                </div>

                                <div
                                    className="my-6 h-[3px] w-14 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />

                                <div className="grid gap-3">
                                    {item.places.map(({ icon: Icon, name }) => (
                                        <div key={name} className="flex items-center gap-3">
                                            <Icon className="text-xl" style={{ color: item.color }} />
                                            <span className="text-sm font-semibold text-slate-700">
                                                {name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={`/package/${item.slug}`}
                                    className="group/btn mt-7 flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        backgroundColor: item.color,
                                        boxShadow: `0 16px 30px ${item.color}30`,
                                    }}
                                >
                                    View Package Details
                                    <ArrowRight
                                        size={20}
                                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 rounded-[28px] border border-slate-200 bg-white p-8 text-center font-semibold text-slate-600">
                        No packages are published yet.
                    </div>
                )}

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
                                <h3 className="text-lg font-semibold" style={{ color }}>
                                    {title}
                                </h3>

                                <p className="text-sm font-medium text-slate-600">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <Link href="/tour-packages" className="group inline-flex items-center gap-8 rounded-xl bg-[#06113C] px-8 py-4 text-lg font-bold text-white shadow-[8px_8px_0_#F7025B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_#F7025B]">
                        View All Packages
                        <ArrowRight className="text-[#F7025B] transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

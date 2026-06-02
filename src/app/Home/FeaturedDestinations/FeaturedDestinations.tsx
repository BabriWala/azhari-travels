import { ArrowRight, Plane } from "lucide-react";
import {
    GiEgyptianPyramids,
    GiCastle,
    GiGreekTemple,
} from "react-icons/gi";
import { FaMosque, FaKaaba } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";

const destinations = [
    {
        title: "Egypt",
        text: "Discover ancient wonders and Islamic heritage.",
        image: "/destinations/egypt.jpg",
        icon: GiEgyptianPyramids,
        color: "#F7025B",
    },
    {
        title: "Saudi Arabia",
        text: "Perform Umrah and visit holy cities.",
        image: "/destinations/saudi.jpg",
        icon: FaMosque,
        color: "#16A34A",
    },
    {
        title: "Turkey",
        text: "Experience rich history and modern attractions.",
        image: "/destinations/turkey.jpg",
        icon: GiCastle,
        color: "#F97316",
    },
    {
        title: "Malaysia",
        text: "Perfect destination for families and students.",
        image: "/destinations/malaysia.jpg",
        icon: MdOutlineLocationCity,
        color: "#8B5CF6",
    },
    {
        title: "United Arab Emirates",
        text: "Luxury travel and business opportunities.",
        image: "/destinations/uae.jpg",
        icon: FaKaaba,
        color: "#06B6D4",
    },
    {
        title: "Jordan",
        text: "Explore historical and religious landmarks.",
        image: "/destinations/jordan.jpg",
        icon: GiGreekTemple,
        color: "#F7025B",
    },
];

export default function FeaturedDestinations() {
    return (
        <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)]" />
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#F7025B]/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0F766E]/5 blur-3xl" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                {/* Heading */}
                <div className="mx-auto max-w-[900px] text-center">
                    <div className="mb-6 flex items-center justify-center gap-3 text-[#F7025B]">
                        <span className="h-[2px] w-8 bg-[#F7025B]" />
                        <Plane size={22} fill="#F7025B" />
                        <span className="text-sm font-black uppercase tracking-[3px] sm:text-lg">
                            Featured Destinations
                        </span>
                        <span className="h-[2px] w-8 bg-[#F7025B]" />
                    </div>

                    <h2 className="text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                        Explore Popular{" "}
                        <span className="text-[#F7025B]">Destinations</span>
                    </h2>

                    <div className="mt-7 flex items-center justify-center gap-4 text-[#F7025B]">
                        <span className="h-[3px] w-16 rounded-full bg-[#F7025B]" />
                        <Plane size={26} fill="#F7025B" />
                        <span className="h-[3px] w-16 rounded-full bg-[#F7025B]" />
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {destinations.map(({ title, text, image, icon: Icon, color }) => (
                        <div
                            key={title}
                            className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)]"
                        >
                            <div className="h-[230px] overflow-hidden sm:h-[260px]">
                                <img
                                    src={image}
                                    alt={title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="relative min-h-[140px] bg-white px-6 py-7 sm:px-8">
                                <div
                                    className="absolute -top-12 left-6 flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-white text-4xl shadow-md transition-transform duration-300 group-hover:scale-105 sm:left-8"
                                    style={{
                                        color,
                                        backgroundColor: `${color}12`,
                                    }}
                                >
                                    <Icon />
                                </div>

                                <div className="pl-28">
                                    <h3 className="text-2xl font-black text-[#06113C]">
                                        {title}
                                    </h3>

                                    <div
                                        className="my-3 h-[3px] w-10 rounded-full"
                                        style={{ backgroundColor: color }}
                                    />

                                    <p className="text-base font-medium leading-7 text-slate-600">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <button className="group inline-flex items-center gap-6 rounded-xl bg-[#06113C] px-8 py-4 text-lg font-bold text-white shadow-[6px_6px_0_#F7025B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#F7025B]">
                        View All Destinations
                        <ArrowRight className="text-[#F7025B] transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
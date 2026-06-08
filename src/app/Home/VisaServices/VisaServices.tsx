import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

type VisaItem = {
    slug: string;
    title: string;
    subtitle?: string;
    image?: string;
    duration?: string;
    href?: string;
};

const trustItems = [
    { title: "100% Reliable", text: "Trusted visa assistance" },
    { title: "Fast Processing", text: "Quick & hassle-free application" },
    { title: "Expert Guidance", text: "Experienced team at your service" },
    { title: "Secure & Safe", text: "Your documents are in safe hands" },
];

export default function VisaServices({ items = [] }: { items?: VisaItem[] }) {
    const visaServices = items.slice(0, 6);

    return (
        <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,2,91,0.05),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.06),transparent_35%)]" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <div className="mb-8 inline-flex items-center gap-3 rounded-lg border border-[#F7025B]/25 bg-white px-5 py-3 text-[#F7025B] shadow-sm">
                            <span className="text-sm font-semibold uppercase tracking-[2px]">
                                Visa Services
                            </span>
                        </div>

                        <h2 className="text-4xl font-semibold leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                            Available
                            <br />
                            <span className="text-[#F7025B]">Visa Destinations</span>
                        </h2>

                        <div className="mt-6 h-1 w-16 rounded-full bg-[#F7025B]" />

                        <p className="mt-7 max-w-[650px] text-base font-medium leading-8 text-slate-600 sm:text-lg">
                            Explore our most popular visa destinations. We provide complete
                            documentation support, application assistance and expert guidance
                            throughout the visa process.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                        <div className="grid gap-7 sm:grid-cols-2">
                            {trustItems.map((item) => (
                                <div key={item.title}>
                                    <CheckCircle className="mb-3 text-[#F7025B]" size={28} />
                                    <h3 className="text-lg font-semibold text-[#06113C]">
                                        {item.title}
                                    </h3>
                                    <div className="my-3 h-[3px] w-10 rounded-full bg-[#F7025B]" />
                                    <p className="text-sm leading-6 text-slate-600">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* New Card Design */}
                {visaServices.length ? (
                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        {visaServices.map((item, index) => (
                        <div
                            key={item.title}
                            className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(15,23,42,0.13)] sm:grid-cols-[220px_1fr]"
                        >
                            <div className="relative h-56 overflow-hidden sm:h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#06113C]/70 via-transparent to-transparent sm:bg-gradient-to-r" />

                                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[1.5px] text-[#F7025B] shadow-sm">
                                    {index === 0 ? "Most Popular" : item.duration || "Visa Support"}
                                </span>
                            </div>

                            <div className="flex flex-col justify-between p-7">
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#06113C]">
                                        {item.title}
                                    </h3>

                                    <div className="my-4 h-[4px] w-14 rounded-full bg-[#F7025B]" />

                                    <p className="text-base font-medium leading-8 text-slate-600">
                                        {item.subtitle}
                                    </p>
                                </div>

                                <Link href={item.href ?? `/visa-services/${item.slug}`} className="group/btn cursor-pointer mt-7 inline-flex w-fit items-center gap-3 rounded-full border border-[#F7025B]/25 bg-[#F7025B]/5 px-5 py-3 font-bold text-[#F7025B] transition-all duration-300 hover:bg-[#F7025B] hover:text-white">
                                    View Requirements
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 text-center font-semibold text-slate-600">
                        No visa services are published yet.
                    </div>
                )}

                <div className="mt-12 flex justify-center">
                    <Link href="/visa-services" className="group cursor-pointer inline-flex items-center gap-6 rounded-xl bg-[#F7025B] px-10 py-5 text-lg font-bold text-white shadow-[0_16px_35px_rgba(247,2,91,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e6004f] hover:shadow-[0_24px_45px_rgba(247,2,91,0.35)]">
                        View All Visa Services
                        <ArrowRight
                            size={24}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

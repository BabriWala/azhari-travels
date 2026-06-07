import { ArrowRight, BadgeCheck, CheckCircle2, Clock3, FileCheck2, Globe2, Plane, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

type VisaItem = {
    title: string;
    subtitle?: string;
    duration?: string;
    requirements?: string[];
};

export default function VisaSection({ items = [] }: { items?: VisaItem[] }) {
    const visaServices = items.slice(0, 3).map((item) => ({
        title: item.title,
        desc: item.subtitle || "Professional visa processing support.",
        time: item.duration || "Processing depends on case",
        items: (item.requirements?.length ? item.requirements : ["Document Check", "Visa Guidance", "Application Support"]).slice(0, 3),
    }));

    return (
        <section id="visa" className="relative overflow-hidden bg-[#fff8f1] px-5 py-24 lg:px-8">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-pink-600">
                            Visa Services
                        </p>
                        <h2 className="text-4xl font-black leading-tight text-[#08103A] sm:text-5xl">
                            Professional Visa Processing Support
                        </h2>
                    </div>

                    <p className="max-w-2xl text-base leading-8 text-gray-600 lg:ml-auto">
                        From document checking to approval guidance, Azhari Travels 2.0 helps you complete your visa process smoothly.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[2.5rem] bg-[#08103A] p-8 text-white shadow-2xl lg:p-10">
                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-orange-400">
                            <FileCheck2 size={34} />
                        </div>
                        <h3 className="text-3xl font-black leading-tight sm:text-4xl">
                            Complete Visa Assistance From Start to Finish
                        </h3>
                        <p className="mt-5 leading-8 text-white/70">
                            We guide you through required documents, application steps, approval process and travel preparation.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <Highlight icon={<ShieldCheck />} title="Trusted Support" />
                            <Highlight icon={<Clock3 />} title="Fast Response" />
                            <Highlight icon={<Globe2 />} title="Multiple Countries" />
                            <Highlight icon={<Plane />} title="Travel Ready" />
                        </div>

                        <a href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#08103A]">
                            Apply for Visa
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="space-y-5">
                        {visaServices.map((service, index) => (
                            <div key={service.title} className="group rounded-[2rem] border border-gray-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-xs font-black text-pink-600">
                                            <BadgeCheck size={15} />
                                            Service {index + 1}
                                        </div>
                                        <h3 className="text-2xl font-black text-[#08103A]">{service.title}</h3>
                                        <p className="mt-3 max-w-2xl leading-7 text-gray-600">{service.desc}</p>
                                        <p className="mt-3 font-bold text-orange-500">{service.time}</p>
                                    </div>

                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-orange-400 text-white">
                                        <FileCheck2 size={26} />
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    {service.items.map((item) => (
                                        <div key={item} className="flex items-center gap-2 rounded-2xl bg-[#fff8f1] px-4 py-3 text-sm font-bold text-[#08103A]">
                                            <CheckCircle2 size={16} className="text-orange-400" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Highlight({ icon, title }: { icon: ReactNode; title: string }) {
    return (
        <div className="rounded-2xl bg-white/10 p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-pink-300">
                {icon}
            </div>
            <p className="font-bold">{title}</p>
        </div>
    );
}

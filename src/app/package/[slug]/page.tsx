import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    CalendarDays,
    CheckCircle2,
    Clock,
    FileCheck2,
    Hotel,
    LucideIcon,
    MapPin,
    Plane,
    ShieldCheck,
    Users,
    XCircle,
} from "lucide-react";
import { tourPackages } from "../../data/apiCatalog";
import { getCrmBySlug, listCrm } from "../../lib/crmRepository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
    const packages = await listCrm("tour-packages");
    const source = packages.length ? packages : tourPackages;
    return source.map((pkg) => ({ slug: String(pkg.slug) }));
}

export default async function PackageDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pkg = (await getCrmBySlug("tour-packages", slug)) ?? tourPackages.find((item) => item.slug === slug);

    if (!pkg) {
        notFound();
    }

    const includes = toStringList(pkg.includes);
    const itinerary = toStringList(pkg.itinerary);
    const process = toStringList(pkg.process);
    const exclusions = toStringList(pkg.exclusions);

    return (
        <main className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] text-[#06113C]">
            <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                <Link href="/tour-packages" className="mb-8 inline-flex items-center gap-2 font-bold text-[#F7025B]">
                    <ArrowLeft size={18} />
                    Back to packages
                </Link>

                <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                    <div>
                        <p className="w-fit rounded-2xl border border-[#F7025B]/20 bg-white px-4 py-2 text-sm font-black text-[#F7025B] shadow-sm">
                            Package details
                        </p>
                        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                            {pkg.title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
                            {pkg.subtitle}
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: CalendarDays, label: pkg.duration, title: "Duration" },
                                { icon: Users, label: pkg.audience, title: "Best for" },
                                { icon: MapPin, label: pkg.route, title: "Route" },
                                { icon: BadgeCheck, label: pkg.price, title: "Price" },
                            ].map(({ icon: Icon, label, title }) => (
                                <div key={title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#F7025B]/10">
                                    <Icon className="text-[#F7025B]" size={24} />
                                    <p className="mt-3 text-xs font-black uppercase tracking-[1.5px] text-slate-400">{title}</p>
                                    <p className="mt-1 font-black text-[#06113C]">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-[#F7025B]/10">
                        <img src={pkg.image} alt={pkg.title} className="h-[430px] w-full rounded-2xl object-cover" />
                    </div>
                </section>

                <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <DetailCard icon={CheckCircle2} title="Package includes" subtitle="Core services covered in this package" items={includes} />
                    <div className="rounded-2xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                        <div className="flex items-center gap-4">
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#FF7A1A]">
                                <Clock size={26} />
                            </span>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[1.8px] text-white/50">Journey plan</p>
                                <h2 className="text-2xl font-black">Itinerary overview</h2>
                            </div>
                        </div>

                        <div className="mt-7 grid gap-4">
                            {itinerary.map((step, index) => (
                                <div key={step} className="flex gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#F7025B]">
                                        {index + 1}
                                    </span>
                                    <p className="font-bold leading-7 text-white/90">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mt-6 grid gap-6 lg:grid-cols-2">
                    <DetailCard icon={FileCheck2} title="Processing steps" subtitle="How we organize the package" items={process} />
                    <DetailCard icon={XCircle} title="Not included" subtitle="Items to confirm separately" items={exclusions} tone="orange" />
                </section>

                <section className="mt-10 grid gap-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10 md:grid-cols-3">
                    {[
                        { icon: Plane, title: "Travel support", text: "Flight, route and timing guidance based on the selected package." },
                        { icon: Hotel, title: "Stay planning", text: "Hotel category and location discussion before final confirmation." },
                        { icon: ShieldCheck, title: "Guided file", text: "Clear document and payment steps so the journey stays organized." },
                    ].map(({ icon: Icon, title, text }) => (
                        <div key={title} className="rounded-2xl bg-[#F8FAFC] p-6">
                            <Icon className="text-[#F7025B]" size={28} />
                            <h3 className="mt-4 text-xl font-black">{title}</h3>
                            <p className="mt-2 font-medium leading-7 text-slate-600">{text}</p>
                        </div>
                    ))}
                </section>

                <section className="mt-10 flex flex-col gap-5 rounded-2xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)] sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <MapPin className="text-[#FF7A1A]" />
                        <h2 className="mt-3 text-2xl font-black">Need this package arranged?</h2>
                        <p className="mt-2 max-w-2xl text-white/75">Talk with our team and confirm dates, price, hotel options and document steps.</p>
                    </div>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-6 py-4 font-black text-white shadow-[0_16px_35px_rgba(247,2,91,0.22)] transition hover:-translate-y-1">
                        Contact for package
                        <ArrowRight size={18} />
                    </Link>
                </section>
            </div>
        </main>
    );
}

function toStringList(value: unknown) {
    return Array.isArray(value) ? value.map(String) : [];
}

function DetailCard({
    icon: Icon,
    title,
    subtitle,
    items,
    tone = "pink",
}: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    items: string[];
    tone?: "pink" | "orange";
}) {
    const accent = tone === "pink" ? "#F7025B" : "#FF7A1A";

    return (
        <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
            <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ color: accent, backgroundColor: `${accent}14` }}>
                    <Icon size={26} />
                </span>
                <div>
                    <p className="text-sm font-bold uppercase tracking-[1.8px] text-slate-400">{subtitle}</p>
                    <h2 className="text-2xl font-black text-[#06113C]">{title}</h2>
                </div>
            </div>

            <div className="mt-7 grid gap-3">
                {items.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                        <CheckCircle2 className="mt-1 shrink-0" style={{ color: accent }} size={20} />
                        <p className="font-semibold leading-7 text-slate-700">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

import { ArrowRight, CheckCircle2, FileCheck, GraduationCap, Hotel, Plane } from "lucide-react";
import Link from "next/link";

type PackageItem = {
    slug: string;
    title: string;
    price?: string;
    category?: string;
    includes?: string[];
    featured?: boolean;
};

const icons = [GraduationCap, Plane, FileCheck, Hotel];

export default function PackagesSection({ items = [] }: { items?: PackageItem[] }) {
    const packages = items.slice(0, 4).map((item, index) => ({
        title: item.title,
        price: item.price || "Custom",
        tag: item.featured ? "Featured" : item.category || "Package",
        icon: icons[index % icons.length],
        href: `/package/${item.slug}`,
        features: (item.includes?.length ? item.includes : ["Travel support", "Document guidance", "Booking help", "Clear updates"]).slice(0, 4),
    }));

    return (
        <section id="packages" className="bg-[#fff8f1] px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-pink-600">
                            Our Packages
                        </p>
                        <h2 className="max-w-2xl text-4xl font-black leading-tight text-[#08103A] sm:text-5xl">
                            Best Travel Packages For Your Journey
                        </h2>
                    </div>

                    <p className="max-w-md text-gray-600">
                        Choose reliable, affordable and complete travel support from Azhari Travels 2.0.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {packages.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-[2rem] bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-orange-400 text-white">
                                        <Icon size={26} />
                                    </div>

                                    <span className="rounded-full bg-pink-50 px-4 py-2 text-xs font-bold text-pink-600">
                                        {item.tag}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black text-[#08103A]">{item.title}</h3>

                                <p className="mt-3 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-3xl font-black text-transparent">
                                    {item.price}
                                </p>

                                <div className="my-6 h-px bg-gray-100" />

                                <ul className="space-y-3">
                                    {item.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                                            <CheckCircle2 size={18} className="text-orange-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={item.href}
                                    className="mt-7 flex items-center justify-between rounded-full bg-[#08103A] px-5 py-4 text-sm font-bold text-white transition group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-400"
                                >
                                    Get Details
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

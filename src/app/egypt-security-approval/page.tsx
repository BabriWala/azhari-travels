import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    FileCheck2,
    Landmark,
    Plane,
    ShieldCheck,
    WalletCards,
} from "lucide-react";
import { Eyebrow, PageShell, Section, gradientButton } from "../components/Marketing/PagePrimitives";

export const metadata: Metadata = {
    title: "Egypt Security Approval Visa | Azhari Travels",
    description:
        "Dedicated Egypt security approval and visa guidance service for travellers preparing to visit Egypt from Bangladesh or another country.",
};

const eligibilityNotes = [
    "UK, USA, Schengen, Australia, New Zealand, Ireland, Canada or Japan visa/residence holders may have easier Egypt entry options.",
    "GCC residence card holders may also have route options, but airline confirmation before travel is important.",
    "Travellers without these visas may need security approval, embassy visa or a route through another eligible country.",
];

const clientTasks = [
    "Keep passport, photograph, NID/birth certificate and travel-purpose information ready.",
    "Arrange your own ticket, hotel booking, return plan and travel money where required.",
    "Confirm airline boarding rules before buying tickets, especially for on-arrival or third-country routes.",
    "Follow embassy, airline and immigration rules because final entry permission is always authority dependent.",
];

const serviceScope = [
    "Security approval or visa file eligibility review",
    "Document checklist and file preparation guidance",
    "Submission/support direction based on the traveller profile",
    "Clear next-step advice after approval or file review",
];

const notIncluded = [
    "We do not guarantee immigration entry or airline boarding.",
    "We do not provide ticket, hotel or travel-money guarantee inside this service.",
    "We do not replace embassy, airline or immigration decisions.",
    "We provide security approval and visa assistance only.",
];

export default function EgyptSecurityApprovalPage() {
    return (
        <PageShell>
            <Section className="pt-28">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                    <div>
                        <Eyebrow>Egypt visa support</Eyebrow>
                        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                            Egypt Security Approval Visa
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-600">
                            মিশর ভ্রমণের আগে অনেক ক্লায়েন্টের মূল প্রশ্ন থাকে: ভিসা লাগবে কি,
                            অন-অ্যারাইভাল ভিসা নেওয়া যাবে কি, নাকি সিকিউরিটি অ্যাপ্রুভাল দরকার?
                            এই পেজে সহজ ভাষায় বিষয়গুলো সাজানো হয়েছে, যাতে আপনি বুঝতে পারেন
                            আপনার ক্ষেত্রে কী প্রস্তুতি দরকার।
                        </p>

                        <div className="mt-8 rounded-2xl border border-[#F7025B]/15 bg-white p-6 shadow-sm">
                            <div className="flex gap-4">
                                <ShieldCheck className="mt-1 shrink-0 text-[#F7025B]" size={28} />
                                <div>
                                    <h2 className="text-xl font-black text-[#06113C]">Important service note</h2>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        Azhari Travels এই সার্ভিসে মূলত Egypt security approval / visa assistance
                                        প্রদান করে। টিকিট, হোটেল, অন-অ্যারাইভাল ভিসা বা ইমিগ্রেশন এন্ট্রি
                                        গ্যারান্টি এই সার্ভিসের অংশ নয়।
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/contact" className={gradientButton}>
                                Start security approval file
                                <ArrowRight size={18} />
                            </Link>
                            <a
                                href="https://wa.me/8801318185954?text=Assalamu%20Alaikum,%20I%20need%20Egypt%20security%20approval%20visa%20support."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-[#F7025B]/20 bg-white px-6 py-4 font-black text-[#F7025B] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF8FB]"
                            >
                                WhatsApp consultation
                            </a>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-[#F7025B]/10">
                        <img
                            src="/home/visa-services/egypt.png"
                            alt="Egypt security approval visa"
                            className="h-[420px] w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    <SummaryCard icon={<FileCheck2 />} title="Who may need it" text="Bangladeshi travellers who do not have an easy on-arrival visa route may need security approval or embassy visa guidance before travelling." />
                    <SummaryCard icon={<Plane />} title="Travel route matters" text="Flying directly from Bangladesh, flying from GCC, or flying through another country can create different airline and immigration checks." />
                    <SummaryCard icon={<WalletCards />} title="Client preparation" text="Return ticket, hotel booking, travel funds and valid documents may be checked by airline or immigration authorities." />
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
                    <InfoPanel
                        eyebrow="Eligibility summary"
                        title="Common route notes"
                        items={eligibilityNotes}
                    />
                    <InfoPanel
                        eyebrow="Client responsibility"
                        title="What you should arrange"
                        items={clientTasks}
                    />
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-2xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                        <BadgeCheck className="text-[#FF7A1A]" size={34} />
                        <h2 className="mt-4 text-3xl font-black">What Azhari Travels provides</h2>
                        <div className="mt-7 grid gap-4">
                            {serviceScope.map((item, index) => (
                                <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#F7025B]">
                                        {index + 1}
                                    </span>
                                    <p className="font-bold">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                        <div className="flex items-center gap-4">
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7025B]/10 text-[#F7025B]">
                                <Landmark size={26} />
                            </span>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[1.8px] text-slate-500">Clear boundary</p>
                                <h2 className="text-2xl font-black text-[#06113C]">What is not included</h2>
                            </div>
                        </div>

                        <div className="mt-7 grid gap-3">
                            {notIncluded.map((item) => (
                                <div key={item} className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                                    <CheckCircle2 className="mt-1 shrink-0 text-[#F7025B]" size={20} />
                                    <p className="font-semibold leading-7 text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 rounded-2xl bg-[#FFF8FB] p-7 ring-1 ring-[#F7025B]/10">
                    <h2 className="text-2xl font-black text-[#06113C]">Simple client summary</h2>
                    <p className="mt-4 max-w-5xl leading-8 text-slate-700">
                        যদি আপনার শক্তিশালী ভিসা বা রেসিডেন্স সুবিধা থাকে, অন-অ্যারাইভাল বা সহজ রুট
                        সম্ভব হতে পারে। যদি না থাকে, আপনার ক্ষেত্রে Egypt security approval বা embassy
                        visa route দরকার হতে পারে। আমরা আপনার ফাইল দেখে security approval / visa
                        support দিতে পারি; তবে টিকিট, হোটেল, এয়ারলাইন বোর্ডিং এবং ইমিগ্রেশন সিদ্ধান্ত
                        সংশ্লিষ্ট কর্তৃপক্ষের নিয়ম অনুযায়ী হবে।
                    </p>
                </div>
            </Section>
        </PageShell>
    );
}

function SummaryCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#F7025B]/10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7025B]/10 text-[#F7025B]">
                {icon}
            </div>
            <h2 className="text-xl font-black text-[#06113C]">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
        </div>
    );
}

function InfoPanel({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
    return (
        <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
            <p className="text-sm font-bold uppercase tracking-[1.8px] text-[#F7025B]">{eyebrow}</p>
            <h2 className="mt-2 text-2xl font-black text-[#06113C]">{title}</h2>
            <div className="mt-6 grid gap-3">
                {items.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#F7025B]" size={20} />
                        <p className="font-semibold leading-7 text-slate-700">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

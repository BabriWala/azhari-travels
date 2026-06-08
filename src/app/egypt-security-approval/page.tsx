import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    FileCheck2,
    Landmark,
    Plane,
    ShieldCheck,
    WalletCards,
} from "lucide-react";
import { PageShell, Section } from "../components/Marketing/PagePrimitives";
import MetaWhatsAppSalesLink from "../components/MetaWhatsAppSalesLink";

export const metadata: Metadata = {
    title: "মিশর সিকিউরিটি অ্যাপ্রুভাল ভিসা | Azhari Travels",
    description:
        "মিশর ভ্রমণের জন্য সিকিউরিটি অ্যাপ্রুভাল, ভিসা প্রস্তুতি ও ফাইল গাইডেন্স সার্ভিস।",
};

const whatsappHref =
    "https://wa.me/8801318185954?text=Assalamu%20Alaikum,%20I%20need%20Egypt%20security%20approval%20visa%20support.";

const eligibilityNotes = [
    "যাদের UK, USA, Schengen, Australia, New Zealand, Ireland, Canada বা Japan-এর ভ্যালিড ভিসা/রেসিডেন্স আছে, তাদের ক্ষেত্রে অন-অ্যারাইভাল বা সহজ এন্ট্রি রুট থাকতে পারে।",
    "GCC রেসিডেন্স কার্ড থাকলেও কিছু রুটে সুবিধা পাওয়া যায়, তবে টিকিট কাটার আগে সংশ্লিষ্ট এয়ারলাইনের সাথে নিশ্চিত হওয়া জরুরি।",
    "যাদের এসব ভিসা বা রেসিডেন্স নেই, তাদের ক্ষেত্রে মিশর সিকিউরিটি অ্যাপ্রুভাল, এম্বাসি ভিসা অথবা অন্য দেশ হয়ে ভ্রমণের রুট বিবেচনা করতে হতে পারে।",
];

const clientTasks = [
    "ভ্যালিড পাসপোর্ট, ছবি, NID/জন্ম নিবন্ধন এবং ভ্রমণের উদ্দেশ্য প্রস্তুত রাখতে হবে।",
    "টিকিট, হোটেল বুকিং, রিটার্ন প্ল্যান ও প্রয়োজনীয় ট্রাভেল মানি ক্লায়েন্টকে নিজ দায়িত্বে প্রস্তুত রাখতে হবে।",
    "অন-অ্যারাইভাল বা তৃতীয় দেশ হয়ে ভ্রমণের ক্ষেত্রে টিকিট কাটার আগে এয়ারলাইনের বোর্ডিং নিয়ম নিশ্চিত করতে হবে।",
    "এম্বাসি, এয়ারলাইন ও ইমিগ্রেশনের সিদ্ধান্তই চূড়ান্ত; তাই সব ডকুমেন্ট সঠিকভাবে প্রস্তুত রাখা জরুরি।",
];

const serviceScope = [
    "ফাইল দেখে সিকিউরিটি অ্যাপ্রুভাল বা ভিসা রুটের প্রাথমিক যোগ্যতা যাচাই",
    "ডকুমেন্ট চেকলিস্ট ও ফাইল প্রস্তুতির গাইডলাইন",
    "ক্লায়েন্টের প্রোফাইল অনুযায়ী সিকিউরিটি অ্যাপ্রুভাল/ভিসা সহায়তা",
    "ফাইল রিভিউয়ের পর পরবর্তী করণীয় সম্পর্কে পরিষ্কার নির্দেশনা",
];

const notIncluded = [
    "ইমিগ্রেশন এন্ট্রি বা এয়ারলাইন বোর্ডিং গ্যারান্টি দেওয়া হয় না।",
    "এই সার্ভিসে টিকিট, হোটেল বা ট্রাভেল মানি অন্তর্ভুক্ত নয়।",
    "এম্বাসি, এয়ারলাইন বা ইমিগ্রেশন কর্তৃপক্ষের সিদ্ধান্ত আমরা পরিবর্তন করতে পারি না।",
    "আমরা শুধুমাত্র সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল সহায়তা প্রদান করি।",
];

export default function EgyptSecurityApprovalPage() {
    return (
        <PageShell>
            <div className="hind-siliguri-regular">
                <Section className="pt-28">
                    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                        <div>
                            <span className="inline-flex rounded-full bg-[#FFF8FB] px-5 py-2 text-sm font-bold text-[#F7025B] ring-1 ring-[#F7025B]/10">
                                মিশর ভিসা সহায়তা
                            </span>
                            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                                মিশর সিকিউরিটি অ্যাপ্রুভাল ভিসা
                            </h1>
                            <p className="mt-5 max-w-3xl text-xl font-bold leading-9 text-[#06113C]">
                                যাদের শক্তিশালী বিদেশি ভিসা/রেসিডেন্স নেই এবং বাংলাদেশ থেকে বা নির্দিষ্ট রুটে মিশর যেতে চান,
                                তাদের ক্ষেত্রে ভ্রমণের আগে সিকিউরিটি অ্যাপ্রুভাল বা এম্বাসি ভিসা রুট প্রয়োজন হতে পারে।
                            </p>
                            <p className="mt-4 max-w-3xl text-lg font-medium leading-9 text-slate-600">
                                এই অ্যাপ্রুভাল সাধারণত পাসপোর্ট, পরিচয়পত্র, ছবি, ভ্রমণের উদ্দেশ্য ও প্রোফাইল যাচাই করে
                                প্রসেস করা হয়। কখন লাগবে, কীভাবে প্রস্তুতি নিতে হবে এবং কোন বিষয়গুলো ক্লায়েন্টের নিজ দায়িত্বে
                                থাকবে, সবকিছু নিচে সহজভাবে দেওয়া আছে।
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                <HeroFact title="কখন দরকার হতে পারে" text="অন-অ্যারাইভাল সুবিধা না থাকলে, সরাসরি বাংলাদেশ থেকে গেলে, অথবা এয়ারলাইন বোর্ডিংয়ের আগে ভিসা/অ্যাপ্রুভাল চাওয়া হলে।" />
                                <HeroFact title="কীভাবে নেওয়া হয়" text="প্রথমে ফাইল যাচাই, এরপর ডকুমেন্ট প্রস্তুতি, তারপর সিকিউরিটি অ্যাপ্রুভাল/ভিসা সহায়তার প্রসেস শুরু করা হয়।" />
                            </div>

                            <div className="mt-8 rounded-2xl border border-[#F7025B]/15 bg-white p-6 shadow-sm">
                                <div className="flex gap-4">
                                    <AlertTriangle className="mt-1 shrink-0 text-[#F7025B]" size={28} />
                                    <div>
                                        <h2 className="text-xl font-black text-[#06113C]">গুরুত্বপূর্ণ সার্ভিস নোট</h2>
                                        <p className="mt-2 leading-8 text-slate-600">
                                            Azhari Travels এই পেজে শুধুমাত্র মিশর সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল সহায়তা
                                            প্রদান করে। টিকিট, হোটেল, অন-অ্যারাইভাল ভিসা, এয়ারলাইন বোর্ডিং বা ইমিগ্রেশন
                                            এন্ট্রি গ্যারান্টি এই সার্ভিসের অংশ নয়।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <TrackedWhatsAppLink sectionName="Egypt Security Hero Start">
                                    ফাইল শুরু করতে WhatsApp করুন
                                    <ArrowRight size={18} />
                                </TrackedWhatsAppLink>
                                <TrackedWhatsAppLink sectionName="Egypt Security Hero Consultation" variant="outline">
                                    WhatsApp কনসালটেশন
                                </TrackedWhatsAppLink>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-[#F7025B]/10">
                            <img
                                src="/home/visa-services/egypt.png"
                                alt="মিশর সিকিউরিটি অ্যাপ্রুভাল ভিসা"
                                className="h-[420px] w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        <SummaryCard icon={<FileCheck2 />} title="কারা জানতে চান" text="বাংলাদেশি ভ্রমণকারী, স্টুডেন্ট বা ট্যুরিস্ট যারা মিশরে যাওয়ার আগে ভিসা/অ্যাপ্রুভাল রুট পরিষ্কার করতে চান।" />
                        <SummaryCard icon={<Plane />} title="রুট গুরুত্বপূর্ণ" text="বাংলাদেশ থেকে সরাসরি, GCC থেকে, অথবা অন্য দেশ হয়ে গেলে এয়ারলাইন ও ইমিগ্রেশন চেক আলাদা হতে পারে।" />
                        <SummaryCard icon={<WalletCards />} title="নিজস্ব প্রস্তুতি" text="রিটার্ন টিকিট, হোটেল বুকিং, ট্রাভেল মানি ও প্রয়োজনীয় ডকুমেন্ট ক্লায়েন্টকে প্রস্তুত রাখতে হবে।" />
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
                        <InfoPanel
                            eyebrow="যোগ্যতার সারাংশ"
                            title="সাধারণ রুট নোট"
                            items={eligibilityNotes}
                        />
                        <InfoPanel
                            eyebrow="ক্লায়েন্টের দায়িত্ব"
                            title="আপনাকে যা প্রস্তুত রাখতে হবে"
                            items={clientTasks}
                        />
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="rounded-2xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                            <BadgeCheck className="text-[#FF7A1A]" size={34} />
                            <h2 className="mt-4 text-3xl font-black">Azhari Travels যা প্রদান করে</h2>
                            <div className="mt-7 grid gap-4">
                                {serviceScope.map((item, index) => (
                                    <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#F7025B]">
                                            {index + 1}
                                        </span>
                                        <p className="font-bold leading-7">{item}</p>
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
                                    <p className="text-sm font-bold uppercase tracking-[1.8px] text-slate-500">সার্ভিস সীমা</p>
                                    <h2 className="text-2xl font-black text-[#06113C]">যা অন্তর্ভুক্ত নয়</h2>
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
                        <h2 className="text-2xl font-black text-[#06113C]">ক্লায়েন্টের জন্য সহজ সারাংশ</h2>
                        <p className="mt-4 max-w-5xl leading-8 text-slate-700">
                            আপনার যদি শক্তিশালী বিদেশি ভিসা বা রেসিডেন্স থাকে, কিছু ক্ষেত্রে অন-অ্যারাইভাল বা সহজ রুট
                            সম্ভব হতে পারে। যদি না থাকে, তাহলে আপনার ক্ষেত্রে মিশর সিকিউরিটি অ্যাপ্রুভাল বা এম্বাসি
                            ভিসা রুট দরকার হতে পারে। আমরা ফাইল দেখে সিকিউরিটি অ্যাপ্রুভাল/ভিসা সহায়তা দিতে পারি;
                            তবে টিকিট, হোটেল, এয়ারলাইন বোর্ডিং এবং ইমিগ্রেশন সিদ্ধান্ত সংশ্লিষ্ট কর্তৃপক্ষের নিয়ম অনুযায়ী হবে।
                        </p>
                        <div className="mt-6">
                            <TrackedWhatsAppLink sectionName="Egypt Security Bottom CTA">
                                WhatsApp-এ ফাইল যাচাই করুন
                                <ArrowRight size={18} />
                            </TrackedWhatsAppLink>
                        </div>
                    </div>
                </Section>
            </div>
        </PageShell>
    );
}

function TrackedWhatsAppLink({
    children,
    sectionName,
    variant = "solid",
}: {
    children: ReactNode;
    sectionName: string;
    variant?: "solid" | "outline";
}) {
    return (
        <MetaWhatsAppSalesLink
            href={whatsappHref}
            sectionName={sectionName}
            contentName="মিশর সিকিউরিটি অ্যাপ্রুভাল ভিসা"
            contentCategory="Egypt Security Approval"
            value={80}
            currency="USD"
            className={
                variant === "solid"
                    ? "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-6 py-4 font-black text-white shadow-[0_16px_35px_rgba(247,2,91,0.28)] transition hover:-translate-y-0.5"
                    : "inline-flex items-center gap-2 rounded-xl border border-[#F7025B]/20 bg-white px-6 py-4 font-black text-[#F7025B] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF8FB]"
            }
        >
            {children}
        </MetaWhatsAppSalesLink>
    );
}

function HeroFact({ title, text }: { title: string; text: string }) {
    return (
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#F7025B]/10">
            <ShieldCheck className="text-[#F7025B]" size={24} />
            <h2 className="mt-3 text-lg font-black text-[#06113C]">{title}</h2>
            <p className="mt-2 leading-7 text-slate-600">{text}</p>
        </div>
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

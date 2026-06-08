import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    Banknote,
    BriefcaseBusiness,
    CheckCircle2,
    Clock3,
    FileCheck2,
    Plane,
    ShieldCheck,
    WalletCards,
} from "lucide-react";
import { PageShell, Section } from "../components/Marketing/PagePrimitives";
import MetaWhatsAppSalesLink from "../components/MetaWhatsAppSalesLink";

export const metadata: Metadata = {
    title: "মিশর সিকিউরিটি অ্যাপ্রুভাল ও অন-অ্যারাইভাল ভিসা | Azhari Travels",
    description:
        "মিশর অন-অ্যারাইভাল ভিসার যোগ্যতা, সিকিউরিটি অ্যাপ্রুভাল প্রয়োজনীয়তা এবং Azhari Travels-এর ভিসা ফাইল সহায়তা।",
};

const whatsappHref =
    "https://wa.me/8801318185954?text=Assalamu%20Alaikum,%20I%20need%20Egypt%20security%20approval%20visa%20support.";

const eligibleCountries = ["USA", "Schengen", "Australia", "United Kingdom", "Japan", "Canada", "New Zealand"];

const embassyConditions = [
    {
        icon: <FileCheck2 size={22} />,
        title: "ভ্যালিড ও ব্যবহৃত ভিসা",
        text: "বাংলাদেশি পাসপোর্টধারীর উপরোক্ত দেশগুলোর যেকোনো একটি দেশের কমপক্ষে ৬ মাস মেয়াদ থাকা valid and used visa থাকতে হবে।",
    },
    {
        icon: <Plane size={22} />,
        title: "রিটার্ন টিকিট",
        text: "মিশর ভ্রমণের সময় কনফার্মড রিটার্ন টিকিট সাথে রাখতে হবে।",
    },
    {
        icon: <WalletCards size={22} />,
        title: "৫,০০০ USD ব্যাংক ব্যালেন্স",
        text: "ভিসার যোগ্যতার জন্য ন্যূনতম ৫,০০০ USD ব্যাংক ব্যালেন্স দেখাতে বলা হয়েছে।",
    },
    {
        icon: <Banknote size={22} />,
        title: "২৫ USD অন-অ্যারাইভাল ফি",
        text: "কায়রো ইন্টারন্যাশনাল এয়ারপোর্টে ইন্সপেকশনের পর অন-অ্যারাইভাল ভিসার জন্য ২৫ USD ফি দিতে হবে।",
    },
];

const securityApprovalSteps = [
    "আপনার পাসপোর্ট, ট্রাভেল প্ল্যান ও প্রোফাইল দেখে প্রাথমিকভাবে কোন রুট আপনার জন্য বাস্তবসম্মত তা যাচাই করা হয়।",
    "অন-অ্যারাইভাল ভিসার যোগ্যতা না থাকলে সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল প্রসেসের জন্য প্রয়োজনীয় ডকুমেন্ট সাজানো হয়।",
    "ফাইল প্রসেসের পর ক্লায়েন্টকে বোর্ডিং ও কায়রো এয়ারপোর্টে কীভাবে ফাইল/অ্যাপ্রুভাল দেখাতে হবে সে বিষয়ে গাইড করা হয়।",
];

const clientResponsibilities = [
    "পাসপোর্টের মেয়াদ, টিকিট, হোটেল বুকিং, ট্রাভেল মানি ও ব্যক্তিগত ডকুমেন্ট ক্লায়েন্টকে প্রস্তুত রাখতে হবে।",
    "এয়ারলাইনের বোর্ডিং নিয়ম টিকিট কাটার আগে নিশ্চিত করা জরুরি, বিশেষ করে তৃতীয় দেশ হয়ে মিশর গেলে।",
    "এম্বাসি, এয়ারলাইন ও ইমিগ্রেশনের সিদ্ধান্তই চূড়ান্ত; তাই কোনো সার্ভিসই এন্ট্রি গ্যারান্টি নয়।",
];

export default function EgyptSecurityApprovalPage() {
    return (
        <PageShell>
            <div className="hind-siliguri-regular bg-[#F8FAFC]">
                <Section className="pt-28">
                    <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                        <div>
                            <span className="inline-flex rounded-full bg-[#FFF8FB] px-5 py-2 text-sm font-bold text-[#F7025B] ring-1 ring-[#F7025B]/10">
                                মিশর ভিসা ও সিকিউরিটি অ্যাপ্রুভাল
                            </span>

                            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                                মিশর যেতে অন-অ্যারাইভাল ভিসা লাগবে, নাকি সিকিউরিটি অ্যাপ্রুভাল?
                            </h1>

                            <p className="mt-5 max-w-3xl text-xl font-bold leading-9 text-[#06113C]">
                                এম্বাসির নোটিশ অনুযায়ী, যাদের নির্দিষ্ট দেশের valid and used visa আছে তারা কায়রো এয়ারপোর্টে
                                অন-অ্যারাইভাল ভিসার সুযোগ পেতে পারেন। যাদের এই যোগ্যতা নেই, তাদের ক্ষেত্রে আগে থেকেই
                                সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল প্রস্তুত করা দরকার হতে পারে।
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-3">
                                <HeroStat label="প্রযোজ্য হলে" value="Visa on Arrival" />
                                <HeroStat label="যোগ্যতা না থাকলে" value="Security Approval" />
                                <HeroStat label="ফাইল টাইম" value="কেসভেদে নির্ভরশীল" />
                            </div>

                            <div className="mt-8 rounded-2xl border border-[#F7025B]/15 bg-white p-6 shadow-sm">
                                <div className="flex gap-4">
                                    <AlertTriangle className="mt-1 shrink-0 text-[#F7025B]" size={28} />
                                    <div>
                                        <h2 className="text-xl font-black text-[#06113C]">Azhari Travels কী প্রদান করে?</h2>
                                        <p className="mt-2 leading-8 text-slate-600">
                                            আমরা মিশর সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল সহায়তা, ডকুমেন্ট চেক এবং রুট গাইডেন্স
                                            প্রদান করি। টিকিট, হোটেল, ব্যাংক ব্যালেন্স, এয়ারলাইন বোর্ডিং বা ইমিগ্রেশন এন্ট্রি
                                            গ্যারান্টি এই সার্ভিসের অংশ নয়।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <TrackedWhatsAppLink sectionName="Egypt Security Hero Start">
                                    WhatsApp-এ ফাইল যাচাই করুন
                                    <ArrowRight size={18} />
                                </TrackedWhatsAppLink>
                                <TrackedWhatsAppLink sectionName="Egypt Security Hero Price" variant="outline">
                                    আপডেটেড খরচ জানতে চান
                                </TrackedWhatsAppLink>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-[#F7025B]/10">
                            <div className="overflow-hidden rounded-2xl bg-[#FFF4CE]">
                                <img
                                    src="/egypt-security-approval/egypt-embassy-visa-arrival-notice.jpg"
                                    alt="মিশর এম্বাসির অন-অ্যারাইভাল ভিসা নোটিশ"
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <p className="mt-4 rounded-2xl bg-[#F8FAFC] p-4 text-sm font-semibold leading-7 text-slate-600">
                                উপরের নোটিশটি এম্বাসির অন-অ্যারাইভাল ভিসার যোগ্যতার সারাংশ হিসেবে ব্যবহার করা হয়েছে।
                                ভ্রমণের আগে সর্বশেষ নিয়ম যাচাই করা জরুরি।
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#F7025B]/10 lg:p-8">
                        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                            <div>
                                <span className="inline-flex rounded-full bg-[#FFF8FB] px-4 py-2 text-sm font-bold text-[#F7025B]">
                                    এম্বাসি নোটিশ অনুযায়ী
                                </span>
                                <h2 className="mt-4 text-3xl font-black leading-tight text-[#06113C]">
                                    কারা মিশরে অন-অ্যারাইভাল ভিসার সুযোগ পেতে পারেন?
                                </h2>
                                <p className="mt-4 leading-8 text-slate-600">
                                    বাংলাদেশি পাসপোর্টধারীদের জন্য অন-অ্যারাইভাল ভিসা সাধারণ ভিসা-মুক্ত এন্ট্রি নয়।
                                    নির্দিষ্ট শর্ত পূরণ করলে কায়রো ইন্টারন্যাশনাল এয়ারপোর্টে এই সুবিধা পাওয়া যেতে পারে।
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {embassyConditions.map((item) => (
                                    <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl bg-[#06113C] p-6 text-white">
                            <h3 className="text-xl font-black">যোগ্য দেশগুলোর তালিকা</h3>
                            <div className="mt-4 flex flex-wrap gap-3">
                                {eligibleCountries.map((country) => (
                                    <span key={country} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/10">
                                        {country}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
                        <div className="rounded-3xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                            <ShieldCheck className="text-[#FF7A1A]" size={36} />
                            <h2 className="mt-4 text-3xl font-black">সিকিউরিটি অ্যাপ্রুভাল কখন প্রয়োজন?</h2>
                            <p className="mt-4 leading-8 text-white/75">
                                যাদের উপরের দেশগুলোর valid and used visa নেই, অথবা যাদের রুট/প্রোফাইল অন-অ্যারাইভাল
                                ভিসার জন্য পরিষ্কার নয়, তাদের ক্ষেত্রে ভ্রমণের আগে সিকিউরিটি অ্যাপ্রুভাল বা এম্বাসি ভিসা
                                রুট যাচাই করা বেশি নিরাপদ।
                            </p>
                            <div className="mt-7 grid gap-4">
                                {securityApprovalSteps.map((step, index) => (
                                    <div key={step} className="flex gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#F7025B]">
                                            {index + 1}
                                        </span>
                                        <p className="font-bold leading-7">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                            <BriefcaseBusiness className="text-[#F7025B]" size={36} />
                            <h2 className="mt-4 text-3xl font-black text-[#06113C]">Gulf Area resident হলে কী শর্ত?</h2>
                            <p className="mt-4 leading-8 text-slate-600">
                                এম্বাসির নোটিশ অনুযায়ী, Gulf Area-তে থাকা বাংলাদেশি পাসপোর্টধারীরা কায়রো এয়ারপোর্টে
                                অন-অ্যারাইভাল ভিসার সুবিধা পেতে পারেন, যদি তাদের অন্তত ৬ মাস মেয়াদ থাকা resident card
                                থাকে এবং current employment “White Collar Job” হিসেবে থাকে। পেশাগত ডকুমেন্ট ইন্সপেকশন
                                সাপেক্ষে যাচাই হতে পারে।
                            </p>
                            <div className="mt-7 grid gap-3">
                                {clientResponsibilities.map((item) => (
                                    <div key={item} className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                                        <CheckCircle2 className="mt-1 shrink-0 text-[#F7025B]" size={20} />
                                        <p className="font-semibold leading-7 text-slate-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10 lg:p-8">
                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <BadgeCheck className="text-[#F7025B]" size={36} />
                                <h2 className="mt-4 text-3xl font-black text-[#06113C]">ক্লায়েন্টের জন্য সহজ সিদ্ধান্ত</h2>
                            </div>
                            <p className="leading-8 text-slate-700">
                                আপনার যদি এম্বাসি-নির্ধারিত দেশের valid and used visa বা Gulf resident card থাকে, তাহলে
                                অন-অ্যারাইভাল ভিসা রুট যাচাই করা যায়। যদি না থাকে, তাহলে আপনার ফাইল দেখে সিকিউরিটি
                                অ্যাপ্রুভাল/ভিসা সহায়তা প্রয়োজন হতে পারে। Azhari Travels আপনার ফাইল রিভিউ করে বাস্তবসম্মত
                                রুট, ডকুমেন্ট ও পরবর্তী ধাপ বুঝিয়ে দেবে।
                            </p>
                        </div>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <TrackedWhatsAppLink sectionName="Egypt Security Bottom File Check">
                                এখনই WhatsApp-এ ফাইল পাঠান
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

function HeroStat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#F7025B]/10">
            <Clock3 className="text-[#F7025B]" size={22} />
            <p className="mt-3 text-sm font-bold text-slate-500">{label}</p>
            <p className="mt-1 text-lg font-black text-[#06113C]">{value}</p>
        </div>
    );
}

function InfoCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
    return (
        <div className="rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200/70">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7025B]/10 text-[#F7025B]">
                {icon}
            </div>
            <h3 className="text-lg font-black text-[#06113C]">{title}</h3>
            <p className="mt-2 leading-7 text-slate-600">{text}</p>
        </div>
    );
}

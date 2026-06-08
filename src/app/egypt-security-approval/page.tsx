import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    FileCheck2,
    Plane,
    ShieldCheck,
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

const quickPoints = [
    {
        title: "কোন দেশ থেকে যাওয়া যাবে?",
        text: "বাংলাদেশ এয়ারপোর্ট ব্যতীত বিশ্বের যেকোন দেশ থেকে সিকিউরিটি এপ্রুভাল নিয়ে মিশর ভ্রমণ করতে পারবেন।",
    },
    {
        title: "প্রয়োজনীয় ডকুমেন্টস",
        text: "পাসপোর্টের স্ক্যান কপি এবং কায়রো যাওয়ার কনফার্মড টিকিট প্রয়োজন হবে।",
    },
];

const visaTypes = [
    {
        title: "ই-ভিসা",
        text: "মিশরের ই-ভিসা বাংলাদেশীদের জন্য বর্তমান সময়ে সম্পূর্ণরূপে বন্ধ রয়েছে।",
    },
    {
        title: "স্টিকার ভিসা",
        text: "মিশরের স্টিকার ভিসা আপনি বাংলাদেশে অবস্থান করে মিশর এম্বাসি থেকে নিতে পারবেন। তবে এই প্রক্রিয়াটি বেশ সময়সাপেক্ষ এবং জটিল হতে পারে, এবং সবসময় ভিসা সাক্সেস নাও হতে পারে।",
    },
    {
        title: "ভিসা অন অ্যারাইভাল",
        text: "যাদের UK, USA, Schengen, Australia, New Zealand, Ireland, Canada বা Japan-এর ভ্যালিড ভিসা/রেসিডেন্স রয়েছে তারা শুধুমাত্র ভিসা অন অ্যারাইভাল পেতে পারেন। এই ক্ষেত্রে কনফার্মড রিটার্ন টিকিট, হোটেল বুকিং এবং পর্যাপ্ত ক্যাশ থাকা দরকার। সেক্ষেত্রে সিকিউরিটি অ্যাপ্রুভাল নেওয়ার প্রয়োজন হবে না।",
    },
    {
        title: "সিকিউরিটি এপ্রুভাল ও ওকে-টু-বোর্ড",
        text: "যাদের উপরের ভিসা/রেসিডেন্স নেই, তাদের ক্ষেত্রে মিশর সিকিউরিটি অ্যাপ্রুভাল ও ওকে টু বোর্ড নিয়ে মিশর ভ্রমণ করা যাবে। উদাহরণস্বরূপ, সৌদি আরবের বোর্ডিং কাউন্টারে ওকে টু বোর্ড দেখিয়ে বোর্ডিং পাস নিতে হবে। এরপর কায়রো এয়ারপোর্টে পৌঁছানোর পর ইমিগ্রেশন কর্তৃপক্ষের কাছে সিকিউরিটি অ্যাপ্রুভাল দেখিয়ে এন্ট্রি নিতে হবে।",
    },
];

const serviceNotes = [
    "কায়রো এয়ারপোর্টে পৌঁছানোর পর ইমিগ্রেশন কর্তৃপক্ষের কাছে সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল দেখিয়ে এন্ট্রি নিতে হবে।",
    "৩০ ডলার ফি দিয়ে অন-অ্যারাইভাল ভিসা নেওয়ার সুযোগ থাকতে পারে।",
    "সিকিউরিটি এপ্রুভাল সাধারণত সর্বোচ্চ ৫ দিনের মধ্যে পাওয়া যেতে পারে।",
    "Azhari Travels এই পেজে শুধুমাত্র মিশর সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল সহায়তা প্রদান করে।",
];

export default function EgyptSecurityApprovalPage() {
    return (
        <PageShell>
            <div className="hind-siliguri-regular bg-[#F8FAFC]">
                <Section className="pt-28">
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="inline-flex rounded-full bg-[#FFF8FB] px-5 py-2 text-sm font-bold text-[#F7025B] ring-1 ring-[#F7025B]/10">
                            মিশর ভিসা সহায়তা
                        </span>
                        <h1 className="mt-5 text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                            মিশর সিকিউরিটি অ্যাপ্রুভাল ভিসা
                        </h1>
                        <p className="mx-auto mt-5 max-w-4xl text-xl font-bold leading-9 text-[#06113C]">
                            যাদের UK, USA, Schengen, Australia, New Zealand, Ireland, Canada বা Japan-এর ভ্যালিড
                            ভিসা/রেসিডেন্স নেই, তারা চাইলে সৌদি আরব, চায়না, কাতার অথবা অন্য যেকোন দেশ থেকে
                            সিকিউরিটি এপ্রুভাল নিয়ে মিশর ভ্রমণ করতে পারবেন।
                        </p>
                        <p className="mx-auto mt-4 max-w-4xl text-lg font-medium leading-9 text-slate-600">
                            এই সিকিউরিটি অ্যাপ্রুভালের জন্য শুধুমাত্র কায়রো যাওয়ার কনফার্মড টিকিট এবং পাসপোর্টের
                            স্ক্যান কপি প্রয়োজন হবে।
                        </p>

                        <div className="mt-8 flex justify-center">
                            <TrackedWhatsAppLink sectionName="Egypt Security Hero CTA">
                                সিকিউরিটি এপ্রুভালের আপডেটেড প্রাইস জানতে WhatsApp করুন
                                <ArrowRight size={18} />
                            </TrackedWhatsAppLink>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {quickPoints.map((item) => (
                            <div key={item.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                                <ShieldCheck className="text-[#F7025B]" size={30} />
                                <h2 className="mt-4 text-2xl font-black text-[#06113C]">{item.title}</h2>
                                <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#F7025B]/10 lg:p-8">
                        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                            <div>
                                <BadgeCheck className="text-[#F7025B]" size={36} />
                                <h2 className="mt-4 text-3xl font-black leading-tight text-[#06113C]">
                                    মিশরের ভিসার ধরন এবং কোন ক্ষেত্রে কোনটি প্রযোজ্য
                                </h2>
                                <p className="mt-4 leading-8 text-slate-600">
                                    নিচের অংশে বর্তমান কনটেন্টকে সহজভাবে সাজানো হয়েছে, যাতে ক্লায়েন্ট দ্রুত বুঝতে পারে
                                    কোন ক্ষেত্রে সিকিউরিটি এপ্রুভাল দরকার হতে পারে।
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {visaTypes.map((item, index) => (
                                    <div key={item.title} className="rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200/70">
                                        <div className="flex gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7025B]/10 text-sm font-black text-[#F7025B]">
                                                {index + 1}
                                            </span>
                                            <div>
                                                <h3 className="text-xl font-black text-[#06113C]">{item.title}</h3>
                                                <p className="mt-2 leading-8 text-slate-600">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
                        <div className="rounded-3xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                            <FileCheck2 className="text-[#FF7A1A]" size={36} />
                            <h2 className="mt-4 text-3xl font-black">সিকিউরিটি এপ্রুভালের প্রক্রিয়া</h2>
                            <p className="mt-4 leading-8 text-white/75">
                                পাসপোর্টের স্ক্যান কপি এবং কায়রো যাওয়ার কনফার্মড টিকিট দিয়ে ফাইল প্রস্তুত করা হয়।
                                এরপর সিকিউরিটি এপ্রুভাল/ওকে টু বোর্ড নিয়ে ভ্রমণের রুট অনুযায়ী বোর্ডিং ও কায়রো এন্ট্রির
                                নির্দেশনা দেওয়া হয়।
                            </p>
                            <div className="mt-7 grid gap-4">
                                {serviceNotes.map((item) => (
                                    <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                                        <CheckCircle2 className="mt-1 shrink-0 text-[#FF7A1A]" size={20} />
                                        <p className="font-bold leading-7">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                            <AlertTriangle className="text-[#F7025B]" size={36} />
                            <h2 className="mt-4 text-3xl font-black text-[#06113C]">গুরুত্বপূর্ণ সার্ভিস নোট</h2>
                            <p className="mt-4 leading-8 text-slate-600">
                                Azhari Travels এই সার্ভিসে টিকিট, হোটেল, এয়ারলাইন বোর্ডিং বা ইমিগ্রেশন এন্ট্রি
                                গ্যারান্টি প্রদান করে না। আমরা শুধুমাত্র সিকিউরিটি অ্যাপ্রুভাল/ভিসা ফাইল সহায়তা,
                                ডকুমেন্ট চেক এবং প্রয়োজনীয় গাইডেন্স প্রদান করি।
                            </p>
                            <div className="mt-7">
                                <TrackedWhatsAppLink sectionName="Egypt Security Note CTA" variant="outline">
                                    যোগাযোগ করতে ক্লিক করুন
                                </TrackedWhatsAppLink>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 rounded-3xl bg-[#FFF8FB] p-7 text-center ring-1 ring-[#F7025B]/10">
                        <Plane className="mx-auto text-[#F7025B]" size={36} />
                        <h2 className="mt-4 text-3xl font-black text-[#06113C]">ফাইল যাচাই করতে চান?</h2>
                        <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-700">
                            আপনার পাসপোর্ট এবং কায়রো যাওয়ার পরিকল্পনা অনুযায়ী সিকিউরিটি এপ্রুভাল রুট সম্ভব কিনা,
                            WhatsApp-এ নক করলে আমরা প্রাথমিকভাবে গাইড করতে পারব।
                        </p>
                        <div className="mt-7 flex justify-center">
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

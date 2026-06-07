import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Eyebrow, PageShell, Section } from "../components/Marketing/PagePrimitives";

const privacyItems = [
    {
        title: "Information we collect",
        text: "We may collect contact details, travel preferences and document information when you request visa, tour, Umrah or student consultancy support.",
    },
    {
        title: "How we use information",
        text: "Information is used to review files, prepare applications, communicate updates and provide the service requested by the client.",
    },
    {
        title: "Document handling",
        text: "Client documents are handled for service-related work only and are not shared beyond the relevant processing or support requirement.",
    },
    {
        title: "Contact and updates",
        text: "We may contact clients by phone, email or WhatsApp regarding submitted inquiries, file progress and service follow-up.",
    },
];

export default function PrivacyPolicyPage() {
    return (
        <PageShell>
            <Section className="pt-28">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div>
                        <Eyebrow>Privacy Policy</Eyebrow>
                        <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                            Your information stays connected to your travel service.
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
                            This page explains how Azhari Travels & Tours handles client information for inquiries, applications and travel support.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-[#06113C] p-8 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                        <ShieldCheck className="text-[#FF7A1A]" size={40} />
                        <h2 className="mt-5 text-3xl font-black">Simple, service-focused handling</h2>
                        <p className="mt-4 text-white/75">
                            We use the information you provide to deliver the travel, visa or consultancy service you requested.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {privacyItems.map((item) => (
                        <div key={item.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                            <LockKeyhole className="text-[#F7025B]" />
                            <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
                            <p className="mt-3 font-medium leading-8 text-slate-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                    <Mail className="text-[#F7025B]" />
                    <h2 className="mt-4 text-2xl font-black">Questions about privacy?</h2>
                    <p className="mt-3 max-w-3xl font-medium leading-8 text-slate-600">
                        Contact us if you want to update information shared with Azhari Travels or ask how your file information is being used.
                    </p>
                    <Link href="/contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#06113C] px-6 py-3 font-bold text-white shadow-[6px_6px_0_#F7025B] transition hover:-translate-y-1">
                        Contact us
                    </Link>
                </div>
            </Section>
        </PageShell>
    );
}

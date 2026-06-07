import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, FileText, WalletCards } from "lucide-react";
import { notFound } from "next/navigation";
import { Eyebrow, PageShell, Section, gradientButton } from "../../components/Marketing/PagePrimitives";
import { visaRequirements } from "../../data/visaRequirements";
import { getCrmBySlug, listCrm } from "../../lib/crmRepository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
    const visas = await listCrm("visa-services");
    const source = visas.length ? visas : visaRequirements;
    return source.map((item) => ({ slug: String(item.slug) }));
}

export default async function VisaRequirementDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const visa = (await getCrmBySlug("visa-services", slug)) ?? visaRequirements.find((item) => item.slug === slug);

    if (!visa) {
        notFound();
    }

    const Icon = "icon" in visa ? visa.icon : FileText;
    const requirements = toStringList(visa.requirements);
    const process = toStringList(visa.process);

    return (
        <PageShell>
            <Section className="pt-28">
                <Link href="/visa-services" className="mb-8 inline-flex items-center gap-2 font-bold text-[#F7025B]">
                    <ArrowLeft size={18} />
                    Back to visa services
                </Link>

                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <Eyebrow>Visa requirement details</Eyebrow>
                        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-[#06113C] sm:text-5xl">
                            {visa.title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
                            {visa.subtitle} Review the core documents and process before starting your application.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#F7025B]/10">
                                <Clock className="text-[#F7025B]" />
                                <p className="mt-3 text-sm font-bold uppercase tracking-[1.5px] text-slate-500">Timeline</p>
                                <p className="mt-1 text-lg font-black text-[#06113C]">{visa.duration}</p>
                            </div>
                            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#F7025B]/10">
                                <WalletCards className="text-[#F7025B]" />
                                <p className="mt-3 text-sm font-bold uppercase tracking-[1.5px] text-slate-500">Fee note</p>
                                <p className="mt-1 text-lg font-black text-[#06113C]">{visa.feeNote}</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-[#F7025B]/10">
                        <img src={visa.image} alt={visa.title} className="h-[420px] w-full rounded-2xl object-cover" />
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                        <div className="flex items-center gap-4">
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7025B]/10 text-[#F7025B]">
                                <Icon size={26} />
                            </span>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[1.8px] text-slate-500">Required documents</p>
                                <h2 className="text-2xl font-black text-[#06113C]">Checklist</h2>
                            </div>
                        </div>

                        <div className="mt-7 grid gap-3">
                            {requirements.map((item) => (
                                <div key={item} className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                                    <CheckCircle2 className="mt-1 shrink-0 text-[#F7025B]" size={20} />
                                    <p className="font-semibold leading-7 text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                        <FileText className="text-[#FF7A1A]" size={34} />
                        <h2 className="mt-4 text-3xl font-black">How we handle the file</h2>
                        <div className="mt-7 grid gap-4">
                            {process.map((step, index) => (
                                <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#F7025B]">
                                        {index + 1}
                                    </span>
                                    <p className="font-bold">{step}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className={`mt-8 ${gradientButton}`}>
                            Start this application
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </Section>
        </PageShell>
    );
}

function toStringList(value: unknown) {
    return Array.isArray(value) ? value.map(String) : [];
}

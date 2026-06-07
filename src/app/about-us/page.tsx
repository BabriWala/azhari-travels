import { BadgeCheck } from "lucide-react";
import { aboutServices, aboutStats, aboutValues } from "../data/marketingPages";
import { Eyebrow, IconBadge, InfoCard, PageShell, Section, imageClass } from "../components/Marketing/PagePrimitives";

export default function AboutUsPage() {
    return (
        <PageShell>
            <Section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col justify-center">
                    <Eyebrow>About Azhari Travels</Eyebrow>
                    <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                        Travel, visa, and study support with calm, practical care.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        Azhari Travels helps Bangladeshi families, students, and travelers plan important journeys with dependable guidance. We keep the process understandable, organized, and human.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {aboutStats.map((item) => (
                            <InfoCard key={item.label} className="border-l-4 border-[#F7025B]">
                                <p className="text-3xl font-black text-[#F7025B]">{item.value}</p>
                                <p className="mt-1 text-sm font-semibold text-slate-600">{item.label}</p>
                            </InfoCard>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-white shadow-xl">
                    <img
                        src="/home/visa-services/egypt.png"
                        alt="Egypt travel destination"
                        className={imageClass}
                    />
                    <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
                        <div className="flex items-start gap-4">
                            <IconBadge icon={BadgeCheck} />
                            <div>
                                <h2 className="text-xl font-black">Process first, promise second.</h2>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    We explain the steps before you commit, so every decision feels informed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F7025B]">How we work</p>
                            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                                A grounded service model for important journeys.
                            </h2>
                            <p className="mt-5 leading-8 text-slate-600">
                                We focus on the pieces that make travel stressful: documentation, deadlines, communication, and realistic preparation.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {aboutValues.map((item) => (
                                <InfoCard key={item.title} className="bg-[#FFF8FB]">
                                    <IconBadge icon={item.icon} />
                                    <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                                </InfoCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Section className="grid gap-6 md:grid-cols-3">
                {aboutServices.map((item) => (
                    <InfoCard key={item.title} className="p-7">
                        <IconBadge icon={item.icon} />
                        <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                    </InfoCard>
                ))}
            </Section>
        </PageShell>
    );
}

import { BadgeCheck, Compass, Globe2, Handshake, ShieldCheck, UsersRound } from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Reliable guidance",
        text: "Clear documents, realistic timelines, and practical support from the first conversation.",
    },
    {
        icon: Compass,
        title: "Route expertise",
        text: "Focused help for Egypt, Umrah, visa processing, and student consultancy journeys.",
    },
    {
        icon: Handshake,
        title: "Personal care",
        text: "Families and travelers get direct support before, during, and after the trip.",
    },
];

const stats = [
    { value: "10+", label: "Years of travel support" },
    { value: "4", label: "Core service areas" },
    { value: "24/7", label: "Client communication" },
];

export default function AboutUsPage() {
    return (
        <main className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] text-[#06113C]">
                <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
                    <div className="flex flex-col justify-center">
                        <p className="w-fit rounded-xl border border-[#F7025B]/20 bg-white px-4 py-2 text-sm font-bold text-[#F7025B] shadow-sm">
                            About Azhari Travels
                        </p>
                        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                            Travel, visa, and study support with calm, practical care.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                            Azhari Travels helps Bangladeshi families, students, and travelers plan important journeys with dependable guidance. We keep the process understandable, organized, and human.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {stats.map((item) => (
                                <div key={item.label} className="border-l-4 border-[#F7025B] bg-white px-5 py-4 shadow-sm">
                                    <p className="text-3xl font-black text-[#F7025B]">{item.value}</p>
                                    <p className="mt-1 text-sm font-semibold text-slate-600">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-white shadow-xl">
                        <img
                            src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Travel planning desk"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 shadow-lg backdrop-blur">
                            <div className="flex items-start gap-4">
                                <span className="flex h-12 w-12 items-center justify-center bg-[#F7025B]/10 text-[#F7025B]">
                                    <BadgeCheck />
                                </span>
                                <div>
                                    <h2 className="text-xl font-black text-[#06113C]">Process first, promise second.</h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        We explain the steps before you commit, so every decision feels informed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div>
                                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F7025B]">How we work</p>
                                <h2 className="mt-4 text-3xl font-black text-[#06113C] sm:text-4xl">
                                    A grounded service model for important journeys.
                                </h2>
                                <p className="mt-5 leading-8 text-slate-600">
                                    We focus on the pieces that make travel stressful: documentation, deadlines, communication, and realistic preparation.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                {values.map((item) => (
                                    <article key={item.title} className="border border-[#F7025B]/15 bg-[#FFF8FB] p-6">
                                        <item.icon className="text-[#F7025B]" size={30} />
                                        <h3 className="mt-5 text-xl font-black text-[#06113C]">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
                        {[
                            { icon: Globe2, title: "Travel services", text: "Tour packages, Umrah planning, visa support, and practical itinerary guidance." },
                            { icon: UsersRound, title: "Student consultancy", text: "Admission-focused support for students and families preparing for Egypt." },
                            { icon: BadgeCheck, title: "Document clarity", text: "A clean checklist-based approach for documents, attestations, and next steps." },
                        ].map((item) => (
                            <div key={item.title} className="bg-white p-7 shadow-sm">
                                <item.icon className="text-[#F7025B]" size={34} />
                                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
        </main>
    );
}

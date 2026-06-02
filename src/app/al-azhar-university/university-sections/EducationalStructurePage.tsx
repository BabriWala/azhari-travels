import React from "react";

const levels = [
    { level: "প্রাথমিক", duration: "৬ বছর" },
    { level: "মাধ্যমিক", duration: "৩ বছর" },
    { level: "উচ্চ মাধ্যমিক", duration: "৩ বছর" },
    { level: "কুল্লিয়্যাহ / অনার্স", duration: "৪ বছর" },
    { level: "মাস্টার্স", duration: "২ বছর" },
    { level: "এমফিল", duration: "৩–৫+ বছর" },
    { level: "পিএইচডি / ডক্টরেট", duration: "৩–৫+ বছর" },
];

export default function EducationalStructurePage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                        {/* Al-Azhar Education System */}
                        আল-আযহার শিক্ষা ব্যবস্থা
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight text-[#080b34] sm:text-5xl md:text-6xl">
                        {/* Educational Structure of Al-Azhar */}
                        আল-আযহারের শিক্ষা গঠন
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                        {/* The institutional education system of modern Al-Azhar consists of
                        seven major academic levels. */}
                        আধুনিক আল-আযহারের সংস্থাগত শিক্ষা ব্যবস্থা সাতটি প্রধান শিক্ষাগত স্তরের মধ্যে গঠিত।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {levels.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl ${index === 6 ? "lg:col-span-2" : ""
                                }`}
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-2xl font-black text-[#080b34]">
                                {item.level}
                            </h2>

                            <p className="mt-3 inline-block rounded-full bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Complete Academic Pathway */}
                        সম্পূর্ণ শিক্ষাগত পথ
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* From primary education to doctorate-level research, Al-Azhar follows
                        a structured and long-term academic system for Islamic and related
                        studies. */}
                        প্রাথমিক শিক্ষা থেকে শুরু করে ডক্টরেট-স্তরের গবেষণা পর্যন্ত, আল-আযহার ইসলামিক এবং সংশ্লিষ্ট শিক্ষার জন্য একটি কাঠামোবদ্ধ এবং দীর্ঘমেয়াদী একাডেমিক সিস্টেম অনুসরণ করে।
                    </p>
                </div>
            </section>
        </main>
    );
}
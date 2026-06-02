import React from "react";

const skills = [
    "কথোপকথন",
    "লেখালেখি",
    "পাঠ দক্ষতা",
    "অনুধাবন ক্ষমতা",
];

export default function ArabicLanguageProficiencyPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Admission Requirement */}
                        ভর্তি প্রয়োজনীয়তা
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        {/* Arabic Language Proficiency */}
                        আরবি ভাষা যোগ্যতা
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* International students need strong Arabic ability to enroll directly
                        into secondary or higher secondary levels. */}
                        আন্তর্জাতিক শিক্ষার্থীদের স্বাভাবিকভাবে আরবি ভাষা যোগ্যতা প্রয়োজন যাতে তারা সরাসরি মাধ্যমিক বা উচ্চমাধ্যমিক স্তরে ভর্তি হতে পারে।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                        <h2 className="text-3xl font-black text-[#080b34]">
                            {/* Direct Admission Requirement */}
                            সরাসরি ভর্তি প্রয়োজনীয়তা
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                            {/* International students may only enroll directly into secondary or
                            higher secondary levels if they are proficient in Arabic speaking,
                            writing, reading, and comprehension. */}
                            আন্তর্জাতিক শিক্ষার্থীদের সরাসরি মাধ্যমিক বা উচ্চমাধ্যমিক স্তরে ভর্তি হওয়ার জন্য আরবি ভাষার যোগ্যতা প্রয়োজন, যেন তারা কথোপকথন, লেখালেখি, পাঠ এবং অনুধাবনের দক্ষতা থাকে।
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-pink-600 to-orange-400 text-sm font-black text-white">
                                        {index + 1}
                                    </div>
                                    <p className="font-bold text-slate-700">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-4xl bg-[#080b34] p-6 text-white shadow-xl sm:p-8">
                        <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-200">
                            {/* Alternative Path */}
                            বিকল্প পথ
                        </span>

                        <h2 className="mt-5 text-3xl font-black">
                            {/* Special Preparatory Course */}
                            বিশেষ প্রস্তুতি কোর্স
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-slate-200 sm:text-base">
                            {/* If students are not sufficiently proficient in Arabic, they must
                                enroll in a special preparatory course before continuing to the
                                desired academic level. */}
                            যদি শিক্ষার্থীদের আরবি ভাষার যোগ্যতা যথেষ্ট না হয়, তবে তাদের অবশ্যই একটি বিশেষ প্রস্তুতি কোর্সে ভর্তি হতে হবে তারপর তারা ইচ্ছাকৃত একাডেমিক স্তরে যেতে পারে।
                        </p>

                        <div className="mt-8 rounded-3xl bg-linear-to-r from-pink-600 to-orange-400 p-5 text-center shadow-lg">
                            <p className="text-sm font-semibold">
                                {/* Required When */}
                                যখন আরবি ভাষার যোগ্যতা দুর্বল হয়
                            </p>
                            <p className="mt-1 text-2xl font-black">
                                {/* Arabic Is Weak */}
                                আরবি দুর্বল
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <h2 className="text-2xl font-black text-[#080b34] sm:text-3xl">
                        {/* Prepare Before Admission */}
                        ভর্তির আগে প্রস্তুতি
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                        {/* Strong Arabic skills can help students move faster into the right
                        academic level, while weaker Arabic ability requires preparatory
                        study first. */}
                        শক্তিশালী আরবি দক্ষতা শিক্ষার্থীদের সঠিক একাডেমিক স্তরে দ্রুত এগিয়ে যাতে সাহায্য করতে পারে, যখন দুর্বল আরবি ক্ষমতা প্রস্তুতির অধিকারীদের প্রথমেই অধ্যয়নের প্রয়োজন।
                    </p>
                </div>
            </section>
        </main>
    );
}
import React from "react";

const requiredSubjects = [
    "আরবি ব্যাকরণ (নাহু)",
    "আরবি সাহিত্য",
    "তাফসির",
    "উলূমুল কুরআন",
    "তাজবিদ",
    "হাদিস",
    "ফিকহ",
];

const faculties = [
    "প্রকৌশল অনুষদ",
    "চিকিৎসা অনুষদ",
    "ব্যবসায় শিক্ষা অনুষদ",
];

export default function ArabicLanguagePage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                        {/* Al-Azhar Core Studies */}
                        আল-আযহার কোর স্টাডিজ
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight text-[#080b34] sm:text-5xl md:text-6xl">
                        {/* Arabic Language */}
                        আরবি ভাষা
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                        {/* Regardless of specialization, every student at Al-Azhar must study
                        Arabic and essential Islamic subjects. */}
                        বিশেষায়নের উপর নির্ভর করে না, আল-আযহারের প্রতিটি শিক্ষার্থীকে আরবি এবং প্রয়োজনীয় ইসলামিক বিষয়গুলির অধ্যয়ন করতে হবে।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                    <div className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                        <h2 className="text-3xl font-black text-[#080b34]">
                            {/* Required Subjects */}
                            প্রয়োজনীয় বিষয়সমূহ
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            {/* These subjects are required for students regardless of their main
                            field of study. */}
                            এই বিষয়গুলি শিক্ষার্থীদের তাদের মূল অধ্যয়নের উপর নির্ভর করে না, তাদের জন্য প্রয়োজন।
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {requiredSubjects.map((subject, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-pink-600 to-orange-400 text-sm font-black text-white">
                                        {index + 1}
                                    </div>
                                    <p className="font-bold text-slate-700">{subject}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-4xl bg-[#080b34] p-6 text-white shadow-xl sm:p-8">
                        <h2 className="text-3xl font-black">
                            {/* Also Required for Modern Faculties */}
                            আধুনিক অনুষদগুলির জন্যও প্রয়োজন
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-slate-200 sm:text-base">
                            {/* Students in engineering, medicine, and business faculties are also
                            required to study Arabic and Islamic subjects. */}
                            ইঞ্জিনিয়ারিং, চিকিৎসা এবং ব্যবসা অনুষদে শিক্ষার্থীদেরও আরবি এবং ইসলামিক বিষয়গুলির অধ্যয়ন করতে হবে।
                        </p>

                        <div className="mt-8 space-y-4">
                            {faculties.map((faculty, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl bg-white/10 p-4 font-bold text-white"
                                >
                                    {faculty}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Arabic Is Essential at Al-Azhar */}
                        আরবি আল-আযহারে গুরুত্বপূর্ণ
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* Arabic language and Islamic studies remain central parts of the
                        Al-Azhar academic system, even for students studying modern
                        professional subjects. */}
                        আরবি ভাষা এবং ইসলামিক অধ্যয়ন আল-আযহারের একাডেমিক ব্যবস্থার কেন্দ্রীয় অংশগুলি, যদিও শিক্ষার্থীদের আধুনিক পেশাগত বিষয়গুলির অধ্যয়ন করছে।
                    </p>
                </div>
            </section>
        </main>
    );
}
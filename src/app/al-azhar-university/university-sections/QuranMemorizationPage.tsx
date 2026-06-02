import React from "react";

const points = [
    {
        title: "অত্যন্ত গুরুত্বপূর্ণ",
        text: "আল আযহার বিশ্ববিদ্যালয়ে কুরআন হিফজের প্রতি বিশেষ গুরুত্ব প্রদান করা হয়।",
    },
    {
        title: "মিশরীয় শিক্ষার্থীরা",
        text: "মিশরীয় শিক্ষার্থীদের বিশ্ববিদ্যালয়ে ভর্তির পূর্বেই সম্পূর্ণ কুরআন হিফজ সম্পন্ন করতে হয়।",
    },
    {
        title: "আন্তর্জাতিক শিক্ষার্থীরা",
        text: "অনার্স পর্যায়ে অধ্যয়নরত আন্তর্জাতিক শিক্ষার্থীদের সাধারণত প্রতি বছর এক পারা করে অধ্যয়ন করতে হয়।",
    },
    {
        title: "বার্ষিক পরীক্ষা",
        text: "প্রতি বছর কুরআন বিষয়ক লিখিত ও মৌখিক উভয় ধরনের পরীক্ষা অনুষ্ঠিত হয়।",
    },
];

export default function QuranMemorizationPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Al-Azhar University */}
                        আল-আযহার বিশ্ববিদ্যালয়
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        {/* Qur’an Memorization */}
                        কুরআন হিফজ
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* Qur’an memorization holds an important place in Al-Azhar’s academic
                        and spiritual education system. */}
                        কুরআন হিফজ আল-আযহারের একাডেমিক এবং আধ্যাত্মিক শিক্ষা ব্যবস্থায় একটি গুরুত্বপূর্ণ স্থান দখল করে।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {points.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-xl font-black text-[#080b34]">
                                {item.title}
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                            <h2 className="text-2xl font-black text-[#080b34] sm:text-3xl">
                                {/* Written & Oral Examination */}
                                লিখিত এবং মৌখিক পরীক্ষা
                            </h2>

                            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                                {/* Students are evaluated through both written and oral Qur’an
                                examinations annually, making regular memorization and revision
                                very important. */}
                                শিক্ষার্থীদের প্রতি বছর লিখিত এবং মৌখিক কুরআন পরীক্ষার মাধ্যমে মূল্যায়ন করা হয়, যা নিয়মিত হিফজ এবং পুনরাবৃত্তি খুবই গুরুত্বপূর্ণ করে তোলে।
                            </p>
                        </div>

                        <div className="rounded-3xl bg-linear-to-r from-pink-600 to-orange-400 px-8 py-5 text-center text-white shadow-lg">
                            <p className="text-sm font-semibold">
                                {/* Usually */}সাধারণত
                            </p>
                            <p className="mt-1 text-2xl font-black">
                                {/* 1 Juz / Year */}
                                ১ পারা / বছর
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
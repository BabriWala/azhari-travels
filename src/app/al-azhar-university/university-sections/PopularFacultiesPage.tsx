import React from "react";

const faculties = [
    "আকিদাহ ও উসূলুদ্দীন অনুষদ",
    "শরিয়াহ ও আইন অনুষদ",
    "আরবি ভাষা অনুষদ",
    "ইসলামি ও আরবি অধ্যয়ন অনুষদ",
    "ইসলামি বিজ্ঞান অনুষদ",
    "ইসলামি দাওয়াহ অনুষদ",
];

export default function PopularFacultiesPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                        {/* Bangladeshi Students */}
                        বাংলাদেশি ছাত্রছাত্রী
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight text-[#080b34] sm:text-5xl md:text-6xl">
                        {/* Popular Faculties */}
                        জনপ্রিয় অনুষদসমূহ
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                        {/* The six most preferred faculties among Bangladeshi and international
                        students at Al-Azhar University. */}
                        বাংলাদেশি এবং আন্তর্জাতিক ছাত্রছাত্রীদের মধ্যে সবচেয়ে জনপ্রিয় ছয়টি অনুষদসমূহ আল-আযহার বিশ্ববিদ্যালয়ে।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {faculties.map((faculty, index) => (
                        <div
                            key={index}
                            className="group rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-2xl font-black leading-snug text-[#080b34]">
                                {faculty}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {/* A preferred Islamic studies pathway for students seeking
                                structured higher education at Al-Azhar University. */}
                                ইসলামিক অধ্যয়নের জন্য একটি পছন্দের পথ যা ছাত্রদের আল-আযহার বিশ্ববিদ্যালয়ে সংগঠিত উচ্চশিক্ষা অনুসন্ধানের জন্য।
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Choose the Right Faculty */}
                        ঠিক অনুষদ নির্বাচন করুন
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* Selecting the right faculty depends on your previous education,
                        Arabic ability, academic goals, and preferred field of Islamic
                        studies. */}
                        সঠিক অনুষদ নির্বাচন আপনার পূর্ববর্তী শিক্ষা, আরবি দক্ষতা, একাডেমিক লক্ষ্য এবং ইসলামিক অধ্যয়নের পছন্দের ক্ষেত্রের উপর নির্ভর করে।
                    </p>
                </div>
            </section>
        </main>
    );
}
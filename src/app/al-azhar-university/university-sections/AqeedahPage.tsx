import React from "react";

const traditions = [
    {
        title: "আহলুস সুন্নাহ ওয়াল জামাআহ",
        text: "আল আযহার বিশ্ববিদ্যালয় আহলুস সুন্নাহ ওয়াল জামাআহর আকিদা অনুসরণ করে।",
    },
    {
        title: "আশআরী ধারা",
        text: "আশআরী ধারা আল আযহারে অনুসৃত প্রধান আকিদাগত ধারাগুলোর অন্যতম।",
    },
    {
        title: "মাতুরিদী ধারা",
        text: "মাতুরিদী ধারাও আল আযহারের আকিদাগত কাঠামোর মধ্যে স্বীকৃত ও অনুসৃত।",
    },
];

export default function AqeedahPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Al-Azhar Theology */}
                        আল-আযহার ধর্মীয় তত্ত্ব
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        {/* Aqeedah */}
                        আকিদা
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* Al-Azhar follows the Aqeedah of Ahlus Sunnah wal Jama’ah,
                        particularly the Ash’ari and Maturidi traditions. */}
                        আল-আযহার আহলুস সুন্নাহ ওয়াল জামাআহর আকিদা অনুসরণ করে,
                        বিশেষতঃ আশআরী এবং মাতুরিদী ধারাগুলো।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-3">
                    {traditions.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-2xl font-black text-[#080b34]">
                                {item.title}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <h2 className="text-2xl font-black text-[#080b34] sm:text-3xl">
                        {/* Sunni Theological Framework */}
                        সুন্নি ধর্মীয় তত্ত্ব
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                        {/* Aqeedah studies at Al-Azhar are based on the mainstream Sunni
                        theological framework, with special emphasis on the Ash’ari and
                        Maturidi schools. */}
                        আল-আযহারে আকিদা অধ্যয়নগুলি মুখ্যতঃ সুন্নি ধর্মীয় তত্ত্বের উপর ভিত্তি করে,
                        বিশেষতঃ আশআরী এবং মাতুরিদী বিদ্যাসংস্থাগুলির উপর।
                    </p>
                </div>
            </section>
        </main>
    );
}
import React from "react";


const scholars = [
    {
        name: "শাইখ আহমদ আত-তাইয়্যিব",
        role: "আল আযহারের বর্তমান গ্র্যান্ড শাইখ",
    },
    {
        name: "মুহাম্মদ আল-মিহরাসাবি",
        role: "আল আযহারের সাবেক প্রধান",
    },
    {
        name: "ইবরাহিম হুদহুদ",
        role: "আল আযহারের সাবেক প্রধান",
    },
    {
        name: "অধ্যাপক ড. আহমদ উমর হাশিম",
        role: "বিশ্ববিখ্যাত হাদিস বিশারদ",
    },
    {
        name: "অধ্যাপক ড. আহমদ মাবআদ আবদুল করিম",
        role: "প্রখ্যাত শাফিঈ ও হাদিস বিশারদ",
    },
    {
        name: "অধ্যাপক ড. মাহমুদ আবদুর রহমান",
        role: "নয়টি প্রধান হাদিস গ্রন্থের হাফিজ ও বিশিষ্ট আলেম",
    },
];



export default function FamousScholarsPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Al-Azhar Legacy */}
                        আল-আযহারের ঐতিহাসিক সম্পদ
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        {/* Famous Scholars */}
                        বিখ্যাত আলেমগণ
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* Some of the well-known scholars and leaders connected with
                        Al-Azhar’s scholarly tradition. */}
                        আল-আযহারের শিক্ষাগত পরম্পরার সাথে যুক্ত কিছু বিখ্যাত আলেম ও নেতৃত্বপ্রতিষ্ঠান।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {scholars.map((scholar, index) => (
                        <div
                            key={index}
                            className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-2xl font-black leading-snug text-[#080b34]">
                                {scholar.name}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {scholar.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <h2 className="text-2xl font-black text-[#080b34] sm:text-3xl">
                        {/* A Rich Scholarly Tradition */}
                        একটি ধর্মীয় পরম্পরা
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                        {/* Al-Azhar has been connected with many influential scholars,
                        teachers, leaders, and specialists in Islamic sciences throughout
                        its long academic history. */}
                        আল-আযহার তার দীর্ঘ শিক্ষাগত ইতিহাস জুড়ে ইসলামী বিজ্ঞান, শিক্ষক, নেতা এবং বিশেষজ্ঞদের সাথে যুক্ত হয়েছে।
                    </p>
                </div>
            </section>
        </main>
    );
}
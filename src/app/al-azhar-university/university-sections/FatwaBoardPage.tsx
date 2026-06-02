import React from "react";

const points = [
    {
        title: "দারুল ইফতা",
        text: "আল আযহারের দারুল ইফতা হলো এর সরকারি ফতোয়া বোর্ড।",
    },
    {
        title: "স্বতন্ত্র বিভাগ",
        text: "ফতোয়া বোর্ড শরিয়াহ ও আইন অনুষদ থেকে পৃথক একটি স্বতন্ত্র বিভাগ।",
    },
    {
        title: "মুফতি কোর্স",
        text: "মুফতি উপাধি অর্জনের জন্য বিশেষ চার বছর মেয়াদি একটি কোর্স সম্পন্ন করতে হয়।",
    },
];

export default function FatwaBoardPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                        {/* Al-Azhar Darul Ifta */}
                        আল-আযহার দারুল ইফতা
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight text-[#080b34] sm:text-5xl md:text-6xl">
                        {/* Fatwa Board */}
                        ফতোয়া বোর্ড
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                        {/* Al-Azhar’s Darul Ifta is separate from the Faculty of Shariah and
                        Law, with a special course path for becoming a Mufti. */}
                        আল-আযহারের দারুল ইফতা শরিয়াহ ও আইন অনুষদ থেকে পৃথক একটি স্বতন্ত্র বিভাগ, মুফতি হিসাবে পদবীর্জনের জন্য একটি বিশেষ কোর্সপাথ।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-3">
                    {points.map((item, index) => (
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
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Four-Year Special Course */}
                        চার বছরের বিশেষ কোর্স
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* To receive the title of Mufti, a student must complete a dedicated
                        four-year course through the Fatwa Board pathway. */}
                        মুফতি উপাধি অর্জনের জন্য, একজন শিক্ষার্থীকে ফতোয়া বোর্ডের মাধ্যমে একটি বিশেষ 4-বছরের কোর্স সম্পন্ন করতে হবে।
                    </p>

                    <div className="mx-auto mt-6 w-fit rounded-full bg-linear-to-r from-pink-600 to-orange-400 px-8 py-3 text-sm font-bold text-white shadow-lg">
                        {/* Mufti Title Pathway */}
                        মুফতি উপাধি যোগ্যতার পথ
                    </div>
                </div>
            </section>
        </main>
    );
}
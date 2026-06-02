import React from "react";

const divisions = [
    {
        title: "তাজবিদ বিভাগ",
        duration: "২ বছর",
        description:
            "এই বিভাগে ভর্তি হতে হলে শিক্ষার্থীকে হাফিজে কুরআন হতে হবে এবং আরবি ভাষা ও কুরআন হিফজ সংক্রান্ত পরীক্ষায় উত্তীর্ণ হতে হবে।",
    },
    {
        title: "উচ্চ বিভাগ",
        duration: "৩ বছর",
        description:
            "তাজবিদ বিভাগ সম্পন্ন করার পর কিরাআত বিভাগের পরবর্তী উচ্চতর স্তর হলো এই বিভাগ।",
    },
    {
        title: "তাখাসসুস বিভাগ",
        duration: "৩ বছর",
        description:
            "কিরাআত বিষয়ে গভীর ও বিশেষায়িত অধ্যয়নের জন্য এটি কিরাআত বিভাগের সর্বোচ্চ বিশেষায়ন পর্যায়।",
    },
];

export default function MahadulQiraatPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Al-Azhar Qira’at Department */}
                        আল-আযহার কিরাআত বিভাগ
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        {/* Ma’hadul Qira’at */}
                        মাহাদুল কিরাআত
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* The Qira’at department includes three major divisions: Tajweed,
                        Higher Division, and Takhassus Division. */}
                        কিরাআত বিভাগে 3টি প্রধান বিভাগ রয়েছে: তাজবিদ, উচ্চ বিভাগ এবং তাখাসসুস বিভাগ।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-3">
                    {divisions.map((item, index) => (
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

                            <p className="mt-3 inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-bold text-orange-600">
                                {item.duration}
                            </p>

                            <p className="mt-5 text-sm leading-7 text-slate-600">
                                {item.description}
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
                                {/* Tajweed Division Requirement */}
                                তাজবিদ বিভাগের শর্ত
                            </h2>

                            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                                {/* Students who want to join the Tajweed division must be Hafiz of
                                the Qur’an and must pass exams in Arabic and Qur’an
                                memorization. */}
                                তাজবিদ বিভাগে যোগদান করতে চাইলে শিক্ষার্থীদের কুরআনের হাফিজ হওয়া এবং আরবি ও কুরআনের মন্ত্রণা পরীক্ষায় উত্তীর্ণ হওয়া আবশ্যক।
                            </p>
                        </div>

                        <div className="rounded-3xl bg-linear-to-r from-pink-600 to-orange-400 px-8 py-5 text-center text-white shadow-lg">
                            <p className="text-sm font-semibold">
                                {/* Required */}
                                আবশ্যক
                            </p>
                            <p className="mt-1 text-2xl font-black">
                                {/* Hafiz + Exam */}
                                হাফিজ + পরীক্ষা
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
import React from "react";

const madhhabs = [
    {
        name: "হানাফি",
        description: "আহলুস সুন্নাহ ওয়াল জামাআতের স্বীকৃত চারটি ফিকহি মাযহাবের একটি।",
    },
    {
        name: "মালিকি",
        description: "আহলুস সুন্নাহ ওয়াল জামাআতের স্বীকৃত চারটি ফিকহি মাযহাবের একটি।",
    },
    {
        name: "হাম্বলি",
        description: "আহলুস সুন্নাহ ওয়াল জামাআতের স্বীকৃত চারটি ফিকহি মাযহাবের একটি।",
    },
    {
        name: "শাফিঈ",
        description: "আহলুস সুন্নাহ ওয়াল জামাআতের স্বীকৃত চারটি ফিকহি মাযহাবের একটি।",
    },
];

export default function FourMadhhabsPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Al-Azhar Admission */}
                        আল-আযহার ভর্তি
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        {/* Four Madhhabs */}
                        চারটি মাযহাব
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* Al-Azhar follows the four Sunni schools of thought, and students
                        must declare their madhhab before admission. */}
                        আল-আযহার চারটি সুন্নি বিচারের অনুসরণ করে, এবং শিক্ষার্থীদের ভর্তির আগে তাদের মাযহাব ঘোষণা করতে হবে।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {madhhabs.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-2xl font-black text-[#080b34]">
                                {item.name}
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <h2 className="text-2xl font-black text-[#080b34] sm:text-3xl">
                        {/* Madhhab Declaration Required */}
                        মাযহাব ঘোষণা প্রয়োজন
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                        {/* Before admission, students must declare which madhhab they follow
                        from the four Sunni schools: Hanafi, Maliki, Hanbali, or Shafi’i. */}
                        ভর্তির আগে, শিক্ষার্থীদের ঘোষণা করতে হবে তারা কোন মাযহাবের অনুসরণ করে
                        চারটি সুন্নি বিচারের মধ্যে: হানাফি, মালিকি, হাম্বলি, বা শাফিঈ।
                    </p>
                </div>
            </section>
        </main>
    );
}
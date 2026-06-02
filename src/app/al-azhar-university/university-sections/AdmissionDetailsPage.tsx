import React from "react";

const languageOptions = [
    {
        title: "আল আযহার সরকারি ভাষা শিক্ষা প্রোগ্রাম",
        badge: "ফ্রি কোর্স",
        points: [
            "আপনি সম্পূর্ণ বিনামূল্যে ভাষা কোর্স সম্পন্ন করতে পারবেন।",
            "কোর্সটি মোট ৬টি সেমিস্টার বা ৬টি স্তরে বিভক্ত।",
            "প্রতিটি সেমিস্টারের মেয়াদ ২ মাস।",
            "আপনার আরবি ভাষার দক্ষতার ভিত্তিতে যেকোনো সেমিস্টার স্তরে ভর্তি করা হতে পারে।",
            "ভর্তির পূর্বে নাহু, সরফ এবং সংশ্লিষ্ট বিষয়সমূহের উপর একটি সাক্ষাৎকার নেওয়া হবে।",
            "শিক্ষাগত গ্যাপ থাকুক বা না থাকুক, ভাষা কোর্স সম্পন্ন করা বাধ্যতামূলক।",
        ],
    },
    {
        title: "শেখ যায়েদ প্রাইভেট শাখা",
        badge: "প্রাইভেট সিস্টেম",
        points: [
            "বিকল্পভাবে আপনি শেখ যায়েদ শাখায় ভর্তি হতে পারবেন।",
            "এখানে সেমিস্টার পদ্ধতি প্রাইভেট সিস্টেমের অধীনে পরিচালিত হয়।",
            "যেসব শিক্ষার্থী প্রাইভেট শাখার পদ্ধতি পছন্দ করেন, তাদের জন্য এটি উপযোগী।",
        ],
    },
];

const certificatePaths = [
    {
        title: "শরহে বেকায়া সনদধারী শিক্ষার্থীরা",
        steps: [
            "ভাষা কোর্স চলাকালীন সময়ে কুল্লিয়াহর ভর্তি বিজ্ঞপ্তি প্রকাশিত হলে শিক্ষার্থীদের ভর্তি পরীক্ষায় অংশগ্রহণ করতে হবে।",
            "পরীক্ষায় উত্তীর্ণ হলে ভাষা কোর্স সম্পন্ন করার পর কুল্লিয়াহতে ভর্তি হতে পারবেন।",
            "যদি উত্তীর্ণ না হন, তাহলে তাকে মা’হাদ বা ইন্টারমিডিয়েটে ভর্তি হতে হবে।",
            "মা’হাদে ৩ বছর অধ্যয়ন সম্পন্ন করার পর পুনরায় ভর্তি পরীক্ষা ছাড়াই সরাসরি কুল্লিয়াহতে ভর্তি হওয়ার সুযোগ থাকবে।",
        ],
    },
    {
        title: "আলিয়া/আলিম সনদধারী শিক্ষার্থীরা",
        steps: [
            "আলিম সনদধারী শিক্ষার্থীদের সাধারণত ভাষা কোর্স চলাকালীন সময়ে কুল্লিয়াহতে ভর্তির জন্য আলাদা ভর্তি পরীক্ষায় অংশগ্রহণ করতে হয় না।",
            "কুল্লিয়াহর প্রথম দুই বছরে হাদিস, তাফসির, ফিকহসহ সকল আবশ্যিক বিষয় অধ্যয়ন করতে হবে।",
            "তৃতীয় বর্ষ থেকে শিক্ষার্থীরা তাদের ফলাফলের ভিত্তিতে পছন্দের বিষয়ে বিশেষায়িত অধ্যয়নের সুযোগ পাবে।",
        ],
    },
];

export default function AdmissionDetailsPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                            {/* Al-Azhar University */}
                            আল-আযহার বিশ্ববিদ্যালয়
                        </span>

                        <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                            {/* Admission Details */}
                            ভর্তি বিবরণ
                        </h1>

                        <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                            {/* Through our representative, students must first enroll in a
                            language course before moving forward with the admission process. */}
                            আমাদের প্রতিনিধির মাধ্যমে, শিক্ষার্থীদের ভর্তি প্রক্রিয়ায় অগ্রসর হওয়ার আগে প্রথমে একটি ভাষা কোর্সে নিবন্ধন করতে হবে।
                        </p>
                    </div>
                </div>
            </section>

            {/* Language Course Options */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h2 className="text-3xl font-black text-[#080b34]">
                        {/* Language Course Options */}
                        ভাষা কোর্স বিকল্প
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {/* Students have two main options for completing the required language
                        course. */}
                        ভাষা কোর্স সম্পন্ন করার জন্য শিক্ষার্থীদের দুইটি মেইন বিকল্প রয়েছে।
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {languageOptions.map((option, index) => (
                        <div
                            key={index}
                            className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
                        >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-2xl font-black text-[#080b34]">
                                    {option.title}
                                </h3>

                                <span className="w-fit rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
                                    {option.badge}
                                </span>
                            </div>

                            <div className="mt-6 space-y-4">
                                {option.points.map((point, pointIndex) => (
                                    <div key={pointIndex} className="flex gap-3">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-pink-600 to-orange-400 text-xs font-bold text-white">
                                            ✓
                                        </div>
                                        <p className="text-sm leading-7 text-slate-600">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certificate Based Admission */}
            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h2 className="text-3xl font-black text-[#080b34]">
                        {/* Certificate Based Admission Path */}
                        সার্টিফিকেট ভিত্তিক ভর্তি সিস্টেম
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {/* The next admission path depends on whether the student holds a
                        Sharhe Bekaya certificate or an Alim certificate. */}
                        পরবর্তী ভর্তি সিস্টেমে শিক্ষার্থীর কাছে যদি শরহে বেকায়া সার্টিফিকেট বা আলিম সার্টিফিকেট থাকে, তবেই নির্ভরশীল।
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {certificatePaths.map((path, index) => (
                        <div
                            key={index}
                            className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
                        >
                            <h3 className="text-2xl font-black text-[#080b34]">
                                {path.title}
                            </h3>

                            <div className="mt-6 space-y-5">
                                {path.steps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="flex gap-4">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#080b34] text-sm font-black text-white">
                                            {stepIndex + 1}
                                        </div>

                                        <p className="text-sm leading-7 text-slate-600">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Summary */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Start With Language Course */}
                        ভাষা কোর্স দিয়ে শুরু করুন
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* Whether you choose the public education program or the Sheikh Zayed
                            private branch, the language course is the first important step
                            before continuing toward Kuliyyah or Ma’had admission. */}
                        আপনি যে পাবলিক শিক্ষা প্রোগ্রাম বা শেখ যায়েদ প্রাইভেট শাখা নির্বাচন করুন না কেন, ভাষা কোর্স কুল্লিয়াহ বা মা’হাদ ভর্তি প্রক্রিয়ার আগে প্রথম গুরুত্বপূর্ণ ধাপ।
                    </p>
                </div>
            </section>
        </main>
    );
}
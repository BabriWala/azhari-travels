import React from "react";

const subjects = [
    "আকিদাহ",
    "দর্শন",
    "ধর্মতত্ত",
    "উলূমুল কুরআন",
    "তাফসির",
    "কিরাআত",
    "তাজবিদ",
    "হাদিস",
    "উসূলুল হাদিস",
    "রিজালশাস্ত্র",
    "ফিকহ",
    "ইসলামি আইন",
    "আরবি ভাষা",
    "বালাগাহ",
    "যুক্তিবিদ্যা",
    "তাসাউফ",
    "ইসলামি দাওয়াহ",
    "শিক্ষাবিজ্ঞান",
    "ইতিহাস",
    "সভ্যতা অধ্যয়ন",
    "ভূগোল",
    "রাষ্ট্রবিজ্ঞান",
    "অর্থনীতি",
    "সমাজবিজ্ঞান",
    "বিজ্ঞান",
    "ব্যবসায় শিক্ষা",
    "গণিত",
    "ইংরেজি",
    "ফরাসি",
    "অনুবাদ অধ্যয়ন",
    "চিকিৎসাবিজ্ঞান",
    "নার্সিং",
    "দন্তচিকিৎসা",
    "ফার্মেসি",
    "প্রকৌশল",
    "কৃষিবিজ্ঞান",
    "সাংবাদিকতা",
    "এবং আরও অনেক বিষয়",
];
export default function AlAzharFacultiesPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Al-Azhar University */}
                        আল-আযহার বিশ্ববিদ্যালয়
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        আল-আযহার বিশ্ববিদ্যালয়ের অনুষদসমূহ
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* Modern Al-Azhar University has 24 main faculties with multiple
                        departments under each faculty. */}
                        আধুনিক আল-আযহার বিশ্ববিদ্যালয়ে 24টি প্রধান অনুষদ রয়েছে, প্রতিটি অনুষদের অধীনে বহুতবই বিভাগ রয়েছে।
                    </p>
                </div>
            </section>

            {/* Highlight */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-3">
                    <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
                        <h2 className="text-5xl font-black text-[#080b34]">
                            {/* 24 */}
                            ২৪
                        </h2>
                        <p className="mt-2 font-semibold text-slate-600">
                            {/* Main Faculties */}
                            প্রধান অনুষদসমূহ
                        </p>
                    </div>

                    <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
                        <h2 className="text-5xl font-black text-[#080b34]">
                            {/* Many */}
                            অনেক
                        </h2>
                        <p className="mt-2 font-semibold text-slate-600">
                            {/* Departments */}
                            বিভাগসমূহ
                        </p>
                    </div>

                    <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
                        <h2 className="text-5xl font-black text-[#080b34]">
                            {/* Wide */}
                            বিস্তৃত
                        </h2>
                        <p className="mt-2 font-semibold text-slate-600">
                            {/* Study Areas */}
                            অধ্যয়ন ক্ষেত্র
                        </p>
                    </div>
                </div>
            </section>

            {/* Subjects */}
            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <h2 className="text-3xl font-black text-[#080b34]">
                        {/* Available Faculties & Subjects */}
                        উপলব্ধ অনুষদসমূহ ও বিষয়সমূহ
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {/* These include Islamic studies, Arabic language, social sciences,
                        modern sciences, medical studies, engineering, business, and more. */}
                        এই বিষয়সমূহের মধ্যে ইসলামিক অধ্যয়ন, আরবি ভাষা, সামাজিক বিজ্ঞান, আধুনিক বিজ্ঞান, চিকিৎসা অধ্যয়ন, প্রকৌশল, ব্যবসা এবং আরও অনেক অনুষদ।
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {subjects.map((subject, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-linear-to-r hover:from-pink-600 hover:to-orange-400 hover:text-white"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Choose Your Academic Path */}
                        আপনার শিক্ষাগত প্রতিভা নির্বাচন করুন
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* Al-Azhar offers a broad academic structure, but admission processing
                        should be selected carefully based on eligibility, subject area, and
                        student goals. */}
                        আল-আযহার একটি বিস্তৃত একাডেমিক কাঠামো প্রদান করে, তবে ভর্তি প্রক্রিয়াকরণটি যোগ্যতা, বিষয় ক্ষেত্র এবং ছাত্রের লক্ষ্য অনুসারে সাবধানে নির্বাচন করা উচিত।
                    </p>
                </div>
            </section>
        </main>
    );
}
import React from "react";
import MetaWhatsAppSalesLink from "../../components/MetaWhatsAppSalesLink";


const cards = [
    {
        label: "01",
        title: "টিউশন ফি",
        highlight: "কোনো টিউশন ফি নেই",
        text: "আল আযহার বিশ্ববিদ্যালয়ের ইসলামি বিভাগসমূহে কোনো টিউশন ফি নেই। এর মধ্যে কুরআন হিফজ ও তাজবিদ, তাফসির, হাদিস, ফিকহ, আকিদাহ, ইসলামি ইতিহাস, আরবি ভাষা ও সাহিত্যসহ সংশ্লিষ্ট বিষয়সমূহ অন্তর্ভুক্ত।",
    },
    {
        label: "02",
        title: "জীবনযাত্রার ব্যয়",
        highlight: "শুধুমাত্র থাকা ও খাবারের খরচ",
        text: "মিশরে অবস্থানকালে শিক্ষার্থীদের শুধুমাত্র নিজেদের থাকা-খাওয়া এবং দৈনন্দিন জীবনযাত্রার ব্যয় বহন করতে হবে।",
    },
    {
        label: "03",
        title: "বৃত্তি",
        highlight: "যোগ্যতাভিত্তিক",
        text: "বৃত্তি সম্পূর্ণভাবে মেধা ও ফলাফলের ওপর নির্ভরশীল। সাধারণত শিক্ষার্থীদের ২–৩ বছর ধারাবাহিকভাবে কঠোর পরিশ্রমের মাধ্যমে বৃত্তির জন্য যোগ্যতা অর্জন করতে হয়।",
    },
    {
        label: "04",
        title: "কর্মসংস্থানের সুযোগ",
        highlight: "খুবই সীমিত",
        text: "পড়াশোনার পাশাপাশি কাজের সুযোগ খুবই সীমিত। যদিও কিছু শিক্ষার্থী ছোটখাটো কাজ করে থাকে, তবে তা অনেক সময় শিক্ষাজীবনে নেতিবাচক প্রভাব ফেলতে পারে।",
    },
];

export default function ScholarshipsExpensesPage() {
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
                        {/* Scholarships & Expenses */}
                        বৃত্তি ও খরচ
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* A clear overview of tuition fees, living costs, scholarship
                        possibilities, and work opportunities for students. */}
                        টিউশন ফি, জীবনযাত্রার খরচ, বৃত্তির সম্ভাবনা এবং শিক্ষার্থীদের জন্য কর্মসংস্থানের সুযোগের একটি স্পষ্ট পরিচিতি।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card) => (
                        <div
                            key={card.label}
                            className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-sm font-black text-white">
                                    {card.label}
                                </div>

                                <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-bold text-orange-600">
                                    {card.highlight}
                                </span>
                            </div>

                            <h2 className="text-xl font-black text-[#080b34]">
                                {card.title}
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {card.text}
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
                                {/* Plan Your Expenses Carefully */}
                                আপনার খরচ সাবধানে পরিকল্পনা করুন
                            </h2>

                            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                                {/* Islamic studies may not require tuition fees, but students
                                should prepare for regular food, accommodation, books,
                                transportation, and personal living expenses. */}
                                ইসলামি শিক্ষার জন্য টিউশন ফি প্রয়োজন না হলেও, শিক্ষার্থীদের নিয়মিত খাবার, থাকার ব্যবস্থা, বই, পরিবহন এবং ব্যক্তিগত জীবনযাত্রার খরচের জন্য প্রস্তুতি নেওয়া উচিত।
                            </p>
                        </div>



                        <MetaWhatsAppSalesLink
                            href="https://wa.me/+8801318185954"
                            sectionName="Scholarships Expenses"
                        >
                            <button className="rounded-full bg-linear-to-r from-pink-600 to-orange-400 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105">
                                {/* Contact Us */}
                                আমাদের সাথে যোগাযোগ করুন
                            </button>
                        </MetaWhatsAppSalesLink>
                    </div>
                </div>
            </section>
        </main>
    );
}

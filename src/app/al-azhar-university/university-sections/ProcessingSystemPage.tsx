import React from "react";
import Link from "next/link";

const steps = [
    {
        step: "প্রথম ধাপ",
        amount: "50,000 টাকা",
        title: "ভিসা অনুমোদন",
        // title: "টিকেট বুকিং",
        // text: "আপনার কাছে উপরের যাবতীয় ডকুমেন্টস প্রস্তুত থাকে, তাহলে প্রথমে আপনাকে ৫০,০০০ টাকা অগ্রিম দিয়ে আপনার মিশরের টিকেট রিজার্ভ করতে হবে",
        text: "আপনার কাছে উপরের যাবতীয় ডকুমেন্টস প্রস্তুত থাকে, তাহলে প্রথমে আপনাকে 50,000 টাকা অগ্রিম দিয়ে আপনার ওমরাহ ভিসার জন্য আবেদন করা হবে",
    },
    {
        step: "দ্বিতীয় ধাপ",
        amount: "100,000 টাকা",
        title: "টিকেট প্রদান",
        text: "ওমরাহ ভিসা অনুমোদন হওয়ার পর আপনাকে 100,000 টাকা প্রদান করতে হবে। এই ধাপে আপনার ঢাকা থেকে সৌদি আরবের যাবতীয় ডকুমেন্টস নিশ্চিত করা হবে",
    },
    {
        step: "তৃতীয় ধাপ",
        amount: "40,000 টাকা",
        title: "মিশরের ডকুমেন্টস",
        text: "ফ্লাইট এর আগে বাকি 40,000 টাকা পরিশোধ করার পর, সৌদি আরব এ পৌছানোর পর আপনাকে সৌদি থেকে মিশরের টিকেট ও ওকে টু বোর্ড প্রদান করা হবে",
    },
    {
        step: "চতুর্থ ধাপ",
        amount: "আগমন সমর্থন",
        title: "ভর্তি সহায়তা",
        text: "আপনার নির্দিষ্ট তারিখে ফ্লাইটে মিশরে পৌঁছানোর পর, আমাদের প্রতিনিধি আপনাকে সাদরে গ্রহণ করবে এবং ভর্তি সংক্রান্ত যাবতীয় কার্যক্রম হাতে কলমে সম্পন্ন করে দিবেন।",
    },
];

export default function ProcessingSystemPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                        {/* Azhari Travels 2.0 */}
                        আল-আযহার বিশ্ববিদ্যালয়ের ভর্তি প্রক্রিয়া
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight text-[#080b34] sm:text-5xl md:text-6xl">
                        {/* Our Processing System */}
                        আমাদের প্রক্রিয়া
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        {/* A simple step-by-step process for Egypt ticket reservation, visa
                        approval, OK to Board, and admission support. */}
                        মিশরের টিকেট রিজার্ভেশন, ভিসা অনুমোদন, ওকে টু বোর্ড এবং ভর্তি সহায়তার জন্য একটি সহজ পদ্ধতি।
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-linear-to-b from-pink-600 to-orange-400 md:block" />

                    <div className="space-y-6">
                        {steps.map((item, index) => (
                            <div
                                key={index}
                                className="relative grid gap-5 rounded-4xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[90px_1fr] md:p-6"
                            >
                                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white md:h-16 md:w-16">
                                    {index + 1}
                                </div>

                                <div>
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
                                                {item.step}
                                            </p>
                                            <h2 className="mt-1 text-2xl font-black text-[#080b34]">
                                                {item.title}
                                            </h2>
                                        </div>

                                        <span className="w-fit rounded-full bg-slate-100 px-5 py-2 text-sm font-bold text-[#080b34]">
                                            {item.amount}
                                        </span>
                                    </div>

                                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Complete Admission Support */}
                        সম্পূর্ণ ভর্তি সহায়তা
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* From ticket reservation to visa approval, OK to Board, airport
                        reception, and admission-related procedures — our team will assist
                        you throughout the process. */}
                        টিকেট রিজার্ভেশন থেকে ভিসা অনুমোদন, ওকে টু বোর্ড, বিমানবন্দরে স্বাগত, এবং ভর্তি সংক্রান্ত কার্যক্রম পর্যন্ত — আমাদের দল পুরো প্রক্রিয়ায় আপনাকে সহায়তা করবে।
                    </p>

                    <Link href="https://wa.me/+8801318185954" target="_blank">
                        <button className="mt-6 rounded-full bg-linear-to-r from-pink-600 to-orange-400 px-7 py-3 font-bold text-white shadow-lg transition hover:scale-105 md:mt-0">
                            প্রক্রিয়া শুরু করুন
                        </button>
                    </Link>

                </div>
            </section>
        </main>
    );
}
import React from "react";
import MetaWhatsAppSalesLink from "../../components/MetaWhatsAppSalesLink";

const documents = [
    {
        icon: "1",
        title: "পাসপোর্ট",
        text: "যেকোন কম্পিউটার এর দোকান থেকে অথবা অনলাইন থেকে পাসপোর্ট এর জন্য আবেদন করতে পারবেন অথবা ইউটিউব দেখেও পাসপোর্ট এর জন্য আবেদন করতে পারবেন",
    },
    {
        icon: "2",
        title: "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট",
        text: "যেকোন কম্পিউটার এর দোকান থেকে অথবা অনলাইন থেকে পুলিশ ক্লিয়ারেন্স এর জন্য আবেদন করতে পারবেন অথবা ইউটিউব দেখেও পুলিশ ক্লিয়ারেন্স এর জন্য আবেদন করতে পারবেন",
    },
    {
        icon: "3",
        title: "জন্ম নিবন্ধন সার্টিফিকেট",
        text: "জন্ম নিবন্ধন এর অনলাইন কপিটিও আপনি অনলাইন থেকে দেখে নিতে পারবেন অথবা যেকোন কম্পিউটার এর দোকান থেকে প্রিন্ট করতে পারবেন",
    },
    {
        icon: "4",
        title: "শরহে বেকায়া বা আলিমের সার্টিফিকেট",
        text: "শরহে বেকায়া বা আলিমের সার্টিফিকেট এবং শরহে বেকায়া বা আলিমের মার্কশীট নোটারী মিনিস্ট্রি করতে হবো। নোটারী মিনিস্ট্রির ঠিকানা আমাদের কাছ থেকে নিতে পারবেন।",
    },
];

const notes = [
    "শরহে বেকায়ার সার্টিফিকেট এর ক্ষেত্রে সকল বিষয়ে কমপক্ষে পাশ মার্ক্স থাকতে হবে যেমন মকবুল।",
    "আলিমের সার্টিফিকেট এর ক্ষেত্রে সকল বিষয়ে পাশ মার্কস থাকতে হবে যেমন ৩৩ নাম্বার পেতে হবে।",
    "আল আযহার বিশ্ববিদ্যালয়ে যে কেউ ভর্তি হতে পারবে যদি কারোর উপরের কাগজপত্রাদি থাকে। আল আযহার বিশ্ববিদ্যালয় সবার জন্য উন্মুক্ত!",
];

export default function AlAzharAdmissionDocuments() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
                <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                            {/* Al-Azhar University Admission */}
                            আল-আযহার বিশ্ববিদ্যালয়ে ভর্তি
                        </span>

                        <h1 className="mt-5 text-4xl font-black leading-tight text-[#080b34] sm:text-5xl md:text-6xl">
                            {/* Admission Documents */}
                            ভর্তির কাগজপত্র
                        </h1>

                        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                            {/* The following documents are required for admission to Al-Azhar
                            University. */}
                            আল-আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে নিম্নলিখিত কাগজপত্রাদি প্রয়োজন হবে।
                        </p>
                    </div>
                </div>
            </section>

            {/* Documents */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {documents.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-16 w-16 text-white items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-3xl">
                                {item.icon}
                            </div>

                            <h2 className="text-xl font-black text-[#080b34]">
                                {item.title}
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Notes */}
            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-4xl bg-[#080b34] shadow-xl">
                    <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="bg-linear-to-br from-pink-600 to-orange-400 p-8 text-white sm:p-10">
                            <p className="text-sm font-semibold uppercase tracking-widest">
                                {/* Important */}
                                গুরুত্বপূর্ণ
                            </p>

                            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                                {/* Special Notes */}
                                বিশেষ নোট
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/90">
                                {/* Please read these points carefully before preparing your
                                admission documents. */}
                                ভর্তির কাগজপত্র তৈরি করার আগে এই বিষয়গুলি সাবধানে পড়ুন।
                            </p>
                        </div>

                        <div className="space-y-4 p-6 sm:p-8">
                            {notes.map((note, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 rounded-2xl bg-white/10 p-4 text-white"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#080b34]">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm leading-7 text-slate-100">{note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <h2 className="text-2xl font-black text-[#080b34]">
                        {/* Need Help With Notary or Ministry Attestation? */}
                        নোটারি বা মিনিস্ট্রি অ্যাটেস্টেশনে সাহায্যের প্রয়োজন?
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                        {/* Contact Azhari Travels 2.0 for guidance about document preparation,
                        notarization, ministry attestation, and admission support. */}
                        কাগজপত্র তৈরি, নোটারি করা, মিনিস্ট্রি অ্যাটেস্টেশন এবং ভর্তির সময় সাহায্যের জন্য আাযহারী ট্রাভেলস এন্ড ট্যুরস এর সাথে যোগাযোগ করুন।
                    </p>
                    <MetaWhatsAppSalesLink
                        href="https://wa.me/+8801318185954"
                        sectionName="Admission Documents"
                    >
                        <button className="mt-6 rounded-full bg-linear-to-r from-pink-600 to-orange-400 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105">
                            {/* Contact Now */}
                            এখনই যোগাযোগ করুন
                        </button>
                    </MetaWhatsAppSalesLink>
                </div>
            </section>
        </main>
    );
}

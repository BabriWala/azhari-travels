import React from "react";
import {
    Plane,
    FileText,
    BadgeCheck,
    Home,
    Stethoscope,
    MapPin,
    ShieldCheck,
    Headphones,
} from "lucide-react";
import Link from "next/link";

const included = [
    "এয়ার টিকেট",
    "ভিসা",
    "ফ্রি ওমরাহ",
    "ভর্তি হওয়া পর্যন্ত সকল সহযোগিতা",
];

const notIncluded = [
    {
        icon: Home,
        title: "বাসা ভাড়া ও খাবারের খরচ",
        text: "এডভান্স সহ 15 থেকে 20 হাজার টাকা ১ম মাসের জন্য। পরবর্তী মাস থেকে বাসা ভাড়া, খাবার ও যাতায়াতের জন্য 8-10 হাজার টাকা খরচ হবে প্রতি মাসে",
    },
    {
        icon: FileText,
        title: "ইকামাহর খরচ",
        text: "230 ডলার বা 30 হাজার টাকার মতো",
    },
    {
        icon: Stethoscope,
        title: "মেডিকেল ও যাতায়াতের খরচ",
        text: "7-8 হাজার টাকার মতো",
    },
    {
        icon: MapPin,
        title: "কায়রো এয়ারপোর্ট এ স্টীকার লাগানোর খরচ",
        text: "30 ডলার বা 3 হাজার টাকার মতো",
    },
];

export default function AlAzharPackagePage() {
    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />
                <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 md:py-16 lg:px-8">
                    <div className="relative">
                        <div className="overflow-hidden rounded-4xl border-4 border-white shadow-2xl">
                            <img
                                src="/al-azhar/fb-cover.png"
                                alt="Azhari Travels Cover"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative z-10 text-center md:text-left">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
                            <ShieldCheck size={18} />
                            {/* Trusted Admission Support */}
                            নির্ভরযোগ্য ভর্তি সহায়তা
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight text-[#090d35] sm:text-5xl lg:text-6xl">
                            আল আযহার বিশ্ববিদ্যালয়{" "}
                            <span className="bg-linear-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent">
                                প্যাকেজ
                            </span>
                        </h1>

                        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                            আল-আযহার বিশ্ববিদ্যালয়ে পড়াশোনা করতে ইচ্ছুক শিক্ষার্থীদের জন্য সম্পূর্ণ ভর্তি সহায়তা প্যাকেজ — যার মধ্যে রয়েছে ভিসা, এয়ার টিকেট, ওমরাহ এবং ভর্তি সম্পন্ন হওয়া পর্যন্ত সকল প্রকার সহযোগিতা
                        </p>

                        <div className="mt-8 rounded-3xl bg-[#090d35] p-6 text-white shadow-xl">
                            <p className="text-sm text-slate-300">প্যাকেজ মূল্য</p>
                            <h2 className="mt-1 text-4xl font-black text-white">
                                1,90,000/-
                            </h2>
                            <p className="mt-2 text-sm text-slate-300">
                                {/* One Hundred Seventy-Five Thousand Taka */}
                                এক লক্ষ নব্বই হাজার টাকা
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Icons */}
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        { icon: Plane, title: "টিকেট" },
                        { icon: Home, title: "হোটেল" },
                        { icon: BadgeCheck, title: "কাস্টম প্যাকেজ" },
                        { icon: Headphones, title: "২৪/৭ সাপোর্ট" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100"
                        >
                            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-white">
                                <item.icon size={26} />
                            </div>
                            <h3 className="font-bold text-[#090d35]">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Package Details */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Included */}
                    <div className="rounded-4xl bg-white p-6 shadow-lg sm:p-8">
                        <h2 className="text-2xl font-black text-[#090d35]">
                            প্যাকেজে অন্তর্ভুক্ত
                        </h2>

                        <div className="mt-6 space-y-4">
                            {included.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                        <BadgeCheck size={22} />
                                    </div>
                                    <p className="font-semibold text-slate-800">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl bg-orange-50 p-5 text-sm leading-6 text-orange-800">
                            {/* This package includes a free Umrah opportunity. However, Umrah
                            transportation, hotel accommodation, and meals are not included. */}
                            এই প্যাকেজের সাথে ফ্রি ওমরাহ করার সুযোগ রয়েছে। তবে ওমরাহ এর ট্রান্সপোর্ট, থাকা ও খাওয়ার খরচ অন্তর্ভুক্ত নয়।

                        </div>
                    </div>

                    {/* Not Included */}
                    <div className="rounded-4xl bg-white p-6 shadow-lg sm:p-8">
                        <h2 className="text-2xl font-black text-[#090d35]">
                            {/* Not Included in the Package */}
                            প্যাকেজে অন্তর্ভুক্ত নয়
                        </h2>

                        <div className="mt-6 space-y-4">
                            {notIncluded.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-100 p-4"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                                            <item.icon size={22} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Cost */}
            <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#090d35] to-[#151b55] p-6 text-white shadow-xl sm:p-8 md:flex md:items-center md:justify-between">
                    <div>
                        <p className="text-sm text-slate-300">
                            {/* Estimated Additional Cost */}
                            আনুমানিক অতিরিক্ত খরচ

                        </p>
                        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                            80,000–90,000 টাকা
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                            উপরোক্ত অতিরিক্ত খরচসমূহ শিক্ষার্থীকে ব্যক্তিগতভাবে বহন করতে হবে।

                        </p>
                    </div>

                    <Link href="https://wa.me/+8801318185954" target="_blank">
                        <button className="mt-6 rounded-full bg-linear-to-r from-pink-600 to-orange-400 px-7 py-3 font-bold text-white shadow-lg transition hover:scale-105 md:mt-0">
                            এখনই যোগাযোগ করুন
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
import React from "react";


const contactItems = [
    {
        title: "মোবাইল",
        value: "013 1818 5954",
        subtitle: "আযহারী ট্রাভেলস এন্ড ট্যুরস",
        action: "tel:01318185954",
        button: "এখনই কল করুন",
    },
    {
        title: "অফিসের অবস্থান",
        value: "গুগল ম্যাপস লোকেশন",
        subtitle: "গুগল ম্যাপসে সরাসরি অফিসের অবস্থান দেখুন।",
        action: "https://maps.app.goo.gl/XCGEmDw9jyrYoNh36",
        button: "ম্যাপ দেখুন",
    },
];

export default function OurAddressPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                        {/* Contact Information */}
                        যোগাযোগের তথ্য
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                        {/* Our Address */}
                        আমাদের ঠিকানা
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                        {/* Contact us by phone or visit our office for Al-Azhar University
                        admission processing and travel support. */}
                        আমাদের অফিসে ফোন করে বা মাধ্যমে যোগাযোগ করুন, আল-আযহার বিশ্ববিদ্যালয়ের ভর্তি প্রক্রিয়া এবং ভ্রমণের সমর্থনের জন্য।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-2">
                    {contactItems.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-2xl font-black text-[#080b34]">
                                {item.title}
                            </h2>

                            <p className="mt-3 text-xl font-bold text-slate-800">
                                {item.value}
                            </p>

                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                {item.subtitle}
                            </p>

                            <a
                                href={item.action}
                                target={item.title === "Office Map" ? "_blank" : undefined}
                                rel={item.title === "Office Map" ? "noreferrer" : undefined}
                                className="mt-6 inline-block rounded-full bg-linear-to-r from-pink-600 to-orange-400 px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
                            >
                                {item.button}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                        <div>
                            <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
                                {/* Office Address */}
                                অফিসের ঠিকানা
                            </span>

                            <h2 className="mt-4 text-3xl font-black text-[#080b34]">
                                {/* Visit Our Office */}
                                আমাদের অফিসে আসুন
                            </h2>
                        </div>

                        <p className="text-sm leading-8 text-slate-600 sm:text-base">
                            {/* House-2/A, Road-7, Nobinagar Housing, Building beside Sadek Agro,
                            Iron Gate, Dhaka Uddan, Gabtoli Road, Mohammadpur, Dhaka-1207 */}
                            বাসা-2/A, রোড-7, নবিনগর হাউসিং, সদেক এগ্রোর পাশের বিল্ডিং,
                            লোহার গেইট, ঢাকা উদ্যান, গাবতলী রোড, মোহাম্মদপুর, ঢাকা-1207
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
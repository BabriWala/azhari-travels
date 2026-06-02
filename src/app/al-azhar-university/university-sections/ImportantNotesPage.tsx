import React from "react";

const notes = [
    {
        title: "ভাষা কোর্স বাধ্যতামূলক",
        text: "কুল্লিয়াহতে ভর্তির পূর্বে শিক্ষাগত গ্যাপ থাকুক বা না থাকুক, ভাষা কোর্স সম্পন্ন করা বাধ্যতামূলক।",
    },
    {
        title: "ভর্তি পরীক্ষা প্রয়োজন হতে পারে",
        text: "যদি আলিম পাশের বছর এবং বর্তমান শিক্ষাবর্ষের মধ্যে ৩ বছরের বেশি ব্যবধান থাকে, তাহলে কুল্লিয়াহতে ভর্তির জন্য ভর্তি পরীক্ষা বাধ্যতামূলক হতে পারে।",
    },
    {
        title: "শুধুমাত্র ইসলামি বিষয়ে ভর্তি",
        text: "আমরা শুধুমাত্র ইসলামি বিষয়ে ভর্তি প্রক্রিয়া সম্পন্ন করে থাকি। আল আযহারের সাধারণ বিষয়সমূহে অধ্যয়নের খরচ বছরে প্রায় ৬,০০০ মার্কিন ডলার হতে পারে।",
    },
    {
        title: "ছাত্রীদের জন্য মাহরাম আবশ্যক",
        text: "ছাত্রীদের ভর্তি ও হোস্টেলে অবস্থানের জন্য একজন মাহরাম অভিভাবকের সঙ্গে আসা আবশ্যক।",
    },
    {
        title: "মাস্টার্সের জন্য অনার্স সম্পন্ন করা আবশ্যক",
        text: "আল আযহারে অনার্স সম্পন্ন না করলে সেখানে মাস্টার্স পর্যায়ে অধ্যয়নের সুযোগ পাওয়া যাবে না।",
    },
    {
        title: "ইকামাহর মেয়াদ",
        text: "প্রাথমিকভাবে প্রায় ২৩০ মার্কিন ডলারে যে ইকামাহ করা হয়, তার মেয়াদ সাধারণত ৬–৮ মাস থাকে। পরবর্তীতে আল আযহার কর্তৃপক্ষ রেসিডেন্ট কার্ড প্রদান করে।",
    },
    {
        title: "১৮ বছরের কম বয়সী শিক্ষার্থীদের জন্য অভিভাবক",
        text: "১৮ বছরের কম বয়সী শিক্ষার্থীদের ভর্তি ও হোস্টেলে অবস্থানের সময় একজন অভিভাবকের সঙ্গে থাকা আবশ্যক।",
    },
];

export default function ImportantNotesPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 md:py-20 lg:px-8">
                    <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                        {/* Al-Azhar Admission Guide */}
                        আল-আযহার ভর্তি নির্দেশিকা
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-tight text-[#080b34] sm:text-5xl md:text-6xl">
                        {/* Important Notes */}
                        গুরুত্বপূর্ণ নোটসমূহ
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        {/* Please read these important conditions carefully before starting
                        your Al-Azhar University admission process. */}
                        আপনি আল-আযহার বিশ্ববিদ্যালয়ের ভর্তি প্রক্রিয়া শুরু করার আগে এই গুরুত্বপূর্ণ শর্তাবলীগুলি সাবধানে পড়ে নিন।
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {notes.map((note, index) => (
                        <div
                            key={index}
                            className={`rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl ${index === 2 ? "lg:col-span-1" : ""
                                }`}
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-lg font-black text-white">
                                {index + 1}
                            </div>

                            <h2 className="text-xl font-black text-[#080b34]">
                                {note.title}
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {note.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Prepare Before You Apply */}
                        আপনি যাচাই করার আগে প্রস্তুতি নিন
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* Make sure your documents, guardian requirements, academic path, and
                        admission eligibility are clear before beginning the process. */}
                        আপনার নথি, অভিভাবকের প্রয়োজনীয়তা, শিক্ষাগত পথ এবং ভর্তি প্রক্রিয়ার সম্ভাব্যতা সম্পর্কে নিশ্চিত থাকুন যাচাই শুরু করার আগে।
                    </p>
                </div>
            </section>
        </main>
    );
}
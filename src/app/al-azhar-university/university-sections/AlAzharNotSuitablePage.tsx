import React from "react";

const warnings = [
    {
        title: "দীর্ঘমেয়াদি শিক্ষাগ্রহণের প্রতিশ্রুতি",
        text: "আপনি আল আযহারে পড়তে ইচ্ছুক হলে সর্বনিম্ন ৭/৮ বছর পড়াশোনার জন্য আসতে হবে। ইচ্ছে করলে ২০-৩০ বছর পর্যন্ত পড়ারও সুযোগ আছে। তবে মোটামুটি ১০ বছরের মতো পড়াশোনা করতে পারলে হয়তো ভালো একটি যায়গায় যেতে পারবেন। সাত বছরের নিচে যদি আপনি আল আযহারে আসেন। তাহলে আমরা বলব আপনার জীবনকে আপনি নষ্টের দিকে ঠেলে দিয়েছেন,শুধু নষ্ট না এর থেকেও বড় পরিতাপের দিকে ঠেলে দিলেন।",
    },
    {
        title: "পরিবারের সমর্থনের প্রয়োজন",
        text: "অবশ্যই এমন মানসিক প্রস্তুতি নিয়ে আসতে হবে যে আপনি মিশরে থাকাকালীন, অর্থনৈতিকভাবে পরিবারের কোনই হাল ধরতে পারবেন না। বিপরীতে এটাও সর্বোচ্চ জানতে হবে যে খরচের জন্য প্রতিমাসে 10 হাজার করে প্রায় দুই-চার বছর পর্যন্ত বাসা থেকে আনতে হবে!"
    },
    {
        title: "মাসিক খরচ",
        text: "যদি মোটামুটি পড়ার জন্য কিতাব ক্রয় করেন ও বিভিন্ন শায়েখদের কাছে গিয়ে দরস করতে চান, নোট বানান,ইলমের জন্য সফর করেন তাহলে নিশ্চয় 10 হাজারের বেশি লাগবে কম না।",
    },
    {
        title: "স্কলারশিপ নিশ্চিত নয়",
        text: "মিনহা (স্কলারশিপ) যদি ভাগ্যে থাকে তাহলে ভিন্ন কথা। সেটার জন্য ও আছে অফিসে অফিসে কাগজের লড়াই",
    },
    {
        title: "নির্ভরযোগ্য কর্মসংস্থানের সুযোগ নেই",
        text: "মিশরে পড়াশোনার পাশাপাশি কাজের কোন সুযোগ নেই। এটা ১০০% সত্যকথা। হাজার হাজার মিশরীয় যুবকরা বেকার। তরুণীরা মসজিদের বারান্দায়, রাস্তায় বসে আছেন একটি মাত্র পাউন্ডের জন্য। তাহলে ভাবুন আপনাকে কাজ কে প্রদান করবে...? ইউরোপের সাথে এখানকার পড়াশোনার জীবন মোটামুটি অনেকটা আলাদা। অনেক ছাত্র ভাইকে বোঝানো হলে তারা বুঝতে চায় না। তারা ভাবেন আমরা তাদেরকে বাঁধা প্রধান করছি....!",
    },
    {
        title: "আর্থিক চাপ",
        text: "আবেগে এসে অনেক ছাত্রভাই পাঁচ-ছয়মাস পরে অর্থনৈতিকভাবে ভেঙে পড়েছে। তাদের পরিবার টাকা দেয়ার বিষয়ে আগের মতো রেসপন্স করছে না। পরিবার বলছে কিছু করো কিন্তু নীলনদে ঝাপ দেয়া ছাড়া মিশরে কিছুই করার তেমন কিছুই নেই। যাপিত জীবনের চাহিদা বৈবাহিক হায়াতের ফিকির না হয় বাদই দেওয়া হলো। বয়স বেড়ে চলবে। জীবনের চাহিদা,পড়ার টেবিলের চাপ। পরিবার এর চাহনি। আপনাকে কোন পথে নিয়ে যাবে আপনি নিজেই বুঝে ওঠে পারবেন না। তখন হায়-হায় করা ছাড়া কিছুই থাকে না।",
    },
];

export default function AlAzharNotSuitablePage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-[#080b34] text-white">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                            {/* Important Before Admission */}
                            ভর্তির আগে গুরুত্বপূর্ণ বিষয়সমূহ
                        </span>

                        <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                            {/* Who Al-Azhar Is Not Suitable For */}
                            যারা আল আযহার এর জন্য উপযুক্ত নয়
                        </h1>

                        <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                            {/* Students wishing to study at Al-Azhar University must seriously
                            consider the following matters before making a decision. */}
                            ভর্তির আগে ছাত্ররা নিশ্চিতভাবে নিচের বিষয়গুলি বিবেচনা করতে হবে।
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {warnings.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-pink-600 to-orange-400 text-xl font-black text-white">
                                {index + 1}
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

            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                        <h2 className="text-2xl font-black text-[#080b34]">
                            {/* Correct Intention */}
                            সঠিক ইচ্ছা
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                            {/* Traveling to the city of knowledge should be for seeking
                            knowledge, not for earning money. */}
                            জ্ঞানের শহরে যাওয়া জ্ঞান অর্জনের জন্য, টাকা উপার্জনের জন্য নয়।
                        </p>
                    </div>

                    <div className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                        <h2 className="text-2xl font-black text-[#080b34]">
                            {/* Recommended Preparation */}
                            সুপারিশকৃত প্রস্তুতি
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                            {/* It is strongly recommended to come after completing Dawra/Farigh
                            studies. One must have strong determination for higher Islamic
                            education and develop knowledge in Shariah, Islam, world politics,
                            geography, Arabic, and English. */}
                            দাওরায়ে হাদিস/ফারেগ সম্পন্ন করার পর আসা অত্যন্ত ভালো।
                            উচ্চতর ইসলামি শিক্ষা অর্জনের জন্য দৃঢ় সংকল্প থাকতে হবে এবং
                            শরিয়াহ, ইসলাম, বিশ্ব রাজনীতি, ভূগোল, আরবি ও ইংরেজি বিষয়ে
                            ভালো জ্ঞান ও দক্ষতা গড়ে তুলতে হবে।
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-linear-to-r from-[#080b34] to-[#151b55] p-6 text-center text-white shadow-xl sm:p-8">
                    <h2 className="text-2xl font-black sm:text-3xl">
                        {/* Final Note */}
                        বিশেষ পরামর্শ
                    </h2>

                    <p className="mx-auto text-left  mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
                        {/* Everything mentioned above is true in general, although exceptions
                        may exist. Students should make their decision with proper
                        preparation, patience, and sincere intention. */}
                        আবেগে এসে অনেক ছাত্রভাই পাঁচ-ছয়মাস পরে অর্থনৈতিকভাবে ভেঙে পড়েছে। তাদের পরিবার টাকা দেয়ার বিষয়ে আগের মতো রেসপন্স করছে না। পরিবার বলছে কিছু করো কিন্তু নীলনদে ঝাপ দেয়া ছাড়া মিশরে কিছুই করার তেমন কিছুই নেই। যাপিত জীবনের চাহিদা বৈবাহিক হায়াতের ফিকির না হয় বাদই দেওয়া হলো। বয়স বেড়ে চলবে। জীবনের চাহিদা,পড়ার টেবিলের চাপ। পরিবার এর চাহনি। আপনাকে কোন পথে নিয়ে যাবে আপনি নিজেই বুঝে ওঠে পারবেন না। তখন হায়-হায় করা ছাড়া কিছুই থাকে না।
                        <br></br>
                        <br></br>

                        হ্যাঁ স্রোতের বিপরীতে গিয়ে খোদ অনেক কিছুই করা যায়। কিন্তু সেটাও বা আপনা-আপনি কতজনই বা করতে পারে! সেখানেও আছে দক্ষতার অর্জন ও পরিশ্রম। তাই ইলমের শহরে ইলমের জন্য সফর করা উচিত অর্থের জন্য না।
                        <br></br>
                        <br></br>
                        অবশ্যই দাওরা ফারেগের পরে আসতে হবে। আমি মনে করি এটা বাধ্যতামূলক। সে ক্ষেত্রে উচ্চমাধ্যমিক-উচ্চস্তরের পড়াশোনার প্রচুর মন-মানসিকতা থাকতে হবে যেকোনো পরিস্থিতিতে। শরীয়ত,ইসলাম,বিশ্ব রাজনীতি, ভূগোল,আরবি-ইংলিশ ভাষার দক্ষতা অবশ্যই আপনার অর্জন করতে হবে! তা-না হলে ইলমের শহরে আপনি একজন মুসাফির মাত্র ! না পারবেন দু-কথা বলতে আর না পারবেন দু-কথা জানতে ...! আর বিশ্বব্যাপী ইসলাম সম্পর্কে মোটামুটি ভালো ধারনা ত থাকতেই হবে...!
                        <br></br>
                        <br></br>
                        উপরে যা কিছু বলা হয়েছে তা সাধারণভাবে সত্য, যদিও ব্যতিক্রম থাকতে পারে। ছাত্রদের উচিত সঠিক প্রস্তুতি, ধৈর্য এবং আন্তরিক ইচ্ছা নিয়ে তাদের সিদ্ধান্ত নেওয়া।
                    </p>
                </div>
            </section>
        </main>
    );
}
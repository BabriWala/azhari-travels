import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';



export default async function PackageDetails({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    console.log(slug)
    const tourPackages = [
        {
            slug: "student-package",
            content: <section className="py-10 md:py-20 dark:bg-background.dark text-gray-800 dark:text-gray-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                        মিশর স্টুডেন্ট ভিসা প্যাকেজ
                    </h2>

                    {/* Visa Information */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"lineicons:visa"}></Icon></div> <span>ভিসা:</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            ছাত্রদের জন্য মিশরের অন-অ্যারাইভেল ভিসা প্রদান করা হবে। এর জন্য শুধুমাত্র পাসপোর্টের স্ক্যান কপি ও ছবি প্রয়োজন।
                            ভিসার এপ্রুভাল আসতে প্রায় ১০-১৫ দিন সময় লাগে।
                        </p>
                    </div>

                    {/* Ticket Information */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"mingcute:ticket-fill"}></Icon></div> <span>টিকিট:</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            গাল্ফ এয়ার অথবা ইজিপ্ট এয়ারের টিকিটের ব্যবস্থা করা হবে।
                        </p>
                    </div>

                    {/* Offer Letter */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"mingcute:document-fill"}></Icon></div> <span>অফার লেটার:</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            মিশরের একটি বিশ্ববিদ্যালয়ের অফার লেটার সরবরাহ করা হবে।
                        </p>
                    </div>

                    {/* Accommodation */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"material-symbols:house"}></Icon></div> <span> বাসা:</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            গমনের পূর্বে ছাত্রদের জন্য মনোরম পরিবেশে বাসা নির্ধারণ করে রাখা হবে। বাসার এডভান্স, সামানার চাঁদা এবং এক মাসের ভাড়া দেওয়া থাকবে।
                            গমনের পর প্রথম দুই দিন মেহমানদারির ব্যবস্থাও থাকবে।
                        </p>
                    </div>

                    {/* Admission Process */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"ri:graduation-cap-fill"}></Icon></div> <span>ভর্তি:</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            মিশরে পৌঁছানোর পরের দিন আব্বাসিয়্যাহর সীল, মেডিক্যাল পরীক্ষা এবং বাংলাদেশ দূতাবাস থেকে এম্বেসী লেটার গ্রহণের ব্যবস্থা করা হবে।
                            সকল ফি এবং যাতায়াত আমাদের প্যাকেজের অন্তর্ভুক্ত।
                        </p>
                    </div>
                </div>
            </section>,
        },
        {
            slug: "umrah-and-egypt-package",
            content: <section className="py-10 md:py-20 dark:bg-background.dark text-gray-800 dark:text-gray-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                        ওমরাহ ও মিশর প্যাকেজ - ২,২৫,০০০/-
                    </h2>

                    {/* Package Includes */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            📙 প্যাকেজে যা যা থাকছে :
                        </h3>
                        <ul className="space-y-2">
                            <li>✈ এয়ার টিকিট ( সরাসরি ফ্লাইট )</li>
                            <li>📄 ভিসা</li>
                            <li>🚌 সম্পূর্ণ ট্রান্সপোর্ট সেবা ( মিশরে ৫ দিনের জন্য রিজার্ভ বাস থাকবে )</li>
                            <li>🍽 মক্কা ও মদিনায় দেশীয় খাবার</li>
                            <li>🍽 মিশরে ৩ বেলা দেশীয় খাবার এবং নাস্তা</li>
                            <li>🏨 মিশরে ৪ তারকা হোটেল ( ৩/৪ জন এক রুমে)</li>
                            <li>🏨 মক্কা ও মদিনায় স্ট্যান্ডার্ড মানের হোটেল ( প্রতি রুমে ৪/৫জন )</li>
                            <li>🕋 মক্কায় ঐতিহাসিক স্থানসমূহ পরিদর্শন - জিয়ারা</li>
                            <li>🌄 মদিনায় ঐতিহাসিক স্থানসমূহ পরিদর্শন - জিয়ারা</li>
                            <li>🕌 মক্কা মদিনায় অভিজ্ঞ মুয়াল্লিম</li>
                            <li>🛂 মিশরে গাইড সার্ভিস</li>
                            <li>🌇 মিশর ভ্রমণ</li>
                            <li>💶 সকল স্থানে প্রবেশের ফি ( আলেকজান্দ্রিয়া লাইব্রেরী ছাড়া)</li>
                        </ul>
                    </div>

                    {/* Hotel Information */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            ⏩ উমরা ও মিশর প্যাকেজে হোটেলের তথ্যঃ
                        </h3>
                        <ul className="space-y-2">
                            <li>🕋 মক্কা হোটেলঃ (৪০০- ৬০০ মিটার)</li>
                            <li>🕌 মদিনা হোটেলঃ (২০০-৪০০ মিটার দূরত্বে)</li>
                            <li>🏰 মিশর হোটেল : ৪ তারকা হোটেল। গিজা এরিয়াতে।</li>
                        </ul>
                    </div>

                    {/* Makkah Ziara Spots */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            ✅ মক্কা জিয়ারার স্পটসমূহ :
                        </h3>
                        <ul className="space-y-2">
                            <li>🚌 নবীজির বাড়ী</li>
                            <li>🚌 জাবালে সাওর</li>
                            <li>🚌 হেরা গুহা</li>
                            <li>🚌 আরাফার ময়দান</li>
                            <li>🚌 মিনা</li>
                            <li>🚌 মুজদালিফা</li>
                            <li>🚌 জান্নাতুল মোআল্লা</li>
                            <li>🚌 জিন মসজিদ</li>
                        </ul>
                    </div>

                    {/* Madinah Ziara Spots */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            ✅ মদিনা মনোয়ারা জিয়ারার স্পটসমূহ :
                        </h3>
                        <ul className="space-y-2">
                            <li>🚌 জান্নাতুল বাকী</li>
                            <li>🚌 খন্দকের ময়দান</li>
                            <li>🚌 উহুদ পাহাড়</li>
                            <li>🚌 মাকবারায়ে শোহাদায়ে উহুদ</li>
                            <li>🚌 মসজিদে কিবলাতাইন</li>
                            <li>🚌 মসজিদে কুবা</li>
                            <li>🚌 মসজিদে বেলাল রাযি</li>
                            <li>🚌 মসজিদে আবু বকর রাযি</li>
                            <li>🚌 মসজিদে গমামাহ</li>
                        </ul>
                    </div>

                    {/* Egypt Travel Details */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            🌁 মিশর ভ্রমণ বিস্তারিত :
                        </h3>
                        <ul className="space-y-2">
                            <li>✈ ১ম দিন: ঢাকা থেকে কায়রো (রাতে কায়রো পৌছাবে) ইনশাআল্লাহ।</li>
                            <li>🏞 ২য় দিন: সকালে নাস্তা শেষ করে পুরো দিন পিরামিড, ইজিপ্টিয়ান মিউজিয়াম, সাক্কারা পরিদর্শন এবং নিল নদ ভ্রমণ।</li>
                            <li>🏰 ৩য় দিন: আলেকজান্দ্রিয়ায় ভ্রমণ - নবী দানিয়েল (আঃ), আলেকজান্দ্রিয়া বাতিঘর ও কেল্লা কাইতবাই পরিদর্শন, আলেকজান্দ্রিয়া লাইব্রেরী পরিদর্শন বাহির থেকে।</li>
                            <li>🕌 ৪র্থ দিন: সালাহ উদ্দিন আয়ুবীর কেল্লা, মুহাম্মদ আলী মসজিদ, আমর ইবনে আস মসজিদ এবং আল আজহার পার্ক পরিদর্শন।</li>
                            <li>🏛 ৫ম দিন: তুর পাহাড় এবং সাহারা মরুভুমি ভ্রমণ।</li>
                            <li>✈ ৬ষ্ঠ দিন: উমরা/দেশের উদ্দেশ্যে রওনা করবো। ইনশাআল্লাহ।</li>
                        </ul>
                    </div>

                    {/* Package Exclusions */}
                    <div>
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            ❌ প্যাকেজ অন্তর্ভুক্ত নয় :
                        </h3>
                        <ul className="space-y-2">
                            <li>☑ তায়েফ, বদর ও ওয়াদি জ্বীন জিয়ারাত অন্তর্ভুক্ত নয়।</li>
                            <li>☑ ব্যক্তিগত খরচ।</li>
                        </ul>
                    </div>
                </div>
            </section>,
        },
        {
            slug: "umrah-package",
            content: <section className="py-10 md:py-20 dark:bg-background.dark text-gray-800 dark:text-gray-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                        ওমরাহ প্রিমিয়াম প্যাকেজ - ১,৩০,০০০/-
                    </h2>

                    {/* Package Includes */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            📙 প্যাকেজে যা যা থাকছে :
                        </h3>
                        <ul className="space-y-2">
                            <li>✈ রিটার্ন এয়ার টিকিট</li>
                            <li>📄 ভিসা</li>
                            <li>🚌 সম্পূর্ণ ট্রান্সপোর্ট সেবা</li>
                            <li>🍽 মক্কা ও মদিনায় দেশীয় খাবার</li>
                            <li>🏨 মক্কা ও মদিনায় স্ট্যান্ডার্ড মানের হোটেল ( প্রতি রুমে ৪/৫জন )</li>
                            <li>🕋 মক্কায় ঐতিহাসিক স্থানসমূহ পরিদর্শন - জিয়ারা★</li>
                            <li>🌄 মদিনায় ঐতিহাসিক স্থানসমূহ পরিদর্শন - জিয়ারা★</li>
                            <li>🕌 মক্কা মদিনায় অভিজ্ঞ মুয়াল্লিম</li>
                            <li>💶 সকল স্থানে প্রবেশের ফি</li>
                            <li>🕋 মক্কা হোটেলঃ (৪০০- ৬০০ মিটার)</li>
                            <li>🕌 মদিনা হোটেলঃ (২০০-৪০০ মিটার দূরত্বে)</li>
                        </ul>
                    </div>

                    {/* Makkah Ziara Spots */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            ✅ মক্কা জিয়ারার স্পটসমূহ :
                        </h3>
                        <ul className="space-y-2">
                            <li>🚌 নবীজির বাড়ী</li>
                            <li>🚌 জাবালে সাওর</li>
                            <li>🚌 হেরা গুহা</li>
                            <li>🚌 আরাফার ময়দান</li>
                            <li>🚌 মিনা</li>
                            <li>🚌 মুজদালিফা</li>
                            <li>🚌 জান্নাতুল মোআল্লা</li>
                            <li>🚌 জিন মসজিদ</li>
                        </ul>
                    </div>

                    {/* Madinah Ziara Spots */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            ✅ মদিনা মনোয়ারা জিয়ারার স্পটসমূহ :
                        </h3>
                        <ul className="space-y-2">
                            <li>🚌 জান্নাতুল বাকী</li>
                            <li>🚌 খন্দকের ময়দান</li>
                            <li>🚌 উহুদ পাহাড়</li>
                            <li>🚌 মাকবারায়ে শোহাদায়ে উহুদ</li>
                            <li>🚌 মসজিদে কিবলাতাইন</li>
                            <li>🚌 মসজিদে কুবা</li>
                            <li>🚌 মসজিদে বেলাল রাযি</li>
                            <li>🚌 মসজিদে আবু বকর রাযি</li>
                            <li>🚌 মসজিদে গমামাহ</li>
                        </ul>
                    </div>

                    {/* Package Exclusions */}
                    <div>
                        <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-4">
                            ❌ প্যাকেজ অন্তর্ভুক্ত নয় :
                        </h3>
                        <ul className="space-y-2">
                            <li>☑ তায়েফ, বদর ও ওয়াদি জ্বীন জিয়ারাত অন্তর্ভুক্ত নয়।</li>
                            <li>☑ ব্যক্তিগত খরচ।</li>
                        </ul>
                    </div>
                </div>
            </section>,
        },

    ]

    const TOURPACKAGE = tourPackages.find((it) => it.slug === slug);
    console.log(slug)
    if (!TOURPACKAGE) {
        return <p>PACKAGE post not found</p>; // Handle 404 or missing content here
    }
    return (
        <div className="bg-gradient-secondary">
            <div className="container mx-auto py-[64px] lg:px-8">
                {TOURPACKAGE.content}
            </div>
        </div>
    );
};

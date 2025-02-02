import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const AUContent = () => {
    return (
        <section className="py-10 md:py-20  text-gray-800 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    মিশর স্টুডেন্ট ভিসা প্যাকেজ
                </h2>

                {/* Visa Information */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"lineicons:visa"}></Icon></div> <span>ভিসা:</span>
                    </h3>
                    <p className="text-gray-600 ">
                        ছাত্রদের জন্য মিশরের অন-অ্যারাইভেল ভিসা প্রদান করা হবে। এর জন্য শুধুমাত্র পাসপোর্টের স্ক্যান কপি ও ছবি প্রয়োজন।
                        ভিসার এপ্রুভাল আসতে প্রায় ১০-১৫ দিন সময় লাগে।
                    </p>
                </div>

                {/* Ticket Information */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"mingcute:ticket-fill"}></Icon></div> <span>টিকিট:</span>
                    </h3>
                    <p className="text-gray-600 ">
                        গাল্ফ এয়ার অথবা ইজিপ্ট এয়ারের টিকিটের ব্যবস্থা করা হবে।
                    </p>
                </div>

                {/* Offer Letter */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"mingcute:document-fill"}></Icon></div> <span>অফার লেটার:</span>
                    </h3>
                    <p className="text-gray-600 ">
                        মিশরের একটি বিশ্ববিদ্যালয়ের অফার লেটার সরবরাহ করা হবে।
                    </p>
                </div>

                {/* Accommodation */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"material-symbols:house"}></Icon></div> <span> বাসা:</span>
                    </h3>
                    <p className="text-gray-600 ">
                        গমনের পূর্বে ছাত্রদের জন্য মনোরম পরিবেশে বাসা নির্ধারণ করে রাখা হবে। বাসার এডভান্স, সামানার চাঁদা এবং এক মাসের ভাড়া দেওয়া থাকবে।
                        গমনের পর প্রথম দুই দিন মেহমানদারির ব্যবস্থাও থাকবে।
                    </p>
                </div>

                {/* Admission Process */}
                {/* <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center"><Icon className='w-5 h-5' icon={"ri:graduation-cap-fill"}></Icon></div> <span>ভর্তি:</span>
                        </h3>
                        <p className="text-gray-600 ">
                            মিশরে পৌঁছানোর পরের দিন আব্বাসিয়্যাহর সীল, মেডিক্যাল পরীক্ষা এবং বাংলাদেশ দূতাবাস থেকে এম্বেসী লেটার গ্রহণের ব্যবস্থা করা হবে।
                            সকল ফি এবং যাতায়াত আমাদের প্যাকেজের অন্তর্ভুক্ত।
                        </p>
                    </div> */}
            </div>
        </section>
    );
};

export default AUContent;
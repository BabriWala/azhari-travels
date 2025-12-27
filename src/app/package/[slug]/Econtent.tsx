
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Econtent = () => {
    return (
        <section className="py-10 md:py-20  text-gray-800 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    মিশর ভ্রমণ প্যাকেজ - ১,৫০,০০০/-
                </h2>

                {/* Package Includes */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-2">
                        <Icon className='w-8 h-8' icon={"material-symbols:package-outline"}></Icon> <span>প্যাকেজে যা যা থাকছে :</span>
                    </h3>
                    <ul className="space-y-2 ps-10">
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> রিটার্ন এয়ার টিকিট</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> ভিসা</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> সম্পূর্ণ ট্রান্সপোর্ট সেবা</li>

                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> হোটেল ৩স্টার মানের</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon>দেশীয় খাবার</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> <div><strong>১ম দিন:</strong> ঢাকা থেকে কায়রো (রাতে কায়রো পৌছাবে) ইনশাআল্লাহ।</div></li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> <div><strong>২য় দিন:</strong> সকালে নাস্তা শেষ করে পুরো দিন পিরামিড, ইজিপ্টিয়ান মিউজিয়াম, সাক্কারা পরিদর্শন এবং নিল নদ ভ্রমণ।</div></li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> <div><strong>৩য় দিন:</strong> আলেকজান্দ্রিয়ায় ভ্রমণ - নবী দানিয়েল (আঃ), আলেকজান্দ্রিয়া বাতিঘর ও কেল্লা কাইতবাই পরিদর্শন, আলেকজান্দ্রিয়া লাইব্রেরী পরিদর্শন বাহির থেকে।</div></li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> <div><strong>৪র্থ দিন:</strong> সালাহ উদ্দিন আয়ুবীর কেল্লা, মুহাম্মদ আলী মসজিদ, আমর ইবনে আস মসজিদ এবং আল আজহার পার্ক পরিদর্শন।</div></li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> <div><strong>৫ম দিন:</strong> তুর পাহাড় এবং সাহারা মরুভুমি ভ্রমণ।</div></li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> <div><strong>৬ষ্ঠ দিন:</strong> দেশের উদ্দেশ্যে রওনা করবো। ইনশাআল্লাহ।</div></li>

                    </ul>
                </div>

                {/* Package Exclusions */}
                <div>
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-2">
                        <Icon className='w-8 h-8' icon={"oui:cross-in-circle-filled"}></Icon> <span>প্যাকেজ অন্তর্ভুক্ত নয় :</span>

                    </h3>
                    <ul className="space-y-2 ps-10">
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> কায়রো এয়ারপোর্ট এ ভিসার স্টিকার ক্রয় করার জন্য ২৫ ডলার অন্তর্ভূক্ত নয়</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> ব্যক্তিগত খরচ।</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Econtent;
import { Icon } from '@iconify/react/dist/iconify';
import React from 'react';

const UContent = () => {
    return (
        <section className="py-10 md:py-20  text-gray-800 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    ওমরাহ প্রিমিয়াম প্যাকেজ - ১,৩০,০০০/-
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
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> মক্কা ও মদিনায় দেশীয় খাবার</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> মক্কা ও মদিনায় স্ট্যান্ডার্ড মানের হোটেল ( প্রতি রুমে ৪/৫জন )</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> মক্কায় ঐতিহাসিক স্থানসমূহ পরিদর্শন - জিয়ারা★</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> মদিনায় ঐতিহাসিক স্থানসমূহ পরিদর্শন - জিয়ারা★</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> মক্কা মদিনায় অভিজ্ঞ মুয়াল্লিম</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> সকল স্থানে প্রবেশের ফি</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> মক্কা হোটেলঃ (৪০০- ৬০০ মিটার)</li>
                        <li className='flex items-center gap-2'><Icon icon={"material-symbols:circle-outline"}></Icon> মদিনা হোটেলঃ (২০০-৪০০ মিটার দূরত্বে)</li>
                    </ul>
                </div>

                {/* Makkah Ziara Spots */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-2">
                        <Icon className='w-8 h-8' icon={"mingcute:location-2-fill"}></Icon> <span>মক্কা জিয়ারার স্পটসমূহ :</span>
                    </h3>
                    <ul className="space-y-2 ps-10">
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> নবীজির বাড়ী</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> জাবালে সাওর</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> হেরা গুহা</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> আরাফার ময়দান</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মিনা</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মুজদালিফা</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> জান্নাতুল মোআল্লা</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> জিন মসজিদ</li>
                    </ul>
                </div>

                {/* Madinah Ziara Spots */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-2">
                        <Icon className='w-8 h-8' icon={"mingcute:location-2-fill"}></Icon> <span>মদিনা মনোয়ারা জিয়ারার স্পটসমূহ :</span>

                    </h3>

                    <ul className="space-y-2 ps-10">
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> জান্নাতুল বাকী</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> খন্দকের ময়দান</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> উহুদ পাহাড়</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মাকবারায়ে শোহাদায়ে উহুদ</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মসজিদে কিবলাতাইন</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মসজিদে কুবা</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মসজিদে বেলাল রাযি</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মসজিদে আবু বকর রাযি</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> মসজিদে গমামাহ</li>
                    </ul>
                </div>

                {/* Package Exclusions */}
                <div>
                    <h3 className="text-2xl font-semibold text-primary  mb-4 flex items-center gap-2">
                        <Icon className='w-8 h-8' icon={"oui:cross-in-circle-filled"}></Icon> <span>প্যাকেজ অন্তর্ভুক্ত নয় :</span>

                    </h3>
                    <ul className="space-y-2 ps-10">
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> তায়েফ, বদর ও ওয়াদি জ্বীন জিয়ারাত অন্তর্ভুক্ত নয়।</li>
                        <li className='flex items-center gap-2'><div><Icon icon={"material-symbols:circle-outline"}></Icon></div> ব্যক্তিগত খরচ।</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default UContent;
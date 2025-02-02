import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-gradient-secondary">
            <img
                src="/gallery/Gallery_05.webp"
                alt="Refund Policy Image"
                className="w-full h-80 mt-[62px] object-cover rounded-t-lg mb-6"
            />
            <div className="container mx-auto px-4 py-10 lg:px-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">রিফান্ড পলিসি</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-semibold text-gray-800">মিশরের ভিসা ফি রিফান্ডের প্রক্রিয়া</h3>
                    <p className='text-justify'>
                        মিশরের ভিসা ফী সাধারণত রিফান্ডযোগ্য নয়। যখন আপনি ভিসার জন্য আবেদন করেন, তখন সেই ফী সরকারী প্রক্রিয়াকরণের জন্য ব্যবহৃত হয় এবং আবেদনটি যদি বাতিল বা প্রত্যাখ্যাত হয়, তাও এই ফী ফেরত দেওয়া হয় না। তবে কিছু বিশেষ ক্ষেত্রে, যেমন যদি আবেদনকারীর তথ্য ভুলভাবে দেওয়া হয় বা ভিসার প্রক্রিয়াকরণে কোনো সমস্যা দেখা দেয়, সেক্ষেত্রে রিফান্ডের জন্য আবেদন করা যেতে পারে। এর জন্য আপনাকে মিশরের দূতাবাস বা কনস্যুলেটের সাথে যোগাযোগ করতে হবে এবং তাদের নির্দিষ্ট নীতিমালা অনুসরণ করতে হবে।
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800">এয়ার টিকিট রিফান্ড প্রক্রিয়া</h3>
                    <p className='text-justify'>এয়ার টিকিট রিফান্ড করার জন্য আপনাকে কিছু ধাপ অনুসরণ করতে হবে:</p>

                    <ol className="list-decimal list-inside space-y-3">
                        <li className='text-justify'>
                            <span className="font-semibold">এয়ারলাইন্সের নীতিমালা জানুন:</span> প্রথমে, আপনি যে এয়ারলাইন্সের টিকেট কিনেছেন তাদের রিফান্ড নীতিমালা সম্পর্কে জানুন। বিভিন্ন এয়ারলাইন্সের আলাদা আলাদা নীতিমালা থাকতে পারে।
                        </li>
                        <li className='text-justify'>
                            <span className="font-semibold">যোগাযোগ করুন গ্রাহক সেবা:</span> আপনার টিকিটের রিফান্ডের জন্য এয়ারলাইন্সের গ্রাহক সেবা নম্বরে যোগাযোগ করুন অথবা তাদের অফিসিয়াল ওয়েবসাইটে গিয়ে সাহায্য নিন।
                        </li>
                        <li className='text-justify'>
                            <span className="font-semibold">অর্ডার নম্বর ও তথ্য প্রস্তুত রাখুন:</span> রিফান্ড প্রক্রিয়া শুরু করার জন্য আপনার টিকিটের অর্ডার নম্বর, যাত্রীর নাম এবং অন্যান্য প্রয়োজনীয় তথ্য প্রস্তুত রাখুন।
                        </li>
                        <li className='text-justify'>
                            <span className="font-semibold">অনলাইন আবেদন করুন (যদি সম্ভব হয়):</span> অনেক এয়ারলাইন্স তাদের ওয়েবসাইটে অনলাইন রিফান্ড আবেদন করার সুযোগ দেয়। এই ক্ষেত্রে, আপনাকে প্রয়োজনীয় তথ্য পূরণ করে আবেদন করতে হবে।
                        </li>
                        <li className='text-justify'>
                            <span className="font-semibold">রিফান্ড প্রক্রিয়ার অপেক্ষা করুন:</span> আবেদন করার পর, আপনার রিফান্ড প্রসেসিং হতে কিছু সময় লাগতে পারে। সাধারণত ৭-১৪ কার্যদিবসের মধ্যে এটি সম্পন্ন হয়।
                        </li>
                        <li className='text-justify'>
                            <span className="font-semibold">ব্যাংক অ্যাকাউন্ট চেক করুন:</span> রিফান্ড হওয়ার পর নিশ্চিত হয়ে নিন যে আপনার ব্যাংক অ্যাকাউন্টে টাকা জমা হয়েছে।
                        </li>
                    </ol>

                    <p>
                        যদি কোন সমস্যা বা প্রশ্ন থাকে, তাহলে আবারও গ্রাহক সেবার সাথে যোগাযোগ করুন।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;

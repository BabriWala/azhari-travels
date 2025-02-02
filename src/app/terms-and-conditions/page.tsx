import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-gradient-secondary">
            <img
                src="/gallery/Gallery_06.webp"
                alt="Terms and Conditions"
                className="w-full h-80 mt-[62px] object-cover rounded-t-lg mb-6"
            />
            <div className="container px-4 mx-auto py-10 pb-20 lg:px-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">টার্মস এন্ড কন্ডিশন</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p className='text-justify'><strong>১.</strong> গমনকারী স্বীয় কোন কারণবশত না যেতে চাইলে ভিসার জন্য নেওয়া অগ্রিম ত্রিশ হাজার টাকা ফেরতযোগ্য নয়।</p>
                    <p className='text-justify'><strong>২.</strong> এজেন্সি কোন কারণে ভিসা করে দিতে না পারলে পূর্ণাঙ্গ টাকা ফেরত দেওয়া হবে।</p>
                    <p className='text-justify'><strong>৩.</strong> ইমিগ্রেশন অথবা বোর্ডিং পাসে গমনকারীস অথবা এয়ারলাইন্স অথবা গমন ইচ্ছুক দেশের কোন সমস্যার কারণে যাত্রীকে ফেরত পাঠালে এজেন্সি এর দায়ভার নিবে না।</p>
                    <p className='text-justify'><strong>৪.</strong> ভিসার এপ্রুভালের জন্য সর্বনিম্ন ১৫ দিন গ্রহণ করা হবে এবং এপ্রুভাল আসার সাত দিন পর সে ফ্লাইট করতে পারবে।</p>
                    <p className='text-justify'><strong>৫.</strong> ভিসার এপ্রুভাল আসার তিনদিনের মধ্যে পরিপূর্ণ টাকা পরিশোধ করতে হবে অন্যথায় তাকে জরিমানার সম্মুখীন হতে হবে।</p>
                    <p className='text-justify'><strong>৬.</strong> কোন যৌক্তিক কারণে এজেন্সি চুক্তির টাকা বৃদ্ধি করতে পারবে।</p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
// src/components/AboutUs.tsx
"use client";

import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section className="py-10 md:py-20 bg-gradient-secondary dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-between">
                    <div className="md:w-2/6 mt-6 md:mt-0">
                        <img
                            src="/about/About.jpg" // Replace with a valid Pexels image link
                            alt="Travel Experience"
                            className=" h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-5/6 text-center md:text-start">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-6">
                            আমাদের সম্পর্কে
                        </h2>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark mb-4">
                            আযহারী ট্রাভেলস এন্ড ট্যুরস একটি সরকার অনুমোদিত প্রতিষ্ঠান। যা ২০২৪ সালে প্রতিষ্ঠিত হয়েছে। আযহারী ট্রাভেলস সম্মানের সহিত এখন পর্যন্ত অসংখ্য ছাত্রদের স্বপ্ন পূরণ করেছে স্বল্প খরচে।
                        </p>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark mb-4">
                            আযহারী ট্রাভেলস এন্ড ট্যুরস এর মাধ্যমে যেসকল ছাত্র আল আযহার বিশ্ববিদ্যালয় পড়াশোনা করতে গিয়েছেন তাদের সসম্মানে ভর্তিসহ থাকার ব্যবস্থা করে দিয়ে আসছে। যাতে ছাত্ররা সেখানে খুব সহজেই খাপ খাওয়াতে পারে।
                        </p>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark font-bold">
                            সকল ছাত্রদের একটিই ভরসা আযহারী ট্রাভেলস এন্ড ট্যুরস
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;

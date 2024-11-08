// src/components/FAQ.tsx
"use client";

import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "ভ্রমণের আগেই সকল টাকা জমা দিতে হবে?",
        answer:
            "জী ভ্রমণের আগেই সকল টাকা জমা দিতে হবে।",
    },
    {
        question: "আমি যদি আমার ভ্রমণটি বাতিল করতে চায়?",
        answer:
            "আপনি আপনার ভ্রমণটি বাতিল করতে চাইলে ভিসা প্রসেসিং শুরু হওয়ার আগেই আপনাকে বলতে হবে।",
    },
    {
        question: "আমি যদি আমার ভ্রমণটি বাতিল করি তাহলে কি সকল টাকা রিটার্ন পাবো?",
        answer:
            "ভিসা প্রসেসিং এর আগে বাতিল করলে রিফান্ড পাবে তবে ভিসা প্রসেসিং শুরু হলে যাবতীয় খরচ বাদে রিফান্ড পাবেন তবে প্যাকেজ এর ক্ষেত্রে ভিন্ন",
    },
    {
        question: "ভিসা প্রসেসিং শেষ হতে কতদিন সময় লাগে ?",
        answer:
            "5-6 মাস",
    },
    {
        question: "আপনাদের প্রতিষ্ঠানটি সরকার নিবন্ধিত।",
        answer:
            "জী আমাদের প্রতিষ্ঠানটি সরকার নিবন্ধিত আমাদরে ট্রেড লাইসেন্স নং: 5657",
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-background-lightOdd dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    আপনার জিজ্ঞাসা!
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-background-light p-4 dark:bg-gray-800 rounded-lg shadow-md"
                        >
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="w-full text-left  flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-primary dark:text-text.dark">
                                    {item.question}
                                </span>
                                <span className="text-primary.DEFAULT">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t mt-2 bg-white rounded-md dark:border-gray-700">
                                    <p className="text-primary dark:text-gray-300">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

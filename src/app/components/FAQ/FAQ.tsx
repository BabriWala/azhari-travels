// src/components/FAQ.tsx
"use client";

import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What types of travel services do you offer?",
        answer:
            "We offer a variety of travel services including flight bookings, hotel reservations, travel insurance, and custom itinerary planning.",
    },
    {
        question: "How do I book a trip with you?",
        answer:
            "You can book a trip by contacting us through our website or by phone. We will assist you with all the details and options available.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept various payment methods including credit cards, PayPal, and bank transfers.",
    },
    {
        question: "Can I make changes to my booking?",
        answer:
            "Yes, you can make changes to your booking. Please contact us as soon as possible to discuss your options.",
    },
    {
        question: "Do you offer travel insurance?",
        answer:
            "Yes, we offer travel insurance as part of our services. It's highly recommended for all travelers.",
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-background-light dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light dark:text-text.dark mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md"
                        >
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-text-light dark:text-text.dark">
                                    {item.question}
                                </span>
                                <span className="text-primary.DEFAULT">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-gray-600 dark:text-gray-300">
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

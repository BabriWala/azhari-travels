// src/components/HowWeWork.tsx
"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface Step {
    title: string;
    description: string;
    icon: string; // Using JSX.Element for the icon
}

const steps: Step[] = [
    {
        title: "চুক্তিপত্র",
        description:
            "আমাদের সাথে চুক্তিপত্রে আবদ্ধ হতে হবে।",
        icon: "hugeicons:agreement-01",
    },
    {
        title: "ভিসা এপ্রুভাল",
        description:
            "ভিসা প্রসেসিং এর জন্য আবেদন",
        icon: "wpf:approval",
    },
    {
        title: "টিকেট বুকিং",
        description:
            "আপনার ভ্রমণের টিকেটটি ক্রয় করা হবে",
        icon: "mingcute:ticket-fill",
    },
    {
        title: "ভ্রমণ",
        description:
            "আপনার ভ্রমণ শুরু",
        icon: "ri:plane-line",
    },
];

const HowWeWork: React.FC = () => {
    return (
        <section className="py-12 bg-background-light dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    আমরা যেভাবে কাজ করে থাকি
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                        >
                            <div className="mb-4">
                                <Icon className="w-10 h-10 text-background-light" icon={step.icon}></Icon>
                            </div>
                            <h3 className="text-lg font-bold text-primary.DEFAULT mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

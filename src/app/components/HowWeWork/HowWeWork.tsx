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
            "আমাদের সাথে চুক্তিপত্রে আবদ্ধ হতে হবে",
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
        title: "ওকে টু বোর্ড",
        description:
            "ওকে টু বোর্ড সংগ্রহ করুন",
        icon: "game-icons:boarding-pass",
    },
    {
        title: "ফ্লাইট",
        description:
            "আপনার ফ্লাইট শুরু",
        icon: "ri:plane-line",
    },
    {
        title: "রিসিভ",
        description:
            "এয়ারপোর্ট রিসিভ",
        icon: "solar:card-recive-bold-duotone",
    },
    {
        title: "ভর্তি",
        description:
            "ভর্তি কার্যক্রম শুরু",
        icon: "material-symbols:other-admission",
    },
];

const HowWeWork: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-secondary dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    আমরা যেভাবে কাজ করে থাকি
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-gradient-third dark:bg-gray-800 rounded-lg shadow-md p-10 flex flex-col items-center text-center"
                        >
                            <div className="mb-4">
                                <Icon className="w-10 h-10 text-primary" icon={step.icon}></Icon>
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

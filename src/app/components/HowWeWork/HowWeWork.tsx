// @ts-nocheck
// src/components/HowWeWork.tsx
"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

// Variants for text animations
const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.8 } }, // Slide out
};

// Variants for package cards with staggered delay
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.3 }, // Delay based on index
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: 50,
        transition: { duration: 0.8, delay: i * 0.3 }, // Delay based on index
    }),
};

const HowWeWork: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.1, // Trigger when 20% of section is visible
    });
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}

            className="py-10 md:py-20 bg-gradient-secondary ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    আমরা যেভাবে কাজ করে থাকি
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            custom={index} // Pass index for staggered delay
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="bg-gradient-third  rounded-lg shadow-md p-10 flex flex-col items-center text-center"
                        >
                            <div className="mb-4">
                                <Icon className="w-10 h-10 text-primary" icon={step.icon}></Icon>
                            </div>
                            <h3 className="text-lg font-bold text-primary.DEFAULT mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 ">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <Link className="inline-block w-full text-center mt-8" href={'/how-we-work'}>
                    <button className="mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white   transition duration-300">
                        বিস্তারিত দেখুন
                    </button>
                </Link>
            </div>
        </motion.section>
    );
};

export default HowWeWork;

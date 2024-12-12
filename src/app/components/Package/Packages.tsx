
// @ts-nocheck
// src/components/Packages.tsx
"use client"
import React from "react";
import PackageCard from "./PackageCard";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const packageOptions = [
    {
        title: "স্টুডেন্ট",
        slug: "student-package",
        // price: "১ লক্ষ ২০ হাজার",
        price: "১ লক্ষ ১০ হাজার",
        features: ["ভিসা", "টিকেট", "অফার লেটার", "ভর্তি", "বাসা",],
    },
    {
        title: "ওমরাহ এবং মিশর ভ্রমণ",
        slug: "umrah-and-egypt-package",
        price: "২ লক্ষ ২৫ হাজার",
        features: ["মিশর ও ওমরাহ ভিসা", "ডিরেক্ট ফ্লাইট টিকেট", "টুরিস্ট স্পট", "মক্কা ও মদিনা যিয়ারাহ", "ট্রান্সপোর্ট", "খাবার", "হোটেল", "এন্ট্রি ফি (মিশর)",],
        isPopular: true,
    },
    {
        title: "ওমরাহ",
        slug: "umrah-package",
        price: "১ লক্ষ ৩০ হাজার টাকা",
        features: ["ভিসা", "ডিরেক্ট ফ্লাইট টিকেট", "ট্রান্সপোর্ট", "মক্কা ও মদিনা যিয়ারহ", "খাবার", "হোটেল",],
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
        transition: { duration: 0.8, delay: i * 0.5 }, // Delay based on index
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: 50,
        transition: { duration: 0.8, delay: i * 0.5 }, // Delay based on index
    }),
};
const Packages: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,  // Trigger animation only once
        threshold: 0.1, // Trigger when 20% of section is visible
    });


    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gradient-secondary dark:bg-background.dark py-10 md:py-20"

        >
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <motion.h2
                    className="text-3xl font-bold text-primary dark:text-secondary mb-2"
                    variants={textVariants}
                >
                    আমাদের প্যাকেজসমূহ
                </motion.h2>
                {/* Subheading */}
                <motion.p
                    className="text-primary dark:text-text.dark mb-12 max-w-xl mx-auto"
                    variants={textVariants}
                >
                    আপনার পছন্দ অনুযায়ী প্যাকেজ নির্বাচন করুন
                </motion.p>

                {/* Package Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packageOptions.map((pkg, index) => {

                        // return <PackageCard key={pkg?.slug} index={index} variants={cardVariants} />
                        return <PackageCard key={pkg?.slug} {...pkg} packageInview={inView} index={index} variants={cardVariants} />

                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default Packages;

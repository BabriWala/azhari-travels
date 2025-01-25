
// @ts-nocheck
// src/components/Visas.tsx
"use client"
import React from "react";
import VisaCard from "./VisaCard";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visaOptions = [
    {
        title: "ওমরাহ ভিসা",
        slug: "umrah-and-egypt-visa",
        price: "১৯ হাজার টাকা",
        delivery_time: 3,
        features: ["পাসপোর্ট স্ক্যান কপি এবং ছবি", "সৌদি বায়োমেট্রিকস"]
    },
    {
        title: "মিশর অনারেবল ভিসা",
        slug: "umrah-and-egypt-visa",
        price: "২৬ হাজার টাকা",
        delivery_time: 25,
        features: ["পাসপোর্ট স্ক্যান কপি", "ছবি"],
        isPopular: true,
    },
    {
        title: "পাকিস্তান ই ভিসা",
        delivery_time: 7,
        slug: "umrah-and-egypt-visa",
        price: "১০০০ টাকা",
        features: ["পাসপোর্ট স্ক্যান কপি", "ছবি (ব্যাকগ্রাউ সাদা গ্লাস ছাড়া)"],
    },
    {
        title: "শ্রীলংকা ভিসা",
        slug: "umrah-and-egypt-visa",
        delivery_time: 1,

        price: "৪৫০০ টাকা",
        features: ["পাসপোর্ট স্ক্যান কপি", "ছবি (ব্যাকগ্রাউ সাদা গ্লাস ছাড়া)"],
    },
    {
        title: "ভিয়েতনাম ভিসা",
        slug: "umrah-and-egypt-visa",
        delivery_time: 10,

        price: "৯০০০ টাকা",
        features: ["পাসপোর্ট স্ক্যান কপি", "ছবি (ব্যাকগ্রাউ সাদা গ্লাস ছাড়া)"],
    },
];

// Variants for text animations
const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.8 } }, // Slide out
};

// Variants for visa cards with staggered delay
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
const Visas: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,  // Trigger animation only once
        threshold: 0.1, // Trigger when 20% of section is visible
    });


    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id="visas"
            className="bg-gradient-secondary  py-10 md:py-20"

        >
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <motion.h2
                    className="text-3xl font-bold text-primary  mb-2"
                    variants={textVariants}
                >
                    ভিসা সমূহ
                </motion.h2>
                {/* Subheading */}
                <motion.p
                    className="text-primary  mb-12 max-w-xl mx-auto"
                    variants={textVariants}
                >
                    স্বল্প খরচে আপনার কাঙ্খিত ভিসা হাতে পান
                </motion.p>
                {/* {console.log(visaOptions)} */}
                {/* Visa Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visaOptions.map((pkg, index) => {

                        // return <VisaCard key={pkg?.slug} index={index} variants={cardVariants} />
                        return <VisaCard key={pkg?.slug} {...pkg} visaInview={inView} index={index} variants={cardVariants} />

                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default Visas;

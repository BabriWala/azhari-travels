// @ts-nocheck
// src/components/TravelingStatistics.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React from "react";
import CountUp from "react-countup";

interface Statistic {
    title: string;
    value: number;
    description: string;
}

const statistics: Statistic[] = [
    {
        title: "আল আযহার বিশ্ববিদ্যালয়",
        value: 350,
        description: "বিশ্ববিদ্যালয় এ ভর্তি",
    },
    {
        title: "ওমরাহ + মিশর ভ্রমণ",
        value: 270,
        description: "ওমরাহ এবং মিশর ভ্রমণ",
    },
    {
        title: "ভিসা প্রসেসিং চলমান",
        value: 70,
        description: "বর্তমান ভিসা প্রসেসিং চলমান",
    },
    {
        title: "শ্রীলংকা ভ্রমণ",
        value: 100,
        description: "শ্রীলংকা ভিসা এবং ভ্রমণ",
    },
];

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
        transition: { duration: 0.8, delay: i * 0.4 }, // Delay based on index
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: 50,
        transition: { duration: 0.8, delay: i * 0.4 }, // Delay based on index
    }),
};


const TravelingStatistics: React.FC = () => {
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
                    পরিসংখ্যান
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {statistics.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            custom={index} // Pass index for staggered delay
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}

                            className="bg-gradient-third  rounded-lg shadow-md p-10 flex flex-col items-center"
                        >
                            <h3 className="text-4xl font-bold text-primary.DEFAULT mb-2">
                                {inView && (
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={4}
                                        separator=","
                                    />
                                )}+
                            </h3>
                            <p className="text-lg text-primary  font-semibold mb-1">
                                {stat.title}
                            </p>
                            <p className="text-primary  text-center">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TravelingStatistics;

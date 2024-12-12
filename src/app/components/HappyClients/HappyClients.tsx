// @ts-nocheck
// src/components/HappyClients.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import React from "react";

interface ClientTestimonial {
    name: string;
    feedback: string;
    address: string;
    image: string;
}

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

const testimonials: ClientTestimonial[] = [
    {
        name: "ক্বারী আব্দুল খালেক",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস এর মাধ্যমে খুব সহজেই মিশরে পৌছাতে পেরেছি। আপনাদের খেদমতের কথা মনে রাখার মতো!",
        address: "কুড়িগ্রাম",
        image: "/customer/01_Abdul_Khalek.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ ইব্রাহিম তুরাক",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস এর মাধ্যমে খুবই কম সময়ের মধ্যে নিরাপদে মিশরে এসে পৌছেছি!",
        address: "শরীয়তপুর",
        image: "/customer/02_Hafez_Ibrahim_Turak.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ মাওলানা ‍তাওহীদুল ইসলাম তুষার",
        feedback: "বাংলাদেশ এ্যাম্বাসির অনেক ঝামেলা থাকা সত্তেও আজহারী ট্রাভেলস এর মাধ্যমে আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে সক্ষম হয়েছি!",
        address: "নোয়াখালী",
        image: "/customer/03_Tawhidul_Islam_Tushar.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ রিফাত আলিফ সরকার",
        feedback: "আজহারী ট্রাভেলস এর মাধ্যমে আমি আমার বাবা মায়ের স্বপ্ন পূরণ করতে এক ধাপ এগিয়ে এসেছি!",
        address: "টাঙ্গাইল",
        image: "/customer/04_Rifat_Alif_Sarker.jpg", // Replace with a valid image link
    },
    {
        name: "মাওলানা সুলাইমান এবং মাওলানা আলী হাসান",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস একটি বিশ্বস্ত প্রতিষ্ঠান!",
        address: "মানিকগঞ্জ ও খুলনা",
        image: "/customer/05_Sulaiman_And_Ali_Hasan.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ মাওলানা আমজাদ হোসাইন রিফাত",
        feedback: "আলহামদুলিল্লাহ অবশেষে আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে পেরেছি!!!",
        address: "ফেনী",
        image: "/customer/06_Amzad_Husain_Rifat.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ ইয়াছিন আরাফাত",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে মিশরে এসে পৌছেছি",
        address: "খুলনা",
        image: "/customer/07_Yeasin_Arafat.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ মাওলানা মুনিরুল ইসলাম",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে মিশরে এসে পৌছেছি এবং ইহা একটি বিশ্বস্ত প্রতিষ্ঠান",
        address: "নরসিংদী",
        image: "/customer/08_Munirul_Islam.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ আসাদুল্লাহ আল গালিব এবং হাফেজ শেখ আহমাদুল্লাহ",
        feedback: "আলহামদুলিল্লাহ!!!",
        address: "খুলনা ও বাগেরহাট",
        image: "/customer/09_Asadullah_Galib_And_Sheikh_Ahmadullah_Shihab.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ রাশেদুল ইসলাম",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের উদারতায় আমি মুগ্ধ হয়েছি!!!",
        address: "কেরানীগঞ্জ",
        image: "/customer/10_Rashedul_Islam.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ ক্বারী মুহাম্মদ শুয়াইব",
        feedback: "বাংলাদেশ এ্যাম্বাসির অনেক ঝামেলা থাকা সত্তেও আজহারী ট্রাভেলস এর মাধ্যমে আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে সক্ষম হয়েছি তাদের অত্যন্ত শুকরিয়া জ্ঞাপন!",
        address: "নেত্রকোণা",
        image: "/customer/11_Muhammad_Shuaib.jpg", // Replace with a valid image link
    },
    {
        name: "মুফতী আজিজুর রহমান",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে মিশরে এসে পৌছেছি এবং আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে সক্ষম হয়েছি!",
        address: "ব্রাহ্মবাড়িয়া",
        image: "/customer/12_Azizur Rahman.jpg", // Replace with a valid image link
    },
];

interface HappyClientsProps {
    type: string;
}
const HappyClients: React.FC<HappyClientsProps> = ({ type = "" }) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.1, // Trigger when 20% of section is visible
    });
    const renderedTestimonials = type ? testimonials : testimonials.slice(0, 3)
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={type ? "py-32 md:py-40 bg-gradient-secondary dark:bg-background.dark" : "py-10 md:py-20 bg-gradient-secondary dark:bg-background.dark"}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    ছাত্রদের অভিব্যক্তি
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {renderedTestimonials.map((client: any, index: any) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            custom={index} // Pass index for staggered delay
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="bg-gradient-third dark:bg-gray-800 rounded-lg shadow-md p-10 mb-6 md:mb-0"
                        >
                            <img
                                src={client.image}
                                alt={`${client.name}'s picture`}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-primary text-center dark:text-text.dark ">
                                {client.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
                                {client.address}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                "{client.feedback}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {
                !type && <Link className="inline-block w-full text-center mt-8" href={'/happy-clients'}>
                    <button className="md:mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white dark:bg-secondary dark:hover:bg-secondary-light transition duration-300">
                        আরো অভিব্যক্তি দেখুন
                    </button>
                </Link>
            }

        </motion.section>
    );
};

export default HappyClients;

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
        id: 21,
        name: "ক্বারী আব্দুল খালেক",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস এর মাধ্যমে খুব সহজেই মিশরে পৌছাতে পেরেছি। আপনাদের খেদমতের কথা মনে রাখার মতো!",
        address: "কুড়িগ্রাম",
        image: "/customer/01_Abdul_Khalek.webp", // Replace with a valid image link
    },
    {
        id: 2,
        name: "হাফেজ ইব্রাহিম তুরাক",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস এর মাধ্যমে খুবই কম সময়ের মধ্যে নিরাপদে মিশরে এসে পৌছেছি!",
        address: "শরীয়তপুর",
        image: "/customer/02_Hafez_Ibrahim_Turak.webp", // Replace with a valid image link
    },
    {
        id: 3,
        name: "হাফেজ মাওলানা ‍তাওহীদুল ইসলাম তুষার",
        feedback: "বাংলাদেশ এ্যাম্বাসির অনেক ঝামেলা থাকা সত্তেও আজহারী ট্রাভেলস এর মাধ্যমে আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে সক্ষম হয়েছি!",
        address: "নোয়াখালী",
        image: "/customer/03_Tawhidul_Islam_Tushar.webp", // Replace with a valid image link
    },
    {
        id: 4,
        name: "হাফেজ রিফাত আলিফ সরকার",
        feedback: "আজহারী ট্রাভেলস এর মাধ্যমে আমি আমার বাবা মায়ের স্বপ্ন পূরণ করতে এক ধাপ এগিয়ে এসেছি!",
        address: "টাঙ্গাইল",
        image: "/customer/04_Rifat_Alif_Sarker.webp", // Replace with a valid image link
    },
    {
        id: 5,
        name: "মাওলানা সুলাইমান এবং মাওলানা আলী হাসান",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস একটি বিশ্বস্ত প্রতিষ্ঠান!",
        address: "মানিকগঞ্জ ও খুলনা",
        image: "/customer/05_Sulaiman_And_Ali_Hasan.webp", // Replace with a valid image link
    },
    {
        id: 6,
        name: "হাফেজ মাওলানা আমজাদ হোসাইন রিফাত",
        feedback: "আলহামদুলিল্লাহ অবশেষে আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে পেরেছি!!!",
        address: "ফেনী",
        image: "/customer/06_Amzad_Husain_Rifat.webp", // Replace with a valid image link
    },
    {
        id: 7,
        name: "হাফেজ ইয়াছিন আরাফাত",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে মিশরে এসে পৌছেছি",
        address: "খুলনা",
        image: "/customer/07_Yeasin_Arafat.webp", // Replace with a valid image link
    },
    {
        id: 8,
        name: "হাফেজ মাওলানা মুনিরুল ইসলাম",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে মিশরে এসে পৌছেছি এবং ইহা একটি বিশ্বস্ত প্রতিষ্ঠান",
        address: "নরসিংদী",
        image: "/customer/08_Munirul_Islam.webp", // Replace with a valid image link
    },
    {
        id: 9,
        name: "হাফেজ আসাদুল্লাহ আল গালিব এবং হাফেজ শেখ আহমাদুল্লাহ",
        feedback: "আলহামদুলিল্লাহ!!!",
        address: "খুলনা ও বাগেরহাট",
        image: "/customer/09_Asadullah_Galib_And_Sheikh_Ahmadullah_Shihab.webp", // Replace with a valid image link
    },
    {
        id: 10,
        name: "হাফেজ রাশেদুল ইসলাম",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের উদারতায় আমি মুগ্ধ হয়েছি!!!",
        address: "কেরানীগঞ্জ",
        image: "/customer/10_Rashedul_Islam.webp", // Replace with a valid image link
    },
    {
        id: 11,
        name: "হাফেজ ক্বারী মুহাম্মদ শুয়াইব",
        feedback: "বাংলাদেশ এ্যাম্বাসির অনেক ঝামেলা থাকা সত্তেও আজহারী ট্রাভেলস এর মাধ্যমে আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে সক্ষম হয়েছি তাদের অত্যন্ত শুকরিয়া জ্ঞাপন!",
        address: "নেত্রকোণা",
        image: "/customer/11_Muhammad_Shuaib.webp", // Replace with a valid image link
    },
    {
        id: 12,
        name: "মুফতী আজিজুর রহমান",
        feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে মিশরে এসে পৌছেছি এবং আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হতে সক্ষম হয়েছি!",
        address: "ব্রাহ্মবাড়িয়া",
        image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    },
    // {
    //     id: 13,
    //     name: "শামছুল হক তামিম",
    //     feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস সবচেয়ে কম খরচে আমার ভিসা করে দিয়েছে",
    //     address: "ঢাকা",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 14,
    //     name: "হাফেজ মাওলানা ইয়াছিন আরাফাত",
    //     feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের প্রতিষ্ঠাতা পরিচিত একজন ব্যাক্তির মাধ্যমে তার সন্ধান পেয়ে আমি আল আযহারে নিরাপদে পৌছেছি",
    //     address: "খুলনা",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 15,
    //     name: "হাফেজ মাওলানা হাফিজুর রহমান",
    //     feedback: "আলহামদুলিল্লাহ আমি এবং আমার আরো ৪জন বন্ধু আজহারী ট্রাভেলসের মাধ্যমে গাল্ফ এয়ার দিয়ে নিরাপদে মিশরে এস পৌছেছি। যারা আল আযহারে পড়তে চান তারা আজহারী ট্রাভেলসের সাথে যোগাযোগ করতে পারেন।",
    //     address: "কুড়িগ্রাম",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 16,
    //     name: "মাওলানা মামুনুর রশিদ",
    //     feedback: "আলহামদুলিল্লাহ আমি এবং আমার আরো ৪জন বন্ধু আজহারী ট্রাভেলসের মাধ্যমে গাল্ফ এয়ার দিয়ে নিরাপদে মিশরে এস পৌছেছি। যারা আল আযহারে পড়তে চান তারা আজহারী ট্রাভেলসের সাথে যোগাযোগ করতে পারেন।",
    //     address: "চট্টগ্রাম",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 17,
    //     name: "হাফেজ মাওলানা মোহাম্মদ ফাহাদ",
    //     feedback: "আলহামদুলিল্লাহ আমি এবং আমার আরো ৪জন বন্ধু আজহারী ট্রাভেলসের মাধ্যমে গাল্ফ এয়ার দিয়ে নিরাপদে মিশরে এস পৌছেছি। যারা আল আযহারে পড়তে চান তারা আজহারী ট্রাভেলসের সাথে যোগাযোগ করতে পারেন।",
    //     address: "পিরোজপুর",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 18,
    //     name: "মাওলানা মোহাম্মদ আব্দুল্লাহ সাকিব",
    //     feedback: "আলহামদুলিল্লাহ আমি এবং আমার আরো ৪জন বন্ধু আজহারী ট্রাভেলসের মাধ্যমে গাল্ফ এয়ার দিয়ে নিরাপদে মিশরে এস পৌছেছি। যারা আল আযহারে পড়তে চান তারা আজহারী ট্রাভেলসের সাথে যোগাযোগ করতে পারেন।",
    //     address: "জয়পুরহাট",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 19,
    //     name: "মাওলানা মোহাম্মদ মুনির হোসাইন",
    //     feedback: "আমি আজহারী ট্রাভেলসে কখনো সরাসরি উপস্থিত হয়নি, অনলাইনে তাদের সাথে পরিচয় হয়ে আমি তাদের সম্পূর্ণ টাকা পরিশোধ করে আলহামদুলিল্লাহ নিরাপদে মিশরে এসেছি এবং আজহারী ট্রাভেলস আমাকে দেওয়া সকল ওয়াদা তারা পুঙ্খাণুপূঙ্খাণু পালন করেছে। আমি তাদের কাজে কোন ত্রুটি দেখিনি অথচ আমি এবং আমার পরিবার তাদের অফিসে কখনো যায়নি",
    //     address: "নরসিংদী",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 20,
    //     name: "মোহাম্মদ ওমর ফারুক হাওলাদার এবং তার পরিবারবর্গ",
    //     feedback: "আলহামদুলিল্লাহ আমি এবং আমার পুরো পরিবার কোন রকম হ্যাসেল ছাড়া মিশর এবং ওমরাহ ভ্রমণ করেছি আজহারী ট্রাভেলসের মাধ্যমে",
    //     address: "চাঁদপুর",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 21,
    //     name: "মাওলানা মারুফ মিয়া",
    //     feedback: "আলহামদুলিল্লাহ ঝামেলামুক্ত সফর হয়েছে। ধন্যবাদ জানিয়ে আজহারী ট্রাভেলসকে ছোট করতে চাইনা। আজহারী ট্রাভেলসের প্রতিষ্ঠাতা ইমিগ্রেশনে প্রবেশ করার আগ মূহুর্ত পর‌্যন্ত পাশে ছিল। আল্লাহ তায়ালা আজহারী ট্রাভেলসকে উত্তম জাযায়ে খায়ের দান করুক।",
    //     address: "হাটহাজারী মাদ্রাসা",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 22,
    //     name: "মাওলানা সাকিব সরকার",
    //     feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের কাজগুলো খুবই সুন্দরভাবে সম্পন্ন হয়ে থাকে। আজহারী ট্রাভেলসের মাধ্যমে যারা যারা মিশরে এসেছে এখন পর‌্যন্ত কেউ কোন অভিযোগ করেনি।",
    //     address: "মুঈনুল ইসলাম হাটহাজারী মাদ্রাসা",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 23,
    //     name: "মোহাম্মদ আব্দুস সামাদ",
    //     feedback: "আজহারী ট্রাভেলস অন্য সকল এজেন্সির চেয়ে অত্যন্ত কম খরচে আমাকে মিশরে নিয়ে এসেছে।",
    //     address: "ময়মনসিংহ",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 24,
    //     name: "মোহাম্মদ মুহিউদ্দীন",
    //     feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে মিশরে এসে আমার ছেলের সাথে সাক্ষাত করতে পেরেছি।",
    //     address: "",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 25,
    //     name: "মোহাম্মদ ফরহাদ মিঞা",
    //     feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে মিশরে এসে পৌছেছি।",
    //     address: "ময়মনসিংহ",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 26,
    //     name: "মোহাম্মদ সারওয়ার হাসান",
    //     feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলসের মাধ্যমে আমাদের কেউ প্রতারিত হয়নি আমরা ৫জন একসাথে আজহারী ট্রাভেলসের মাধ্যমে একই ফ্লাইটে একসাথে মিশরে এসেছি।",
    //     address: "ময়মনসিংহ",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 27,
    //     name: "মোহাম্মদ শফিকুল ইসলাম",
    //     feedback: "আলহামদুল্লিাহ আজহারী ট্রাভেলস সকলের বিশ্বস্ততার মাধ্যম।",
    //     address: "ময়মনসিংহ",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 28,
    //     name: "মোহাম্মদ আবু রায়হান",
    //     feedback: "আজহারী ট্রাভেলসের কথা এবং কাজে মিল পেয়েছি",
    //     address: "ময়মনসিংহ",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 29,
    //     name: "মোহাম্মদ আব্দুল্লাহ আল মামুন",
    //     feedback: "আলহামদুলিল্লাহ আমরা ৫ বন্ধু আজহারী ট্রাভেলসের মাধ্যমে আল আযহার বিশ্ববিদ্যালয়ে পড়ার উদ্দেশ্যে নিরাপদে মিশরে এসেছি।",
    //     address: "ময়মনসিংহ",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 30,
    //     name: "মোহাম্মদ কামরুজ্জামান তারেক",
    //     feedback: "আলহামদুলিল্লাহ আমার পূর্বে ৫জন বন্ধু একসাথে আজহারী ট্রাভেলসের মাধ্যমে মিশরে এসেছে সেই সুবাদে আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে এসে পৌছেছি। তাদের ব্যবস্থাপনায় আমি মুগ্ধ।",
    //     address: "সিলেট",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 31,
    //     name: "মেহেদী হাসান লিটন",
    //     feedback: "আলহামদুলিল্লাহ আমার পূর্বে ৫জন বন্ধু একসাথে আজহারী ট্রাভেলসের মাধ্যমে মিশরে এসেছে সেই সুবাদে আজহারী ট্রাভেলসের মাধ্যমে নিরাপদে এসে পৌছেছি। তাদের ব্যবস্থাপনায় আমি মুগ্ধ।",
    //     address: "বরিশাল",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 32,
    //     name: "আবির হাসান সিফাত",
    //     feedback: "আলহামদুলিল্লাহ আযহারী ট্রাভেলসের মাধ্যমে স্বপ্ন পূরণের মিশর এসেছি। বিশ্বস্ত এবং নির্ভরযোগ্য একটি প্রতিষ্ঠান হলো আজহারী ট্রাভেলস। অন্যান্যদের তুলনায় অনেক কম খরচে মিশরে ছাত্রদের যাওয়ার সুযোগ করে দেন। আজহারী ট্রাভেলস। বিশেষ করে রুম্মান হামযাহ ভাইয়ের কাজ অনেক বেশি সুন্দর এবং ভালো। শুরু থেকে েশেষ পর‌্যন্ত খুব আন্তরিকতার সাথে পাশে থাকেন। তাই যারা মিশরে এসে পড়ালেখার স্বপ্ন লালন করেন আশা করছি খুব অল্প খরচ এবং অল্প সময়ে আজহারী ট্রাভেলসের মাধ্যমে বিশ্বস্ততার সাথে আসতে পারবেন ইনশা আল্লাহ।",
    //     address: "শরিয়তপুর",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 33,
    //     name: "হাফেজ মাওলানা মাহমুদুল হাসান",
    //     feedback: "আজহারী ট্রাভেলসের কথা এবং কাজে ১০ এ ১০ রেটিং দিতে আমি বাধ্য",
    //     address: "গাজীপুর",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
    // {
    //     id: 34,
    //     name: "শেখ যুবায়ের হোসেন",
    //     feedback: "আলহামদুলিল্লাহ আজহারী ট্রাভেলস এন্ড ট্যুরস এর মাধ্যমে আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হয়েছি। আজহারী ট্রাভেলসের কোন কাজে আমি ত্রুটি পাইনি। আপনারাও চাইলে আজহারী ট্রাভেলসের সাথে যোগাযোগ করতে পারেন।",
    //     address: "ফরিদপুর",
    //     image: "/customer/12_Azizur Rahman.webp", // Replace with a valid image link
    // },
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
            className={type ? "py-32 md:py-40 bg-gradient-secondary " : "py-10 md:py-20 bg-gradient-secondary "}>
            <div className="container mx-auto px-4 sm:px-6 lg:pxcode -8">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    রিভিউ
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {renderedTestimonials.map((client: any, index: any) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            custom={index} // Pass index for staggered delay
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="bg-gradient-third  rounded-lg shadow-md p-10 mb-6 md:mb-0"
                        >
                            <img
                                src={client.image}
                                alt={`${client.name}'s picture`}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-primary text-center  ">
                                {client.name}
                            </h3>
                            <p className="text-gray-600  text-center mb-3">
                                {client.address}
                            </p>
                            <p className="text-gray-600  text-center">
                                "{client.feedback}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {
                !type && <Link className="inline-block w-full text-center mt-8" href={'/happy-clients'}>
                    <button className="md:mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white   transition duration-300">
                        আরো রিভিউ দেখুন
                    </button>
                </Link>
            }

        </motion.section>
    );
};

export default HappyClients;

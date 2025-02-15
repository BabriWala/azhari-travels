
// @ts-nocheck
// src/components/Packages.tsx
"use client"
// src/components/OurTeam.tsx
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
    {
        name: "হাফেজ রুম্মান হামযাহ",
        position: "প্রতিষ্ঠাতা",
        imageUrl: "/team/Team-04.jpg",
        mobileNumber: "+8801877995354",
        whatsappNumber: "+8801877995354",
        socialMedia: {
            facebook: "https://facebook.com/iamhamzahkhan",
            messenger: "https://m.me/iamhamzahkhan",
        },
    },
    {
        name: "বাবরি ওয়ালা",
        position: "সফটওয়ার ইঞ্জিনিয়ার",
        imageUrl: "/team/Team-05.webp",
        mobileNumber: "+8801580580982",
        whatsappNumber: "+8801580580982",
        socialMedia: {
            facebook: "https://facebook.com/babriwala.hazishaheb",
            linkedin: "https://linkedin.com/in/hanzala2022",
            messenger: "https://m.me/babriwala.hazishaheb",
        },
    },
    {
        name: "হাফেজ মাওলানা মুঈনুল ইসলাম",
        position: "কোষাধক্ষ্য",
        imageUrl: "/team/Team-06.webp",
        // mobileNumber: "+8801719169191",
        // whatsappNumber: "+8801719169191",
        mobileNumber: "+8801580580982",
        whatsappNumber: "+8801580580982",
        socialMedia: {
            // facebook: "https://www.facebook.com/md.mainulislam.585",
            // messenger: "https://m.me/md.mainulislam.585",
            facebook: "https://facebook.com/babriwala.hazishaheb",
            // linkedin: "https://linkedin.com/in/hanzala2022",
            messenger: "https://m.me/babriwala.hazishaheb",
        },
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

const OurTeam: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.1, // Trigger when 20% of section is visible
    });
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gradient-secondary  py-10 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <motion.h2 className="text-3xl font-bold text-primary  mb-2">
                    আমাদের টিম
                </motion.h2>
                <motion.p className="text-primary  mb-12 max-w-xl mx-auto">
                    আপনাদের আরামদায়ক ভ্রমণের জন্য আমরা আছি পাশে
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} teamInview={inView} index={index} variants={cardVariants} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default OurTeam;


// @ts-nocheck
// src/components/Packages.tsx
"use client"
import React from "react";
import BlogCard from "./BlogCard";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogPosts = [
    {
        slug: "Al-Azhar-Introduction",
    },
    {
        slug: "Al-Azhar-Syllabus",
    },
    {
        slug: "Introduction-To-Egypt",
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
        transition: { duration: 0.8, delay: i * 0.5 }, // Delay based on index
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: 50,
        transition: { duration: 0.8, delay: i * 0.5 }, // Delay based on index
    }),
};

const BlogSection: React.FC = () => {
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
                <motion.h2
                    variants={textVariants}
                    className="text-3xl font-bold text-primary  mb-2">
                    আমাদের ব্লগ সমূহ
                </motion.h2>
                <motion.p
                    variants={textVariants}
                    className="text-primary  mb-12 max-w-xl mx-auto">
                    ব্লগ বা আর্টিকেল গুলো পড়ে যাবতীয় ইনফরমেশন নিন
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} blogInview={inView} index={index} variants={cardVariants} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default BlogSection;

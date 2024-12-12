// @ts-nocheck
// src/components/HappyClients.tsx
"use client";
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface GalleryItem {
    id: number;
    title: string;
    imageUrl: any;
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

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "মসজিদ উল হারাম",
        imageUrl: '/gallery/Gallery_01.jpg',
    },
    {
        id: 2,
        title: "মহানবী স. এর জন্মস্থান",
        imageUrl: '/gallery/Gallery_02.jpg',
    },
    {
        id: 3,
        title: "মসজিদে নববী",
        imageUrl: '/gallery/Gallery_03.jpg',
    },
    {
        id: 4,
        title: "পিরামিড",
        imageUrl: '/gallery/Gallery_04.jpg',
    },
    {
        id: 5,
        title: "আলেকজান্দ্রিয়া",
        imageUrl: '/gallery/Gallery_05.jpg',
    },
    {
        id: 6,
        title: "সাক্কারা",
        imageUrl: '/gallery/Gallery_06.jpg',
    },
    {
        id: 6,
        title: "কায়রো শহর",
        imageUrl: '/gallery/Gallery_07.jpg',
    },
    {
        id: 6,
        title: "সুলতান সালাহউদ্দিন আইয়ুবীর কেল্লা",
        imageUrl: '/gallery/Gallery_08.jpg',
    },
];

const Gallery: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.1, // Trigger when 20% of section is visible
    });
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="py-12 md:pb-32 bg-gradient-secondary dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    variants={textVariants}
                    className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    গ্যালারী
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            custom={index} // Pass index for staggered delay
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="relative group">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Gallery;

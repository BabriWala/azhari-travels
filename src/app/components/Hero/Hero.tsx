"use client"
// src/components/Hero.tsx
import React from "react";
// import Link from "next/link";
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface HeroProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    description,
    buttonText,
    buttonLink,
    backgroundImage = 'https://images.pexels.com/photos/18991579/pexels-photo-18991579/free-photo-of-al-azhar-mosque-in-cairo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}) => {
    const slideDownVariant = {
        hidden: { opacity: 0, y: -100 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay, ease: 'easeInOut' },
        }),
    };

    return (
        <section
            className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/60 " aria-hidden="true"></div>
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 text-white  max-w-3xl">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={slideDownVariant}
                    custom={0} // No delay for title
                    className="text-4xl md:text-5xl font-extrabold mb-4">{title}</motion.h1>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={slideDownVariant}
                    custom={0.6} // 0.3s delay after the title
                    className="text-lg md:text-xl mb-6">{description}</motion.p>
                <motion.div
                    initial="hidden"
                    animate="visible"

                    variants={slideDownVariant}
                    custom={1} // 0.6s delay after the description
                    className="relative group">

                    <button className="bg-primary hover:bg-gradient-third hover:text-primary text-2xl text-white font-semibold py-2 px-4 rounded transition-all duration-300 flex gap-2 items-center">
                        <Icon icon="icon-park-outline:send" /> {buttonText}
                    </button>


                    {/* Pop-up menu for contact options */}
                    <div className="absolute w-full bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gradient-secondary  text-gray-800  shadow-lg rounded-lg p-3 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                        <div className="flex items-center justify-center gap-5">
                            <Link href="https://facebook.com/iamhamzahkhan" target="_blank" rel="noopener noreferrer">
                                <Icon icon="mdi:facebook" className="text-primary text-3xl hover:text-blue-600 transition-colors duration-200" />
                            </Link>
                            <Link href="https://m.me/iamhamzahkhan" target="_blank" rel="noopener noreferrer">
                                <Icon icon="ri:messenger-fill" className="text-primary text-3xl hover:text-blue-600 transition-colors duration-200" />
                            </Link>
                            <Link href="https://wa.me/+8801580580982" target="_blank" rel="noopener noreferrer">
                                <Icon icon="ri:whatsapp-fill" className="text-primary text-3xl hover:text-green-600 transition-colors duration-200" />
                            </Link>
                            <Link href="tel:+8801580580982">
                                <Icon icon="carbon:phone-filled" className="text-primary text-3xl hover:text-blue-400 transition-colors duration-200" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

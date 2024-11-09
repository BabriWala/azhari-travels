// src/components/Hero.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';

interface HeroProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string; // URL of the background image
}

const Hero: React.FC<HeroProps> = ({
    title,
    description,
    buttonText,
    buttonLink,
    backgroundImage = 'https://images.pexels.com/photos/18991579/pexels-photo-18991579/free-photo-of-al-azhar-mosque-in-cairo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Example Pexels image
}) => {
    return (
        <section
            className={`relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/60 dark:bg-black/40" aria-hidden="true"></div>
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 text-white dark:text-text-dark max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
                <p className="text-lg md:text-xl mb-6">{description}</p>
                <Link href={buttonLink} target="_blank">
                    <button className="bg-primary hover:bg-gradient-primary hover:text-primary text-2xl text-white font-semibold py-2 px-4 rounded transition-all duration-300 flex gap-2 items-center">
                        <Icon icon="icon-park-outline:send"></Icon>  {buttonText}
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;

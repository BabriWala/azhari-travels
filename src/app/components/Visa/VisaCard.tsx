
// @ts-nocheck
"use client"
// src/components/VisaCard.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface VisaCardProps {
    title: string;
    price: string;
    slug: string;
    delivery_time: number;
    features: string[];
    isPopular?: boolean;
}

const VisaCard = ({ title, price, features, delivery_time, slug, variants, index, isPopular = false, visaInview }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Animate only once
        threshold: 0.1,    // Trigger when 20% of the element is visible
    });
    return (
        <motion.div
            variants={variants}
            custom={index} // Pass index for staggered delay
            initial="hidden"
            id="visas"
            animate={visaInview ? "visible" : "hidden"}
            className={`bg-gradient-third flex items-center justify-between flex-col  shadow-lg rounded-lg p-10 relative ${isPopular ? "border-2 border-primary" : ""
                }`}
        >
            <div>
                {isPopular && (
                    <span className="bg-primary  text-white px-3 py-1 rounded-full text-xs absolute -top-4 left-4">
                        জনপ্রিয়
                    </span>
                )}
                <h3 className="text-xl font-bold bg-[#FEF0DE] border border-opacity-10 py-1 rounded-tl-3xl mb-5 border-primary   text-primary ">{title}</h3>

                <p className="text-4xl font-bold text-primary  mb-4">{price}</p>
                <ul className="grid grid-cols-1 gap-2 text-primary ">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <Icon icon="eva:arrow-right-fill" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="mt-6 px-6 mb-2 py-2 rounded-md hover:text-primary bg-primary hover:bg-gradient-third hover:font-bold border-primary border-2 text-white   transition duration-300">
                উপরোক্ত প্রয়োজনীয় ডকুমেন্টস আবশ্যক
            </button>
            <p className=" italic"> ( সর্বোচ্চ {delivery_time} কর্ম দিবস এর মধ্যে <br /> আপনার কাঙ্খিত ভিসাটি আপনার হাতে পাবেন)</p>

        </motion.div>
    );
};

export default VisaCard;

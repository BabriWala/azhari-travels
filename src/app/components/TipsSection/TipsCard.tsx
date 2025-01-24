
// @ts-nocheck
"use client"
// src/components/TipsCard.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface TipsCardProps {
    title: string;
    description: string;
    type: "do" | "dont";
}

const TipsCard: React.FC<TipsCardProps> = ({ title, description, type, variants, index, tipsInview }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Animate only once
        threshold: 0.1,    // Trigger when 20% of the element is visible
    });
    return (
        <motion.div
            variants={variants}
            custom={index} // Pass index for staggered delay
            initial="hidden"
            animate={tipsInview ? "visible" : "hidden"}
            className={`p-6 border rounded-lg flex items-start space-x-4 ${type === "do" ? "bg-green-100 border-green-400" : "bg-red-100 border-red-400"
                }`}
        >
            <div className="flex-shrink-0">
                {type === "do" ? (

                    <Icon icon="quill:to-do" className="w-8 h-8 text-green-600"></Icon>
                ) : (

                    <Icon icon="ic:baseline-do-disturb" className="w-8 h-8 text-red-600"></Icon>

                )}
            </div>
            <div>
                <h3 className={`text-xl font-semibold ${type === "do" ? "text-green-700" : "text-red-700"}`}>
                    {title}
                </h3>
                <p className="text-gray-700  mt-2">{description}</p>
            </div>
        </motion.div>
    );
};

export default TipsCard;

// src/components/TipsCard.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";


interface TipsCardProps {
    title: string;
    description: string;
    type: "do" | "dont";
}

const TipsCard: React.FC<TipsCardProps> = ({ title, description, type }) => {
    return (
        <div
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
                <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default TipsCard;

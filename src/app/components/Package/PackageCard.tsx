// src/components/PackageCard.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface PackageCardProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, price, features, isPopular = false }) => {
    return (
        <div className={`bg-white flex items-center justify-between flex-col dark:bg-background.dark shadow-lg rounded-lg p-6 ${isPopular ? 'border-2 border-primary dark:border-secondary' : ''}`}>
            <div>
                {isPopular && <span className="bg-primary dark:bg-secondary text-white px-3 py-1 rounded-full text-xs absolute -top-4 left-4">Popular</span>}
                <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-2">{title}</h3>
                <p className="text-4xl font-bold text-primary dark:text-secondary mb-4">{price}</p>
                <ul className="text-primary dark:text-text.dark space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <Icon icon={"eva:arrow-right-fill"}></Icon>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="w-full mt-6 py-2 rounded-lg hover:text-primary bg-primary hover:bg-primary-light text-white dark:bg-secondary dark:hover:bg-secondary-light transition duration-300">
                বিস্তারিত দেখুন
            </button>
        </div>
    );
};

export default PackageCard;

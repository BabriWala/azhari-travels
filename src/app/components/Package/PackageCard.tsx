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
        <div className={`bg-gradient-third flex items-center justify-between flex-col dark:bg-background.dark shadow-lg rounded-lg p-10 ${isPopular ? 'border-2 border-primary dark:border-secondary' : ''}`}>
            <div>
                {isPopular && <span className="bg-primary dark:bg-secondary text-white px-3 py-1 rounded-full text-xs absolute -top-4 left-4">Popular</span>}
                <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-2">{title}</h3>
                <p className="text-4xl font-bold text-primary dark:text-secondary mb-4">{price}</p>
                <ul className="grid grid-cols-2 gap-2 text-primary dark:text-text.dark">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center  space-x-2">
                            <Icon icon="eva:arrow-right-fill" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="mt-6 px-6 py-2 rounded-md hover:text-primary bg-primary hover:bg-gradient-third hover:font-bold border-primary border-2 text-white dark:bg-secondary dark:hover:bg-secondary-light transition duration-300">
                বিস্তারিত দেখুন
            </button>
        </div>
    );
};

export default PackageCard;

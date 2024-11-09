// src/components/TravelingStatistics.tsx
"use client";

import React from "react";

interface Statistic {
    title: string;
    value: number;
    description: string;
}

const statistics: Statistic[] = [
    {
        title: "আল আযহার বিশ্ববিদ্যালয়",
        value: 17,
        description: "বিশ্ববিদ্যালয় এ ভর্তি",
    },
    {
        title: "ওমরাহ + মিশর ভ্রমণ",
        value: 6,
        description: "ওমরাহ এবং মিশর ভ্রমণ",
    },
    {
        title: "ভিসা প্রসেসিং চলমান",
        value: 27,
        description: "বর্তমান ভিসা প্রসেসিং চলমান",
    },
];

const TravelingStatistics: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-secondary dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    পরিসংখ্যান
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {statistics.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gradient-third dark:bg-gray-800 rounded-lg shadow-md p-10 flex flex-col items-center"
                        >
                            <h3 className="text-4xl font-bold text-primary.DEFAULT mb-2">
                                {stat.value}+
                            </h3>
                            <p className="text-lg text-primary dark:text-text.dark font-semibold mb-1">
                                {stat.title}
                            </p>
                            <p className="text-primary dark:text-gray-300 text-center">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravelingStatistics;

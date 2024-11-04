// src/components/HowWeWork.tsx
"use client";

import React from "react";

interface Step {
    title: string;
    description: string;
    icon: JSX.Element; // Using JSX.Element for the icon
}

const steps: Step[] = [
    {
        title: "Consultation",
        description:
            "We begin with a consultation to understand your travel needs and preferences.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary.DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m7-5V4a2 2 0 00-2-2H3a2 2 0 00-2 2v3M8 11l4 4-4 4m5-8l4 4-4 4M2 12h20" /></svg>,
    },
    {
        title: "Planning",
        description:
            "Our team carefully plans your itinerary, considering your preferences and budget.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary.DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
    },
    {
        title: "Booking",
        description:
            "We handle all bookings, from flights to accommodations, ensuring the best options.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary.DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l3 3m7-4h-8a2 2 0 00-2 2v2a2 2 0 002 2h8m0-4H10" /></svg>,
    },
    {
        title: "Travel Experience",
        description:
            "Enjoy a seamless travel experience with our support throughout your journey.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary.DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 7h18M3 11h18m-6 4h6m-18 0h6m3 4h6" /></svg>,
    },
];

const HowWeWork: React.FC = () => {
    return (
        <section className="py-12 bg-background-light dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light dark:text-text.dark mb-8">
                    How We Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                        >
                            <div className="mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-primary.DEFAULT mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

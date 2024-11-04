// src/components/HappyClients.tsx
"use client";

import React from "react";

interface ClientTestimonial {
    name: string;
    feedback: string;
    image: string;
}

const testimonials: ClientTestimonial[] = [
    {
        name: "আমজাদ আলী",
        feedback: "আলহামদুলিল্লাহ আযহারী ট্রাভেলস এর মাধ্যমে খুব সহজেই মিশরে পৌছাতে পেরেছি",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with a valid image link
    },
    {
        name: "মুঈনুল ইসলাম",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with a valid image link
    },
    {
        name: "হাসান সাকিব",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with a valid image link
    },
];

const HappyClients: React.FC = () => {
    return (
        <section className="py-20 bg-background-light dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    ছাত্রদের অভিব্যক্তি
                </h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    {testimonials.map((client, index) => (
                        <div
                            key={index}
                            className="bg-background-lightOdd dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 md:mb-0 md:w-1/3"
                        >
                            <img
                                src={client.image}
                                alt={`${client.name}'s picture`}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-primary text-center dark:text-text.dark mb-2">
                                {client.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                "{client.feedback}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HappyClients;

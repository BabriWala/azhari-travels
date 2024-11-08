// src/components/HappyClients.tsx
"use client";

import Link from "next/link";
import React from "react";

interface ClientTestimonial {
    name: string;
    feedback: string;
    address: string;
    image: string;
}

const testimonials: ClientTestimonial[] = [
    {
        name: "ক্বারী আব্দুল খালেক",
        feedback: "আলহামদুলিল্লাহ আযহারী ট্রাভেলস এর মাধ্যমে খুব সহজেই মিশরে পৌছাতে পেরেছি",
        address: "কুড়িগ্রাম",
        image: "/customer/01_Abdul_Khalek.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ ইব্রাহিম তুরাক",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো",
        address: "শরীয়তপুর",
        image: "/customer/02_Hafez_Ibrahim_Turak.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ মাওলানা ‍তাওহীদুল ইসলাম তুষার",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "নোয়াখালী",
        image: "/customer/03_Tawhidul_Islam_Tushar.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ রিফাত আলিফ সরকার",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "টাঙ্গাইল",
        image: "/customer/04_Rifat_Alif_Sarker.jpg", // Replace with a valid image link
    },
    {
        name: "মাওলানা সুলাইমান এবং মাওলানা আলী হাসান",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "মানিকগঞ্জ ও খুলনা",
        image: "/customer/05_Sulaiman_And_Ali_Hasan.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ মাওলানা আমজাদ হোসাইন রিফাত",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "ফেনী",
        image: "/customer/06_Amzad_Husain_Rifat.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ ইয়াছিন আরাফাত",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "খুলনা",
        image: "/customer/07_Yeasin_Arafat.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ মাওলানা মুনিরুল ইসলাম",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "নরসিংদী",
        image: "/customer/08_Munirul_Islam.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ আসাদুল্লাহ আল গালিব এবং হাফেজ শেখ আহমাদুল্লাহ",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "খুলনা ও বাগেরহাট",
        image: "/customer/09_Asadullah_Galib_And_Sheikh_Ahmadullah_Shihab.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ রাশেদুল ইসলাম",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "কেরানীগঞ্জ",
        image: "/customer/10_Rashedul_Islam.jpg", // Replace with a valid image link
    },
    {
        name: "হাফেজ ক্বারী মুহাম্মদ শুয়াইব",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "নেত্রকোণা",
        image: "/customer/11_Muhammad_Shuaib.jpg", // Replace with a valid image link
    },
    {
        name: "মুফতী আজিজুর রহমান",
        feedback: "আলহামদুলিল্লাহ খুবই ভালো লেগেছে",
        address: "ব্রাহ্মবাড়িয়া",
        image: "/customer/12_Azizur Rahman.jpg", // Replace with a valid image link
    },
];

const HappyClients: React.FC = () => {
    return (
        <section className="py-20 bg-background-light dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    ছাত্রদের অভিব্যক্তি
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.slice(0, 3).map((client: any, index: any) => (
                        <div
                            key={index}
                            className="bg-background-lightOdd dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 md:mb-0"
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
            <Link className="inline-block w-full text-center mt-8" href={'/testimonial'}><button className="font-bold  mx-auto bg-background-lightOdd p-2 px-6 rounded-lg">আরো দেখুন</button></Link>
        </section>
    );
};

export default HappyClients;

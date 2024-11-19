import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface Step {
    title: string;
    description: string;
    icon: string;
}

const steps: Step[] = [
    {
        title: "চুক্তিপত্র",
        description: "প্রথমে উভয় পক্ষের নিরাপত্তার  স্বার্থে আমাদের চুক্তিপত্রে সাক্ষর করিতে হবে। অত:পর ভিসার আবেদন করব৷ এর জন্য ৩০ হাজার টাকা আমরা এডভান্স গ্রহন করে থাকি ।",
        icon: "hugeicons:agreement-01",
    },
    {
        title: "ভিসা এপ্রুভাল",
        description: "তারপর ১২-১৫ দিনের মধ্যেই ভিসার এপ্রুভাল এসে পরবে .. ইনশা আল্লাহ",
        icon: "wpf:approval",
    },
    {
        title: "টিকেট বুকিং",
        description: "অতপর ৩ দিনের ভিতরে টিকিট বুক করতে হবে.. টিকিটের টাকা পরিশোধ করার ১ দিনের মধ্যেই  টিকিট দিয়ে দেওয়া হবে। ফ্লাইটের ১০ দিন পুর্বে বাকি টাকা পরিশোধ করে দিতে হবে ।",
        icon: "mingcute:ticket-fill",
    },
    {
        title: "ওকে টু বোর্ড",
        description: "অত:পর  ফ্লাইটের ২/৩ দিন পুর্বে ওকে টু বোর্ড  দিয়ে দেওয়া হবে.. এবং সাথে সাথে আপনার অফার লেটার এবং রিটার্ন টিকিট ও দিয়ে দেওয়া হবে.. ইনশা আল্লাহ..",
        icon: "game-icons:boarding-pass",
    },
    {
        title: "ফ্লাইট",
        description: "আপনার ফ্লাইট শুরু",
        icon: "ri:plane-line",
    },
    {
        title: "রিসিভ",
        description: "মিশর এয়ারপোর্টে  আমাদের আজহারী ট্রাভেলসের প্রতিনিধি থাকবে, সে আপনাকে রিসিভ করে আপনার জন্য নির্ধারিত বাসায় নিয়ে যাবে। এবং খাবারের ব্যবস্থা করবে। ",
        icon: "solar:card-recive-bold-duotone",
    },
    {
        title: "ভর্তি",
        description: "অত:পর পরের দিন আপনার ইকামাহর মেয়াদ বাড়ানো হবে, মেডিক্যাল করা হবে এবং এম্বেসী লেটারের  জন্য আবেদন করা হবে ।  অত:পর সকল ডকুমেন্টস  কালেক্ট করে মিশর গমনের ৭-১০ দিনের মধ্যেই আপনাকে আল আযহারে ভর্তি সম্পন্ন করে দেওয়া হবে ।",
        icon: "material-symbols:other-admission",
    },
];

const HowWeWork: React.FC = () => {
    return (
        <section className="py-10 md:pb-20 bg-gradient-secondary dark:bg-background.dark pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    আমরা যেভাবে কাজ করে থাকি
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full borde  bg-primary group-[.is-active]:bg-emerald-500 text-primary group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/4 md:group-even:translate-x-1/4">
                            <div className="w-16 h-16 bg-gradient-third dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Icon
                                    className="w-8 h-8 text-primary dark:text-text.dark"
                                    icon={steps[0].icon}
                                />
                            </div>
                        </div>

                        <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-gradient-third p-5 rounded-lg  shadow-lg">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{steps[0].title}</div>
                            </div>
                            <div className="text-primary">{steps[0].description}</div>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full borde  bg-primary group-[.is-active]:bg-emerald-500 text-primary group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/4 md:group-even:translate-x-1/4">
                            <div className="w-16 h-16 bg-gradient-third dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Icon
                                    className="w-8 h-8 text-primary dark:text-text.dark"
                                    icon={steps[1].icon}
                                />
                            </div>
                        </div>

                        <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-gradient-third p-5 rounded-lg  shadow-lg">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{steps[1].title}</div>
                            </div>
                            <div className="text-primary">{steps[1].description}</div>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full borde  bg-primary group-[.is-active]:bg-emerald-500 text-primary group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/4 md:group-even:translate-x-1/4">
                            <div className="w-16 h-16 bg-gradient-third dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Icon
                                    className="w-8 h-8 text-primary dark:text-text.dark"
                                    icon={steps[2].icon}
                                />
                            </div>
                        </div>

                        <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-gradient-third p-5 rounded-lg  shadow-lg">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{steps[2].title}</div>
                            </div>
                            <div className="text-primary">{steps[2].description}</div>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full borde  bg-primary group-[.is-active]:bg-emerald-500 text-primary group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/4 md:group-even:translate-x-1/4">
                            <div className="w-16 h-16 bg-gradient-third dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Icon
                                    className="w-8 h-8 text-primary dark:text-text.dark"
                                    icon={steps[3].icon}
                                />
                            </div>
                        </div>

                        <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-gradient-third p-5 rounded-lg  shadow-lg">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{steps[3].title}</div>
                            </div>
                            <div className="text-primary">{steps[3].description}</div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full borde  bg-primary group-[.is-active]:bg-emerald-500 text-primary group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/4 md:group-even:translate-x-1/4">
                            <div className="w-16 h-16 bg-gradient-third dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Icon
                                    className="w-8 h-8 text-primary dark:text-text.dark"
                                    icon={steps[4].icon}
                                />
                            </div>
                        </div>

                        <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-gradient-third p-5 rounded-lg  shadow-lg">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{steps[4].title}</div>
                            </div>
                            <div className="text-primary">{steps[4].description}</div>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full borde  bg-primary group-[.is-active]:bg-emerald-500 text-primary group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/4 md:group-even:translate-x-1/4">
                            <div className="w-16 h-16 bg-gradient-third dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Icon
                                    className="w-8 h-8 text-primary dark:text-text.dark"
                                    icon={steps[5].icon}
                                />
                            </div>
                        </div>

                        <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-gradient-third p-5 rounded-lg  shadow-lg">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{steps[5].title}</div>
                            </div>
                            <div className="text-primary">{steps[5].description}</div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-16 h-16 rounded-full borde  bg-primary group-[.is-active]:bg-emerald-500 text-primary group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/4 md:group-even:translate-x-1/4">
                            <div className="w-16 h-16 bg-gradient-third dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Icon
                                    className="w-8 h-8 text-primary dark:text-text.dark"
                                    icon={steps[6].icon}
                                />
                            </div>
                        </div>

                        <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-gradient-third p-5 rounded-lg  shadow-lg">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{steps[6].title}</div>
                            </div>
                            <div className="text-primary">{steps[6].description}</div>
                        </div>
                    </div>






                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

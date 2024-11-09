// src/components/TipsSection.tsx
import React from "react";
import TipsCard from "./TipsCard";


const tips = [
    {
        title: "প্রয়োজনীয় ডকুমেন্ট প্রস্তুত রাখুন",
        description: "আপনার পাসপোর্ট, টিকেট, ভিসা এবং প্রয়োজনীয় ডকুমেন্ট হাতের কাছে রাখুন। ইমিগ্রেশনের সময় দেরি কমাতে এইসব দ্রুত প্রদর্শন করতে হবে।",
        type: "do" as const,  // Explicitly set type
    },
    {
        title: "সঠিক চেক-ইন সময়ে উপস্থিত হোন",
        description: "যত দ্রুত সম্ভব চেক-ইন করুন, বিশেষ করে আন্তর্জাতিক ভ্রমণে। এতে করে ইমিগ্রেশনের সময় পর্যাপ্ত থাকবে।",
        type: "do" as const,
    },

    {
        title: "এয়ারপোর্ট কর্মীদের সাথে সৌজন্যমূলক আচরণ করুন",
        description: "আপনার কথা ও ব্যবহারে সৌজন্য বজায় রাখুন। কর্মীদের সাথে শিষ্টাচার মেনে চললে আপনার অভিজ্ঞতা সহজ ও নিরাপদ হবে।",
        type: "do" as const,
    },
    {
        title: "অনুমতিবিহীন দ্রব্যাদি বহন করবেন না",
        description: "কোনো অবৈধ দ্রব্য বা অনুমতি ছাড়া কোন জিনিস বিমানবন্দরে বহন করা আইনত দণ্ডনীয়। নিরাপত্তার জন্য এটি অপরিহার্য।",
        type: "dont" as const,
    },
    {
        title: "লাইনে অপেক্ষা না করে এগিয়ে যাবেন না",
        description: "আপনার পাসপোর্ট চেকিং এর সময় লাইনে অপেক্ষা করুন এবং অননুমোদিত পথে প্রবেশ করবেন না। এটাই শৃঙ্খলাপূর্ণ।",
        type: "dont" as const,
    },
];

const TipsSection: React.FC = () => {
    return (
        <section className="bg-gradient-secondary dark:bg-background.dark py-10 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">
                    বিমানবন্দরে করণীয় ও বর্জনীয়
                </h2>
                <p className="text-primary dark:text-text.dark mb-12 max-w-xl mx-auto">
                    বিমানবন্দর ও ইমিগ্রেশনে কিভাবে আচরণ করবেন তা জানুন।
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tips.map((tip, index) => (
                        <TipsCard key={index} {...tip} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TipsSection;

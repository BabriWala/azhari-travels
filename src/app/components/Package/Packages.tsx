// src/components/Packages.tsx
import React from "react";
import PackageCard from "./PackageCard";

const packageOptions = [
    {
        title: "স্টুডেন্ট",
        price: "১ লক্ষ ২০ হাজার",
        features: ["ভিসা", "টিকেট", "অফার লেটার", "ভর্তি", "বাসা",],
    },
    {
        title: "ওমরাহ এবং মিশর ভ্রমণ",
        price: "২ লক্ষ ২৫ হাজার",
        features: ["মিশর ও ওমরাহ ভিসা", "ডিরেক্ট ফ্লাইট টিকেট", "টুরিস্ট স্পট", "মক্কা ও মদিনা যিয়ারাহ", "ট্রান্সপোর্ট", "খাবার", "হোটেল", "এন্ট্রি ফি",],
        isPopular: true,
    },
    {
        title: "ওমরাহ",
        price: "১ লক্ষ ৩০ হাজার টাকা",
        features: ["ভিসা", "ডিরেক্ট ফ্লাইট টিকেট", "ট্রান্সপোর্ট", "মক্কা ও মদিনা যিয়ারহ", "খাবার", "হোটেল",],
    },
];

const Packages: React.FC = () => {
    return (
        <section className="bg-gradient-secondary dark:bg-background.dark py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">আমাদের প্যাকেজসমূহ</h2>
                <p className="text-primary dark:text-text.dark mb-12 max-w-xl mx-auto">
                    আপনার পছন্দ অনুযায়ী প্যাকেজ নির্বাচন করুন
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packageOptions.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;

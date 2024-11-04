// src/components/Packages.tsx
import React from "react";
import PackageCard from "./PackageCard";

const packageOptions = [
    {
        title: "Basic",
        price: "$19/mo",
        features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
        title: "Standard",
        price: "$49/mo",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        isPopular: true,
    },
    {
        title: "Premium",
        price: "$99/mo",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
];

const Packages: React.FC = () => {
    return (
        <section className="bg-background-light dark:bg-background.dark py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-8">Our Packages</h2>
                <p className="text-text-light dark:text-text.dark mb-12 max-w-xl mx-auto">
                    Choose the best plan that suits your needs.
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

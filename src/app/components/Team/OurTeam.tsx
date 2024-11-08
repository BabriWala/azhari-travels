// src/components/OurTeam.tsx
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
    {
        name: "রুম্মান হামযাহ",
        position: "প্রতিষ্ঠাতা",
        imageUrl: "/team/Team-01.jpg",
        mobileNumber: "+8801877995354",
        whatsappNumber: "+8801877995354",
        socialMedia: {
            facebook: "https://facebook.com/iamhamzahkhan",
            messenger: "https://m.me/iamhamzahkhan",
        },
    },
    {
        name: "বাবরি ওয়ালা",
        position: "সফটওয়ার ইঞ্জিয়ার",
        imageUrl: "/team/Team-02.jpg",
        mobileNumber: "+8801580580982",
        whatsappNumber: "+8801580580982",
        socialMedia: {
            facebook: "https://facebook.com/babriwala.hazishaheb",
            linkedin: "https://linkedin.com/in/hanzala2022",
            messenger: "https://m.me/babriwala.hazishaheb",
        },
    },
    {
        name: "মুঈনুল ইসলাম",
        position: "কোষাধক্ষ্য",
        imageUrl: "/team/Team-03.jpg",
        mobileNumber: "+8801719169191",
        whatsappNumber: "+8801719169191",
        socialMedia: {
            facebook: "https://www.facebook.com/md.mainulislam.585",
            messenger: "https://m.me/md.mainulislam.585",
        },
    },
];

const OurTeam: React.FC = () => {
    return (
        <section className="bg-background-light dark:bg-background.dark py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">
                    আমাদের টিম
                </h2>
                <p className="text-primary dark:text-text.dark mb-12 max-w-xl mx-auto">
                    আপনাদের আরামদায়ক ভ্রমণের জন্য আমরা আছি পাশে
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

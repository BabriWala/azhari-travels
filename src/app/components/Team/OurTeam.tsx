// src/components/OurTeam.tsx
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
    {
        name: "Alice Johnson",
        position: "CEO & Founder",
        bio: "Alice has over 20 years of experience in tech leadership.",
        imageUrl: "/images/alice.jpg",
    },
    {
        name: "Bob Smith",
        position: "CTO",
        bio: "Bob specializes in building scalable solutions.",
        imageUrl: "/images/bob.jpg",
    },
    {
        name: "Cathy Brown",
        position: "Head of Design",
        bio: "Cathy creates beautiful, user-friendly designs.",
        imageUrl: "/images/cathy.jpg",
    },
    {
        name: "David Wilson",
        position: "Lead Developer",
        bio: "David is a full-stack expert with a passion for coding.",
        imageUrl: "/images/david.jpg",
    },
];

const OurTeam: React.FC = () => {
    return (
        <section className="bg-background-light dark:bg-background.dark py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-8">
                    Meet Our Team
                </h2>
                <p className="text-text-light dark:text-text.dark mb-12 max-w-xl mx-auto">
                    Our team is dedicated to making the world a better place through innovative solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

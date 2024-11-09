// src/components/TeamMemberCard.tsx
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface TeamMemberProps {
    name: string;
    position: string;
    bio?: string;
    imageUrl: string;
    mobileNumber: string;
    whatsappNumber: string;
    socialMedia?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        github?: string;
        facebook?: string;
        messenger?: string;
    };
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, position, bio, imageUrl, mobileNumber, whatsappNumber, socialMedia }) => {
    return (
        <div className="bg-gradient-third  dark:bg-background.dark shadow-md rounded-lg p-10 text-center">
            <img
                src={imageUrl}
                alt={`${name}'s photo`}
                className="w-52 h-52 rounded-full object-cover mx-auto mb-4" // Use rounded-lg for square images
            />
            <h3 className="text-lg font-semibold text-primary dark:text-secondary">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{position}</p>
            {bio && <p className="mt-2 text-text-light dark:text-text.dark text-sm">{bio}</p>}
            <div className="flex justify-center mt-4 space-x-4">
                {/* Mobile and WhatsApp Icons */}
                <Link href={`tel:${mobileNumber}`} target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:phone" className="text-primary dark:text-secondary w-6 h-6" />
                </Link>
                <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:whatsapp" className="text-primary dark:text-secondary w-6 h-6" />
                </Link>
                {/* Social Media Icons */}
                {socialMedia?.twitter && (
                    <Link href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:twitter" className="text-primary dark:text-secondary w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.linkedin && (
                    <Link href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin" className="text-primary dark:text-secondary w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.instagram && (
                    <Link href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:instagram" className="text-primary dark:text-secondary w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.facebook && (
                    <Link href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:facebook" className="text-primary dark:text-secondary w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.github && (
                    <Link href={socialMedia.github} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" className="text-primary dark:text-secondary w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.messenger && (
                    <Link href={socialMedia.messenger} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:facebook-messenger" className="text-primary dark:text-secondary w-6 h-6" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default TeamMemberCard;

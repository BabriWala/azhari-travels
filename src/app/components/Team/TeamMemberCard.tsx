
// @ts-nocheck
"use client"
// src/components/TeamMemberCard.tsx
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, position, bio, imageUrl, mobileNumber, whatsappNumber, socialMedia, variants, index, teamInview }) => {
    return (
        <motion.div
            variants={variants}
            custom={index} // Pass index for staggered delay
            initial="hidden"
            animate={teamInview ? "visible" : "hidden"}
            className="bg-gradient-third   shadow-md rounded-lg p-10 text-center">
            <img
                src={imageUrl}
                alt={`${name}'s photo`}
                className="w-52 h-52 rounded-full object-cover mx-auto mb-4" // Use rounded-lg for square images
            />
            <h3 className="text-lg font-semibold text-primary ">{name}</h3>
            <p className="text-sm text-gray-600 ">{position}</p>
            {bio && <p className="mt-2 text-text-light  text-sm">{bio}</p>}
            <div className="flex justify-center mt-4 space-x-4">
                {/* Mobile and WhatsApp Icons */}
                <Link className="cursor-pointer" href={`tel:${mobileNumber}`} target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:phone" className="text-primary  w-6 h-6" />
                </Link>
                <Link className="cursor-pointer" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:whatsapp" className="text-primary  w-6 h-6" />
                </Link>
                {/* Social Media Icons */}
                {socialMedia?.twitter && (
                    <Link className="cursor-pointer" href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:twitter" className="text-primary  w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.linkedin && (
                    <Link className="cursor-pointer" href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin" className="text-primary  w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.instagram && (
                    <Link className="cursor-pointer" href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:instagram" className="text-primary  w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.facebook && (
                    <Link className="cursor-pointer" href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:facebook" className="text-primary  w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.github && (
                    <Link className="cursor-pointer" href={socialMedia.github} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" className="text-primary  w-6 h-6" />
                    </Link>
                )}
                {socialMedia?.messenger && (
                    <Link className="cursor-pointer" href={socialMedia.messenger} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:facebook-messenger" className="text-primary  w-6 h-6" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

export default TeamMemberCard;

// src/components/TeamMemberCard.tsx
import React from "react";

interface TeamMemberProps {
    name: string;
    position: string;
    bio: string;
    imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, position, bio, imageUrl }) => {
    return (
        <div className="bg-white dark:bg-background.dark shadow-md rounded-lg p-6 text-center">
            <img
                src={imageUrl}
                alt={`${name}'s photo`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-primary dark:text-secondary">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{position}</p>
            <p className="mt-2 text-text-light dark:text-text.dark text-sm">{bio}</p>
        </div>
    );
};

export default TeamMemberCard;

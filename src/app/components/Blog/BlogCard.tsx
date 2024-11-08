// src/components/BlogCard.tsx
import React from "react";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, slug, date }) => {
    return (
        <div className="bg-white dark:bg-background.dark shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-2">
                    <Link href={`/blog/${slug}`}>
                        {title}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{date}</p>
                <p className="text-primary dark:text-text.dark mb-4">{excerpt}</p>
                <Link href={`/blog/${slug}`}>
                    <button className="text-primary dark:text-secondary hover:underline">
                        আরো পড়ুন
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;

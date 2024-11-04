// src/components/BlogSection.tsx
import React from "react";
import BlogCard from "./BlogCard";

const blogPosts = [
    {
        title: "Understanding Next.js and Tailwind CSS",
        excerpt: "Learn how to build modern websites with Next.js and Tailwind CSS.",
        image: "/images/blog1.jpg",
        slug: "nextjs-tailwind-css",
        date: "October 12, 2024",
    },
    // Add more blog posts as needed
];

const BlogSection: React.FC = () => {
    return (
        <section className="bg-background-light dark:bg-background.dark py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-8">
                    Our Blog
                </h2>
                <p className="text-text-light dark:text-text.dark mb-12 max-w-xl mx-auto">
                    Discover the latest articles on web development, design, and more.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

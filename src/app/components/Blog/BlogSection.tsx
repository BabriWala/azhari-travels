// src/components/BlogSection.tsx
import React from "react";
import BlogCard from "./BlogCard";

const blogPosts = [
    {
        title: "মিশর ভিসা নিতে প্রতাড়িত হবেন না যেভাবে",
        excerpt: "মিশর ভিসা নিতে আমরা অনেক সময়ই নানা ধরণের সমস্যাই পড়ে থাকি যার দরুণ মাঝে মধ্যেই আমরা প্রতড়িত হয়।",
        image: "/gallery/Gallery-05.jpg",
        slug: "মিশর-ভিসা-নিতে-প্রতাড়িত-হবেন-না-যেভাবে",
        date: "১০ নভেম্বর ২০২৪ ইং",
    },
];

const BlogSection: React.FC = () => {
    return (
        <section className="bg-gradient-secondary dark:bg-background.dark py-10 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">
                    আমাদের ব্লগ সমূহ
                </h2>
                <p className="text-primary dark:text-text.dark mb-12 max-w-xl mx-auto">
                    ব্লগ বা আর্টিকেল গুলো পড়ে যাবতীয় ইনফরমেশন নিন
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

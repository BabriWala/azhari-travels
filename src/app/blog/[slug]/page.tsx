// src/app/blog/[slug]/page.tsx
import React from "react";

interface Params {
    params: {
        slug: string;
    };
}

// Mock function to simulate data fetching
async function getBlogPost(slug: string) {
    // Simulate fetching blog post based on slug
    return {
        title: "Understanding Next.js and Tailwind CSS",
        content: `Detailed content of the blog post goes here...`,
        image: "/images/blog1.jpg",
        date: "October 12, 2024",
    };
}

const BlogDetail = async ({ params }: Params) => {
    const { slug } = params;
    const blogPost = await getBlogPost(slug);

    return (
        <section className="bg-background.light dark:bg-background.dark py-16">
            <div className="container mx-auto px-4 lg:max-w-4xl">
                <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-64 object-cover rounded-lg mb-8"
                />
                <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-4">
                    {blogPost.title}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
                    {blogPost.date}
                </p>
                <article className="text-text.light dark:text-text.dark leading-relaxed space-y-4">
                    {blogPost.content}
                </article>
            </div>
        </section>
    );
};

export default BlogDetail;

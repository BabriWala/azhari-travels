"use client";

import AU_ADMIN_FAQ from '@/app/data/admin_faq_AU';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface FAQ {
    category: string;
    id: number;
    question_banglish: string;
    question: string;
    answer: string;
}

// Helper function to escape special regex characters in the search term.
const escapeRegExp = (text: string): string => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Helper function to highlight search term occurrences in text.
const highlightText = (text: string, highlight: string): React.ReactNode => {
    if (!highlight.trim()) {
        return text;
    }
    const escapedHighlight = escapeRegExp(highlight);
    const regex = new RegExp(`(${escapedHighlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
        regex.test(part) ? (
            <span key={index} className="bg-yellow-300">
                {part}
            </span>
        ) : (
            part
        )
    );
};

const Page: React.FC = () => {
    // State for search input and category filter.
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    // Ensure your imported FAQ data is typed properly.
    const faqs: FAQ[] = AU_ADMIN_FAQ;

    // Compute unique categories from the FAQ data, with an "All" option.
    const categories = ['All', ...new Set(faqs.map((faq) => faq.category))];

    // Filter the FAQ list based on search term and category.
    const filteredFaqs = faqs.filter((faq) => {
        const search = searchTerm.toLowerCase();
        const matchesSearch =
            faq.question.toLowerCase().includes(search) ||
            faq.question_banglish.toLowerCase().includes(search);
        const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Copy answer text to clipboard and show temporary feedback.
    const handleCopy = (text: string, id: number) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopiedIndex(id);
                toast.success(`Copied: ${filteredFaqs.find(it => it.id === id)?.answer}`, { duration: 3000 })
                setTimeout(() => {
                    setCopiedIndex(null);
                }, 2000);
            })
            .catch((err) => console.error('Failed to copy text: ', err));
    };

    return (
        <section className="container mx-auto p-4 my-40">
            {/* Search and Category Filter */}
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search FAQ..."
                    className="border border-gray-300 rounded p-2 flex-1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="border border-gray-300 rounded p-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
                {filteredFaqs.length === 0 ? (
                    <p className="text-gray-600">No FAQs found.</p>
                ) : (
                    filteredFaqs.map((faq) => (
                        <div onClick={() => handleCopy(faq.answer, faq.id)} key={faq.id} className="border cursor-pointer border-gray-200 rounded p-4 shadow-sm">
                            <h2 className="text-lg font-semibold ">
                                {highlightText(faq.question, searchTerm)}

                            </h2>
                            <p className='text-base mb-2'><strong>{faq.category}</strong> - {highlightText(faq.question_banglish, searchTerm)}</p>
                            <p className="text-gray-700 whitespace-pre-line mb-2">{faq.answer}</p>
                            <button
                                onClick={() => handleCopy(faq.answer, faq.id)}
                                className="text-blue-500 hover:underline focus:outline-none"
                            >
                                {copiedIndex === faq.id ? 'Copied!' : 'Copy Answer'}
                            </button>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Page;

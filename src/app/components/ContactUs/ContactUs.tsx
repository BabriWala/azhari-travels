// src/components/ContactUs.tsx
"use client";

import React, { useState } from "react";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setError("All fields are required.");
            return;
        }

        // Simulate a successful submission
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Here you would typically send the data to your API
    };

    return (
        <section className="py-12 bg-background-light dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light dark:text-text.dark mb-8">
                    Contact Us
                </h2>
                {submitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Thank you!</strong>
                        <span className="block sm:inline"> Your message has been sent.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                                <strong className="font-bold">Error!</strong>
                                <span className="block sm:inline"> {error}</span>
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-text-light dark:text-text.dark mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text.dark bg-background-light dark:bg-gray-700 focus:outline-none focus:shadow-outline"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-text-light dark:text-text.dark mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text.dark bg-background-light dark:bg-gray-700 focus:outline-none focus:shadow-outline"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-text-light dark:text-text.dark mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text.dark bg-background-light dark:bg-gray-700 focus:outline-none focus:shadow-outline"
                                rows={4}
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary.DEFAULT hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactUs;

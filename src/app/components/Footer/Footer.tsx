// src/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-background-light dark:bg-background.dark py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
                    {/* Brand and Description */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-primary dark:text-secondary">আযহারী ট্রাভেলস</h2>
                        <p className="text-primary dark:text-text.dark mt-2">
                            ছাত্রদের স্বপ্ন পূরনের মাধ্যম
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 ">
                        <Link href="/about" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            হোম
                        </Link>
                        <Link href="/services" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            অভিব্যক্তি
                        </Link>
                        <Link href="/contact" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            আমরা কিভাবে কাজ করি
                        </Link>
                        <Link href="/privacy-policy" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            নিয়ম কানুন
                        </Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className="mt-8 text-center text-sm text-primary dark:text-text.dark">
                    &copy; {new Date().getFullYear()} <span className="font-bold">বাবরি ওয়ালা</span>. এই ওয়েবসাইটটির স্বত্ত্বাধিকার.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

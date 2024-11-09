// src/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";


const Footer: React.FC = () => {
    return (
        <>
            {/* WhatsApp Call Icon on the Left */}
            <Link
                href="https://wa.me/123456789" // replace with the actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 left-4 z-50 bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition-colors"
            >
                <Icon icon={"logos:whatsapp-icon"} width="28" height="28" />
            </Link>

            {/* Go to Top Button on the Right */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-8 right-4 z-50 bg-primary p-3 rounded-full border border-transparent hover:border-primary text-white hover:text-primary hover:bg-secondary transition-colors"
            >
                <Icon icon="bxs:up-arrow"></Icon>
            </button>

            <footer className="bg-gradient-primary dark:bg-background.dark py-10 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
                        {/* Brand and Description */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-primary dark:text-secondary">আযহারী ট্রাভেলস</h2>
                            <p className="text-primary dark:text-text.dark mt-2 mb-2">
                                ছাত্রদের স্বপ্ন পূরনের মাধ্যম
                            </p>
                            <p>মোবাইল: +8801877995354</p>
                            <p>হোয়াটসঅ্যাপ: +8801877995354</p>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
                            <Link href="/about" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                                হোম
                            </Link>
                            <Link href="/services" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                                অভিব্যক্তি
                            </Link>
                            <Link href="/how-we-work" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                                আমরা কিভাবে কাজ করি
                            </Link>
                            <Link href="/terms-and-conditions" className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors">
                                নিয়ম কানুন
                            </Link>
                        </div>

                        {/* Social Media Links and Contact Details */}
                        <div className="flex flex-col items-center md:items-end space-y-3">
                            {/* Social Icons from Iconify */}
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors"
                                >
                                    <Icon icon={"ic:twotone-facebook"} width="24" height="24" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors"
                                >
                                    <Icon icon={"formkit:twitter"} width="24" height="24" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors"
                                >
                                    <Icon icon={"ant-design:instagram-filled"} width="24" height="24" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary dark:text-text.dark hover:text-primary dark:hover:text-secondary transition-colors"
                                >
                                    <Icon icon={"mage:linkedin"} width="24" height="24" />
                                </a>
                            </div>

                            {/* Address and Contact Info */}
                            <div className="text-primary dark:text-text.dark text-center md:text-right space-y-1">
                                <p>বাস: ২/এ, রোড: ০৭, নবীনগর হাউজিং<br />  মোহাম্মদপুর, ঢাকা-১২০৭</p>
                            </div>
                        </div>
                    </div>


                </div>
            </footer>
            {/* Footer Bottom Text */}
            <div className="text-center text-sm text-white bg-primary dark:text-text.dark py-5">
                &copy; {new Date().getFullYear()} <span className="font-bold">বাবরি ওয়ালা</span>. এই ওয়েবসাইটটির স্বত্ত্বাধিকার.
            </div>
        </>
    );
};

export default Footer;

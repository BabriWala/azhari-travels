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
                className="fixed bottom-8 right-4 z-50 bg-primary p-3 rounded-full border border-transparent hover:border-primary text-white hover:text-white hover:bg-secondary transition-colors"
            >
                <Icon icon="bxs:up-arrow"></Icon>
            </button>

            <footer className="bg-primary  py-10 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
                        {/* Brand and Description */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-white ">আযহারী ট্রাভেলস</h2>
                            <p className="text-white  mt-2 mb-2">
                                ছাত্রদের স্বপ্ন পূরনের মাধ্যম
                            </p>
                            <p className="text-white">মোবাইল: +8801877995354</p>
                            <p className="text-white">হোয়াটসঅ্যাপ: +8801877995354</p>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
                            <Link href="/about" className="text-white  hover:text-white  transition-colors">
                                হোম
                            </Link>
                            <Link href="/frequently-asked-questions" className="text-white  hover:text-white  transition-colors">
                                আপনার জিজ্ঞাসা!
                            </Link>
                            <Link href="/happy-clients" className="text-white  hover:text-white  transition-colors">
                                রিভিউ
                            </Link>
                            <Link href="/how-we-work" className="text-white  hover:text-white  transition-colors">
                                আমরা কিভাবে কাজ করি
                            </Link>
                            <Link href="/terms-and-conditions" className="text-white  hover:text-white  transition-colors">
                                নিয়ম কানুন
                            </Link>
                            <Link href="/refund-policy" className="text-white  hover:text-white  transition-colors">
                                রিফান্ড
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
                                    className="text-white  hover:text-white  transition-colors"
                                >
                                    <Icon icon={"ic:twotone-facebook"} width="24" height="24" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white  hover:text-white  transition-colors"
                                >
                                    <Icon icon={"formkit:twitter"} width="24" height="24" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white  hover:text-white  transition-colors"
                                >
                                    <Icon icon={"ant-design:instagram-filled"} width="24" height="24" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white  hover:text-white  transition-colors"
                                >
                                    <Icon icon={"mage:linkedin"} width="24" height="24" />
                                </a>
                            </div>

                            {/* Address and Contact Info */}
                            <div className="text-white  text-center md:text-right space-y-1">
                                <p>বাস: ২/এ, রোড: ০৭, নবীনগর হাউজিং<br />  মোহাম্মদপুর, ঢাকা-১২০৭</p>
                            </div>
                        </div>
                    </div>


                </div>
            </footer>
            {/* Footer Bottom Text */}
            <div className="text-center text-sm text-white bg-primary  py-5">
                &copy; {new Date().getFullYear()} <Link href={"https://facebook.com/babriwala.hazishaheb"} target="_blank"><span className="font-bold underline cursor-pointer">বাবরি ওয়ালা</span></Link>. এই ওয়েবসাইটটির স্বত্ত্বাধিকার.
            </div>
        </>
    );
};

export default Footer;

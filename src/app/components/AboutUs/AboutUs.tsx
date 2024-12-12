// src/components/AboutUs.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const AboutUs: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,  // Allow enter and exit animations
        threshold: 0.1,     // Trigger when 10% of the section is visible
    });

    // Variants for image animation (left enter/exit)
    const imageVariants = {
        hidden: { opacity: 0, x: -100 }, // Hidden state: left
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // Slide in
        exit: { opacity: 0, x: -100, transition: { duration: 0.8 } }, // Slide out
    };

    // Variants for text animation (right enter/exit)
    const textVariants = {
        hidden: { opacity: 0, x: 100 }, // Hidden state: right
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // Slide in
        exit: { opacity: 0, x: 100, transition: { duration: 0.8 } }, // Slide out
    };

    // Variants for heading animation (bottom enter/exit)
    const headingVariants = {
        hidden: { opacity: 0, y: 50 }, // Hidden state: bottom
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }, // Slide up
        exit: { opacity: 0, y: 50, transition: { duration: 0.8 } }, // Slide down
    };
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "exit"} // Toggle animation based on visibility
            className="py-10 md:py-20 bg-gradient-secondary dark:bg-background.dark overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-between">
                    <motion.div
                        variants={imageVariants}
                        className="md:w-2/6 mt-6 md:mt-0">
                        <img
                            src="/about/About.jpg" // Replace with a valid Pexels image link
                            alt="Travel Experience"
                            className=" h-96 object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                    <motion.div
                        variants={textVariants}
                        className="md:w-5/6 text-center md:text-start">
                        <motion.h2
                            variants={headingVariants}
                            className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-6">
                            আমাদের সম্পর্কে
                        </motion.h2>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark mb-4">
                            আজহারী ট্রাভেলস এন্ড ট্যুরস একটি সরকার অনুমোদিত প্রতিষ্ঠান। যা ২০২৪ সালে প্রতিষ্ঠিত হয়েছে। আজহারী ট্রাভেলস স্বসম্মানের সহিত এখন পর্যন্ত অসংখ্য ছাত্রদের স্বপ্ন পূরণ করেছে স্বল্প খরচে।
                        </p>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark mb-4">
                            আজহারী ট্রাভেলস এন্ড ট্যুরস এর মাধ্যমে যেসকল ছাত্র আল আযহার বিশ্ববিদ্যালয় পড়াশোনা করতে গিয়েছেন তাদের সসম্মানে ভর্তিসহ থাকার ব্যবস্থা করে দিয়ে আসছে। যাতে ছাত্ররা সেখানে খুব সহজেই খাপ খাওয়াতে পারে।
                        </p>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark font-bold mb-2">
                            সকল ছাত্রদের একটিই বিশ্বস্ত প্রতিষ্ঠান আজহারী ট্রাভেলস এন্ড ট্যুরস
                        </p>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark">
                            <span>ট্রেড লাইসেন্স:</span> <span>TRAD/DNCC/017918/2024</span>
                        </p>
                        <p className="text-lg text-justify md:text-start text-primary dark:text-text.dark">
                            <span>টিন:</span> <span>361380371820</span>
                        </p>

                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};

export default AboutUs;

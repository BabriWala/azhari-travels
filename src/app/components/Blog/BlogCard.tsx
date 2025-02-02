
// @ts-nocheck
"use client"
// src/components/BlogCard.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface BlogCardProps {
    slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, variants, index, blogInview }) => {

    const blogs = [
        {
            slug: "Al-Azhar-Introduction",
            content: <motion.div
                variants={variants}
                custom={0} // Pass index for staggered delay
                initial="hidden"
                animate={blogInview ? "visible" : "hidden"}
                className="bg-gradient-third bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-80 object-cover" src="/blog/Blog_01.webp" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary  mb-2">
                        <Link href={`/blog/${slug}`}>
                            আল আযহার পরিচিত
                        </Link>
                    </h3>
                    <p className="text-primary text-justify  mb-4">{("আল – আযহার মসজিদ ইসলামি বিশ্বের অন্যতম বিখ্যাত ও প্রাচীন একটি মসজিদ। মিশরের সর্বাধিক প্রাচীন মসজিদগুলোর মধ্যে সবচেয়ে গুরুত্বপূর্ণ মসজিদ এটি। ইসলাম ও মুসলমাদের ঐতিহাসিক একটি দুর্গ। যা কাবাতুল ইলম নামে খ্যাত। ইসলামি সভ্যতার প্রাণকেন্দ্র। কায়রো নগরীর আদ—দারবুল আহমার এলাকায় সহস্রাধিক বছর ধরে দাঁড়িয়ে আছে ইসলামি শিক্ষা ও সভ্যতার এই অতন্দ্র প্রহরী। এই মসজিদকে কেন্দ্র করেই গড়ে ওঠে আজকের বিশ্ব বিখ্যাত আল-আযহার বিশ্ববিদ্যালয়। মসজিদটি প্রতিষ্ঠালগ্ন থেকে অদ্যাবধি নিরবচ্ছিন্নভাবে মুসলিম উম্মাহর মাঝে ইলমে নববির মশাল প্রজ্বলিত রেখেছে।").slice(0, 150)} ...........</p>
                    <Link href={`/blog/${slug}`}>
                        <button className="mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white   transition duration-300">
                            বিস্তারিত পড়ুন
                        </button>

                    </Link>
                </div>
            </motion.div>
        },
        {
            slug: "Al-Azhar-Syllabus",
            content: <motion.div
                variants={variants}
                custom={1} // Pass index for staggered delay
                initial="hidden"
                animate={blogInview ? "visible" : "hidden"}
                className="bg-gradient-third bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-80 object-cover" src="/blog/Blog_02.webp" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary  mb-2">
                        <Link href={`/blog/${slug}`}>
                            আল আযহার বিশ্ববিদ্যালয়ের পাঠ্যক্রম
                        </Link>
                    </h3>
                    <p className="text-primary text-justify  mb-4">{("আল-আযহারের সূচনা থেকে যে সকল বিষয়ে পাঠদান করা হতো, তার মধ্যে উল্লেখযোগ্য হলো, উলুমুল কুরআন, উলুমুল হাদীস, ইলমুল কালাম (ধর্মতত্ত্ব), ফিকহ (আইন), উসুলুল ফিকহ, নাহু—সরফ (ব্যকরণ), বালাগাহ (অলঙ্কার শাস্ত্র), আদাব (সাহিত্য), তারিখ (ইতিহাস), তিব (চিকিৎসা শাস্ত্র), ফালসাফা (দর্শন) এবং মানতিক (যুক্তিবিজ্ঞান) ইত্যাদি।").slice(0, 150)} ...........</p>
                    <Link href={`/blog/${slug}`}>
                        <button className="mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white   transition duration-300">
                            বিস্তারিত পড়ুন
                        </button>

                    </Link>
                </div>
            </motion.div>
        },
        {
            slug: "Introduction-To-Egypt",
            content: <motion.div
                variants={variants}
                custom={3} // Pass index for staggered delay
                initial="hidden"
                animate={blogInview ? "visible" : "hidden"}
                className="bg-gradient-third bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-80 object-cover" src="/blog/Blog_03.webp" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary  mb-2">
                        <Link href={`/blog/${slug}`}>
                            মিশর পরিচিতি
                        </Link>
                    </h3>
                    <p className="text-primary text-justify  mb-4">{("মিশর ( আরবি: مصر: মিস্ব্‌র্‌; কথ্য মিশরীয় আরবি : مصر মাস্ব্‌র্‌) হল আফ্রিকা মহাদেশের উত্তর-পূর্ব কোণ ও এশিয়া মহাদেশের দক্ষিণ–পশ্চিম কোণে অবস্থিত একটি আন্তঃমহাদেশীয় ভূমধ্যসাগরীয় রাষ্ট্র। এর পূর্ণ সরকারী নাম হল মিশর আরব প্রজাতন্ত্র। প্রাচীনযুগে মিশর সমগ্র বিশ্বের সবচে' প্রাচীন ও সবচে' গুরুত্বপূর্ণ একটি সভ্যতা ছিল। ১৯৩৬ সালে প্রতিষ্ঠিত আধুনিক মিশরের রাজধানীর নাম কায়রো। মিশরের আয়তন ১০,০১,৪৫০ বর্গকিলোমিটার; সেইসঙ্গে প্রায় ১০ কোটি জনসংখ্যার দেশ মিশর উত্তর আফ্রিকা, মধ্যপ্রাচ্য এবং আরব বিশ্বের সবচেয়ে জনবহুল রাষ্ট্র; সমগ্র আফ্রিকা মহাদেশের তৃতীয় সর্বাধিক জনবহুল রাষ্ট্র (নাইজেরিয়া ও ইথিওপিয়ার পর)। সারা বিশ্বে এটি ১৩তম সর্বাধিক জনবহুল রাষ্ট্র। দেশের জনঘনত্ব প্রতি বর্গকিলোমিটার ১০০ জন, যা বিশ্বের ৮৩তম সর্বোচ্চ।").slice(0, 150)} ...........</p>
                    <Link href={`/blog/${slug}`}>
                        <button className="mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white   transition duration-300">
                            বিস্তারিত পড়ুন
                        </button>

                    </Link>
                </div>
            </motion.div>
        }

    ]



    return (
        <div className="  ">
            {
                blogs?.find(it => it.slug === slug)?.content ?? "No content available"
            }
            {/* <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-primary  mb-2">
                    <Link href={`/blog/${slug}`}>
                        {title}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500  mb-4">{date}</p>
                <p className="text-primary  mb-4">{excerpt}</p>
                <Link href={`/blog/${slug}`}>
                    <button className="text-primary  hover:underline">
                        আরো পড়ুন
                    </button>
                </Link>
            </div> */}
        </div>
    );
};

export default BlogCard;

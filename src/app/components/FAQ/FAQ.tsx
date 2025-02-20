// @ts-nocheck
// src/components/FAQ.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}
const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.8 } }, // Slide out
};

// Variants for package cards with staggered delay
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.4 }, // Delay based on index
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: 50,
        transition: { duration: 0.8, delay: i * 0.4 }, // Delay based on index
    }),
};


const faqData: FAQItem[] = [
    {
        question: "কী কী ডকুমেন্টস  লাগবে ?",
        answer:
            "পাসপোর্ট,  পুলিশ ক্লিয়ারেন্স,  বার্থ সার্টিফিকেট ( অনলাইন করা থাকতে হবে) এবং শরহে বেকায়া বা আলীমের সনদ এবং মার্কশীট ( সত্তায়ন করা সহ)",
    },
    {
        question: "কত টাকা খরচ হবে ?",
        answer:
            "অন এরাইভেল  ভিসা + টিকিট + অফার লেটার + রিটার্ন টিকিট মিলিয়ে মোট ১ লাখ  ১৫ হাজার টাকা এবং সেখানে বাসা ভাড়া, এডভান্স, রুম চাদা  এবং ভর্তির সকল কার্যক্রমের জন্য মোট  ১৫ হাজার টাকা লাগবে",
    },
    {
        question: "আমি কী ভর্তি  হতে পারবো আজহারে ?",
        answer:
            "অবশ্যই আযহারে ভর্তি হতে পারবেন ১০০% নিশ্চিত.. হয়তোবা তারা আপনাকে মাহাদে ( ইন্টার ),  কুল্লিয়্যাহতে ( অনার্সে)  এতে ভর্তি নিবে৷",
    },
    {
        question: "মাসিক কত টাকা থাকা খাওয়ার জন্য খরচ হবে ?",
        answer:
            "সর্ব নিন্ম  ৭- ১০ হাজার টাকা লেগে যায়.. তবে  খরচ টা যে যেমন করে তার ঠিক তেমন খরচ হয়ে থাকে",
    },
    {
        question: "মিশরে ভর্তি এবং বাসা ভাড়া কারা করে দিবে ?",
        answer:
            "আজহারী ট্রাভেলস প্রতিনিধি আছে তারাই বাসা ভাড়া করে দিবে এবং আপনাকে রিসিভ করা থেকে শুরি করে,  মেডিক্যাল করা, আব্বাসিয়্যাহ থেকে সিল নেওয়া, এম্বেসী লেটার নেওয়া, ভর্তি করা অর্থাৎ  সকল কাজে সহযোগীতা করবে",
    },
    {
        question: "বাসা ভাড়া করতে কত টাকা খরচ হতে পারে ?",
        answer:
            " সাধারনত বাসা ভাড়া করতে জনপ্রতি ৭-৮ হাজার টাকা লেগে যায়. কারন, এর মধ্যেই এক মাসের বাসা ভাড়া, বাসার এডভান্স, রুমের সামানা থাকে তার চাদা দিতে হয়. যদি কোন কারনে  বাসা ছেড়ে দেন তাহলে এডভান্স এবং রুমের সামানার চাদার টাকা ফেরত পাবেন",
    },
    {
        question: "অন এরাইভেল  ভিসায় কী এম্বাসী লেটার দিচ্ছে.?",
        answer:
            "জ্বি হ্যা দিচ্ছে.",
    },
    {
        question: "কায়রো এয়ারপোর্টে  নেমে যে স্টিকার লাগাতে হয়.. তার খরচ কে বহন করবে ?",
        answer:
            "২৫ ডলার যাত্রীর নিজের বহন করতে হবে ।  কারন সেটা আজহারী ট্রাভেলস প্রদান করার কোন পন্থা নেই ।",
    },
    {
        question: "প্রসেসিং টা কিভাবে কী ?",
        answer:
            `<p><strong>অন এরাইভেল ভিসা:</strong></p>
    <p>প্রথমে উভয় পক্ষের নিরাপত্তার  স্বার্থে আমাদের চুক্তিপত্রে স্বাক্ষর করিতে হবে । </p>
    <p>অত:পর ভিসার আবেদন করব৷ এর জন্য ৩০ হাজার টাকা আমরা এডভান্স গ্রহন করে থাকি । </p>
    <p>তারপর ১২-১৫ দিনের মধ্যেই ভিসার এপ্রুভাল এসে পরবে .. ইনশা আল্লাহ
</p>
    <p>অতপর ৩ দিনের ভিতরে টিকিট বুক করতে হবে.. টিকিটের টাকা পরিশোধ করার ১ দিনের মধ্যেই  টিকিট দিয়ে দেওয়া হবে।
</p>
    <p>ফ্লাইটের ১০ দিন পুর্বে বাকি টাকা পরিশোধ করে দিতে হবে ।
</p>
<p>অত:পর  ফ্লাইটের ২/৩ দিন পুর্বে ওকে টু বোর্ড  দিয়ে দেওয়া হবে..
</p>
<p>এবং সাথে সাথে আপনার অফার লেটার এবং রিটার্ন টিকিট ও দিয়ে দেওয়া হবে..
ইনশা আল্লাহ..
</p>
<p>মিশর এয়ারপোর্টে আজহারী ট্রাভেলসের  প্রতিনিধি থাকবে, সে আপনাকে রিসিভ করে আপনার জন্য নির্ধারিত বাসায় নিয়ে যাবে। এবং খাবারের ব্যবস্থা করবে। অত:পর পরের দিন আপনার ইকামাহর মেয়াদ বাড়ানো হবে, মেডিক্যাল করা হবে এবং এম্বেসী লেটারের  জন্য আবেদন করা হবে ।  অত:পর সকল ডকুমেন্টস  কালেক্ট করে মিশর গমনের ৭-১০ দিনের মধ্যেই আপনাকে আল আযহারে ভর্তি সম্পন্ন করে দেওয়া হবে </p>
`,
    },
    {
        question: "আপনাদের কী কোন অফিস বা লাইসেন্স আছে.?",
        answer:
            "আলহামদুলিল্লাহ আজহারী ট্রাভেলস সরকার অনুমোদিত লাইসেন্স  আছে.. এবং আজহারী ট্রাভেলস অফিস মুহাম্মদপুর ঢাকাতেই রয়েছে",
    },
    {
        question: "পড়াশোনার পাশাপাশি কাজ করার সুযোগা আছে কিনা ?",
        answer:
            "জ্বি না নেই.. তবে অনেকেই কাজ করে টুকিটাকি, তবে একথা মনে রাখবেন কাজ করলে অবশ্যই  আপনার পড়ার মধ্যে ব্যঘাত ঘটবে.. পরবর্তিতে আপনি আপনার কাংক্ষিত লক্ষ থেকে সরে যেতে পারেন",
    },
    {
        question: "স্কলারশিপ হতে কত সময় লাগতে পারে?",
        answer:
            "স্কলারশিপ এটা একটা ভাগ্য এবং মেধার কাজ.. ২/৩ বছর লাগাতার ট্রাই করতে হবে.. এবং অবশ্যই মেধাবী এবং ভালো ফলাফলের অধিকারী ছাত্ররা স্কলারশিপ পাবে",
    },
    {
        question: "মিশরে পৌঁছে  টাকা দেওয়ার সুযোগ আছে কী.?",
        answer:
            ` <p>
        জ্বি না.. কারণ মিশরের লোকেরা ছাত্রদের সেখানে নিয়ে পরে টাকা নেয়। এর পিছনের কারণ হলো, ছাত্ররা দেশে থেকে এটা ভাবে, "যদি আমি তাকে টাকা দেই আর সে আমাকে কাজ না করে দিল, তাহলে তো আমি তাকে ধরতেও পারবো না।"
    </p>
    <p>
        কিন্তু আজহারী ট্রাভেলস ক্ষেত্রে এরকম নয়। আজহারী ট্রাভেলস পুরো এজেন্সি ঢাকায়, আজহারী ট্রাভেলস সরকার অনুমোদিত লাইসেন্স আছে এবং অফিস রয়েছে, তাই আজহারী ট্রাভেলসকে সন্দেহ করার কোনো অবকাশ নেই।
    </p>
    <p>
        তবে আমরা কখনোই কোনো কাজের জন্য অগ্রিম কোনো টাকা নিয়ে থাকি না। প্রতিটা কাজ শেষ হওয়ার পরেই টাকা গ্রহণ করি।
    </p>

            `,
    },
    {
        question: "আল আযহারে মাসিক কোন বেতন বা ইকামাহ এর জন্য টাকা দিতে হয় কী.?",
        answer:
            "নাহ,  আল আযহারের পড়াশোনা ফ্রী, এবং ইকামাহ টাও ছাত্রদের জন্য এবং তার পরিবারের জন্য ফ্রিতে দিয়ে থাকে আল আযহার।",
    },
    {
        question: "আল আযহারে কী সরাসরি  মাসটার্স করা যাবে ?",
        answer:
            "জ্বি না আল আযহারে সরাসরি  মাস্টার্স করা যাবে না.. সেখানে আলীম শেষ করলে তারা আপনাকে মাস্টার্সে ভর্তি হওয়ার চান্স দিবে ।",
    },
    {
        question: "স্কলারশিপ পেতে কত দিন লাগবে ? ",
        answer:
            "স্কলারশিপ এটা একটা ভাগ্য.. একটা ছাত্রের স্কলারশিপ পেতে প্রায় ২/৩ বছর লেগে যেতে পারে !  কারন স্কলারশিপ হয়ে থাকে অনার্সে উঠার পরে ৷",
    },
    {
        question: " সেখানে রান্না কী নিজেদের করতে হয় ?",
        answer:
            "জ্বি হ্যা।  সেখানে ছাত্রদের নিজেদের রান্না করে খেতে হয়.. তবে একটি বাসার সব্বাই মিলে খানা খেলে.. সপ্তাহে হয়তো একদিন এক এক জনের পালা আসে রান্নার । ",
    },
    {
        question: "আল আযহারে ভর্তির সময় কখন?",
        answer:
            "সারা  বছর  ভাষা কোর্সে ভর্তি চলে  তবে অনার্সে ভর্তি এবং ক্লাস শুরু হয় সেপ্টেম্বর এতে ৷",
    },
    {
        question: "আল আযহারে পড়তে হলে আলিমে সর্বনিন্ম কত পয়েন্ট লাগে ?",
        answer:
            "সকল বিষয়ে পাশ মার্ক থাকলেই আল আযহারে ভর্তি হওয়া যায় । ",
    },
    {
        question: "মিশরে যাওয়ার পরে টাকা পরিশোধের সিস্টেম আছে কী ?",
        answer:
            "জ্বি না.. যেহেতু আজহারী ট্রাভেলস একটি সরকার অনুমোদিত এজেন্সি এবং তার অফিস ঢাকাতেই রয়েছে.. তাই মিসরে পৌঁছে টাকা দেওয়ার কোন সুযোগ নেই ।",
    },
];

interface FAQProps {
    type: string;
}

const FAQ: React.FC<FAQProps> = ({ type = "" }) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.1, // Trigger when 20% of section is visible
    });

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const renderedFAQ = type ? faqData : faqData.slice(0, 5)
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={type ? "py-32 md:py-40 bg-gradient-secondary " : "py-10 md:py-20 bg-gradient-secondary "}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2

                    className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    আল আযহার সম্পর্কে সাধারন জিজ্ঞাসা
                </motion.h2>
                <div className="space-y-4">
                    {renderedFAQ.map((item, index) => (
                        <motion.div

                            key={index}
                            variants={cardVariants}
                            custom={index} // Pass index for staggered delay
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}

                            className="bg-gradient-third p-4  rounded-lg shadow-md"
                        >
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="w-full text-left  flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-primary ">
                                    {item.question}
                                </span>
                                <span className="text-primary.DEFAULT">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="py-4 bg-gradient-third rounded-md ">
                                    <p className="text-primary " dangerouslySetInnerHTML={{
                                        __html: item.answer
                                    }}>
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {
                    !type && <Link className="inline-block w-full text-center mt-8" href={'/frequently-asked-questions'}>
                        <button className="mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white   transition duration-300">
                            আল আযহার সম্পর্কে আরো জানুন
                        </button>
                    </Link>
                }

            </div>
        </motion.section>
    );
};

export default FAQ;

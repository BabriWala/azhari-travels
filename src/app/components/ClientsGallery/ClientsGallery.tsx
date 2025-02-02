// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface ClientGallery {
    image: string;
}

const testimonials: ClientGallery[] = [
    { image: "/client-gallery/client-gallery-01.webp" },
    { image: "/client-gallery/client-gallery-02.webp" },
    { image: "/client-gallery/client-gallery-03.webp" },
    { image: "/client-gallery/client-gallery-04.webp" },
    { image: "/client-gallery/client-gallery-05.webp" },
    { image: "/client-gallery/client-gallery-06.webp" },
    { image: "/client-gallery/client-gallery-07.webp" },
    { image: "/client-gallery/client-gallery-08.webp" },
    { image: "/client-gallery/client-gallery-09.webp" },
    { image: "/client-gallery/client-gallery-10.webp" },
    { image: "/client-gallery/client-gallery-11.webp" },
    { image: "/client-gallery/client-gallery-12.webp" },
    { image: "/client-gallery/client-gallery-13.webp" },
    { image: "/client-gallery/client-gallery-14.webp" },
    { image: "/client-gallery/client-gallery-15.webp" },
    { image: "/client-gallery/client-gallery-16.webp" },
    { image: "/client-gallery/client-gallery-17.webp" },
    { image: "/client-gallery/client-gallery-18.webp" },
    { image: "/client-gallery/client-gallery-19.webp" },
    { image: "/client-gallery/client-gallery-20.webp" },
    { image: "/client-gallery/client-gallery-21.webp" },
    { image: "/client-gallery/client-gallery-22.webp" },
    { image: "/client-gallery/client-gallery-23.webp" },
];

interface ClientsGalleryProps {
    type?: string;
}

const ClientsGallery: React.FC<ClientsGalleryProps> = ({ type }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={type ? "py-32 md:py-40 bg-gradient-secondary" : "py-10 md:py-20 bg-gradient-secondary"}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
                    সম্মানিত যাত্রীদের কিছু মূহুর্ত
                </motion.h2>


            </div>
            {type ? (
                /** ✅ Grid Layout when type is available */
                <div className="grid grid-cols-1 md:grid-cols-5 container mx-auto">
                    {testimonials.map((client, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
                        >
                            <img src={client.image} alt="Client image" className="w-full h-96 object-cover mx-auto" />
                        </motion.div>
                    ))}
                </div>
            ) : (
                /** ✅ Swiper Carousel when type is NOT available */
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {testimonials.map((client, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="rounded-lg"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
                            >
                                <img src={client.image} alt="Client image" className="w-full h-96 object-cover mx-auto mb-4" />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {!type && (
                <Link className="inline-block w-full text-center mt-8" href={"/clients-gallery"}>
                    <button className="md:mt-6 px-6 py-2 rounded-md border-2 border-primary hover:font-bold hover:text-primary bg-primary hover:bg-gradient-third text-white transition duration-300">
                        আরো কিছু মুহূর্ত দেখুন
                    </button>
                </Link>
            )}
        </motion.section>
    );
};

export default ClientsGallery;

// src/components/Gallery.tsx
"use client";

import React from "react";

interface GalleryItem {
    id: number;
    title: string;
    imageUrl: any;
}



const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "Beautiful Landscape",
        imageUrl: '/gallery/Gallery-01.jpg',
    },
    {
        id: 2,
        title: "City Lights",
        imageUrl: '/gallery/Gallery-02.jpg',
    },
    {
        id: 3,
        title: "Mountain Adventure",
        imageUrl: '/gallery/Gallery-03.jpg',
    },
    {
        id: 4,
        title: "Beach Sunset",
        imageUrl: '/gallery/Gallery-04.jpg',
    },
    {
        id: 5,
        title: "Forest Path",
        imageUrl: '/gallery/Gallery-05.jpg',
    },
    {
        id: 6,
        title: "Desert Dunes",
        imageUrl: '/gallery/Gallery-06.jpg',
    },
];

const Gallery: React.FC = () => {
    return (
        <section className="py-12 bg-background-lightOdd dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-text.dark mb-8">
                    গ্যালারী
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="relative group">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

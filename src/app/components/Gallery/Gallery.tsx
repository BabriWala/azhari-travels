// src/components/Gallery.tsx
"use client";

import React from "react";

interface GalleryItem {
    id: number;
    title: string;
    imageUrl: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "Beautiful Landscape",
        imageUrl: "https://via.placeholder.com/300",
    },
    {
        id: 2,
        title: "City Lights",
        imageUrl: "https://via.placeholder.com/300",
    },
    {
        id: 3,
        title: "Mountain Adventure",
        imageUrl: "https://via.placeholder.com/300",
    },
    {
        id: 4,
        title: "Beach Sunset",
        imageUrl: "https://via.placeholder.com/300",
    },
    {
        id: 5,
        title: "Forest Path",
        imageUrl: "https://via.placeholder.com/300",
    },
    {
        id: 6,
        title: "Desert Dunes",
        imageUrl: "https://via.placeholder.com/300",
    },
];

const Gallery: React.FC = () => {
    return (
        <section className="py-12 bg-background-light dark:bg-background.dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light dark:text-text.dark mb-8">
                    Our Gallery
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

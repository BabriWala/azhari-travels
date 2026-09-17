"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";

type Photo = { id: string; url: string; alt: string | null };

export default function StudentCarousel() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const [paused, setPaused] = useState(true);
    const slider = useRef<SwiperInstance | null>(null);

    useEffect(() => {
        setLoading(true); setError(false);
        const controller = new AbortController();
        fetch("/api/student-gallery", { signal: controller.signal, cache: "no-store" })
            .then(async response => {
                if (!response.ok) throw new Error("Gallery unavailable");
                const payload = await response.json();
                if (payload.success && Array.isArray(payload.data)) setPhotos(payload.data);
            }).catch(() => { if (!controller.signal.aborted) setError(true); }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
        setPaused(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        return () => controller.abort();
    }, [attempt]);

    useEffect(() => {
        if (paused) slider.current?.autoplay?.stop();
        else slider.current?.autoplay?.start();
    }, [paused, photos]);

    if (loading) return <p role="status" className="py-8 text-slate-600">ছবি লোড হচ্ছে…</p>;
    if (error) return <div className="py-8"><p role="status">ছবিগুলো এখন লোড করা যাচ্ছে না।</p><button onClick={() => setAttempt(value => value + 1)} className="mt-3 underline">আবার চেষ্টা করুন</button></div>;
    if (!photos.length) return <p className="py-8 text-slate-600">নতুন ছবি শীঘ্রই যুক্ত হবে।</p>;
    return <div aria-label="শিক্ষার্থীদের ছবির ক্যারোসেল" aria-roledescription="carousel">
        <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-sm text-neutral-600">ছবি দেখতে সোয়াইপ করুন</p>
            <div className="flex gap-2">
                <button className="az-gallery-control" aria-label="আগের ছবি" onClick={() => slider.current?.slidePrev()}><ArrowLeft size={18} /></button>
                <button className="az-gallery-control" aria-label={paused ? "ছবি স্বয়ংক্রিয়ভাবে চালু করুন" : "ছবি থামান"} onClick={() => setPaused(value => !value)}>{paused ? <Play size={18} /> : <Pause size={18} />}</button>
                <button className="az-gallery-control" aria-label="পরের ছবি" onClick={() => slider.current?.slideNext()}><ArrowRight size={18} /></button>
            </div>
        </div>
        <Swiper key={photos.map(photo => photo.id).join(",")} modules={[Autoplay, A11y, Keyboard]} loop={photos.length > 1}
            onSwiper={instance => { slider.current = instance; if (paused) instance.autoplay.stop(); }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={700} keyboard={{ enabled: true, onlyInViewport: true }}
            slidesPerView={Math.min(1.15, Math.max(1, photos.length - 1))} spaceBetween={20}
            breakpoints={{ 640: { slidesPerView: Math.min(2.2, Math.max(1, photos.length - 1)) }, 1024: { slidesPerView: Math.min(3.2, Math.max(1, photos.length - 1)) } }}
            onFocusCapture={() => setPaused(true)}>
            {photos.map((photo, index) => <SwiperSlide key={photo.id}>
                <a href={photo.url} target="_blank" rel="noopener noreferrer" className="az-gallery-photo" aria-label={`${photo.alt || "শিক্ষার্থীদের মুহূর্ত"} — বড় করে দেখুন`}>
                    <img src={photo.url} alt={photo.alt || `শিক্ষার্থী গ্যালারি — ছবি ${index + 1}`} width={800} height={600} loading="lazy" />
                    <span>{photo.alt || "স্মরণীয় মুহূর্ত"} <span aria-hidden="true">↗</span></span>
                </a>
            </SwiperSlide>)}
        </Swiper>
    </div>;
}

import { Images } from "lucide-react";
import StudentCarousel from "./StudentCarousel";


export default function StudentGallery() {
    return <section id="student-gallery" aria-labelledby="student-gallery-title" className="az-gallery-section scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
            <span className="az-eyebrow"><Images size={18} /> আমাদের শিক্ষার্থীরা</span>
            <h2 id="student-gallery-title" className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">শিক্ষার্থী গ্যালারি</h2>
            <p className="mb-6 mt-3 text-neutral-600">আমাদের শিক্ষার্থীদের কিছু স্মরণীয় মুহূর্ত।</p>
            <StudentCarousel />
        </div>
    </section>;
}

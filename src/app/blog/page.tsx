import Link from "next/link";
import { ArrowRight, Calendar, UserRound } from "lucide-react";
import FAQSection from "../Home/FAQSection/FAQSection";

const posts = [
    {
        title: "A clear checklist before applying for Egypt student admission",
        category: "Study Abroad",
        date: "20 May 2026",
        image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200",
        slug: "Al-Azhar-Introduction",
    },
    {
        title: "Documents families should prepare before visa processing",
        category: "Visa Guide",
        date: "16 May 2026",
        image: "https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg?auto=compress&cs=tinysrgb&w=1200",
        slug: "Introduction-To-Egypt",
    },
    {
        title: "How to plan a calm and organized Umrah journey",
        category: "Umrah",
        date: "12 May 2026",
        image: "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1200",
        slug: "Al-Azhar-Syllabus",
    },
];

export default function BlogPage() {
    return (
        <>
            <main className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] text-[#06113C]">
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                        <div>
                            <p className="w-fit bg-amber-100 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-amber-800">
                                Travel Journal
                            </p>
                            <h1 className="mt-6 text-4xl font-black leading-tight text-[#06113C] sm:text-5xl">
                                Useful travel, visa, and study guides.
                            </h1>
                        </div>
                        <p className="max-w-2xl text-base leading-8 text-slate-600">
                            Practical notes from Azhari Travels for people preparing important journeys. Images on this page use Pexels sources.
                        </p>
                    </div>

                    <article className="mt-12 overflow-hidden bg-white shadow-xl">
                        <div className="grid lg:grid-cols-2">
                            <div className="min-h-[360px]">
                                <img
                                    src="https://images.pexels.com/photos/18991579/pexels-photo-18991579/free-photo-of-al-azhar-mosque-in-cairo.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Al-Azhar Mosque in Cairo"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-7 sm:p-10">
                                <span className="w-fit bg-[#F7025B]/10 px-4 py-2 text-sm font-bold text-[#F7025B]">
                                    Featured Guide
                                </span>
                                <h2 className="mt-5 text-3xl font-black leading-tight text-[#06113C] sm:text-4xl">
                                    Complete guide to studying at Al-Azhar University in Egypt
                                </h2>
                                <p className="mt-5 leading-8 text-slate-600">
                                    Admission documents, preparation, student life, and the questions families usually ask before deciding.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-slate-500">
                                    <span className="flex items-center gap-2"><Calendar size={16} /> 22 May 2026</span>
                                    <span className="flex items-center gap-2"><UserRound size={16} /> Azhari Travels</span>
                                </div>
                                <Link href="/blog/Al-Azhar-Introduction" className="mt-8 inline-flex w-fit items-center gap-2 bg-[#06113C] px-6 py-3 font-bold text-white shadow-[6px_6px_0_#F7025B]">
                                    Read guide
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </article>

                    <section className="mt-10 grid gap-6 md:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.title} className="bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-800">
                                        {post.category}
                                    </span>
                                    <h3 className="mt-4 text-xl font-black leading-snug text-[#06113C]">{post.title}</h3>
                                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                        <Calendar size={15} />
                                        {post.date}
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#F7025B]">
                                        Read more
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </section>
                </section>
            </main>
            <FAQSection />
        </>
    );
}

import Link from "next/link";
import { ArrowRight, Calendar, UserRound } from "lucide-react";
import FAQSection from "../Home/FAQSection/FAQSection";
import { blogPosts } from "../data/marketingPages";
import { Eyebrow, InfoCard, PageShell, Section, imageClass, primaryButton } from "../components/Marketing/PagePrimitives";
import { listCrm } from "../lib/crmRepository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
    const dynamicPosts = await listCrm("blogs");
    const posts = dynamicPosts.length ? dynamicPosts : blogPosts;
    const featured = posts[0];

    return (
        <>
            <PageShell>
                <Section>
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                        <div>
                            <Eyebrow>Travel Journal</Eyebrow>
                            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                                Useful travel, visa, and study guides.
                            </h1>
                        </div>
                        <p className="max-w-2xl text-base leading-8 text-slate-600">
                            Practical notes from Azhari Travels for people preparing important journeys. Images on this page use Pexels sources.
                        </p>
                    </div>

                    <article className="mt-12 overflow-hidden rounded-2xl bg-white shadow-xl">
                        <div className="grid lg:grid-cols-2">
                            <div className="min-h-[360px] overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.pexels.com/photos/18991579/pexels-photo-18991579/free-photo-of-al-azhar-mosque-in-cairo.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Al-Azhar Mosque in Cairo"
                                    className={imageClass}
                                />
                            </div>
                            <div className="flex flex-col justify-center p-7 sm:p-10">
                                <span className="w-fit rounded-2xl bg-[#F7025B]/10 px-4 py-2 text-sm font-bold text-[#F7025B]">
                                    Featured Guide
                                </span>
                                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">{featured.title}</h2>
                                <p className="mt-5 leading-8 text-slate-600">
                                    {featured.excerpt}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-slate-500">
                                    <span className="flex items-center gap-2"><Calendar size={16} /> {String(featured.date ?? "")}</span>
                                    <span className="flex items-center gap-2"><UserRound size={16} /> Azhari Travels</span>
                                </div>
                                <Link href={`/blog/${featured.slug}`} className={`mt-8 w-fit ${primaryButton}`}>
                                    Read guide
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </article>

                    <section className="mt-10 grid gap-6 md:grid-cols-3">
                        {posts.map((post) => (
                            <InfoCard key={String(post.slug)} className="overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-xl">
                                <div className="h-56 overflow-hidden rounded-2xl">
                                    <img src={post.image} alt={post.title} className={`${imageClass} transition duration-500 hover:scale-105`} />
                                </div>
                                <div className="p-6">
                                    <span className="rounded-2xl bg-[#F7025B]/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#F7025B]">
                                        {String(post.category ?? "Travel Guide")}
                                    </span>
                                    <h3 className="mt-4 text-xl font-black leading-snug">{post.title}</h3>
                                    <p className="mt-3 line-clamp-3 text-sm font-medium leading-7 text-slate-600">{String(post.excerpt ?? "")}</p>
                                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                        <Calendar size={15} />
                                        {String(post.date ?? "")}
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#F7025B]">
                                        Read more
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </InfoCard>
                        ))}
                    </section>
                </Section>
            </PageShell>
            <FAQSection />
        </>
    );
}

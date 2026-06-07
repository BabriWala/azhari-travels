import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { articles } from "../../data/apiCatalog";
import { getCrmBySlug, listCrm } from "../../lib/crmRepository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
    const posts = await listCrm("blogs");
    const source = posts.length ? posts : articles;
    return source.map((post) => ({ slug: String(post.slug) }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = (await getCrmBySlug("blogs", slug)) ?? articles.find((item) => String(item.slug) === slug);

    if (!post) {
        notFound();
    }

    const sections: string[] = Array.isArray(post.sections) ? post.sections.map(String) : [];
    const content = String(post.content || post.excerpt || "");
    const paragraphs = content.split("\n").map((item) => item.trim()).filter(Boolean);

    return (
        <main className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] text-[#06113C]">
            <article className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                <Link href="/blog" className="mb-8 inline-flex items-center gap-2 font-bold text-[#F7025B]">
                    <ArrowLeft size={18} />
                    Back to blog
                </Link>

                <header>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-2xl border border-[#F7025B]/20 bg-white px-4 py-2 text-sm font-black text-[#F7025B] shadow-sm">
                            {String(post.category ?? "Travel Guide")}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-slate-500 shadow-sm ring-1 ring-[#F7025B]/10">
                            <CalendarDays size={16} />
                            {String(post.date ?? "")}
                        </span>
                    </div>

                    <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                        {String(post.title)}
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-600">
                        {String(post.excerpt ?? "")}
                    </p>
                </header>

                {post.image && (
                    <div className="mt-10 overflow-hidden rounded-2xl bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-[#F7025B]/10">
                        <img src={String(post.image)} alt={String(post.title)} className="h-[440px] w-full rounded-2xl object-cover" />
                    </div>
                )}

                <div className="mt-10 grid gap-5">
                    {sections.map((section) => (
                        <section key={section} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#F7025B]/10">
                            <div className="flex gap-4">
                                <CheckCircle2 className="mt-1 shrink-0 text-[#F7025B]" />
                                <div>
                                    <h2 className="text-2xl font-black">{section}</h2>
                                    <p className="mt-3 text-base font-medium leading-8 text-slate-600">{String(post.excerpt ?? "")}</p>
                                </div>
                            </div>
                        </section>
                    ))}

                    {paragraphs.map((paragraph) => (
                        <p key={paragraph} className="rounded-2xl bg-white p-7 text-base font-medium leading-8 text-slate-600 shadow-sm ring-1 ring-[#F7025B]/10">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl bg-[#06113C] p-7 text-white shadow-[0_24px_70px_rgba(6,17,60,0.18)]">
                    <h2 className="text-2xl font-black">Need help with this topic?</h2>
                    <p className="mt-2 max-w-2xl text-white/75">
                        Contact Azhari Travels and our team will guide you with the right document and travel steps.
                    </p>
                    <Link href="/contact" className="mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-6 py-4 font-black text-white shadow-[0_16px_35px_rgba(247,2,91,0.22)] transition hover:-translate-y-1">
                        Contact now
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </article>
        </main>
    );
}

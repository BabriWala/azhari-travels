import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      title: "How to Get Admission in Al-Azhar University",
      image: "/blog-1.jpg",
      category: "Study Abroad",
      date: "15 May 2026",
    },
    {
      title: "Required Documents for Egypt Visa Approval",
      image: "/blog-2.jpg",
      category: "Visa Guide",
      date: "12 May 2026",
    },
    {
      title: "Complete Umrah Travel Preparation Guide",
      image: "/blog-3.jpg",
      category: "Umrah",
      date: "10 May 2026",
    },
  ];

  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-pink-600">
            Travel Insights
          </p>

          <h2 className="text-4xl font-black text-[#08103A] sm:text-5xl">
            Latest News & Guides
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Helpful travel information, visa updates and educational guides
            from Azhari Travels 2.0.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-8 overflow-hidden rounded-[2.5rem] bg-[#08103A] shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-full">
              <img
                src="/blog-featured.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 text-white lg:p-12">
              <span className="mb-4 w-fit rounded-full bg-pink-600 px-4 py-2 text-sm font-bold">
                Featured Article
              </span>

              <h3 className="text-3xl font-black leading-tight lg:text-4xl">
                Complete Guide To Study At Al-Azhar University In Egypt
              </h3>

              <p className="mt-5 leading-8 text-white/70">
                Learn about admission requirements, required documents,
                application process, accommodation and student life in Egypt.
              </p>

              <div className="mt-6 flex gap-5 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  20 May 2026
                </span>

                <span className="flex items-center gap-2">
                  <User size={16} />
                  Admin
                </span>
              </div>

              <button className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#08103A]">
                Read Article
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-[2rem] bg-[#fff8f1] shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-pink-100 px-4 py-2 text-xs font-bold text-pink-600">
                  {blog.category}
                </span>

                <h3 className="mt-4 text-xl font-black leading-snug text-[#08103A]">
                  {blog.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={15} />
                  {blog.date}
                </div>

                <button className="mt-6 flex items-center gap-2 font-bold text-pink-600">
                  Read More
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
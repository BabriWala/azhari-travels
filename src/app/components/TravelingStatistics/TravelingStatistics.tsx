import { Globe2, Plane, Users, Headphones } from "lucide-react";

export default function TravelStats() {
    const stats = [
        {
            icon: <Users />,
            number: "500+",
            title: "Happy Travelers",
        },
        {
            icon: <Plane />,
            number: "25+",
            title: "Travel Packages",
        },
        {
            icon: <Globe2 />,
            number: "10+",
            title: "Countries Support",
        },
        {
            icon: <Headphones />,
            number: "24/7",
            title: "Customer Support",
        },
    ];

    return (
        <section className="bg-white px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-[2.5rem] bg-[#08103A] p-8 shadow-2xl lg:p-12">
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-pink-400">
                            Travel Statistics
                        </p>

                        <h2 className="text-4xl font-black text-white sm:text-5xl">
                            Trusted By Travelers
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-white/60">
                            We make travel easier with reliable support, affordable packages
                            and professional guidance.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[2rem] bg-white/10 p-6 text-center backdrop-blur"
                            >
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-orange-400 text-white">
                                    {item.icon}
                                </div>

                                <h3 className="text-4xl font-black text-white">
                                    {item.number}
                                </h3>

                                <p className="mt-2 font-semibold text-white/60">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
import { ArrowRight, MessageCircle, Star } from "lucide-react";

const testimonials = [
    {
        name: "Rashid Al Hasan",
        location: "Dhaka, Bangladesh",
        text: "The visa process was smooth and professional. Highly recommended.",
        image: "/clients/client-1.jpg",
    },
    {
        name: "Nusrat Jahan",
        location: "Chattogram, Bangladesh",
        text: "Our family tour was perfectly organized from start to finish.",
        image: "/clients/client-2.jpg",
    },
    {
        name: "Arafat Hossain",
        location: "Sylhet, Bangladesh",
        text: "They helped me secure university admission and student visa successfully.",
        image: "/clients/client-3.jpg",
    },
    {
        name: "Mohammad Karim",
        location: "Rajshahi, Bangladesh",
        text: "Excellent Umrah arrangements and outstanding support.",
        image: "/clients/client-4.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F7025B]/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0F766E]/6 blur-3xl" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px]">
                {/* Heading */}
                <div className="mx-auto max-w-[850px] text-center">
                    <div className="mb-5 flex items-center justify-center gap-6 text-[#F7025B] sm:gap-8">
                        <span className="h-[2px] w-16 bg-[#F7025B] sm:w-32" />
                        <span className="text-7xl font-black leading-none">“</span>
                        <span className="h-[2px] w-16 bg-[#F7025B] sm:w-32" />
                    </div>

                    <h2 className="text-4xl font-black leading-tight text-[#06113C] sm:text-5xl lg:text-6xl">
                        What Our <span className="text-[#F7025B]">Clients Say</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-[720px] text-base font-medium leading-8 text-slate-600 sm:text-lg">
                        We take pride in delivering excellent service and creating memorable
                        experiences for our clients.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="group rounded-3xl border border-white/70 bg-white/95 p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(15,23,42,0.12)]"
                        >
                            <div className="text-6xl font-black leading-none text-[#F7025B] transition-transform duration-300 group-hover:scale-110">
                                “
                            </div>

                            <div className="mt-8 flex gap-1 text-[#F5AA00]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star key={index} size={24} fill="currentColor" />
                                ))}
                            </div>

                            <p className="mt-8 min-h-[140px] text-xl font-medium leading-9 text-[#06113C]">
                                “{item.text}”
                            </p>

                            <div className="mt-8 h-[3px] w-16 rounded-full bg-[#F7025B]" />

                            <div className="mt-8 flex items-center gap-5">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-16 w-16 rounded-full border-4 border-[#F7025B]/10 object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-black text-[#06113C]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-base font-medium text-slate-600">
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <button className="group inline-flex items-center gap-6 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF5B1F] px-8 py-4 text-lg font-bold text-white shadow-[0_18px_40px_rgba(247,2,91,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(247,2,91,0.35)] sm:px-10 sm:py-5 sm:text-xl">
                        <MessageCircle size={30} fill="white" />
                        Read More Reviews
                        <ArrowRight
                            size={30}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
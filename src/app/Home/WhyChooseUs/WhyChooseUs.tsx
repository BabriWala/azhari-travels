import {
    ShieldCheck,
    Users,
    FileCheck,
    MessageCircle,
    UserRound,
    TrendingUp,
    Headphones,
    Smile,
    Globe2,
    Award,
} from "lucide-react";

const features = [
    {
        no: "01",
        icon: Users,
        title: "Experienced Team",
        text: "Professional travel consultants with extensive industry knowledge.",
        color: "#F7025B",
    },
    {
        no: "02",
        icon: FileCheck,
        title: "Transparent Process",
        text: "No hidden fees or unexpected charges.",
        color: "#2563EB",
    },
    {
        no: "03",
        icon: MessageCircle,
        title: "Fast Response",
        text: "Quick support via phone, WhatsApp, and email.",
        color: "#16A34A",
    },
    {
        no: "04",
        icon: UserRound,
        title: "Personalized Service",
        text: "Tailored solutions based on your needs.",
        color: "#9333EA",
    },
    {
        no: "05",
        icon: TrendingUp,
        title: "High Success Rate",
        text: "Strong track record of successful visa applications.",
        color: "#F97316",
    },
    {
        no: "06",
        icon: Headphones,
        title: "End-to-End Support",
        text: "From application to departure assistance.",
        color: "#06B6D4",
    },
];

const stats = [
    {
        icon: Users,
        value: "2000+",
        label: "Clients Served",
        color: "#F7025B",
    },
    {
        icon: Smile,
        value: "99%",
        label: "Client Satisfaction",
        color: "#2563EB",
    },
    {
        icon: Globe2,
        value: "10+",
        label: "Destinations",
        color: "#16A34A",
    },
    {
        icon: Award,
        value: "2+",
        label: "Years Experience",
        color: "#F97316",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8FB] to-[#F8FAFC] py-16 lg:py-24">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#F7025B]/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0F766E]/5 blur-3xl" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[500px_1fr]">
                    {/* Left Side */}
                    <div>
                        <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-[#F7025B]/20 bg-white px-5 py-3 shadow-sm">
                            <ShieldCheck className="h-5 w-5 text-[#F7025B]" />

                            <span className="text-sm font-bold uppercase tracking-[2px] text-[#F7025B]">
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl font-semibold leading-tight text-[#06113C] sm:text-5xl lg:text-7xl">
                            Why Thousands
                            <br />
                            <span className="text-[#F7025B]">Choose Us</span>
                        </h2>

                        <p className="mt-8 max-w-[500px] text-base font-medium leading-8 text-slate-600 sm:text-lg">
                            We are committed to providing reliable, transparent, and
                            personalized travel solutions that ensure a smooth and worry-free
                            journey.
                        </p>

                        <div className="mt-8 h-1 w-16 rounded-full bg-[#F7025B]" />
                    </div>

                    {/* Right Side Cards */}
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {features.map(({ no, icon: Icon, title, text, color }) => (
                            <div
                                key={no}
                                className="group relative rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
                            >
                                <div
                                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold"
                                    style={{
                                        borderColor: color,
                                        color,
                                        backgroundColor: `${color}08`,
                                    }}
                                >
                                    {no}
                                </div>

                                <div
                                    className="flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${color}15`,
                                    }}
                                >
                                    <Icon size={38} strokeWidth={1.8} style={{ color }} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-[#06113C]">
                                    {title}
                                </h3>

                                <div
                                    className="my-4 h-[3px] w-10 rounded-full"
                                    style={{ backgroundColor: color }}
                                />

                                <p className="leading-8 text-slate-600">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics */}
                <div className="mt-14 rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map(({ icon: Icon, value, label, color }, index) => (
                            <div
                                key={label}
                                className={`relative text-center lg:border-r lg:border-slate-200 lg:last:border-r-0 ${index === stats.length - 1 ? "lg:border-r-0" : ""
                                    }`}
                            >
                                <div
                                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                                    style={{
                                        backgroundColor: `${color}15`,
                                        boxShadow: `0 10px 25px ${color}20`,
                                    }}
                                >
                                    <Icon size={38} strokeWidth={1.8} style={{ color }} />
                                </div>

                                <h3 className="mt-5 text-5xl font-semibold" style={{ color }}>
                                    {value}
                                </h3>

                                <p className="mt-2 text-lg font-semibold text-slate-700">
                                    {label}
                                </p>

                                <div
                                    className="mx-auto mt-5 h-[3px] w-12 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
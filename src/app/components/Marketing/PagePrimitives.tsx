import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export const cardSurface = "rounded-2xl bg-white shadow-sm ring-1 ring-[#F7025B]/10";
export const imageClass = "h-full w-full rounded-2xl object-cover";
export const primaryButton =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#06113C] px-6 py-3 font-bold text-white shadow-[6px_6px_0_#F7025B] transition hover:-translate-y-1";
export const gradientButton =
    "inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#F7025B] to-[#FF7A1A] px-6 py-4 font-black text-white shadow-[0_16px_35px_rgba(247,2,91,0.22)] transition hover:-translate-y-1";

export function PageShell({ children }: { children: ReactNode }) {
    return (
        <main className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#FFF8FB] text-[#06113C]">
            {children}
        </main>
    );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <section className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
            {children}
        </section>
    );
}

export function Eyebrow({ children }: { children: ReactNode }) {
    return (
        <p className="w-fit rounded-2xl border border-[#F7025B]/20 bg-white px-4 py-2 text-sm font-black text-[#F7025B] shadow-sm">
            {children}
        </p>
    );
}

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
    return (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7025B]/10 text-[#F7025B]">
            <Icon size={22} />
        </span>
    );
}

export function InfoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`${cardSurface} p-6 ${className}`}>{children}</div>;
}

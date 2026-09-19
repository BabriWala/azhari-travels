"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
export default function PublicChrome({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    return pathname.startsWith("/admin/leads") || pathname.startsWith("/admin/campaigns") || pathname.startsWith("/campaign/") ? null : children;
}

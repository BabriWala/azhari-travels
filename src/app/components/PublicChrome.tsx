"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
export default function PublicChrome({ children }: { children: ReactNode }) {
    return usePathname().startsWith("/admin/leads") ? null : children;
}

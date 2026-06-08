"use client";

import { MouseEvent, ReactNode, useRef } from "react";
import { trackMetaEvent } from "./MetaPixel";

type MetaWhatsAppSalesLinkProps = {
    href: string;
    children: ReactNode;
    sectionName: string;
    value?: number;
    currency?: string;
    contentName?: string;
    contentCategory?: string;
    enabled?: boolean;
    className?: string;
};

export default function MetaWhatsAppSalesLink({
    href,
    children,
    sectionName,
    value = 1550,
    currency = "USD",
    contentName = "Al-Azhar University Package",
    contentCategory = "Student Consultancy",
    enabled = true,
    className,
}: MetaWhatsAppSalesLinkProps) {
    const tracked = useRef(false);

    const firePurchase = () => {
        if (!enabled || tracked.current) {
            return Promise.resolve("");
        }

        tracked.current = true;

        return trackMetaEvent({
            eventName: "Purchase",
            customData: {
                content_name: contentName,
                content_category: contentCategory,
                contact_channel: "WhatsApp",
                cta_section: sectionName,
                value,
                currency,
                local_value: 190000,
                local_currency: "BDT",
            },
        });
    };

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!enabled) {
            return;
        }

        firePurchase();
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            onClick={handleClick}
        >
            {children}
        </a>
    );
}

"use client";

import { MouseEvent, ReactNode, useRef } from "react";
import { trackMetaEvent } from "./MetaPixel";

type MetaWhatsAppSalesLinkProps = {
    href: string;
    children: ReactNode;
    sectionName: string;
    value?: number;
    currency?: string;
    enabled?: boolean;
    className?: string;
};

export default function MetaWhatsAppSalesLink({
    href,
    children,
    sectionName,
    value = 1550,
    currency = "USD",
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
                content_name: "Al-Azhar University Package",
                content_category: "Student Consultancy",
                contact_channel: "WhatsApp",
                cta_section: sectionName,
                value,
                currency,
                local_value: 190000,
                local_currency: "BDT",
            },
        });
    };

    const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
        if (!enabled) {
            return;
        }

        event.preventDefault();

        await Promise.race([
            firePurchase(),
            new Promise((resolve) => window.setTimeout(resolve, 1200)),
        ]);

        window.setTimeout(() => {
            window.location.href = href;
        }, 2500);
    };

    return (
        <a
            href={href}
            target={enabled ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={className}
            onClick={handleClick}
        >
            {children}
        </a>
    );
}

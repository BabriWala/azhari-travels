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
    value = 190000,
    currency = "BDT",
    enabled = true,
    className,
}: MetaWhatsAppSalesLinkProps) {
    const tracked = useRef(false);

    const firePurchase = () => {
        if (!enabled || tracked.current) {
            return;
        }

        tracked.current = true;

        void trackMetaEvent({
            eventName: "Purchase",
            customData: {
                content_name: "Al-Azhar University Package",
                content_category: "Student Consultancy",
                contact_channel: "WhatsApp",
                cta_section: sectionName,
                value,
                currency,
            },
        });
    };

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!enabled) {
            return;
        }

        event.preventDefault();
        const whatsappWindow = window.open("", "_blank");

        firePurchase();

        window.setTimeout(() => {
            if (whatsappWindow) {
                whatsappWindow.location.href = href;
                return;
            }

            window.location.href = href;
        }, 400);
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

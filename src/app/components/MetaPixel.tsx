"use client";

import { Suspense, useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
    interface Window {
        fbq?: (...args: unknown[]) => void;
        _fbq?: unknown;
        dataLayer?: Record<string, unknown>[];
        __azhariMetaEvents?: Record<string, unknown>[];
        __azhariMetaPixelInitialized?: boolean;
    }
}

type MetaEventOptions = {
    eventName: string;
    customData?: Record<string, string | number | boolean | null | undefined>;
    eventId?: string;
    sendToBrowser?: boolean;
    sendToServer?: boolean;
};

type MetaFbq = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    loaded?: boolean;
    queue: unknown[][];
    version?: string;
};

const defaultPixelId = "1404228387596184";
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? defaultPixelId;

function createEventId(eventName: string) {
    const randomValue =
        typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2);

    return `${eventName.toLowerCase()}-${Date.now()}-${randomValue}`;
}

function getGtmEventName(eventName: string) {
    if (eventName === "Purchase") {
        return "purchase";
    }

    return `meta_${eventName.toLowerCase()}`;
}

function pushGtmEvent({
    eventName,
    eventId,
    customData,
}: {
    eventName: string;
    eventId: string;
    customData?: Record<string, string | number | boolean | null | undefined>;
}) {
    if (typeof window === "undefined") {
        return;
    }

    const value = Number(customData?.value ?? 0);
    const currency = String(customData?.currency ?? "BDT");
    const eventPayload: Record<string, unknown> = {
        event: getGtmEventName(eventName),
        meta_event_name: eventName,
        event_id: eventId,
        ...customData,
    };

    if (eventName === "Purchase") {
        eventPayload.ecommerce = {
            currency,
            value,
            items: [
                {
                    item_name: customData?.content_name ?? "Al-Azhar University Package",
                    item_category: customData?.content_category ?? "Student Consultancy",
                    price: value,
                    quantity: 1,
                },
            ],
        };
    }

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(eventPayload);

    window.__azhariMetaEvents = window.__azhariMetaEvents ?? [];
    window.__azhariMetaEvents.push(eventPayload);
}

function ensureMetaPixel() {
    if (!pixelId || typeof window === "undefined") {
        return false;
    }

    if (window.fbq) {
        return true;
    }

    const fbq: MetaFbq = function (...args: unknown[]) {
        if (fbq.callMethod) {
            fbq.callMethod(...args);
            return;
        }

        fbq.queue.push(args);
    };

    window.fbq = fbq;
    window._fbq = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    if (!window.__azhariMetaPixelInitialized) {
        window.fbq("init", pixelId);
        window.__azhariMetaPixelInitialized = true;
    }

    return true;
}

export async function trackMetaEvent({
    eventName,
    customData,
    eventId = createEventId(eventName),
    sendToBrowser = true,
    sendToServer = true,
}: MetaEventOptions) {
    pushGtmEvent({ eventName, eventId, customData });

    const canSendBrowserEvent = sendToBrowser && ensureMetaPixel();

    if (canSendBrowserEvent && window.fbq) {
        window.fbq("track", eventName, customData ?? {}, { eventID: eventId });

        if (process.env.NODE_ENV !== "production") {
            console.info(`[Meta Pixel] fired ${eventName}`, { eventId, customData });
        }
    }

    if (sendToServer && typeof window !== "undefined") {
        try {
            await fetch("/api/meta/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eventName,
                    eventId,
                    eventSourceUrl: window.location.href,
                    customData,
                }),
                keepalive: true,
            });
        } catch (error) {
            console.error("Meta server event failed", error);
        }
    }

    return eventId;
}

function MetaPageViewTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();

    const pageUrl = useMemo(() => {
        if (typeof window === "undefined") {
            return "";
        }

        return `${window.location.origin}${pathname}${search ? `?${search}` : ""}`;
    }, [pathname, search]);

    useEffect(() => {
        if (!pageUrl) {
            return;
        }

        trackMetaEvent({
            eventName: "PageView",
            customData: {
                page_path: pathname,
            },
        });
    }, [pageUrl, pathname]);

    return null;
}

export default function MetaPixel() {
    useEffect(() => {
        ensureMetaPixel();
    }, []);

    if (!pixelId) {
        return null;
    }

    return (
        <>
            <Suspense fallback={null}>
                <MetaPageViewTracker />
            </Suspense>
        </>
    );
}

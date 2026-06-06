"use client";

import { Suspense, useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
    interface Window {
        fbq?: (...args: unknown[]) => void;
        _fbq?: unknown;
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

    window.fbq("init", pixelId);

    return true;
}

export async function trackMetaEvent({
    eventName,
    customData,
    eventId = createEventId(eventName),
    sendToBrowser = true,
    sendToServer = true,
}: MetaEventOptions) {
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

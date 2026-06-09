import { NextRequest, NextResponse } from "next/server";

type MetaEventRequest = {
    eventName?: string;
    eventId?: string;
    eventSourceUrl?: string;
    customData?: Record<string, unknown>;
};

const GRAPH_API_VERSION = "v20.0";
const DEFAULT_PIXEL_ID = "1661121991886447";

function getClientIp(request: NextRequest) {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim();
    }

    return request.headers.get("x-real-ip") ?? undefined;
}

export async function POST(request: NextRequest) {
    const pixelId =
        process.env.META_PIXEL_ID ?? process.env.NEXT_PUBLIC_META_PIXEL_ID ?? DEFAULT_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;
    const testEventCode = process.env.META_TEST_EVENT_CODE;

    if (!pixelId || !accessToken) {
        return NextResponse.json({
            skipped: true,
            reason: "Meta Pixel ID or access token is not configured.",
        });
    }

    let body: MetaEventRequest;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    if (!body.eventName) {
        return NextResponse.json({ error: "eventName is required." }, { status: 400 });
    }

    const payload = {
        data: [
            {
                event_name: body.eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: body.eventId,
                event_source_url: body.eventSourceUrl ?? request.headers.get("referer") ?? undefined,
                action_source: "website",
                user_data: {
                    client_ip_address: getClientIp(request),
                    client_user_agent: request.headers.get("user-agent") ?? undefined,
                    fbp: request.cookies.get("_fbp")?.value,
                    fbc: request.cookies.get("_fbc")?.value,
                },
                custom_data: body.customData,
            },
        ],
        ...(testEventCode ? { test_event_code: testEventCode } : {}),
    };

    const response = await fetch(
        `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        },
    );

    const result = await response.json();

    if (!response.ok) {
        return NextResponse.json({ error: result }, { status: response.status });
    }

    return NextResponse.json(result);
}

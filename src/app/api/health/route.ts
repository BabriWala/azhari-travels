import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        ok: true,
        service: "azhari-travels",
        timestamp: new Date().toISOString(),
    });
}

import { NextRequest, NextResponse } from "next/server";

export type ApiMeta = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
};

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 50;

export function ok<T>(data: T, init?: ResponseInit) {
    return NextResponse.json({ success: true, data }, init);
}

export function list<T>(items: T[], meta: ApiMeta, init?: ResponseInit) {
    return NextResponse.json({ success: true, data: items, meta }, init);
}

export function fail(message: string, status = 400, details?: unknown) {
    return NextResponse.json({ success: false, error: { message, details } }, { status });
}

export function notFound(resource = "Resource") {
    return fail(`${resource} not found`, 404);
}

export function getPagination(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const page = Math.max(Number(searchParams.get("page") ?? 1), 1);
    const limit = Math.min(Math.max(Number(searchParams.get("limit") ?? DEFAULT_LIMIT), 1), MAX_LIMIT);
    const q = (searchParams.get("q") ?? "").trim().toLowerCase();
    const category = (searchParams.get("category") ?? "").trim().toLowerCase();

    return { page, limit, q, category };
}

export function paginate<T>(items: T[], page: number, limit: number) {
    const total = items.length;
    const totalPages = Math.max(Math.ceil(total / limit), 1);
    const start = (page - 1) * limit;
    const data = items.slice(start, start + limit);

    return {
        data,
        meta: {
            page,
            limit,
            total,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        },
    };
}

export function searchItems<T>(items: T[], q: string, fields: Array<keyof T>) {
    if (!q) {
        return items;
    }

    return items.filter((item) =>
        fields.some((field) => String(item[field] ?? "").toLowerCase().includes(q)),
    );
}

export async function readJson(request: NextRequest) {
    try {
        return await request.json();
    } catch {
        return null;
    }
}

export function requiredString(value: unknown) {
    return typeof value === "string" && value.trim().length > 0;
}

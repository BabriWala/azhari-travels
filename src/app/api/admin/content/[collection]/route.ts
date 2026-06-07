import { NextRequest } from "next/server";
import { fail, getPagination, list, ok, paginate, readJson, searchItems } from "../../../../lib/api";
import { requireAdmin } from "../../../../lib/adminAuth";
import { isAdminCollection } from "../../../../lib/contentStore";
import { deleteCrm, listCrm, saveCrm } from "../../../../lib/crmRepository";

export async function GET(request: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
    const unauthorized = requireAdmin(request);
    if (unauthorized) return unauthorized;

    const { collection } = await params;
    if (!isAdminCollection(collection)) {
        return fail("Invalid admin collection", 404);
    }

    try {
        const { page, limit, q } = getPagination(request);
        const records = await listCrm(collection, true);
        const filtered = searchItems(records, q, ["id", "slug", "title", "name", "status"]);
        const result = paginate(filtered, page, limit);

        return list(result.data, result.meta);
    } catch (error) {
        return fail(error instanceof Error ? error.message : "Could not load admin records", 500);
    }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
    const unauthorized = requireAdmin(request);
    if (unauthorized) return unauthorized;

    const { collection } = await params;
    if (!isAdminCollection(collection)) {
        return fail("Invalid admin collection", 404);
    }

    const body = await readJson(request);
    if (!body || typeof body !== "object") {
        return fail("JSON body is required", 422);
    }

    try {
        const record = await saveCrm(collection, body);
        return ok(record, { status: 201 });
    } catch (error) {
        return fail(error instanceof Error ? error.message : "Could not create record", 500);
    }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
    const unauthorized = requireAdmin(request);
    if (unauthorized) return unauthorized;

    const { collection } = await params;
    if (!isAdminCollection(collection)) {
        return fail("Invalid admin collection", 404);
    }

    const body = await readJson(request);
    if (!body || typeof body !== "object" || !("id" in body)) {
        return fail("JSON body with id is required", 422);
    }

    try {
        const record = await saveCrm(collection, body);
        return ok(record);
    } catch (error) {
        return fail(error instanceof Error ? error.message : "Could not update record", 500);
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
    const unauthorized = requireAdmin(request);
    if (unauthorized) return unauthorized;

    const { collection } = await params;
    if (!isAdminCollection(collection)) {
        return fail("Invalid admin collection", 404);
    }

    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return fail("id query parameter is required", 422);
    }

    try {
        const deleted = await deleteCrm(collection, id);
        return ok({ deleted });
    } catch (error) {
        return fail(error instanceof Error ? error.message : "Could not delete record", 500);
    }
}

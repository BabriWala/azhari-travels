import { NextRequest } from "next/server";
import { fail, getPagination, list, ok, paginate, readJson, requiredString, searchItems } from "../../lib/api";
import { reviews } from "../../data/apiCatalog";
import { listCrm, saveCrm } from "../../lib/crmRepository";

export async function GET(request: NextRequest) {
    const { page, limit, q, category } = getPagination(request);
    const featured = request.nextUrl.searchParams.get("featured");
    const dynamicItems = await listCrm("reviews");
    const source = dynamicItems.length ? dynamicItems : reviews;
    const filteredByFeatured = featured === null
        ? source
        : source.filter((item) => String(item.featured) === featured);
    const filteredByService = category
        ? filteredByFeatured.filter((item) => String(item.service ?? "").toLowerCase().includes(category))
        : filteredByFeatured;
    const filtered = searchItems(filteredByService, q, ["name", "location", "service", "feedback"]);
    const result = paginate(filtered, page, limit);

    return list(result.data, result.meta);
}

export async function POST(request: NextRequest) {
    const body = await readJson(request);

    if (!body || !requiredString(body.name) || !requiredString(body.feedback)) {
        return fail("Name and feedback are required", 422, {
            required: ["name", "feedback"],
            optional: ["rating", "service", "location", "image"],
        });
    }

    const rating = Number(body.rating ?? 5);

    if (Number.isNaN(rating) || rating < 1 || rating > 5) {
        return fail("Rating must be a number between 1 and 5", 422);
    }

    const review = await saveCrm("reviews", {
        id: `review_pending_${Date.now()}`,
        status: "pending_review",
        name: String(body.name).trim(),
        feedback: String(body.feedback).trim(),
        rating,
        service: requiredString(body.service) ? String(body.service).trim() : "General",
        location: requiredString(body.location) ? String(body.location).trim() : null,
    });

    return ok(
        {
            ...review,
            status: "pending_review",
        },
        { status: 202 },
    );
}

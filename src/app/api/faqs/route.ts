import { NextRequest } from "next/server";
import { getPagination, list, paginate, searchItems } from "../../lib/api";
import AU_ADMIN_FAQ from "../../data/admin_faq_AU";
import UE_ADMIN_FAQ from "../../data/admin_faq_UE";

export function GET(request: NextRequest) {
    const { page, limit, q, category } = getPagination(request);
    const type = (request.nextUrl.searchParams.get("type") ?? "all").toLowerCase();
    const source = [
        ...(type === "ue" || type === "all" ? UE_ADMIN_FAQ.map((item) => ({ ...item, type: "UE" })) : []),
        ...(type === "au" || type === "all" ? AU_ADMIN_FAQ.map((item) => ({ ...item, type: "AU" })) : []),
    ];
    const filteredByCategory = category
        ? source.filter((item) => String(item.category).toLowerCase() === category)
        : source;
    const filtered = searchItems(filteredByCategory, q, ["question", "question_banglish", "answer", "category"]);
    const result = paginate(filtered, page, limit);

    return list(result.data, result.meta);
}

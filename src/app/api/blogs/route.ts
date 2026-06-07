import { NextRequest } from "next/server";
import { getPagination, list, paginate, searchItems } from "../../lib/api";
import { articles } from "../../data/apiCatalog";
import { listCrm } from "../../lib/crmRepository";

export async function GET(request: NextRequest) {
    const { page, limit, q, category } = getPagination(request);
    const dynamicItems = await listCrm("blogs");
    const source = dynamicItems.length ? dynamicItems : articles;
    const filteredByCategory = category
        ? source.filter((item) => String(item.category ?? "").toLowerCase() === category)
        : source;
    const filtered = searchItems(filteredByCategory, q, ["title", "excerpt", "category"]);
    const result = paginate(filtered, page, limit);

    return list(result.data, result.meta);
}

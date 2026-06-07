import { NextRequest } from "next/server";
import { getPagination, list, paginate, searchItems } from "../../lib/api";
import { tourPackages } from "../../data/apiCatalog";
import { listCrm } from "../../lib/crmRepository";

export async function GET(request: NextRequest) {
    const { page, limit, q, category } = getPagination(request);
    const dynamicItems = await listCrm("tour-packages");
    const source = dynamicItems.length ? dynamicItems : tourPackages;
    const filteredByCategory = category
        ? source.filter((item) => String(item.category ?? "").toLowerCase() === category)
        : source;
    const filtered = searchItems(filteredByCategory, q, ["title", "subtitle", "category", "route"]);
    const result = paginate(filtered, page, limit);

    return list(result.data, result.meta);
}

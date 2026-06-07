import { NextRequest } from "next/server";
import { getPagination, list, paginate } from "../../lib/api";
import { gallery } from "../../data/apiCatalog";

export function GET(request: NextRequest) {
    const { page, limit, category } = getPagination(request);
    const filtered = category ? gallery.filter((item) => item.category === category) : gallery;
    const result = paginate(filtered, page, limit);

    return list(result.data, result.meta);
}

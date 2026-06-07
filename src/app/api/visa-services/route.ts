import { NextRequest } from "next/server";
import { getPagination, list, paginate, searchItems } from "../../lib/api";
import { visas } from "../../data/apiCatalog";
import { listCrm } from "../../lib/crmRepository";

export async function GET(request: NextRequest) {
    const { page, limit, q } = getPagination(request);
    const dynamicItems = await listCrm("visa-services");
    const source = dynamicItems.length ? dynamicItems : visas;
    const filtered = searchItems(source, q, ["title", "subtitle", "duration", "feeNote"]);
    const result = paginate(filtered, page, limit);

    return list(result.data, result.meta);
}

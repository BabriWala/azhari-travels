import { ok } from "../../lib/api";
import { umrah } from "../../data/apiCatalog";
import { listCrm } from "../../lib/crmRepository";

export async function GET() {
    const packages = await listCrm("tour-packages");
    const dynamicPackages = packages.filter((item) => String(item.category ?? "") === "umrah");

    return ok({
        ...umrah,
        packages: dynamicPackages.length ? dynamicPackages : umrah.packages,
    });
}

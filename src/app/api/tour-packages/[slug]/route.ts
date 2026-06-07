import { ok, notFound } from "../../../lib/api";
import { tourPackages } from "../../../data/apiCatalog";
import { getCrmBySlug } from "../../../lib/crmRepository";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = (await getCrmBySlug("tour-packages", slug)) ?? tourPackages.find((pkg) => String(pkg.slug) === slug);

    if (!item) {
        return notFound("Tour package");
    }

    return ok(item);
}

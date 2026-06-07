import { ok, notFound } from "../../../lib/api";
import { visas } from "../../../data/apiCatalog";
import { getCrmBySlug } from "../../../lib/crmRepository";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = (await getCrmBySlug("visa-services", slug)) ?? visas.find((visa) => String(visa.slug) === slug);

    if (!item) {
        return notFound("Visa service");
    }

    return ok(item);
}

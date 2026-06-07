import { ok, notFound } from "../../../lib/api";
import { articles } from "../../../data/apiCatalog";
import { getCrmBySlug } from "../../../lib/crmRepository";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = (await getCrmBySlug("blogs", slug)) ?? articles.find((item) => String(item.slug) === slug);

    if (!article) {
        return notFound("Blog");
    }

    return ok(article);
}

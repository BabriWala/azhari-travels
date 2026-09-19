import Assessment from "./Assessment";
import "../../campaigns.css";
export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <Assessment slug={slug} />;
}

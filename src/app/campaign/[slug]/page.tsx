import Assessment from "./Assessment";
import type { Metadata } from "next";
import { prisma } from "../../lib/db";
import { CampaignConfig, designFor } from "../../lib/campaigns";
import "../../campaigns.css";
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const campaign = await prisma.campaign.findFirst({ where: { slug, published: true, deletedAt: null } });
    const config: CampaignConfig | null = campaign ? JSON.parse(campaign.config) : null;
    const title = campaign?.title || "Enquiry form", description = config?.description || "Complete your enquiry.";
    const image = config && (config.pages?.intro?.image || designFor(config).logo);
    return { title: { absolute: title }, description, authors: [], keywords: [], openGraph: { title, description, type: "website", url: `/campaign/${slug}`, images: image ? [image] : [] } };
}
export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <Assessment slug={slug} />;
}

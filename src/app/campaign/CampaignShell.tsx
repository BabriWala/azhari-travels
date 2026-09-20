import { CSSProperties, ReactNode } from "react";
import { CampaignConfig, designFor, pageFor } from "../lib/campaigns";
export default function CampaignShell({ config, title, service, pageKey, children }: { config: CampaignConfig; title: string; service?: string; pageKey: string; children: ReactNode }) {
    const d = designFor(config), p = pageFor(config, pageKey);
    const heading = p.heading ?? (pageKey === "intro" ? title : pageKey === "complete" ? "Thank you" : config.steps[Number(pageKey.replace("step-", ""))]);
    return <div className={`campaign-ui assessment campaign-layout-${d.layout} ${pageKey.startsWith("step-") ? "campaign-question-page" : ""}`} style={{ "--navy": d.primary, "--accent": d.accent, "--campaign-bg": d.background, "--campaign-surface": d.surface, "--campaign-text": d.text, "--campaign-radius": `${d.radius}px` } as CSSProperties}>
        <div className="campaign-shell">
            {p.showHeader && (d.logo || d.brand) && <a href={d.homeUrl || undefined} className="campaign-brand">{d.logo && <img src={d.logo} alt="" />}<span>{d.brand}</span></a>}
            <div className="campaign-stage-layout">
                {p.showHeader && <header className="campaign-story">{service && <span className="campaign-eyebrow">{service}</span>}<h1>{heading}</h1><p className="preserve-lines">{p.description ?? (pageKey === "intro" ? config.description : "")}</p>{p.image && <img className="campaign-banner" src={p.image} alt="" />}</header>}
                <section className="campaign-card campaign-form-card">{!p.showHeader && <h1 className="campaign-form-heading">{heading}</h1>}{children}</section>
            </div>
            {p.showFooter && (p.footer || d.footer || d.footerImage) && <footer className="campaign-page-footer preserve-lines">{d.footerImage && <img className="campaign-footer-image" src={d.footerImage} alt="Footer logo" />}{p.footer ?? d.footer}</footer>}
        </div>
    </div>;
}

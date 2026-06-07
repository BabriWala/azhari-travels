import VisaServices from "../Home/VisaServices/VisaServices";
import Visas from "../components/Visa/Visas";
import FAQSection from "../Home/FAQSection/FAQSection";
import CTABanner from "../Home/CTABanner/CTABanner";
import { listCrm } from "../lib/crmRepository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function VisaServicesPage() {
    const visas = await listCrm("visa-services");

    return (
        <>
            <VisaServices items={visas} />
            <Visas items={visas} />
            <FAQSection />
            <CTABanner />
        </>
    );
}

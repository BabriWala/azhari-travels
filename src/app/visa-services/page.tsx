import VisaServices from "../Home/VisaServices/VisaServices";
import Visas from "../components/Visa/Visas";
import FAQSection from "../Home/FAQSection/FAQSection";
import CTABanner from "../Home/CTABanner/CTABanner";

export default function VisaServicesPage() {
    return (
        <>
            <VisaServices />
            <Visas />
            <FAQSection />
            <CTABanner />
        </>
    );
}

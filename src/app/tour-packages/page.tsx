import PopularTourPackages from "../Home/PopularTourPackages/PopularTourPackages";
import Packages from "../components/Package/Packages";
import WhyChooseUs from "../Home/WhyChooseUs/WhyChooseUs";
import CTABanner from "../Home/CTABanner/CTABanner";
import { listCrm } from "../lib/crmRepository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function TourPackagesPage() {
    const packages = await listCrm("tour-packages");

    return (
        <>
            <PopularTourPackages items={packages} />
            <Packages items={packages} />
            <WhyChooseUs />
            <CTABanner />
        </>
    );
}

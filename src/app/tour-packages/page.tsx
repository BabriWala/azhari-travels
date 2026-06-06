import PopularTourPackages from "../Home/PopularTourPackages/PopularTourPackages";
import Packages from "../components/Package/Packages";
import WhyChooseUs from "../Home/WhyChooseUs/WhyChooseUs";
import CTABanner from "../Home/CTABanner/CTABanner";

export default function TourPackagesPage() {
    return (
        <>
            <PopularTourPackages />
            <Packages />
            <WhyChooseUs />
            <CTABanner />
        </>
    );
}

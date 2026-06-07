import CTABanner from "./Home/CTABanner/CTABanner";
import FAQSection from "./Home/FAQSection/FAQSection";
import HomeHero from "./Home/HomeHero/HomeHero";
import PopularServices from "./Home/PopularServices/PopularServices";
import PopularTourPackages from "./Home/PopularTourPackages/PopularTourPackages";
import StudentConsultancy from "./Home/StudentConsultancy/StudentConsultancy";
import UmrahHajjServices from "./Home/UmrahHajjServices/UmrahHajjServices";
import VisaServices from "./Home/VisaServices/VisaServices";
import WhyChooseUs from "./Home/WhyChooseUs/WhyChooseUs";
import { listCrm } from "./lib/crmRepository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const [visas, packages] = await Promise.all([
    listCrm("visa-services"),
    listCrm("tour-packages"),
  ]);

  

  return (
    <>
      <HomeHero />
      <VisaServices items={visas} />
      <PopularTourPackages items={packages} />
      <StudentConsultancy />
      <UmrahHajjServices />
      <PopularServices />
      <WhyChooseUs />
      <FAQSection />
      <CTABanner />
    </>
  );
}

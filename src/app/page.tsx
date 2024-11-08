import AboutUs from "./components/AboutUs/AboutUs";
import BlogSection from "./components/Blog/BlogSection";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQ from "./components/FAQ/FAQ";
import Gallery from "./components/Gallery/Gallery";
import HappyClients from "./components/HappyClients/HappyClients";
import Hero from "./components/Hero/Hero";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import Packages from "./components/Package/Packages";
import OurTeam from "./components/Team/OurTeam";
import TipsSection from "./components/TipsSection/TipsSection";
import TravelingStatistics from "./components/TravelingStatistics/TravelingStatistics";

export default function Home() {
  return (
    <>
      <Hero
        title="আল আযহারে পড়ার স্বপ্ন পূরণ করুন আমাদের সাথে"
        description="আযহারী ট্রাভেলস আপনার স্বপ্ন পূরণ করবে স্বল্প খরচে"
        buttonText="স্বপ্ন পূরণ করতে ক্লিক করুন"
        buttonLink="tel:+8801877995354"
        backgroundImage="https://images.pexels.com/photos/18991579/pexels-photo-18991579/free-photo-of-al-azhar-mosque-in-cairo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your chosen Pexels image URL
      />
      <AboutUs></AboutUs>
      <HappyClients></HappyClients>
      <TravelingStatistics></TravelingStatistics>
      <HowWeWork></HowWeWork>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <Gallery></Gallery>
      <OurTeam></OurTeam>
      <Packages></Packages>
      <BlogSection></BlogSection>
      <TipsSection></TipsSection>
    </>
  );
}

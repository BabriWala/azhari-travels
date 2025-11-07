import AboutUs from "./components/AboutUs/AboutUs";
import BlogSection from "./components/Blog/BlogSection";
import ClientsGallery from "./components/ClientsGallery/ClientsGallery";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQ from "./components/FAQ/FAQ";
import Gallery from "./components/Gallery/Gallery";
import HappyClients from "./components/HappyClients/HappyClients";
import Hero from "./components/Hero/Hero";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import NoticeSection from "./components/NoticeSection/NoticeSection";
import Packages from "./components/Package/Packages";
import OurTeam from "./components/Team/OurTeam";
import TipsSection from "./components/TipsSection/TipsSection";
import TravelingStatistics from "./components/TravelingStatistics/TravelingStatistics";
import Visas from "./components/Visa/Visas";

export default function Home() {
  return (
    <>

      <Hero
        title="আল আযহার বিশ্ববিদ্যালয়ে ভর্তি হওয়ার স্বপ্ন পূরণ করুন আমাদের সাথে "
        description="আজহারী ট্রাভেলস আপনার স্বপ্ন পূরণ করবে স্বল্প খরচে"
        buttonText="স্বপ্ন পূরণ করতে ক্লিক করুন"
        buttonLink="tel:+8801318185954"
        backgroundImage="https://images.pexels.com/photos/18991579/pexels-photo-18991579/free-photo-of-al-azhar-mosque-in-cairo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your chosen Pexels image URL
      />
      <AboutUs></AboutUs>
      <Packages></Packages>
      <Visas></Visas>
      <HowWeWork></HowWeWork>
      <TravelingStatistics></TravelingStatistics>
      <FAQ type=""></FAQ>
      <ClientsGallery></ClientsGallery>
      <HappyClients type=""></HappyClients>
      {/* <OurTeam></OurTeam> */}



      {/* <ContactUs></ContactUs> */}

      <BlogSection></BlogSection>
      <TipsSection></TipsSection>
      <Gallery></Gallery>
    </>
  );
}

import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/ui/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolTestimonials from "./components/TestimonialCart"
import UpcommingWebinars from "./components/UpcommingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcommingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}

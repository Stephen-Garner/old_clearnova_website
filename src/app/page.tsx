import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FrameworkSection from "@/components/FrameworkSection";
import ValuesSection from "@/components/ValuesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FrameworkSection />
        <ValuesSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

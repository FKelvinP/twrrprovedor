import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark">
      <Header />
      <HeroSection />
      <PlansSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

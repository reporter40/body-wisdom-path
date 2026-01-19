import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import QuizSection from "@/components/QuizSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <AdvantagesSection />
        <AboutSection />
        <ServicesSection />
        <QuizSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

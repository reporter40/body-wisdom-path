import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Роман Филиппов - телесный терапевт"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative section-container py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="heading-primary animate-fade-up mb-6">
            Возвращение к себе{" "}
            <span className="text-gradient">через тело</span>
          </h1>
          
          <p className="text-body-large mb-8 animate-fade-up animation-delay-200">
            Биодинамическая терапия для думающих людей, которые устали 
            «работать над собой» и готовы просто встретиться с собой настоящим
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
            <Button variant="cta" size="xl" onClick={scrollToForm}>
              Записаться на диагностическую сессию
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 animate-fade-up animation-delay-600">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-sans">15+ лет опыта</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-sans">Биодинамический подход</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-sans">Бесплатная диагностика</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

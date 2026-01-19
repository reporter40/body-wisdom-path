import { Button } from "@/components/ui/button";
import { Gift, User, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Gift,
    title: "Диагностическая сессия",
    price: "Бесплатно",
    description: "Первая встреча 1,5 часа. Знакомство с методом, диагностика запроса, ответ на вопрос «это моё?»",
    highlight: true,
  },
  {
    icon: User,
    title: "Индивидуальная терапия",
    price: "По запросу",
    description: "Глубокая работа с телом и нервной системой. Сеансы 1,5-2 часа. Это не про «починку», а про трансформацию",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Обучение биодинамике",
    price: "Программы",
    description: "Курсы и ретриты для терапевтов, коучей и продвинутых клиентов, которые хотят практиковать метод",
    highlight: false,
  },
];

const ServicesSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-muted/30" id="services">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4 animate-fade-up">
          Как мы можем работать вместе
        </h2>
        <p className="text-body text-center mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
          Выберите формат, который подходит именно вам
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 transition-all duration-300 animate-fade-up ${
                service.highlight
                  ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-primary/20"
                  : "bg-card shadow-sm border border-border/50 hover:shadow-md"
              }`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  service.highlight ? "bg-primary-foreground/20" : "bg-primary/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>

              <div
                className={`text-sm font-sans font-medium mb-2 ${
                  service.highlight ? "text-primary-foreground/80" : "text-primary"
                }`}
              >
                {service.price}
              </div>

              <h3
                className={`text-xl font-serif font-semibold mb-3 ${
                  service.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  service.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <Button
                variant={service.highlight ? "ctaLight" : "cta"}
                className="w-full"
                onClick={scrollToForm}
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

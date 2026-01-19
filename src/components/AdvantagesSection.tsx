import { Target, Clock, MessageCircle, Shield, Heart, Compass } from "lucide-react";

const advantages = [
  {
    icon: Target,
    title: "Не лечу симптомы — веду к причине",
    description: "Боль — это послание тела",
  },
  {
    icon: Clock,
    title: "15 лет трансформационного опыта",
    description: "Через медитации и телесные практики",
  },
  {
    icon: MessageCircle,
    title: "Без эзотерического тумана",
    description: "Говорю о тонком через понятное",
  },
  {
    icon: Shield,
    title: "Безопасность прежде скорости",
    description: "Идём темпом вашей нервной системы",
  },
  {
    icon: Heart,
    title: "Холистический подход",
    description: "Работа с человеком целиком, а не с проблемой",
  },
  {
    icon: Compass,
    title: "Не гуру, а проводник",
    description: "Я рядом, просто уже знаю дорогу",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4 animate-fade-up">
          Чем биодинамическая терапия отличается
        </h2>
        <p className="text-body text-center mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
          Принципы, которыми я руководствуюсь в работе
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="card-accent text-center animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-tertiary mb-2">{advantage.title}</h3>
              <p className="text-body">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

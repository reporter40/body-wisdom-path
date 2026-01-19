import { RefreshCw, Battery, HeartPulse, Sparkles } from "lucide-react";

const problems = [
  {
    icon: RefreshCw,
    text: "Перепробовали психологов, коучей, массажистов — становится легче на время, потом всё возвращается",
  },
  {
    icon: Battery,
    text: "Успешны внешне, но опустошены внутренне. Нужна перезагрузка на глубинном уровне",
  },
  {
    icon: HeartPulse,
    text: "Понимаете, что боль в теле — это не просто боль, но не знаете, как с этим работать",
  },
  {
    icon: Sparkles,
    text: "Устали от эзотерического тумана и хотите честный, научно обоснованный подход",
  },
];

const ProblemsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4 animate-fade-up">
          Знакомо?
        </h2>
        <p className="text-body text-center mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
          Если хотя бы один пункт про вас — биодинамика может стать вашим ответом
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`card-warm flex gap-4 animate-fade-up animation-delay-${(index + 2) * 100}`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-body leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;

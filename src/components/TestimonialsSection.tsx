import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "После 7 сеансов ушли панические атаки, которые были со мной 5 лет. Я не верила, что это возможно без медикаментов.",
    name: "Елена К.",
    role: "Предприниматель, 38 лет",
  },
  {
    text: "Впервые за 10 лет я чувствую своё тело, а не живу «в голове». Это не просто терапия — это возвращение к себе.",
    name: "Михаил Д.",
    role: "IT-директор, 42 года",
  },
  {
    text: "Роман не лечит — он создаёт пространство, где тело само исцеляется. Наконец-то я нашла своего терапевта.",
    name: "Анна С.",
    role: "Психолог, 35 лет",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4 animate-fade-up">
          Истории трансформации
        </h2>
        <p className="text-body text-center mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
          Что говорят те, кто уже прошёл этот путь
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-warm relative animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              
              <p className="text-body mb-6 relative z-10">
                «{testimonial.text}»
              </p>

              <div className="pt-4 border-t border-border">
                <div className="font-serif font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

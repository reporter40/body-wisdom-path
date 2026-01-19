import treatmentImage from "@/assets/treatment.png";

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
              <img
                src={treatmentImage}
                alt="Роман Филиппов за работой"
                className="relative rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="heading-secondary mb-6 animate-fade-up">
              Как работает биодинамика
            </h2>
            
            <div className="space-y-6">
              <p className="text-body-large animate-fade-up animation-delay-100">
                Я не убираю вашу боль. Я помогаю вам услышать, что она пытается сказать.
              </p>
              
              <p className="text-body animate-fade-up animation-delay-200">
                А дальше — ваше тело само знает, как исцелить себя. 
                Биодинамика — это диалог с телом на языке, который оно понимает.
              </p>

              <div className="pt-4 border-t border-border animate-fade-up animation-delay-300">
                <blockquote className="text-xl font-serif italic text-foreground/80">
                  «Тело хранит всё, что разум предпочёл забыть. 
                  И только тело знает путь обратно к целостности»
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

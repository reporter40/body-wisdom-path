import portraitImage from "@/assets/portrait.png";

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-sm font-sans font-medium text-primary uppercase tracking-wider mb-4 block">
              О терапевте
            </span>
            <h2 className="heading-secondary mb-6">
              Роман Филиппов — телесный терапевт, посол биодинамики
            </h2>
            
            <div className="space-y-4 text-body">
              <p>
                Я — не гуру и не мастер. Я — проводник.
              </p>
              <p>
                15 лет назад я сам прошёл через трансформационный путь — 
                панические атаки, выгорание, поиск себя. Я нашёл выход через тело — 
                через синтез духовных практик и биодинамики.
              </p>
              <p>
                Сегодня я веду других по этому пути. Без пафоса, без тумана, 
                с глубиной настоящего опыта.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">лет практики</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">сессий</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">внимания к вам</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-up animation-delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-3xl blur-2xl" />
              <img
                src={portraitImage}
                alt="Роман Филиппов"
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

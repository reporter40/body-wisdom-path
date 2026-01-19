import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Что привело вас к поиску телесной терапии?",
    options: [
      "Хроническая боль/напряжение",
      "Эмоциональное выгорание",
      "Психосоматика",
      "Желание глубже понять себя",
    ],
  },
  {
    id: 2,
    question: "Ваш опыт с телесными практиками?",
    options: [
      "Первый раз",
      "Был у массажиста",
      "Пробовал остеопатию",
      "Работаю с телом давно",
    ],
  },
  {
    id: 3,
    question: "Что для вас важнее?",
    options: [
      "Быстрый результат",
      "Глубокая трансформация",
      "Понимание причин",
      "Долгосрочные изменения",
    ],
  },
  {
    id: 4,
    question: "Как вы относитесь к духовным практикам?",
    options: ["Скептически", "Интересно", "Практикую", "Это важная часть жизни"],
  },
  {
    id: 5,
    question: "Готовы ли вы к процессу?",
    options: [
      "Хочу за 1-2 сеанса",
      "Готов к 5-10 встречам",
      "Готов к долгосрочной работе",
    ],
  },
  {
    id: 6,
    question: "Ваш возраст?",
    options: ["До 30", "30-40", "40-50", "50+"],
  },
];

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentStep].id]: answer }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (isCompleted) {
    return (
      <section className="section-padding" id="quiz">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-accent animate-fade-up">
              <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="heading-secondary mb-4">
                Биодинамика — ваш путь!
              </h2>
              <p className="text-body mb-6">
                Судя по вашим ответам, биодинамическая терапия может стать именно тем,
                что вы ищете. Запишитесь на бесплатную диагностическую сессию,
                чтобы узнать подробнее и понять, подходит ли вам этот метод.
              </p>
              <Button variant="cta" size="xl" onClick={scrollToForm}>
                Записаться на бесплатную сессию
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" id="quiz">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4 animate-fade-up">
          Подходит ли вам биодинамика?
        </h2>
        <p className="text-body text-center mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-100">
          Ответьте на 6 простых вопросов и узнайте, подойдёт ли вам этот метод
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8 animate-fade-up animation-delay-200">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Вопрос {currentStep + 1} из {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="card-warm animate-fade-up animation-delay-300">
            <h3 className="heading-tertiary mb-6">{currentQuestion.question}</h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                    answers[currentQuestion.id] === option
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <span className="font-sans">{option}</span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Назад
              </Button>

              <Button
                variant="cta"
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="gap-2"
              >
                {currentStep === questions.length - 1 ? "Узнать результат" : "Далее"}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;

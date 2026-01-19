import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: "",
  });

  // Generate random math captcha
  const captcha = useMemo(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha
    if (parseInt(formData.captcha) !== captcha.answer) {
      toast({
        title: "Ошибка",
        description: "Неверный ответ на математический вопрос",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    // In production, this would send data to Telegram bot
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время",
    });
  };

  if (isSubmitted) {
    return (
      <section className="section-padding" id="contact-form">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <div className="card-accent animate-fade-up">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="heading-secondary mb-4">Спасибо за заявку!</h2>
              <p className="text-body">
                Я получил ваше сообщение и свяжусь с вами в ближайшее время, 
                чтобы назначить удобное время для диагностической сессии.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" id="contact-form">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <h2 className="heading-secondary text-center mb-4 animate-fade-up">
            Запишитесь на бесплатную диагностическую сессию
          </h2>
          <p className="text-body text-center mb-8 animate-fade-up animation-delay-100">
            Оставьте заявку, и я свяжусь с вами для назначения удобного времени
          </p>

          <form
            onSubmit={handleSubmit}
            className="card-warm space-y-6 animate-fade-up animation-delay-200"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Как вас зовут?"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение (необязательно)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Расскажите немного о вашем запросе..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-background resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="captcha">
                Сколько будет {captcha.num1} + {captcha.num2}? *
              </Label>
              <Input
                id="captcha"
                name="captcha"
                type="number"
                placeholder="Ваш ответ"
                value={formData.captcha}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>

            <Button
              type="submit"
              variant="cta"
              size="xl"
              className="w-full gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Отправка..."
              ) : (
                <>
                  Отправить заявку
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="underline hover:text-foreground">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

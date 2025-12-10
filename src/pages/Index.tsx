import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Sparkles",
      title: "Первичная консультация",
      description: "Знакомство, анализ текущей финансовой ситуации, постановка целей",
      price: "Бесплатно",
      duration: "60 минут",
      features: ["Диагностика финансов", "Постановка целей", "План действий"]
    },
    {
      icon: "TrendingUp",
      title: "Инвестиционная стратегия",
      description: "Разработка персонального инвестиционного портфеля с учётом рисков",
      price: "от 15 000 ₽",
      duration: "2-3 встречи",
      features: ["Анализ рисков", "Подбор инструментов", "Стратегия на 3-5 лет", "Ребалансировка"]
    },
    {
      icon: "Shield",
      title: "Финансовая защита",
      description: "Создание финансовой подушки безопасности и подбор страхования",
      price: "от 8 000 ₽",
      duration: "1-2 встречи",
      features: ["Расчёт подушки", "Подбор страховок", "План накоплений"]
    },
    {
      icon: "PiggyBank",
      title: "Персональный бюджет",
      description: "Анализ доходов и расходов, построение эффективной системы",
      price: "от 10 000 ₽",
      duration: "2 встречи",
      features: ["Аудит расходов", "Оптимизация бюджета", "Система учёта", "Поддержка 30 дней"]
    },
    {
      icon: "LineChart",
      title: "Налоговая оптимизация",
      description: "Легальные способы снижения налогов и использование льгот",
      price: "от 12 000 ₽",
      duration: "1-2 встречи",
      features: ["Аудит налогов", "Схемы оптимизации", "Вычеты и льготы", "Документы"]
    },
    {
      icon: "Target",
      title: "Финансовый план",
      description: "Комплексный план на 5-10 лет для достижения крупных целей",
      price: "от 25 000 ₽",
      duration: "3-4 встречи",
      features: ["Анализ ситуации", "Стратегия инвестиций", "Налоги и защита", "План на 10 лет", "Годовая поддержка"]
    }
  ];

  const testimonials = [
    {
      name: "Анна Смирнова",
      role: "Предприниматель",
      text: "Благодаря Аннуру я научилась правильно инвестировать и увеличила свой капитал на 40% за год. Профессиональный подход и понятные объяснения!",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      role: "IT-специалист",
      text: "Впервые встретил финансового советника, который действительно заботится о клиенте. Помог выстроить долгосрочную стратегию и оптимизировать налоги.",
      rating: 5
    },
    {
      name: "Елена Петрова",
      role: "Врач",
      text: "Аннур помог разобраться в сложных финансовых инструментах простым языком. Теперь я уверенно управляю своими финансами!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-montserrat font-bold text-primary">
            BIKCHANT
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О советнике</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Консультация
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
                Ваш путь к
                <span className="text-primary"> финансовой свободе</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональное управление финансами и инвестициями. 
                Помогаю достигать финансовых целей безопасно и эффективно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/e68dfdb9-cec9-44fb-b7a8-f6de4b3e4a75/files/2fbbcd06-3ae4-49aa-91f1-7e814b1a2646.jpg"
                alt="Financial Growth"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/e68dfdb9-cec9-44fb-b7a8-f6de4b3e4a75/files/cf8f1ead-42ac-4c6b-89ba-8c9bdca10058.jpg"
                alt="Аннур Бикчантаев"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Бикчантаев Аннур
              </h2>
              <p className="text-xl text-primary mb-6">Финансовый советник</p>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Более 8 лет помогаю людям грамотно управлять личными финансами 
                  и достигать финансовых целей. Специализируюсь на инвестиционном 
                  планировании и построении долгосрочных стратегий роста капитала.
                </p>
                <p className="leading-relaxed">
                  Мой подход — это индивидуальная работа с каждым клиентом, 
                  понятные объяснения сложных финансовых инструментов и честность 
                  во всём. Работаю только в интересах клиента, без скрытых комиссий.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" className="text-primary" size={24} />
                    <span className="font-semibold">Сертифицированный CFP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={24} />
                    <span className="font-semibold">200+ клиентов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-primary" size={24} />
                    <span className="font-semibold">8+ лет опыта</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Услуги и цены
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные тарифы. Комплексный подход к управлению вашими финансами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">/ {service.duration}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят люди, которые доверили мне свои финансы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-border animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Запишитесь на консультацию
            </h2>
            <p className="text-xl text-muted-foreground">
              Первая встреча — бесплатно. Обсудим ваши финансовые цели и составим план действий.
            </p>
          </div>
          <Card className="bg-card border-border animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email или телефон</label>
                  <Input 
                    placeholder="ivan@example.com или +7 999 123-45-67"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших финансовых целях..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-montserrat font-bold text-primary mb-4">
                BIKCHANT
              </div>
              <p className="text-muted-foreground">
                Профессиональное финансовое консультирование для вашего благополучия
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: annur@bikchant.ru</p>
                <p>Телефон: +7 (999) 123-45-67</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Send" className="text-primary" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" className="text-primary" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Linkedin" className="text-primary" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Bikchant. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
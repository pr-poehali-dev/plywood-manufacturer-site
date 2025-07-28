import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="TreePine" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">ФанераПроф</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
              >
                О компании
              </a>
              <a
                href="#products"
                className="text-foreground hover:text-primary transition-colors"
              >
                Продукция
              </a>
              <a
                href="#applications"
                className="text-foreground hover:text-primary transition-colors"
              >
                Применение
              </a>
              <a
                href="#delivery"
                className="text-foreground hover:text-primary transition-colors"
              >
                Доставка
              </a>
              <a
                href="#contacts"
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-background to-muted"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Качественная фанера от производителя
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Более 20 лет производим березовую и хвойную фанеру высочайшего
                качества. Прямые поставки с завода, честные цены, гарантия
                качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" className="mr-2 h-5 w-5" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="grid grid-cols-3 gap-3">
                <img
                  src="/img/9d0e99d4-d910-4fe6-b0d9-8b18ef1cb16e.jpg"
                  alt="Склад фанеры"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/9f3b4be9-57f4-48fc-9203-ef7722d4ebfc.jpg"
                  alt="Структура фанеры"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/d114935b-0c5d-41bd-92ea-38eae47f5b71.jpg"
                  alt="Мастерская"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/dc4f13fb-8b6f-41a1-9e7d-9391daa887d4.jpg"
                  alt="Кухня из фанеры"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/cacfb948-622f-40fa-a846-d011c21f1b2e.jpg"
                  alt="Монтаж фанеры"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/c87f5b9e-6d7b-433c-9819-a4b2acd34638.jpg"
                  alt="Офисная мебель"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/470c5e20-9ab5-4d79-8167-86b3565a93c5.jpg"
                  alt="Контроль качества"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/52a30958-0072-46eb-adea-09d9751d7c14.jpg"
                  alt="Производство"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/img/84e3725c-a054-4dca-b6ba-96b37f05b63e.jpg"
                  alt="Детская мебель"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-muted-foreground">
              Два основных вида фанеры для различных задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <img
                  src="/img/56324dac-5431-48e2-a261-47abb3859f50.jpg"
                  alt="Березовая фанера"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <CardTitle className="text-2xl text-primary">
                  Березовая фанера
                </CardTitle>
                <CardDescription>
                  Прочная и долговечная фанера из березового шпона
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Высокая прочность и стойкость
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Идеальна для мебели и строительства
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Толщина от 3 до 30 мм
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Сорта: I, II, III, IV
                  </li>
                </ul>
                <Button className="mt-4 w-full" variant="outline">
                  <Icon name="Info" className="mr-2 h-4 w-4" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <img
                  src="/img/1ca0d209-e94e-4a90-a41d-5949b2e4015d.jpg"
                  alt="Хвойная фанера"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <CardTitle className="text-2xl text-primary">
                  Хвойная фанера
                </CardTitle>
                <CardDescription>
                  Экономичная фанера из хвойных пород дерева
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Отличное соотношение цена/качество
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Подходит для упаковки и опалубки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Толщина от 4 до 21 мм
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                    Влагостойкие варианты
                  </li>
                </ul>
                <Button className="mt-4 w-full" variant="outline">
                  <Icon name="Info" className="mr-2 h-4 w-4" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Применение фанеры
            </h2>
            <p className="text-xl text-muted-foreground">
              Универсальный материал для строительства, мебели и дизайна
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <img
                  src="/img/e0571782-a58c-4f80-b3db-277b397ebae1.jpg"
                  alt="Строительство"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <CardTitle className="text-xl text-primary flex items-center">
                  <Icon name="HardHat" className="mr-2 h-5 w-5" />
                  Строительство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Опалубка для бетона</li>
                  <li>• Черновые полы</li>
                  <li>• Обшивка стен</li>
                  <li>• Кровельные работы</li>
                  <li>• Временные конструкции</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <img
                  src="/img/835199d6-0490-4c6f-bdb1-2d4d8f0869e8.jpg"
                  alt="Мебельное производство"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <CardTitle className="text-xl text-primary flex items-center">
                  <Icon name="Armchair" className="mr-2 h-5 w-5" />
                  Мебель
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Корпусная мебель</li>
                  <li>• Столешницы</li>
                  <li>• Полки и стеллажи</li>
                  <li>• Детская мебель</li>
                  <li>• Офисная мебель</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <img
                  src="/img/c8cd1a1f-88e9-4b13-a3c1-b57edd31bc84.jpg"
                  alt="Упаковка"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <CardTitle className="text-xl text-primary flex items-center">
                  <Icon name="Package" className="mr-2 h-5 w-5" />
                  Упаковка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Транспортная тара</li>
                  <li>• Ящики и контейнеры</li>
                  <li>• Поддоны</li>
                  <li>• Защитная упаковка</li>
                  <li>• Экспортная упаковка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <img
                  src="/img/80faa480-5c43-4a29-82ce-06d1ae414c46.jpg"
                  alt="Дизайн и декор"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <CardTitle className="text-xl text-primary flex items-center">
                  <Icon name="Palette" className="mr-2 h-5 w-5" />
                  Дизайн
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Декоративные панели</li>
                  <li>• Перегородки</li>
                  <li>• Выставочные стенды</li>
                  <li>• Рекламные конструкции</li>
                  <li>• Арт-объекты</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Почему выбирают фанеру?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Icon name="Zap" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Прочность и долговечность
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Многослойная структура обеспечивает высокую прочность
                        на изгиб и устойчивость к деформации
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Leaf" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Экологичность
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Изготовлена из натурального дерева с использованием
                        безопасных клеевых составов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Wrench" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Простота обработки
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Легко пилится, сверлится и обрабатывается стандартными
                        инструментами
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="DollarSign" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Экономичность
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Оптимальное соотношение цены и качества по сравнению
                        с массивом дерева
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Технические характеристики
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-foreground">Плотность</span>
                    <span className="text-muted-foreground">650-700 кг/м³</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-foreground">Влажность</span>
                    <span className="text-muted-foreground">6-10%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-foreground">Прочность на изгиб</span>
                    <span className="text-muted-foreground">40-80 МПа</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-foreground">Температура эксплуатации</span>
                    <span className="text-muted-foreground">-40°C до +50°C</span>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  <Icon name="FileText" className="mr-2 h-4 w-4" />
                  Техническая документация
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ФанераПроф — ведущий российский производитель фанеры с более чем
                20-летним опытом работы. Мы специализируемся на производстве
                качественной березовой и хвойной фанеры для различных отраслей.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Сертификаты качества
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ГОСТ, ISO, FSC
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Доставка по России
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Собственный автопарк
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Factory" className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Собственное производство
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Современное оборудование
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Опытная команда
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Более 200 специалистов
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Наши преимущества
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-primary mt-0.5 mr-3"
                    />
                    <span className="text-muted-foreground">
                      Прямые поставки от производителя без посредников
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-primary mt-0.5 mr-3"
                    />
                    <span className="text-muted-foreground">
                      Гарантия качества на всю продукцию
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-primary mt-0.5 mr-3"
                    />
                    <span className="text-muted-foreground">
                      Индивидуальный подход к каждому клиенту
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-primary mt-0.5 mr-3"
                    />
                    <span className="text-muted-foreground">
                      Экологически чистые материалы
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Доставка
            </h2>
            <p className="text-xl text-muted-foreground">
              Быстро и надежно доставим фанеру в любую точку России
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img
                src="/img/141017fd-d72a-45a8-a4e8-8c2b99f33b28.jpg"
                alt="Доставка фанеры"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Собственный автопарк
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Мы обеспечиваем быструю и безопасную доставку благодаря
                собственному автопарку из 25 специализированных автомобилей. Вся
                продукция надежно упакована и защищена от влаги.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-medium">
                    Доставка в течение 1-3 дней
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-medium">
                    Страхование груза
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-medium">
                    Отслеживание в реальном времени
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <Icon
                  name="Truck"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Автомобильная доставка
                </h3>
                <p className="text-muted-foreground mb-4">
                  По Москве и МО — бесплатно при заказе от 50 000 ₽
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Доставка в течение дня</li>
                  <li>• Разгрузка включена</li>
                  <li>• Гибкие временные слоты</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <Icon
                  name="Train"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Железнодорожная доставка
                </h3>
                <p className="text-muted-foreground mb-4">
                  Для больших партий по всей России
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Экономичная доставка</li>
                  <li>• Большие объемы</li>
                  <li>• Надежная упаковка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <Icon
                  name="Package"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Самовывоз
                </h3>
                <p className="text-muted-foreground mb-4">
                  Со склада в Москве — скидка 5%
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Работаем с 8:00 до 18:00</li>
                  <li>• Помощь в погрузке</li>
                  <li>• Предварительный заказ</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Стоимость доставки
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  <Icon name="MapPin" className="inline h-5 w-5 mr-2" />
                  По Москве и МО
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>До 10 м³</span>
                    <span className="font-medium">3 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>10-20 м³</span>
                    <span className="font-medium">4 500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Свыше 20 м³</span>
                    <span className="font-medium">Бесплатно</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  <Icon name="Map" className="inline h-5 w-5 mr-2" />
                  По России
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>До 500 км</span>
                    <span className="font-medium">50 ₽/км</span>
                  </div>
                  <div className="flex justify-between">
                    <span>500-1000 км</span>
                    <span className="font-medium">45 ₽/км</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Свыше 1000 км</span>
                    <span className="font-medium">40 ₽/км</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calculator" className="mr-2 h-4 w-4" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для получения консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>
                    Мы перезвоним вам в течение 30 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Телефон
                      </label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о ваших потребностях..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="MapPin" className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Адрес</h3>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Производственная, 15
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="Phone" className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Телефон
                        </h3>
                        <p className="text-muted-foreground">
                          +7 (495) 123-45-67
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="Mail" className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">
                          info@fanerprof.ru
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="Clock" className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Режим работы
                        </h3>
                        <p className="text-muted-foreground">
                          Пн-Пт: 8:00-18:00
                          <br />
                          Сб: 9:00-15:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TreePine" className="h-6 w-6" />
                <span className="text-lg font-bold">ФанераПроф</span>
              </div>
              <p className="text-sm opacity-80">
                Производство качественной фанеры с 2003 года. Надежный партнер
                для вашего бизнеса.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Березовая фанера</li>
                <li>Хвойная фанера</li>
                <li>Ламинированная фанера</li>
                <li>Водостойкая фанера</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Производство</li>
                <li>Качество</li>
                <li>Сертификаты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@fanerprof.ru</li>
                <li>г. Москва, ул. Производственная, 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2024 ФанераПроф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
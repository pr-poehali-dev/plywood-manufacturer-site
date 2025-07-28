import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  oldPrice?: string;
  specifications: { label: string; value: string }[];
  advantages: string[];
  applications: string[];
  inStock: boolean;
  popular?: boolean;
  discount?: string;
}

export default function ProductCard({
  title,
  description,
  image,
  price,
  oldPrice,
  specifications,
  advantages,
  applications,
  inStock,
  popular = false,
  discount,
}: ProductCardProps) {
  return (
    <Card className="relative hover:shadow-xl transition-all duration-300 group overflow-hidden">
      {popular && (
        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
          <Icon name="Star" className="w-3 h-3 mr-1" />
          Популярно
        </Badge>
      )}
      
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              {oldPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {oldPrice}
                </span>
              )}
              <div className="text-2xl font-bold text-primary">{price}</div>
            </div>
            <div className="text-sm text-muted-foreground">за м²</div>
            {discount && (
              <Badge variant="destructive" className="mt-1">
                -{discount}
              </Badge>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-foreground flex items-center mb-3">
              <Icon name="Settings" className="w-4 h-4 mr-2" />
              Характеристики
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {specifications.map((spec, index) => (
                <div key={index} className="text-sm">
                  <div className="text-muted-foreground">{spec.label}</div>
                  <div className="font-medium text-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground flex items-center mb-2">
              <Icon name="CheckCircle2" className="w-4 h-4 mr-2" />
              Преимущества
            </h4>
            <ul className="space-y-1">
              {advantages.map((advantage, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <Icon name="Dot" className="w-3 h-3 mt-1 mr-1 text-primary" />
                  {advantage}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground flex items-center mb-2">
              <Icon name="Wrench" className="w-4 h-4 mr-2" />
              Применение
            </h4>
            <ul className="space-y-1">
              {applications.map((app, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <Icon name="Dot" className="w-3 h-3 mt-1 mr-1 text-primary" />
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon 
              name={inStock ? "CheckCircle" : "XCircle"} 
              className={`w-4 h-4 ${inStock ? "text-green-500" : "text-red-500"}`} 
            />
            <span className={`text-sm font-medium ${inStock ? "text-green-700" : "text-red-700"}`}>
              {inStock ? "В наличии" : "Под заказ"}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Eye" className="w-4 h-4 mr-1" />
              Подробнее
            </Button>
            <Button size="sm">
              <Icon name="ShoppingCart" className="w-4 h-4 mr-1" />
              Заказать
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
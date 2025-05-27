
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { toast } = useToast();

  const handleRequestService = (serviceName: string) => {
    toast({
      title: "طلب الخدمة",
      description: `سيتم إضافة نموذج طلب خدمة ${serviceName} قريباً`,
    });
  };

  const handleContactUs = () => {
    toast({
      title: "تواصل معنا",
      description: "سيتم إضافة صفحة التواصل قريباً",
    });
  };

  const handleFAQ = () => {
    toast({
      title: "الأسئلة الشائعة",
      description: "سيتم إضافة صفحة الأسئلة الشائعة قريباً",
    });
  };

  const services = [
    {
      id: 1,
      title: "فحص شامل للسيارة",
      description: "فحص فني شامل من قبل خبراء معتمدين لضمان جودة السيارة قبل الشراء",
      icon: "🔧",
      price: "من 150 ريال",
      features: ["فحص المحرك", "فحص ناقل الحركة", "فحص الكهرباء", "تقرير مفصل"]
    },
    {
      id: 2,
      title: "تمويل السيارات",
      description: "حلول تمويل مرنة ومناسبة لجميع الفئات مع أفضل البنوك والشركات",
      icon: "💳",
      price: "بدون رسوم",
      features: ["معدل فائدة منخفض", "مدة سداد مرنة", "موافقة سريعة", "بدون دفعة أولى"]
    },
    {
      id: 3,
      title: "تأمين السيارات",
      description: "احصل على أفضل عروض التأمين الشامل وضد الغير لسيارتك",
      icon: "🛡️",
      price: "خصم 20%",
      features: ["تأمين شامل", "ضد الغير", "خدمة 24/7", "إصلاح في الوكالة"]
    },
    {
      id: 4,
      title: "نقل ملكية السيارة",
      description: "خدمة نقل الملكية بسهولة وأمان مع متابعة جميع الإجراءات",
      icon: "📋",
      price: "250 ريال",
      features: ["نقل فوري", "متابعة الإجراءات", "توثيق المعاملة", "ضمان قانوني"]
    },
    {
      id: 5,
      title: "تقييم السيارة",
      description: "تقييم احترافي لسيارتك لمعرفة قيمتها الحقيقية في السوق",
      icon: "📊",
      price: "مجاني",
      features: ["تقييم دقيق", "مقارنة السوق", "تقرير مفصل", "استشارة مجانية"]
    },
    {
      id: 6,
      title: "خدمة التوصيل",
      description: "خدمة توصيل السيارة إلى موقعك أو مكان عملك بأمان وسرعة",
      icon: "🚛",
      price: "من 100 ريال",
      features: ["توصيل آمن", "تأمين كامل", "توصيل سريع", "تتبع الشحنة"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            خدماتنا المميزة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نوفر لك مجموعة شاملة من الخدمات لجعل تجربة شراء وبيع السيارات أسهل وأكثر أماناً
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-xl transition-all duration-300 group border-2 border-gray-100 hover:border-primary-200">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {service.description}
                  </p>
                  <div className="text-lg font-bold text-primary-600">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full cars-gradient text-white hover:shadow-lg"
                  onClick={() => handleRequestService(service.title)}
                >
                  اطلب الخدمة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              احتج مساعدة؟
            </h3>
            <p className="text-lg mb-6 opacity-90">
              فريق خدمة العملاء متاح 24/7 لمساعدتك في جميع استفساراتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary-600 hover:bg-gray-100">
                  تواصل معنا
                </Button>
              </Link>
              <Link to="/faq">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  الأسئلة الشائعة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

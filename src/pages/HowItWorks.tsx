
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      title: "إنشاء حساب",
      description: "قم بإنشاء حساب مجاني على الموقع",
      icon: "👤"
    },
    {
      title: "أضف إعلانك",
      description: "أضف تفاصيل سيارتك مع الصور",
      icon: "📸"
    },
    {
      title: "تواصل مع المشترين",
      description: "استقبل استفسارات المهتمين",
      icon: "💬"
    },
    {
      title: "أتمم الصفقة",
      description: "اتفق على السعر وأتمم البيع",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">كيف يعمل الموقع</h1>
          <p className="text-gray-600">خطوات بسيطة لبيع أو شراء سيارتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;

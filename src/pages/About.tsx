
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">عن الموقع</h1>
          <p className="text-gray-600">تعرف على موقع السيارات الرائد في المملكة العربية السعودية</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">من نحن</h2>
              <p className="text-gray-600 leading-relaxed">
                موقع السيارات هو المنصة الرائدة في المملكة العربية السعودية لبيع وشراء السيارات المستعملة والجديدة. 
                نوفر خدمة شاملة تربط بين البائعين والمشترين بطريقة آمنة وموثوقة.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                أن نكون المنصة الأولى والأكثر ثقة في المملكة العربية السعودية لتجارة السيارات، 
                مع توفير تجربة استثنائية لجميع عملائنا.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">خدماتنا</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• بيع وشراء السيارات المستعملة</li>
                <li>• عرض السيارات الجديدة من الوكلاء المعتمدين</li>
                <li>• خدمات الفحص الفني للسيارات</li>
                <li>• تقييم السيارات المجاني</li>
                <li>• خدمات التأمين والتمويل</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

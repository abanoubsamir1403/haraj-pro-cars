
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">سياسة الخصوصية</h1>
          <p className="text-gray-600">كيف نحمي بياناتك الشخصية</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">جمع المعلومات</h2>
                <p className="text-gray-600">
                  نقوم بجمع المعلومات التي تقدمها لنا طوعياً عند التسجيل أو استخدام خدماتنا.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">استخدام المعلومات</h2>
                <p className="text-gray-600">
                  نستخدم معلوماتك لتقديم خدماتنا وتحسين تجربتك على الموقع.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">حماية البيانات</h2>
                <p className="text-gray-600">
                  نتخذ تدابير أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">مشاركة المعلومات</h2>
                <p className="text-gray-600">
                  لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا بموافقتك أو للامتثال للقانون.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">حقوقك</h2>
                <p className="text-gray-600">
                  لديك الحق في الوصول إلى بياناتك أو تعديلها أو حذفها في أي وقت.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;

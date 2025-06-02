
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">الشروط والأحكام</h1>
          <p className="text-gray-600">شروط وأحكام استخدام موقع السيارات</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">1. قبول الشروط</h2>
                <p className="text-gray-600">
                  باستخدام هذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">2. استخدام الموقع</h2>
                <p className="text-gray-600">
                  يُسمح لك باستخدام الموقع للأغراض الشخصية والتجارية المشروعة فقط.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">3. المحتوى المنشور</h2>
                <p className="text-gray-600">
                  أنت مسؤول عن صحة ودقة المعلومات التي تنشرها على الموقع.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">4. الرسوم والدفع</h2>
                <p className="text-gray-600">
                  قد يتم تطبيق رسوم على بعض الخدمات المتقدمة في الموقع.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">5. إخلاء المسؤولية</h2>
                <p className="text-gray-600">
                  الموقع غير مسؤول عن أي خسائر أو أضرار قد تنتج عن استخدام الموقع.
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

export default Terms;

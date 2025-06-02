
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const UserAgreement = () => {
  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">اتفاقية المستخدم</h1>
          <p className="text-gray-600">اتفاقية الاستخدام بين المستخدم والموقع</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">التزامات المستخدم</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• تقديم معلومات صحيحة ودقيقة</li>
                  <li>• عدم نشر محتوى مضلل أو احتيالي</li>
                  <li>• احترام حقوق المستخدمين الآخرين</li>
                  <li>• الالتزام بالقوانين المحلية</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">الخدمات المقدمة</h2>
                <p className="text-gray-600">
                  نوفر منصة لعرض وبيع السيارات، وخدمات مساعدة للمستخدمين.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">المسؤوليات</h2>
                <p className="text-gray-600">
                  المستخدم مسؤول عن جميع الأنشطة التي تتم من خلال حسابه.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">إنهاء الخدمة</h2>
                <p className="text-gray-600">
                  يحق لنا إنهاء أو تعليق الخدمة في حالة مخالفة الشروط.
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

export default UserAgreement;

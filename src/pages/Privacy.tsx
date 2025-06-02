
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
          <p className="text-gray-600">كيف نحمي بياناتك الشخصية ونحافظ على خصوصيتك</p>
          <p className="text-sm text-gray-500 mt-2">آخر تحديث: يناير 2024</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. مقدمة</h2>
              <p className="text-gray-600 leading-relaxed">
                نحن في موقع السيارات نلتزم بحماية خصوصيتك والحفاظ على أمان معلوماتك الشخصية. 
                توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا ومشاركتنا لمعلوماتك الشخصية 
                عند استخدامك لموقعنا الإلكتروني وخدماتنا.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. المعلومات التي نجمعها</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">أ. المعلومات الشخصية</h3>
                  <ul className="text-gray-600 space-y-1 mr-6">
                    <li>• الاسم الكامل ورقم الهوية</li>
                    <li>• عنوان البريد الإلكتروني</li>
                    <li>• رقم الهاتف الجوال</li>
                    <li>• العنوان البريدي</li>
                    <li>• تاريخ الميلاد</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">ب. معلومات السيارة</h3>
                  <ul className="text-gray-600 space-y-1 mr-6">
                    <li>• بيانات السيارة (الموديل، السنة، اللون)</li>
                    <li>• رقم اللوحة ومعلومات التسجيل</li>
                    <li>• الصور والمواصفات التقنية</li>
                    <li>• تاريخ الصيانة والإصلاحات</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">ج. المعلومات التقنية</h3>
                  <ul className="text-gray-600 space-y-1 mr-6">
                    <li>• عنوان IP والموقع الجغرافي</li>
                    <li>• نوع المتصفح ونظام التشغيل</li>
                    <li>• ملفات تعريف الارتباط (الكوكيز)</li>
                    <li>• سجلات النشاط على الموقع</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. كيفية استخدام معلوماتك</h2>
              <ul className="text-gray-600 space-y-2 mr-6">
                <li>• إنشاء وإدارة حسابك على الموقع</li>
                <li>• نشر إعلانات بيع وشراء السيارات</li>
                <li>• التواصل معك بخصوص الاستفسارات والعروض</li>
                <li>• تحسين خدماتنا وتجربة المستخدم</li>
                <li>• إرسال التحديثات والعروض الترويجية</li>
                <li>• منع الاحتيال والأنشطة المشبوهة</li>
                <li>• الامتثال للمتطلبات القانونية</li>
                <li>• إجراء البحوث والتحليلات الإحصائية</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. مشاركة المعلومات</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">لا نشارك معلوماتك إلا في الحالات التالية:</h3>
                  <ul className="text-gray-600 space-y-2 mr-6">
                    <li>• مع موافقتك الصريحة المسبقة</li>
                    <li>• مع شركاء الخدمة المعتمدين (البنوك، شركات الشحن)</li>
                    <li>• للامتثال للقوانين والأنظمة السعودية</li>
                    <li>• لحماية حقوقنا أو حقوق المستخدمين الآخرين</li>
                    <li>• في حالة بيع أو نقل ملكية الشركة</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    ⚠️ تنبيه: لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. حماية البيانات والأمان</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">التدابير الأمنية المطبقة:</h3>
                <ul className="text-gray-600 space-y-2 mr-6">
                  <li>• تشفير SSL لجميع البيانات المنقولة</li>
                  <li>• خوادم آمنة ومحمية بجدران حماية متقدمة</li>
                  <li>• مراقبة مستمرة للأنشطة المشبوهة</li>
                  <li>• نسخ احتياطية منتظمة للبيانات</li>
                  <li>• تحديثات أمنية دورية للأنظمة</li>
                  <li>• تدريب الموظفين على أمان المعلومات</li>
                  <li>• اختبارات اختراق دورية</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. حقوقك في البيانات</h2>
              <div className="space-y-4">
                <p className="text-gray-600">وفقاً لقانون حماية البيانات الشخصية السعودي، لديك الحقوق التالية:</p>
                <ul className="text-gray-600 space-y-2 mr-6">
                  <li>• <strong>الحق في الوصول:</strong> طلب نسخة من بياناتك المخزنة لدينا</li>
                  <li>• <strong>الحق في التصحيح:</strong> تحديث أو تصحيح معلوماتك غير الدقيقة</li>
                  <li>• <strong>الحق في الحذف:</strong> طلب حذف بياناتك في ظروف معينة</li>
                  <li>• <strong>الحق في تقييد المعالجة:</strong> تحديد كيفية استخدام بياناتك</li>
                  <li>• <strong>الحق في النقل:</strong> الحصول على بياناتك بصيغة قابلة للقراءة</li>
                  <li>• <strong>الحق في الاعتراض:</strong> رفض معالجة بياناتك لأغراض معينة</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">7. ملفات تعريف الارتباط (الكوكيز)</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">أنواع الكوكيز المستخدمة:</h3>
                  <ul className="text-gray-600 space-y-2 mr-6">
                    <li>• <strong>كوكيز ضرورية:</strong> لضمان عمل الموقع بشكل صحيح</li>
                    <li>• <strong>كوكيز الأداء:</strong> لتحليل استخدام الموقع وتحسينه</li>
                    <li>• <strong>كوكيز الوظائف:</strong> لتذكر تفضيلاتك وإعداداتك</li>
                    <li>• <strong>كوكيز التسويق:</strong> لعرض إعلانات مناسبة لاهتماماتك</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  يمكنك التحكم في إعدادات الكوكيز من خلال متصفحك، لكن تعطيلها قد يؤثر على وظائف الموقع.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">8. الاحتفاظ بالبيانات</h2>
              <div className="space-y-3">
                <p className="text-gray-600">نحتفظ بمعلوماتك للفترات التالية:</p>
                <ul className="text-gray-600 space-y-2 mr-6">
                  <li>• <strong>بيانات الحساب:</strong> طوال فترة نشاط الحساب + 3 سنوات</li>
                  <li>• <strong>إعلانات السيارات:</strong> 5 سنوات من تاريخ النشر</li>
                  <li>• <strong>المراسلات:</strong> 7 سنوات للمتطلبات القانونية</li>
                  <li>• <strong>البيانات المالية:</strong> 10 سنوات وفقاً للأنظمة المحاسبية</li>
                  <li>• <strong>سجلات الأمان:</strong> سنتان من تاريخ الحدث</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">9. المعلومات الخاصة بالقصر</h2>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>تنبيه مهم:</strong> موقعنا غير مخصص للأشخاص دون سن 18 عاماً. 
                  إذا علمنا بجمع معلومات من قاصر دون موافقة ولي الأمر، سنقوم بحذفها فوراً.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">10. نقل البيانات دولياً</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  قد يتم نقل بياناتك خارج المملكة العربية السعودية في الحالات التالية:
                </p>
                <ul className="text-gray-600 space-y-2 mr-6">
                  <li>• استخدام خدمات الحوسبة السحابية الآمنة</li>
                  <li>• التعامل مع شركاء دوليين معتمدين</li>
                  <li>• ضمان توفر الخدمة على مدار الساعة</li>
                </ul>
                <p className="text-gray-600">
                  نضمن أن جميع عمليات النقل تتم وفقاً لمعايير الحماية الدولية المعتمدة.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">11. التحديثات على السياسة</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. في حالة إجراء تغييرات جوهرية، سنقوم بـ:
                </p>
                <ul className="text-gray-600 space-y-2 mr-6">
                  <li>• إشعارك عبر البريد الإلكتروني</li>
                  <li>• عرض إشعار بارز على الموقع</li>
                  <li>• منحك فترة 30 يوماً لمراجعة التغييرات</li>
                  <li>• طلب موافقتك على التغييرات الجوهرية</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">12. التواصل معنا</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  إذا كان لديك أي استفسارات حول سياسة الخصوصية أو ترغب في ممارسة حقوقك، يمكنك التواصل معنا:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="ml-3">📧</span>
                    <span><strong>البريد الإلكتروني:</strong> privacy@cars-saudi.com</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="ml-3">📞</span>
                    <span><strong>الهاتف:</strong> +966 11 123 4567</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="ml-3">📍</span>
                    <span><strong>العنوان:</strong> الرياض 12345، المملكة العربية السعودية</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="ml-3">🕒</span>
                    <span><strong>أوقات العمل:</strong> الأحد - الخميس، 9:00 ص - 6:00 م</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  سنرد على استفساراتك خلال 48 ساعة عمل كحد أقصى.
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

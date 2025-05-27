
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "كيف يمكنني إضافة إعلان جديد؟",
      answer: "يمكنك إضافة إعلان جديد عبر النقر على زر 'أضف إعلانك' في الصفحة الرئيسية أو في أعلى الموقع، ثم ملء البيانات المطلوبة."
    },
    {
      question: "هل هناك رسوم على نشر الإعلانات؟",
      answer: "نعم، هناك رسوم رمزية لنشر الإعلانات تختلف حسب نوع العضوية ومدة عرض الإعلان."
    },
    {
      question: "كيف يمكنني التواصل مع البائع؟",
      answer: "يمكنك التواصل مع البائع عبر الهاتف أو الرسائل الخاصة من خلال صفحة تفاصيل السيارة."
    },
    {
      question: "هل يمكنني تعديل إعلاني بعد نشره؟",
      answer: "نعم، يمكنك تعديل إعلانك في أي وقت من خلال لوحة التحكم الخاصة بك."
    },
    {
      question: "كيف أتأكد من صحة بيانات السيارة؟",
      answer: "ننصح بالفحص الشامل للسيارة قبل الشراء، ونوفر خدمة الفحص من خلال خبراء معتمدين."
    },
    {
      question: "ما هي وسائل الدفع المتاحة؟",
      answer: "نقبل جميع وسائل الدفع الإلكتروني بما في ذلك البطاقات الائتمانية والتحويل البنكي."
    }
  ];

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h1>
          <p className="text-gray-600">إجابات على أكثر الأسئلة شيوعاً</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-right">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SpareParts = () => {
  const spareParts = [
    {
      id: 1,
      name: "بطارية سيارة",
      brand: "AC Delco",
      price: "350",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      compatibility: "تويوتا، نيسان، هيونداي",
      condition: "جديد"
    },
    {
      id: 2,
      name: "إطارات سيارة",
      brand: "Michelin",
      price: "800",
      image: "https://images.unsplash.com/photo-1544955734-6670b73c5a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      compatibility: "جميع السيارات",
      condition: "جديد"
    }
  ];

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">قطع الغيار</h1>
          <p className="text-gray-600">احصل على أفضل قطع الغيار الأصلية والبديلة لسيارتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {spareParts.map((part) => (
            <Card key={part.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {part.condition}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {part.name}
                </h3>
                
                <div className="text-sm text-gray-600 mb-2">
                  الماركة: {part.brand}
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  متوافق مع: {part.compatibility}
                </div>
                
                <div className="text-xl font-bold text-primary-600 mb-3">
                  {part.price} ريال
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 cars-gradient text-white text-sm">
                    أضف للسلة
                  </Button>
                  <Button variant="outline" className="flex-1 text-sm">
                    استفسار
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SpareParts;

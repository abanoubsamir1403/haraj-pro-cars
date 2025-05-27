
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NewCars = () => {
  const newCars = [
    {
      id: 1,
      brand: "تويوتا",
      model: "كامري",
      year: 2024,
      price: "135,000",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["ضمان الوكيل", "صفر كيلومتر", "أحدث موديل"]
    }
  ];

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">السيارات الجديدة</h1>
          <p className="text-gray-600">اكتشف أحدث موديلات السيارات الجديدة بضمان الوكيل</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  جديدة
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {car.brand} {car.model} {car.year}
                </h3>
                
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {car.price} ريال
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="w-full cars-gradient text-white">
                  استفسار عن السعر
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewCars;

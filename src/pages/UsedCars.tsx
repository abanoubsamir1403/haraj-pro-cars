
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UsedCars = () => {
  const usedCars = [
    {
      id: 1,
      brand: "هيونداي",
      model: "النترا",
      year: 2022,
      price: "65,000",
      mileage: "25,000",
      location: "جدة",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["حالة ممتازة", "مالك واحد", "كامل المواصفات"]
    }
  ];

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">السيارات المستعملة</h1>
          <p className="text-gray-600">اختر من مجموعة واسعة من السيارات المستعملة بحالة ممتازة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usedCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  مستعملة
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {car.brand} {car.model} {car.year}
                </h3>
                
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {car.price} ريال
                </div>
                
                <div className="text-sm text-gray-500 mb-4">
                  المسافة: {car.mileage} كم - {car.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 cars-gradient text-white">
                    عرض التفاصيل
                  </Button>
                  <Button variant="outline" className="flex-1">
                    اتصل الآن
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

export default UsedCars;

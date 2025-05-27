
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const FeaturedCars = () => {
  const { toast } = useToast();

  const handleViewDetails = (carName: string) => {
    toast({
      title: "عرض التفاصيل",
      description: `سيتم إضافة صفحة تفاصيل ${carName} قريباً`,
    });
  };

  const handleCallNow = (carName: string) => {
    toast({
      title: "اتصل الآن",
      description: `سيتم إضافة رقم الهاتف لـ ${carName} قريباً`,
    });
  };

  const handleViewAllCars = () => {
    toast({
      title: "جميع السيارات",
      description: "سيتم إضافة صفحة جميع السيارات قريباً",
    });
  };

  const featuredCars = [
    {
      id: 1,
      brand: "تويوتا",
      model: "كامري",
      year: 2023,
      price: "85,000",
      mileage: "15,000",
      location: "الرياض",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["فحص شامل", "ضمان سنة", "صيانة دورية"]
    },
    {
      id: 2,
      brand: "هيونداي",
      model: "النترا",
      year: 2022,
      price: "65,000",
      mileage: "25,000",
      location: "جدة",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["حالة ممتازة", "مالك واحد", "كامل المواصفات"]
    },
    {
      id: 3,
      brand: "نيسان",
      model: "التيما",
      year: 2021,
      price: "72,000",
      mileage: "35,000",
      location: "الدمام",
      image: "https://images.unsplash.com/photo-1494976999208-77be88266ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["فول أوبشن", "بدون حوادث", "سعر مناسب"]
    },
    {
      id: 4,
      brand: "بي إم دبليو",
      model: "الفئة الثالثة",
      year: 2024,
      price: "185,000",
      mileage: "5,000",
      location: "الرياض",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["جديدة", "ضمان الوكيل", "أحدث موديل"]
    },
    {
      id: 5,
      brand: "مرسيدس",
      model: "C-Class",
      year: 2023,
      price: "195,000",
      mileage: "12,000",
      location: "جدة",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["لوكس", "بدون حوادث", "حالة ممتازة"]
    },
    {
      id: 6,
      brand: "كيا",
      model: "سيراتو",
      year: 2022,
      price: "58,000",
      mileage: "28,000",
      location: "مكة المكرمة",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["اقتصادية", "صيانة منتظمة", "مالك واحد"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            السيارات المميزة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة مختارة من أفضل السيارات المتاحة للبيع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  مميزة
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {car.location}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.brand} {car.model}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {car.year}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {car.price} ريال
                  </div>
                  <div className="text-sm text-gray-500">
                    المسافة المقطوعة: {car.mileage} كم
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 cars-gradient text-white hover:shadow-lg"
                    onClick={() => handleViewDetails(`${car.brand} ${car.model}`)}
                  >
                    عرض التفاصيل
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleCallNow(`${car.brand} ${car.model}`)}
                  >
                    اتصل الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="px-8 py-3 text-lg cars-gradient text-white hover:shadow-lg"
            onClick={handleViewAllCars}
          >
            عرض جميع السيارات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;

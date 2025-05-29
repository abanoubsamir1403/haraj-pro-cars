
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const UsedCars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const allUsedCars = [
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
    },
    {
      id: 2,
      brand: "تويوتا",
      model: "كورولا",
      year: 2021,
      price: "58,000",
      mileage: "35,000",
      location: "الرياض",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["صيانة دورية", "حالة جيدة", "بدون حوادث"]
    },
    {
      id: 3,
      brand: "نيسان",
      model: "التيما",
      year: 2020,
      price: "45,000",
      mileage: "42,000",
      location: "الدمام",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["سعر مناسب", "حالة جيدة", "فحص شامل"]
    },
    {
      id: 4,
      brand: "كيا",
      model: "سيراتو",
      year: 2023,
      price: "72,000",
      mileage: "18,000",
      location: "مكة",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["حديثة", "ضمان باقي", "كامل المواصفات"]
    },
    {
      id: 5,
      brand: "هوندا",
      model: "أكورد",
      year: 2019,
      price: "55,000",
      mileage: "48,000",
      location: "جدة",
      image: "https://images.unsplash.com/photo-1544955734-6670b73c5a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["موثوقة", "اقتصادية", "صيانة منتظمة"]
    },
    {
      id: 6,
      brand: "مازدا",
      model: "6",
      year: 2021,
      price: "62,000",
      mileage: "28,000",
      location: "الرياض",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["تصميم أنيق", "أداء ممتاز", "حالة ممتازة"]
    },
    {
      id: 7,
      brand: "شيفروليه",
      model: "كروز",
      year: 2020,
      price: "38,000",
      mileage: "55,000",
      location: "الطائف",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["سعر مغري", "حالة جيدة", "استهلاك منخفض"]
    },
    {
      id: 8,
      brand: "فولكس واجن",
      model: "جيتا",
      year: 2022,
      price: "68,000",
      mileage: "22,000",
      location: "المدينة",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["ألمانية الصنع", "جودة عالية", "تقنيات متقدمة"]
    },
    {
      id: 9,
      brand: "ميتسوبيشي",
      model: "لانسر",
      year: 2019,
      price: "42,000",
      mileage: "38,000",
      location: "الخبر",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["موثوقة", "قطع غيار متوفرة", "صيانة اقتصادية"]
    },
    {
      id: 10,
      brand: "سكودا",
      model: "أوكتافيا",
      year: 2021,
      price: "59,000",
      mileage: "31,000",
      location: "أبها",
      image: "https://images.unsplash.com/photo-1544955734-6670b73c5a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["مساحة واسعة", "اقتصادية", "حالة ممتازة"]
    }
  ];

  // حساب إجمالي الصفحات
  const totalPages = Math.ceil(allUsedCars.length / carsPerPage);

  // الحصول على السيارات للصفحة الحالية
  const getCurrentPageCars = () => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return allUsedCars.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">السيارات المستعملة</h1>
          <p className="text-gray-600">اختر من مجموعة واسعة من السيارات المستعملة بحالة ممتازة</p>
          <p className="text-sm text-gray-500 mt-2">
            عرض {getCurrentPageCars().length} من أصل {allUsedCars.length} سيارة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getCurrentPageCars().map((car) => (
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

        {/* نظام الصفحات */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
            >
              <ChevronRight className="w-4 h-4" />
              السابق
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 ${
                      currentPage === page 
                        ? "cars-gradient text-white" 
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
            >
              التالي
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* معلومات الصفحة الحالية */}
        <div className="text-center text-sm text-gray-500">
          الصفحة {currentPage} من {totalPages}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UsedCars;

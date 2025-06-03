
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarsForSale = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      brand: "تويوتا",
      model: "كامري",
      year: 2023,
      price: "85,000",
      mileage: "15,000",
      location: "الرياض",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["فحص شامل", "ضمان سنة", "صيانة دورية"],
      phone: "0501234567"
    },
    // ... المزيد من السيارات
  ];

  const handleViewDetails = (carId: number) => {
    navigate(`/car-details/${carId}`);
  };

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">السيارات للبيع</h1>
          <p className="text-gray-600">اكتشف مجموعة واسعة من السيارات المتاحة للبيع</p>
        </div>

        {/* فلاتر البحث */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="ابحث هنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            
            <select 
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="p-2 border border-gray-200 rounded-lg"
            >
              <option value="">جميع الماركات</option>
              <option value="toyota">تويوتا</option>
              <option value="hyundai">هيونداي</option>
              <option value="nissan">نيسان</option>
            </select>

            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="p-2 border border-gray-200 rounded-lg"
            >
              <option value="">جميع المدن</option>
              <option value="riyadh">الرياض</option>
              <option value="jeddah">جدة</option>
              <option value="dammam">الدمام</option>
            </select>

            <select 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="p-2 border border-gray-200 rounded-lg"
            >
              <option value="">جميع الأسعار</option>
              <option value="0-50000">أقل من 50,000</option>
              <option value="50000-100000">50,000 - 100,000</option>
              <option value="100000+">أكثر من 100,000</option>
            </select>
          </div>
          
          <Button className="cars-gradient text-white">
            <Filter className="w-4 h-4 ml-2" />
            تطبيق الفلتر
          </Button>
        </div>

        {/* قائمة السيارات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  للبيع
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

                <div className="flex gap-2 mb-4">
                  <Button 
                    className="flex-1 cars-gradient text-white"
                    onClick={() => handleViewDetails(car.id)}
                  >
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

export default CarsForSale;

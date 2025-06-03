
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Gauge, 
  Star,
  Heart,
  Share2,
  CheckCircle,
  Car,
  Fuel,
  Cog
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // بيانات تجريبية للسيارة - في التطبيق الحقيقي ستأتي من قاعدة البيانات
  const car = {
    id: 1,
    brand: "تويوتا",
    model: "كامري",
    year: 2023,
    price: "85,000",
    originalPrice: "95,000",
    mileage: "15,000",
    location: "الرياض",
    phone: "0501234567",
    whatsapp: "0501234567",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544955734-6670b73c5a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["فحص شامل", "ضمان سنة", "صيانة دورية", "مالك واحد", "بدون حوادث"],
    description: "سيارة تويوتا كامري 2023 بحالة ممتازة، تم الاعتناء بها بشكل دوري. السيارة لم تتعرض لأي حوادث وجميع الصيانات تمت في الوكيل المعتمد. مناسبة للاستخدام العائلي والتنقل اليومي.",
    specifications: {
      engineSize: "2.5 لتر",
      fuelType: "بنزين",
      transmission: "أوتوماتيك",
      drivetrain: "دفع أمامي",
      seats: "5 مقاعد",
      color: "أبيض لؤلؤي",
      bodyType: "سيدان"
    },
    seller: {
      name: "أحمد محمد",
      rating: 4.8,
      reviews: 23,
      verified: true
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${car.phone}`;
  };

  const handleWhatsApp = () => {
    const message = `مرحباً، أنا مهتم بسيارة ${car.brand} ${car.model} ${car.year}`;
    window.open(`https://wa.me/${car.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${car.brand} ${car.model} ${car.year}`,
        text: `اكتشف هذه السيارة الرائعة بسعر ${car.price} ريال`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "تم النسخ",
        description: "تم نسخ رابط السيارة إلى الحافظة"
      });
    }
  };

  const handleFavorite = () => {
    toast({
      title: "تمت الإضافة للمفضلة",
      description: "تم إضافة السيارة إلى قائمة المفضلة"
    });
  };

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          العودة للخلف
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* صور السيارة */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden mb-6">
              <div className="relative">
                <img
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleFavorite}
                    className="bg-white/90 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleShare}
                    className="bg-white/90 hover:bg-white"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary-600 text-white">
                    مميزة
                  </Badge>
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2">
                  {car.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`صورة ${index + 2}`}
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* تفاصيل السيارة */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">المواصفات</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">نوع الهيكل</div>
                      <div className="font-medium">{car.specifications.bodyType}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cog className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">ناقل الحركة</div>
                      <div className="font-medium">{car.specifications.transmission}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">نوع الوقود</div>
                      <div className="font-medium">{car.specifications.fuelType}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">سعة المحرك</div>
                      <div className="font-medium">{car.specifications.engineSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">نوع الدفع</div>
                      <div className="font-medium">{car.specifications.drivetrain}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">عدد المقاعد</div>
                      <div className="font-medium">{car.specifications.seats}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* الوصف */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">الوصف</h2>
                <p className="text-gray-700 leading-relaxed">{car.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* معلومات السعر والتواصل */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {car.brand} {car.model}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{car.year}</span>
                    <Gauge className="w-4 h-4 mr-2" />
                    <span>{car.mileage} كم</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{car.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary-600">
                      {car.price} ريال
                    </span>
                    {car.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {car.originalPrice} ريال
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    وفر {parseInt(car.originalPrice!) - parseInt(car.price)} ريال
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold mb-3">المميزات</h3>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {car.seller.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium flex items-center gap-1">
                        {car.seller.name}
                        {car.seller.verified && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{car.seller.rating}</span>
                        <span>({car.seller.reviews} تقييم)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleCall}
                    className="w-full cars-gradient text-white flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    اتصل الآن
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full flex items-center gap-2 border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    راسل عبر الواتساب
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CarDetails;

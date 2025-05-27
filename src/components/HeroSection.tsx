
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const { toast } = useToast();

  const handleAdvancedSearch = () => {
    if (!brand && !model && !city && !price && !searchTerm) {
      toast({
        title: "تنبيه",
        description: "يرجى اختيار معايير البحث أولاً",
        variant: "destructive",
      });
      return;
    }

    const searchCriteria = [];
    if (brand) searchCriteria.push(`الماركة: ${brand}`);
    if (model) searchCriteria.push(`الموديل: ${model}`);
    if (city) searchCriteria.push(`المدينة: ${city}`);
    if (price) searchCriteria.push(`السعر: ${price}`);
    if (searchTerm) searchCriteria.push(`البحث: ${searchTerm}`);

    toast({
      title: "جاري البحث",
      description: `معايير البحث: ${searchCriteria.join(' - ')}`,
    });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 cars-gradient opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-150"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          موقع السيارات الأول
          <span className="block text-2xl md:text-4xl mt-2 text-yellow-300">
            في المملكة العربية السعودية
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
          اكتشف أفضل السيارات المستعملة والجديدة بأسعار منافسة
        </p>

        {/* Advanced Search */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-3xl mx-auto animate-slide-up">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ابحث عن سيارتك المثالية</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <select 
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">اختر الماركة</option>
              <option value="toyota">تويوتا</option>
              <option value="hyundai">هيونداي</option>
              <option value="nissan">نيسان</option>
              <option value="honda">هوندا</option>
              <option value="kia">كيا</option>
              <option value="chevrolet">شيفروليه</option>
              <option value="ford">فورد</option>
              <option value="bmw">بي إم دبليو</option>
              <option value="mercedes">مرسيدس</option>
              <option value="audi">أودي</option>
            </select>

            <select 
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">الموديل</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>

            <select 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">المدينة</option>
              <option value="riyadh">الرياض</option>
              <option value="jeddah">جدة</option>
              <option value="dammam">الدمام</option>
              <option value="mecca">مكة المكرمة</option>
              <option value="medina">المدينة المنورة</option>
              <option value="khobar">الخبر</option>
              <option value="taif">الطائف</option>
            </select>

            <select 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">السعر</option>
              <option value="0-50000">أقل من 50,000 ريال</option>
              <option value="50000-100000">50,000 - 100,000 ريال</option>
              <option value="100000-200000">100,000 - 200,000 ريال</option>
              <option value="200000-300000">200,000 - 300,000 ريال</option>
              <option value="300000+">أكثر من 300,000 ريال</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="ابحث بكلمات مفتاحية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdvancedSearch()}
                className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-primary-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button 
              className="px-8 py-3 text-lg cars-gradient text-white hover:shadow-lg transition-all"
              onClick={handleAdvancedSearch}
            >
              ابحث الآن
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">25,000+</div>
            <div className="text-sm">سيارة متاحة</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">50,000+</div>
            <div className="text-sm">عضو مسجل</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm">مدينة</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "تسجيل الدخول",
      description: "سيتم إضافة صفحة تسجيل الدخول قريباً",
    });
  };

  const handleRegister = () => {
    toast({
      title: "حساب جديد",
      description: "سيتم إضافة صفحة إنشاء حساب جديد قريباً",
    });
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "البحث",
        description: `جاري البحث عن: ${searchQuery}`,
      });
    } else {
      toast({
        title: "تنبيه",
        description: "يرجى إدخال كلمة للبحث",
        variant: "destructive",
      });
    }
  };

  const handleMyAccount = () => {
    toast({
      title: "حسابي",
      description: "سيتم إضافة صفحة الحساب الشخصي قريباً",
    });
  };

  const handleAddListing = () => {
    toast({
      title: "أضف إعلانك",
      description: "سيتم إضافة صفحة إضافة الإعلانات قريباً",
    });
  };

  const handleNavigation = (page: string) => {
    toast({
      title: `${page}`,
      description: `سيتم إضافة صفحة ${page} قريباً`,
    });
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="text-gray-600">
            مرحباً بك في موقع السيارات الأول في المملكة
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" onClick={handleLogin}>تسجيل دخول</Button>
            <Button variant="ghost" size="sm" onClick={handleRegister}>حساب جديد</Button>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('الرئيسية')}>
            <div className="cars-gradient text-white rounded-lg p-3 text-2xl font-bold">
              السيارات
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ابحث عن السيارة التي تريدها..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-primary-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button className="mr-2 px-6 bg-primary-600 hover:bg-primary-700" onClick={handleSearch}>
              بحث
            </Button>
          </div>

          {/* User Menu & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex items-center gap-2" onClick={handleMyAccount}>
              <User className="w-4 h-4" />
              حسابي
            </Button>
            
            <Button className="hidden md:inline-flex cars-gradient text-white" onClick={handleAddListing}>
              أضف إعلانك
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex border-t border-gray-100 py-3">
          <div className="flex gap-8">
            <button onClick={() => handleNavigation('الرئيسية')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              الرئيسية
            </button>
            <button onClick={() => handleNavigation('سيارات للبيع')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              سيارات للبيع
            </button>
            <button onClick={() => handleNavigation('سيارات جديدة')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              سيارات جديدة
            </button>
            <button onClick={() => handleNavigation('سيارات مستعملة')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              سيارات مستعملة
            </button>
            <button onClick={() => handleNavigation('قطع غيار')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              قطع غيار
            </button>
            <button onClick={() => handleNavigation('خدمات')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              خدمات
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4 animate-fade-in">
            {/* Mobile Search */}
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="ابحث هنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button size="sm" className="bg-primary-600" onClick={handleSearch}>
                <Search className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              <button onClick={() => handleNavigation('الرئيسية')} className="block py-2 text-gray-700 hover:text-primary-600 text-right">الرئيسية</button>
              <button onClick={() => handleNavigation('سيارات للبيع')} className="block py-2 text-gray-700 hover:text-primary-600 text-right">سيارات للبيع</button>
              <button onClick={() => handleNavigation('سيارات جديدة')} className="block py-2 text-gray-700 hover:text-primary-600 text-right">سيارات جديدة</button>
              <button onClick={() => handleNavigation('سيارات مستعملة')} className="block py-2 text-gray-700 hover:text-primary-600 text-right">سيارات مستعملة</button>
              <button onClick={() => handleNavigation('قطع غيار')} className="block py-2 text-gray-700 hover:text-primary-600 text-right">قطع غيار</button>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Button variant="outline" className="w-full" onClick={handleMyAccount}>
                <User className="w-4 h-4 ml-2" />
                حسابي
              </Button>
              <Button className="w-full cars-gradient text-white" onClick={handleAddListing}>
                أضف إعلانك
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

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

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="text-gray-600">
            مرحباً بك في موقع السيارات الأول في المملكة
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">تسجيل دخول</Button>
            </Link>
            <Link to="/register">
              <Button variant="ghost" size="sm">حساب جديد</Button>
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="cars-gradient text-white rounded-lg p-3 text-2xl font-bold">
              السيارات
            </div>
          </Link>

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
            <Link to="/my-account">
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                <User className="w-4 h-4" />
                حسابي
              </Button>
            </Link>
            
            <Link to="/add-listing">
              <Button className="hidden md:inline-flex cars-gradient text-white">
                أضف إعلانك
              </Button>
            </Link>

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
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              الرئيسية
            </Link>
            <Link to="/cars-for-sale" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              سيارات للبيع
            </Link>
            <Link to="/new-cars" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              سيارات جديدة
            </Link>
            <Link to="/used-cars" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              سيارات مستعملة
            </Link>
            <Link to="/spare-parts" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              قطع غيار
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              خدمات
            </Link>
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
              <Link to="/" className="block py-2 text-gray-700 hover:text-primary-600 text-right">الرئيسية</Link>
              <Link to="/cars-for-sale" className="block py-2 text-gray-700 hover:text-primary-600 text-right">سيارات للبيع</Link>
              <Link to="/new-cars" className="block py-2 text-gray-700 hover:text-primary-600 text-right">سيارات جديدة</Link>
              <Link to="/used-cars" className="block py-2 text-gray-700 hover:text-primary-600 text-right">سيارات مستعملة</Link>
              <Link to="/spare-parts" className="block py-2 text-gray-700 hover:text-primary-600 text-right">قطع غيار</Link>
              <Link to="/services" className="block py-2 text-gray-700 hover:text-primary-600 text-right">خدمات</Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Link to="/my-account">
                <Button variant="outline" className="w-full">
                  <User className="w-4 h-4 ml-2" />
                  حسابي
                </Button>
              </Link>
              <Link to="/add-listing">
                <Button className="w-full cars-gradient text-white">
                  أضف إعلانك
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

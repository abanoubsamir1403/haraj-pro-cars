
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar - Smaller */}
        <div className="flex justify-between items-center py-1 text-xs border-b border-gray-100">
          <div className="text-gray-600">
            مرحباً بك في موقع السيارات الأول في المملكة
          </div>
          <div className="flex gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-xs px-2 py-1 h-6">تسجيل دخول</Button>
            </Link>
            <Link to="/register">
              <Button variant="ghost" size="sm" className="text-xs px-2 py-1 h-6">حساب جديد</Button>
            </Link>
          </div>
        </div>

        {/* Main Header - Smaller */}
        <div className="flex items-center justify-between py-2">
          {/* Logo - Smaller */}
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="cars-gradient text-white rounded-lg p-2 text-lg font-bold">
              السيارات
            </div>
          </Link>

          {/* Search Bar - Desktop - Smaller */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ابحث عن السيارة التي تريدها..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:border-primary-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <Button className="mr-2 px-4 py-2 text-sm bg-primary-600 hover:bg-primary-700" onClick={handleSearch}>
              بحث
            </Button>
          </div>

          {/* User Menu & Mobile Menu Button - Smaller */}
          <div className="flex items-center gap-2">
            <Link to="/my-account">
              <Button variant="outline" className="hidden md:flex items-center gap-1 text-sm px-3 py-2 h-8">
                <User className="w-3 h-3" />
                حسابي
              </Button>
            </Link>
            
            <Link to="/add-listing">
              <Button className="hidden md:inline-flex cars-gradient text-white text-sm px-3 py-2 h-8">
                أضف إعلانك
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1 h-8 w-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Smaller */}
        <nav className="hidden md:flex border-t border-gray-100 py-2">
          <div className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
              الرئيسية
            </Link>
            <Link to="/cars-for-sale" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
              سيارات للبيع
            </Link>
            <Link to="/new-cars" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
              سيارات جديدة
            </Link>
            <Link to="/used-cars" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
              سيارات مستعملة
            </Link>
            <Link to="/spare-parts" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
              قطع غيار
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm">
              خدمات
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-3 animate-fade-in">
            {/* Mobile Search */}
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="ابحث هنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 text-sm"
              />
              <Button size="sm" className="bg-primary-600 p-2 h-8" onClick={handleSearch}>
                <Search className="w-3 h-3" />
              </Button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-1">
              <Link to="/" className="block py-2 text-gray-700 hover:text-primary-600 text-right text-sm">الرئيسية</Link>
              <Link to="/cars-for-sale" className="block py-2 text-gray-700 hover:text-primary-600 text-right text-sm">سيارات للبيع</Link>
              <Link to="/new-cars" className="block py-2 text-gray-700 hover:text-primary-600 text-right text-sm">سيارات جديدة</Link>
              <Link to="/used-cars" className="block py-2 text-gray-700 hover:text-primary-600 text-right text-sm">سيارات مستعملة</Link>
              <Link to="/spare-parts" className="block py-2 text-gray-700 hover:text-primary-600 text-right text-sm">قطع غيار</Link>
              <Link to="/services" className="block py-2 text-gray-700 hover:text-primary-600 text-right text-sm">خدمات</Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
              <Link to="/my-account">
                <Button variant="outline" className="w-full text-sm h-8">
                  <User className="w-3 h-3 ml-2" />
                  حسابي
                </Button>
              </Link>
              <Link to="/add-listing">
                <Button className="w-full cars-gradient text-white text-sm h-8">
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

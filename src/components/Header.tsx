
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X, Car, Plus } from 'lucide-react';
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
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Single Line Header */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg group-hover:bg-white/30 transition-all duration-300">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold">سيارات السعودية</h1>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105">
              الرئيسية
            </Link>
            <Link to="/cars-for-sale" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105">
              سيارات للبيع
            </Link>
            <Link to="/new-cars" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105">
              سيارات جديدة
            </Link>
            <Link to="/used-cars" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105">
              سيارات مستعملة
            </Link>
            <Link to="/spare-parts" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105">
              قطع غيار
            </Link>
            <Link to="/services" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105">
              خدمات
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ابحث عن سيارتك..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-10 pr-4 py-2 text-gray-800 bg-white/95 backdrop-blur-sm border-0 rounded-lg focus:ring-2 focus:ring-orange-400 placeholder:text-gray-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <Button 
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-200" 
              onClick={handleSearch}
            >
              بحث
            </Button>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-lg">
                تسجيل دخول
              </Button>
            </Link>
            
            <Link to="/my-account">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-lg px-3 py-2">
                <User className="w-4 h-4 ml-1" />
                حسابي
              </Button>
            </Link>
            
            <Link to="/add-listing">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-2">
                <Plus className="w-4 h-4 ml-1" />
                أضف إعلانك
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-2xl m-4 p-6 animate-fade-in border border-white/20">
            {/* Mobile Search */}
            <div className="flex gap-3 mb-6">
              <Input
                type="text"
                placeholder="ابحث هنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 bg-white/90 border-0 rounded-xl"
              />
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 rounded-xl p-3" onClick={handleSearch}>
                <Search className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-3 mb-6">
              <Link to="/" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                الرئيسية
              </Link>
              <Link to="/cars-for-sale" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                سيارات للبيع
              </Link>
              <Link to="/new-cars" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                سيارات جديدة
              </Link>
              <Link to="/used-cars" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                سيارات مستعملة
              </Link>
              <Link to="/spare-parts" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                قطع غيار
              </Link>
              <Link to="/services" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                خدمات
              </Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/20">
              <Link to="/login">
                <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl">
                  تسجيل دخول
                </Button>
              </Link>
              <Link to="/my-account">
                <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl">
                  <User className="w-4 h-4 ml-2" />
                  حسابي
                </Button>
              </Link>
              <Link to="/add-listing">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                  <Plus className="w-4 h-4 ml-2" />
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

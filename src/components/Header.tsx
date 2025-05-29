
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
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-blue-500/30">
          <div className="text-blue-100">
            🚗 أفضل موقع لبيع وشراء السيارات في المملكة العربية السعودية
          </div>
          <div className="flex gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-500/30 transition-all duration-200">
                تسجيل دخول
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-500/30 transition-all duration-200">
                حساب جديد
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">سيارات السعودية</h1>
              <p className="text-xs text-blue-200">أفضل الصفقات</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ابحث عن سيارتك المثالية... (ماركة، موديل، سنة)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-3 text-gray-800 bg-white/95 backdrop-blur-sm border-0 rounded-xl focus:ring-2 focus:ring-orange-400 placeholder:text-gray-500 shadow-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button 
              className="mr-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl" 
              onClick={handleSearch}
            >
              بحث
            </Button>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/my-account">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <User className="w-4 h-4 ml-2" />
                حسابي
              </Button>
            </Link>
            
            <Link to="/add-listing">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200">
                <Plus className="w-4 h-4 ml-2" />
                أضف إعلانك
              </Button>
            </Link>

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

        {/* Navigation */}
        <nav className="hidden md:block pb-4">
          <div className="flex gap-8 justify-center">
            <Link to="/" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 pb-1 border-b-2 border-transparent hover:border-orange-400">
              🏠 الرئيسية
            </Link>
            <Link to="/cars-for-sale" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 pb-1 border-b-2 border-transparent hover:border-orange-400">
              🚗 سيارات للبيع
            </Link>
            <Link to="/new-cars" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 pb-1 border-b-2 border-transparent hover:border-orange-400">
              ✨ سيارات جديدة
            </Link>
            <Link to="/used-cars" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 pb-1 border-b-2 border-transparent hover:border-orange-400">
              🔄 سيارات مستعملة
            </Link>
            <Link to="/spare-parts" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 pb-1 border-b-2 border-transparent hover:border-orange-400">
              🔧 قطع غيار
            </Link>
            <Link to="/services" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 pb-1 border-b-2 border-transparent hover:border-orange-400">
              🛠️ خدمات
            </Link>
          </div>
        </nav>

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
                🏠 الرئيسية
              </Link>
              <Link to="/cars-for-sale" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                🚗 سيارات للبيع
              </Link>
              <Link to="/new-cars" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                ✨ سيارات جديدة
              </Link>
              <Link to="/used-cars" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                🔄 سيارات مستعملة
              </Link>
              <Link to="/spare-parts" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                🔧 قطع غيار
              </Link>
              <Link to="/services" className="block py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200">
                🛠️ خدمات
              </Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/20">
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

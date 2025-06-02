
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="cars-gradient text-white rounded-lg p-3 text-2xl font-bold mb-4 inline-block">
              السيارات
            </div>
            <p className="text-gray-300 mb-4">
              موقع السيارات الأول في المملكة العربية السعودية لبيع وشراء السيارات المستعملة والجديدة
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  ف
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  ت
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  إ
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  و
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">عن الموقع</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">كيف يعمل الموقع</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">الشروط والأحكام</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/user-agreement" className="text-gray-300 hover:text-white transition-colors">اتفاقية المستخدم</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">الفئات</h3>
            <ul className="space-y-2">
              <li><Link to="/cars-for-sale" className="text-gray-300 hover:text-white transition-colors">سيارات للبيع</Link></li>
              <li><Link to="/new-cars" className="text-gray-300 hover:text-white transition-colors">سيارات جديدة</Link></li>
              <li><Link to="/used-cars" className="text-gray-300 hover:text-white transition-colors">سيارات مستعملة</Link></li>
              <li><Link to="/spare-parts" className="text-gray-300 hover:text-white transition-colors">قطع غيار</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">خدمات السيارات</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <span className="ml-3">📞</span>
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="ml-3">📧</span>
                <span>info@cars-saudi.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="ml-3">📍</span>
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="ml-3">🕒</span>
                <span>24/7 خدمة العملاء</span>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Download */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-4">حمل التطبيق الآن</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <div className="text-2xl ml-3">📱</div>
                <div>
                  <div className="text-xs">حمل من</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <div className="text-2xl ml-3">🤖</div>
                <div>
                  <div className="text-xs">حمل من</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 موقع السيارات. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-400">
              <span>🏆 موقع معتمد</span>
              <span>🔒 دفع آمن</span>
              <span>✅ فحص معتمد</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

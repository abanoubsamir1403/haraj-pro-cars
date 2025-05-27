
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "سيارات صالون",
      count: "8,500+",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "سيارات دفع رباعي",
      count: "6,200+",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "سيارات هاتشباك",
      count: "4,300+",
      image: "https://images.unsplash.com/photo-1502877338535-766e7be6b696?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "شاحنات وبيك آب",
      count: "3,100+",
      image: "https://images.unsplash.com/photo-1594736797933-d0200110aa50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "سيارات كوبيه",
      count: "1,800+",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-red-500 to-red-600"
    },
    {
      id: 6,
      name: "سيارات كشف",
      count: "900+",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      id: 7,
      name: "دراجات نارية",
      count: "2,400+",
      image: "https://images.unsplash.com/photo-1558618047-d0e090994ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      id: 8,
      name: "مركبات تجارية",
      count: "1,200+",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            تصفح حسب الفئة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر الفئة التي تناسبك واكتشف مجموعة واسعة من السيارات
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-75 group-hover:opacity-60 transition-opacity`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} إعلان</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              لم تجد ما تبحث عنه؟
            </h3>
            <p className="text-gray-600 mb-6">
              استخدم البحث المتقدم للعثور على السيارة المثالية أو قم بإنشاء تنبيه بحث
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                البحث المتقدم
              </button>
              <button className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                إنشاء تنبيه بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

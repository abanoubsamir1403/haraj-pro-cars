
import { Card, CardContent } from "@/components/ui/card";

const PopularBrands = () => {
  const brands = [
    {
      id: 1,
      name: "تويوتا",
      count: "12,500+",
      logo: "🚗",
      color: "bg-red-50 border-red-200 hover:bg-red-100"
    },
    {
      id: 2,
      name: "هيونداي",
      count: "8,300+",
      logo: "🚙",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      id: 3,
      name: "نيسان",
      count: "7,800+",
      logo: "🚗",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
    },
    {
      id: 4,
      name: "هوندا",
      count: "6,200+",
      logo: "🚘",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      id: 5,
      name: "كيا",
      count: "5,900+",
      logo: "🚗",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      id: 6,
      name: "شيفروليه",
      count: "4,700+",
      logo: "🚙",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
    },
    {
      id: 7,
      name: "فورد",
      count: "4,200+",
      logo: "🚗",
      color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
    },
    {
      id: 8,
      name: "بي إم دبليو",
      count: "3,100+",
      logo: "🚘",
      color: "bg-pink-50 border-pink-200 hover:bg-pink-100"
    },
    {
      id: 9,
      name: "مرسيدس",
      count: "2,800+",
      logo: "🚗",
      color: "bg-teal-50 border-teal-200 hover:bg-teal-100"
    },
    {
      id: 10,
      name: "أودي",
      count: "2,400+",
      logo: "🚙",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    },
    {
      id: 11,
      name: "لكزس",
      count: "1,900+",
      logo: "🚘",
      color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100"
    },
    {
      id: 12,
      name: "جينيسيس",
      count: "800+",
      logo: "🚗",
      color: "bg-rose-50 border-rose-200 hover:bg-rose-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            الماركات الأكثر شعبية
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشف السيارات من أشهر الماركات العالمية المتوفرة في السوق السعودي
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
          {brands.map((brand) => (
            <Card key={brand.id} className={`${brand.color} border-2 transition-all duration-300 cursor-pointer group`}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {brand.logo}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {brand.count} سيارة
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ماركة أخرى؟
            </h3>
            <p className="text-gray-600 mb-6">
              نحن نوفر جميع الماركات العالمية والمحلية. ابحث عن الماركة التي تريدها
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {["آستون مارتن", "بنتلي", "بوغاتي", "فيراري", "لامبورغيني", "ماكلارين", "بورشه", "رولز رويس"].map((brand, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors">
                  {brand}
                </span>
              ))}
            </div>
            <button className="px-8 py-3 cars-gradient text-white rounded-lg hover:shadow-lg transition-all">
              عرض جميع الماركات
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;

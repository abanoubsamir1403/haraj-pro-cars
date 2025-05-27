
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCars from '@/components/FeaturedCars';
import Categories from '@/components/Categories';
import PopularBrands from '@/components/PopularBrands';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-arabic">
      <Header />
      <HeroSection />
      <FeaturedCars />
      <Categories />
      <PopularBrands />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;

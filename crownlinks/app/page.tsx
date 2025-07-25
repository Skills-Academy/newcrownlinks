import Navbar from '@/app/components/Navbar';
import WhyChooseUs from './components/home/WhyChooseUs';
import Hero from './components/home/Hero';
import AboutSection from './components/home/AboutSection';
import ImageBanner from './components/home/ImageBanner';
import CoursesSection from './components/home/CoursesSection';
import FeaturedCoursesSection from './components/home/FeaturedCoursesSection';
import FAQSection from './components/home/FAQSection';
import CtaSection from './components/home/CtaSection';
import Footer from './components/Footer';
import ImpactStatsSection from './components/home/ImpactStatsSection';
import Education from './components/home/Education';

export default function Home() {
  return (
    <main className = "overflow">
      <Navbar />
      <Hero/>
      <ImpactStatsSection />
      <AboutSection/>
      <FeaturedCoursesSection/>
      <AboutSection/>
      <FeaturedCoursesSection/>
      <Education />
      <ImageBanner/>
      <WhyChooseUs />
      <FAQSection />
      <CtaSection />
      <Footer />
    </main>
  );
}


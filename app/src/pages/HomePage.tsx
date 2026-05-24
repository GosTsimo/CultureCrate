import HeroSection from '../sections/HeroSection';
import Gallery3DSection from '../sections/Gallery3DSection';
import TextRevealSection from '../sections/TextRevealSection';
import CountryExplorer from '../sections/CountryExplorer';
import FeaturedBoxesSection from '../sections/FeaturedBoxesSection';
import TrustFeatures from '../sections/TrustFeatures';
import TestimonialsSection from '../sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustFeatures />
      <FeaturedBoxesSection />
      <TextRevealSection />
      <Gallery3DSection />
      <CountryExplorer />
      <TestimonialsSection />
    </>
  );
}

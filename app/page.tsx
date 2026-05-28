import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import Features from '@/components/Features';
import About from '@/components/About';
import StylingInspirations from '@/components/StylingInspirations';
import InstagramGallery from '@/components/InstagramGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NewArrivals />
      <Features />
      <About />
      <StylingInspirations />
      <InstagramGallery />
      <Footer />
    </main>
  );
}

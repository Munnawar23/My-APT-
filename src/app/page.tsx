import Navbar from '@/app/home/sections/Navbar';
import Hero from '@/app/home/sections/Hero';
import About from '@/app/home/sections/About';
import Services from '@/app/home/sections/Services';
import Testimonials from '@/app/home/sections/Testimonials';
import Footer from '@/app/home/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020408]">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}

import Hero from "../components/Hero";
import Working from "../components/Working";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import OfferSection from "../components/OfferSection";
import BeforeAfter from "../components/BeforeAfter";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Stats from "../components/stats";
import { EnquiryForm } from "../components/EnquiryForm";
import EnquireButton from "../components/EnquireButton";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      
      <Working />
      <Testimonials />
      <OfferSection />
      <BeforeAfter />
      <BeforeAfterSlider />
      <Stats />
      <EnquiryForm />
      <EnquireButton />
      <Footer />
    </main>
  );
}


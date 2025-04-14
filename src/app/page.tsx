import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Journey from "@/Components/Journey";
import Features from "@/Components/Features";
import Solutions from "@/Components/Solutions";
import { FAQ } from "@/Components/FAQ";
import Testimonials from "@/Components/Success";
import Connect from "@/Components/Connect";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Journey />
      <Features />
      <Solutions />
      <FAQ />
      <Testimonials />
      <Connect />
      <Footer />
    </div>
  );
}

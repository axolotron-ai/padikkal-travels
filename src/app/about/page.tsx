import Navbar from "@/Components/Navbar";
import React from "react";
import AboutHeader from "@/Components/about/AboutHeader";
import Footer from "@/Components/Footer";
import Origin from "@/Components/about/Origin";
import Features from "@/Components/about/Features";
import VisualJourney from "@/Components/about/VisualJourney";

function aboutPage() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <Origin />
      <Features />
      <VisualJourney />
      <Footer />
    </div>
  );
}

export default aboutPage;

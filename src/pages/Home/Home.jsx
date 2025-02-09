import React from "react";
import HeroSection from "../../components/HeroSection";
import Marquee from "../../components/Marquee";
import AboutQuranAcademy from "../../components/AboutQuranAcademy";
import CoursesSection from "../../components/CoursesSection";
import PricingPlans from "../../components/PricingPlans";


function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutQuranAcademy />
      <CoursesSection />
      <Marquee />
      
      <PricingPlans />
      {/* <HeroSection />
      <HeroSection />
      <HeroSection /> */}
    </div>
  );
}

export default Home;

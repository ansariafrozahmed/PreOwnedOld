import HeroSlider from "@/components/HeroSection/HeroSlider";
import HomeProductSection from "@/components/HomeProductSection";
import Summary from "@/components/Summary";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSlider />
      <Summary />
      <HomeProductSection />
    </div>
  );
};

export default page;

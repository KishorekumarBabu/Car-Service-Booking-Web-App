import React from "react";
import Gallery from "../gallery/gallery";
import Services from "../services/services";
import AboutUs from "../aboutUs/aboutUs";
import Videos from "../videos/videos";
import WhyUs from "../whyUs/whyUs";
import Testimonials from "../testimonials/testimonials";

export default function DashBoard() {
  return (
    <div>
      <Gallery />
      <Services />
      <WhyUs />
      <Videos />
      <Testimonials />
      <AboutUs />
    </div>
  );
}

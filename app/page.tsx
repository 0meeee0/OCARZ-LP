"use client";

import Navbar from "./components/layouts/Navbar";
import Hero from "./components/homePage/sections/Hero";
import Hdro from "./components/homePage/sections/Hdro";
import Steps from "./components/homePage/sections/Steps";
import Testimonials from "./components/homePage/sections/Testimonials";
import NumberOfCars from "./components/homePage/sections/NumberOfCars";
import Trending from "./components/homePage/sections/Trending";
import Footer from "./components/layouts/Footer";
import Pricing from "./components/homePage/sections/pricing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Hdro />
      <Steps />
      <Pricing />
      <Testimonials />
      <NumberOfCars />
      <Trending />
      <Footer />
    </>
  );
}

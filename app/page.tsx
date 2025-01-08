"use client";

import Navbar from "./components/layouts/Navbar";
import Hero from "./components/sections/Hero";
import Hdro from "./components/sections/Hdro";
import Steps from "./components/sections/Steps";
import Testimonials from "./components/sections/Testimonials";
import NumberOfCars from "./components/sections/NumberOfCars";
import Trending from "./components/sections/Trending";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hdro />
      <Steps />
      <Testimonials />
      <NumberOfCars />
      <Trending />
      <Footer/>
    </>
  );
}

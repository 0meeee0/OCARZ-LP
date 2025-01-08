'use client'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hdro from "./components/Hdro";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import NumberOfCars from "./components/NumberOfCars";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Hdro/>
      <Steps/>
      <Testimonials/>
      <NumberOfCars/>
      <Trending/>
    </>
  );
}

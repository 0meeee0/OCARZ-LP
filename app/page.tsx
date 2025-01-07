'use client'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hdro from "./components/Hdro";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Hdro/>
      <Steps/>
      <Testimonials/>
    </>
  );
}

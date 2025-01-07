'use client'

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  );
}

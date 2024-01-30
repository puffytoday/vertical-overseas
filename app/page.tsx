"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-lightBrown h-screen snap-y snap-mandatory overflow-scroll z-0">
      <div className="">
        <section id="hero" className=" mx-auto p-6 snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
      </div>
    </main>
  );
}

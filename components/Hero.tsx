"use client";

import { Typewriter } from "react-simple-typewriter";
import BreathingCircles from "./BreathingCircles";
import { Merriweather } from "next/font/google";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BreathingCircles />
      <h2 className="max-w-7xl font-bold text-5xl py-2 relative">
        <Typewriter
          words={["Bringing the Best of Indian Agriculture to Your Doorstep"]}
          typeSpeed={40}
        />
      </h2>
      <div className="pt-5 z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#categories">
          <button className="heroButton">Categories</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Contact</button>
        </Link>
        <Link href="#more">
          <button className="heroButton">More</button>
        </Link>
      </div>
    </div>
  );
}

"use client";

import "./globals.css";
import Image from "next/image";
import HeroComponent from "@/components/HeroComponent";
import AboutUsSection from "@/components/AboutUs";
import CompanyValues from "@/components/CompanyValues";
import ProblemSolution from "@/components/ProblemSolution";
import MissionVision from "@/components/MissionVision";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroComponent />
      </section>

      <section>
        <ProblemSolution />
      </section>

      <section>
        <MissionVision />
      </section>

      <section>
        <CompanyValues />
      </section>

      <section id="about">
        <AboutUsSection />
      </section>

      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">Get in touch via email or socials.</p>
        </div>
      </section>
    </>
  );
}
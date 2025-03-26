"use client";

import "./globals.css";
import HeroComponent from "@/components/HeroComponent";
import AboutUsSection from "@/components/AboutUs";
import CompanyValues from "@/components/CompanyValues";
import ProblemSolution from "@/components/ProblemSolution";
import MissionVision from "@/components/MissionVision";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

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

      <section id="contact">
        <ContactSection />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
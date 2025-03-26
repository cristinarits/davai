"use client";

import dynamic from "next/dynamic";
import "./globals.css";

const HeroComponent = dynamic(() => import("@/components/HeroComponent"), { ssr: false });
const AboutUsSection = dynamic(() => import("@/components/AboutUs"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/Contact"), { ssr: false });

import CompanyValues from "@/components/CompanyValues";
import ProblemSolution from "@/components/ProblemSolution";
import MissionVision from "@/components/MissionVision";
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
      </section >

      <section id="contact">
        <ContactSection />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
"use client";

import "./globals.css";
import dynamic from "next/dynamic";

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

      {/* Biology Picture */}
      <div className="py-12 bg-white">
        <img
        src="https://cpyxqewlkqmiuwwmlzaz.supabase.co/storage/v1/object/public/pictures//davainew.png"
        alt="Illustration"
        className="w-300 h-auto rounded-xl mb-12 mx-auto"
        />
      </div>

      <section>
        <MissionVision />
      </section>

      <section>
        <CompanyValues />
      </section>

      {/* Biology Picture */}
      <div className="py-12 bg-white">
        <img
        src="https://cpyxqewlkqmiuwwmlzaz.supabase.co/storage/v1/object/public/pictures//davaimore.png"
        alt="Illustration"
        className="w-300 h-auto rounded-xl mb-12 mx-auto"
        />
      </div>

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

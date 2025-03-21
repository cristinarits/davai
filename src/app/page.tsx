"use client";

import "./globals.css";
import Image from "next/image";
import HeroComponent from "@/components/HeroComponent";

export default function Home() {
  return (
    <div>
      <HeroComponent />

      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold text-black mb-4">This is Davai</h2>
        <Image
          src="https://cpyxqewlkqmiuwwmlzaz.supabase.co/storage/v1/object/public/pictures/albert.jpg"
          alt="that's me btw"
          width={300}
          height={300}
          className="rounded-lg shadow-lg mt-4 mx-auto"
        />
      </div>
    </div>
    
  );
}
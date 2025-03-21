"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroComponent = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-custom-purple/10 to-custom-darkBlue">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-custom-purple/20 blur-3xl animate-floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-custom-yellow/20 blur-3xl animate-floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-custom-purple/15 blur-3xl animate-floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className={`reveal-sequential ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6 tracking-tight text-balance text-custom-lightGray">
              {t("hero.headline")}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group bg-custom-yellow text-custom-darkBlue hover:bg-custom-yellow/90">
                {t("hero.tryNow")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-custom-yellow text-custom-yellow hover:bg-custom-yellow/10">
                {t("hero.login")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent
"use client";

import "@/lib/i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    }
  }, [i18n.isInitialized]);

  if (!ready) return null;

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "et" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-fuchsia-800">
          DAVAI
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-800 hover:text-amber-300 transition">{t("nav.play")}</Link>
          <Link href="#about" className="text-gray-800 hover:text-gray-300 transition">{t("nav.about")}</Link>
          <Link href="#contact" className="text-gray-800 hover:text-black transition">{t("nav.contact")}</Link>
          <button
            onClick={toggleLanguage}
            className="ml-4 px-4 py-2 bg-fuchsia-800 rounded-lg hover:bg-fuchsia-500 transition">
            {i18n.language === "en" ? "Eesti" : "English"}
          </button>
        </div>
      </div>
    </nav>
  );
}
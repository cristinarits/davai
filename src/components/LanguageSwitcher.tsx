"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchTo = currentLocale === 'en' ? 'et' : 'en';

  const changeLanguage = () => {
    const newPath = `/${switchTo}${pathname.replace(/^\/(en|et)/, '')}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={changeLanguage}
      className="text-sm px-4 py-2 bg-davai text-white rounded hover:bg-davai/80 transition"
    >
      {switchTo === 'en' ? '🇺🇸 English' : '🇪🇪 Eesti'}
    </button>
  );
}
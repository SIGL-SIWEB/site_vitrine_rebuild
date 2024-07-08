import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import fr from '@/app/assets/flag/France.png';
import en from '@/app/assets/flag/England.png';

export function LanguageSwitcher({ isFrench, onLanguageChange }: { isFrench: boolean, onLanguageChange: (isFrench: boolean) => void }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const changeLanguage = async () => {
      const savedLanguage = localStorage.getItem('i18nextLng');
      if (savedLanguage) {
        onLanguageChange(savedLanguage === 'fr');
        await i18n.changeLanguage(savedLanguage);
      }
    };

    changeLanguage();
  }, [i18n, onLanguageChange]);

  const handleLangChange = async () => {
    const newLanguage = isFrench ? 'en' : 'fr';
    onLanguageChange(!isFrench);
    await i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={handleLangChange}>
      {
        isFrench
          ? <Image src={en} alt="English" className="w-6 h-auto" />
          : <Image src={fr} alt="French" className="w-6 h-auto" />
      }
    </button>
  );
}

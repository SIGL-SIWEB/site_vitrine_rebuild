import { useEffect } from 'react';
import { useTranslation  } from 'react-i18next';
import Image from 'next/image';
import { useLanguage } from '@/app/components/LanguageContext';
import fr from '@/app/assets/flag/France.png';
import en from '@/app/assets/flag/England.png';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { isFrench, toggleLanguage } = useLanguage();

  useEffect(() => {
    const changeLanguage = async () => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        await i18n.changeLanguage(savedLanguage);
      }
    };
  
    changeLanguage();
  }, [i18n]);
  
  const handleLangChange = async () => {
    toggleLanguage();
    const newLanguage = isFrench ? 'en' : 'fr';
    await i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
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

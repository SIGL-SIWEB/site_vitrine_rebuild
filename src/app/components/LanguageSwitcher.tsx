import { useEffect, useState } from 'react';
import { useTranslation  } from 'react-i18next';
import Image from 'next/image';
import fr from '@/app/assets/flag/France.png';
import en from '@/app/assets/flag/England.png';

export function LanguageSwitcher() {
  const { i18n } = useTranslation('fr', { useSuspense: false });
  const [isFrench, setIsFrench] = useState(true);

  useEffect(() => {
    const changeLanguage = async () => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        setIsFrench(savedLanguage === 'fr');
        await i18n.changeLanguage(savedLanguage);
      }
    };
  
    changeLanguage();
  }, [i18n]);
  
  const handleLangChange = async () => {
    const newLanguage = isFrench ? 'en' : 'fr';
    setIsFrench(!isFrench);
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

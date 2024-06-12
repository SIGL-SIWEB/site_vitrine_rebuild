import { useState } from 'react';
import { useTranslation  } from 'react-i18next';
import Image from 'next/image';
import fr from '@/app/assets/flag/France.png';
import en from '@/app/assets/flag/England.png';

export function LanguageSwitcher() {
  const { i18n } = useTranslation('fr', { useSuspense: false });
  const [isFrench, setIsFrench] = useState(true);

  const handleLangChange = () => {
    setIsFrench(!isFrench);
    i18n.changeLanguage(isFrench ? 'en' : 'fr');
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

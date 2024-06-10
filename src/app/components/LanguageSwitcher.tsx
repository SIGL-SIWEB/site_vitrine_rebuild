import { useState } from 'react';
import { useTranslation  } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation('fr', { useSuspense: false });
  const [isFrench, setIsFrench] = useState(true);

  const handleLangChange = () => {
    setIsFrench(!isFrench);
    i18n.changeLanguage(isFrench ? 'en' : 'fr');
  };

  return (
    <button onClick={handleLangChange}>
      <a><strong>{isFrench ? 'EN' : 'FR'}</strong></a>
    </button>
  );
} 
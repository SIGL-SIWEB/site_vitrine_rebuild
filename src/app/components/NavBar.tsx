import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import '@/app/styles/navbar.css';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa6';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link'
import sigl_image from '@/app/assets/logo/sigl.jpg'
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';
import { useLanguage } from '@/app/components/LanguageContext';

interface NavigationItem {
  name: string;
  href: string;
}

const baseNavigation: { href: string }[] = [
  { href: '/' },
  { href: '/courses' },
  { href: '/project' },
  { href: '/alumnis' },
  { href: '/contact' },
  { href: 'https://intranet.sigl.epita.fr/' },
];

const translations = {
  en: ['Home', 'Courses', 'Projects', 'Alumnis', 'Contact', 'Intranet'],
  fr: ['Accueil', 'Cours', 'Projets', 'Alumnis', 'Contact', 'Intranet'],
};

const getNavigation = (isFrench: boolean): NavigationItem[] => {
  const lang = isFrench ? 'fr' : 'en';
  return baseNavigation.map((item, index) => ({
    name: translations[lang][index],
    href: item.href,
  }));
};

export function NavBar() {
  const [isScroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isFrench } = useLanguage();

  const navigation = getNavigation(isFrench);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`inset-x-0 z-30 ${isScroll ? 'stickyNavbar top-0' : 'top-5'}`}>
        <div className="flex items-center justify-between xs:px-4 md:px-6 lg:px-8 p-6 z-30" aria-label="Global">
          <Link
            href="/"
            aria-label="Home"
            className='lg:flex lg:flex-1 md:flex md:flex-1 xs:flex xs:flex-1'
          >
            <Image src={sigl_image} alt="logo SIGL" priority className="w-20 h-auto" />
          </Link>
          <div className="lg:flex md:flex sm:flex xs:hidden lg:justify-center">
            {navigation.map((item, index) => (
              <a key={index} href={item.href} className="text-[#1E3C63] lg:px-6 md:px-4 xs:px-2">
                <strong>{item.name}</strong>
              </a>
            ))}
          </div>
          {isScroll && (
            <div className="lg:hidden md:hidden sm:hidden xs:flex xs:justify-center xs:items-center text-white">
              <strong>SIGL</strong>
            </div>
          )}
          <div className="lg:flex lg:flex-1 lg:justify-end md:justify-end md:flex md:flex-1 xs:flex-1 xs:flex xs:justify-end">
            <LanguageSwitcher />
          </div>
          <div className="lg:hidden md:hidden sm:hidden xs:flex xs:justify-end pl-4">
            <button
              type="button"
              className={`items-center justify-center rounded-md ${isScroll ? 'text-white' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <RxCross2 size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75" onClick={() => setMobileMenuOpen(false)}></div>
          <div
            className={`fixed inset-y-0 right-0 w-3/4 bg-white p-4 overflow-y-auto transform transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <Image src={sigl_image} alt="logo SIGL" className="w-16 h-auto" />
              <h2 className="text-xl font-bold text-[#1E3C63]">Menu</h2>
              <button
                type="button"
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-[#1E3C63] hover:bg-gray-200 rounded"
              >
                <strong>{item.name}</strong>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

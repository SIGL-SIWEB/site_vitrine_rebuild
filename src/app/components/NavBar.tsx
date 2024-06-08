import { useState, useEffect } from 'react';
import '@/app/styles/navbar.css'
import Image from 'next/image'
import sigl from '@/app/assets/logo/sigl.jpg'


interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Projects', href: '/project' },
    { name: 'Alumnis', href: '/alumnis' },
    { name: 'Contact', href: '/contact' },
    { name: 'Intranet', href: 'https://intranet.sigl.epita.fr/' },
  ]


export function NavBar() {

  const [isScroll, setScroll] = useState(false);

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
  }, []);

  return (
    <div>
      <header className={isScroll ? "stickyNavbar fixed inset-x-0 top-0 z-50" : "fixed inset-x-0 top-5 z-50" }>
        <nav className="flex items-center justify-between xs:px-4 md:px-6 lg:px-8 p-6" aria-label="Global">
          <div className="lg:flex lg:flex-1 md:flex md:flex-1 xs:flex xs:flex-1">
            {isScroll && (
              <a href="/">
                <Image src={sigl} alt="logo SIGL" className="w-16 h-auto" />
              </a>
            )}
          </div>
          <div className="lg:flex md:flex xs:flex xs:flex-wrap">
            {navigation.map((item, index) => (
              <a key={index} href={item.href} className='text-[#1E3C63] lg:px-6 md:px-4 xs:px-2'>
                <strong>{item.name}</strong>
              </a>
            ))
            }
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end md:justify-end md:flex md:flex-1 xs:flex-1 xs:flex xs:justify-end"></div>
        </nav>
      </header>
    </div>
  )
}
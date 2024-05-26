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
        <nav className={isScroll ? "flex items-center justify-between p-6 lg:px-8" : "flex items-center justify-between p-6 lg:px-8"} aria-label="Global">
          <div className="flex lg:flex-1">
            {isScroll && (
              <a href="/">
                <Image src={sigl} alt="" className="w-16 h-auto" />
              </a>
            )}
          </div>
          <div className="lg:flex lg:gap-x-12">
            {navigation.map((item, index) => (
              <a key={index} href={item.href} className='text-[#1E3C63]'>
              <strong>{item.name}</strong>
              </a>
            ))
            }
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>
    </div>
  )
}
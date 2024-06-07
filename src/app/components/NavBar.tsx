import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      <header className={`fixed inset-x-0 z-20 ${isScroll ? 'stickyNavbar top-0' : 'top-5'}`}>
        <nav className="flex items-center justify-between xs:px-4 md:px-6 lg:px-8 p-6 z-30" aria-label="Global">
          <div className="lg:flex lg:flex-1 md:flex md:flex-1 xs:flex xs:flex-1">
            {isScroll && (
              <a href="/">
                <Image src={sigl} alt="logo SIGL" className="w-16 h-auto" />
              </a>
            )}
          </div>
          <div className="lg:flex md:flex sm:flex xs:hidden">
            {navigation.map((item, index) => (
              <a key={index} href={item.href} className='text-[#1E3C63] lg:px-6 md:px-4 xs:px-2'>
                <strong>{item.name}</strong>
              </a>
            ))
            }
          </div>
          {isScroll && (
            <div className='hidden xs:flex xs:justify-center xs:items-center text-white lg:hidden md:hidden sm:hidden'>
              <strong>SIGL</strong>
            </div>
          )}
          { !mobileMenuOpen && (
            <div className='hidden lg:flex lg:flex-1 lg:justify-end md:justify-end md:flex md:flex-1 xs:flex-1 xs:flex xs:justify-end'>
              <button
                type="button"
                className={`items-center justify-center rounded-md p-2.5 lg:hidden md:hidden sm:hidden ${isScroll ? 'text-white' : 'text-gray-700'} ${mobileMenuOpen ? 'hidden' : ''}`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          )}
        </nav>
        <Dialog className="lg:hidden md:hidden sm:hidden z-40" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/">
                <Image src={sigl} alt="logo SIGL" className="w-16 h-auto -m-1.5 p-1.5" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <a key={index} href={item.href} className='text-[#1E3C63] lg:px-6 md:px-4 xs:px-2 block'>
                    <strong>{item.name}</strong>
                  </a>
                  ))
                }
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      </header>
    </div>
  )
}
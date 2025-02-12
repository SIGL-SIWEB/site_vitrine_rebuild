'use client'

import {
  createContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'

import { Footer } from '@/app/components/Footer'
import { GridPattern } from '@/app/components/GridPattern'
import { NavBar } from '@/app/components/NavBar'
import '@/app/styles/ScrollBar.css';
import '@/app/i18next'


const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div>
      <div className='fixed z-10 w-full'>
        <NavBar/>
      </div>
      <div className='z-0'>
        <motion.div
          layout
          className="relative flex flex-auto overflow-hidden bg-[#EDEFF4] pt-14"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9"
          >
            <GridPattern
              className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-[#315888] stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />

            <main className="w-full flex-auto">{children}</main>

            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}

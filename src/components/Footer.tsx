import Link from 'next/link'

import { Container } from './Container'
import Image from 'next/image'
import epita_image from '../assets/logo/epita.jpg'

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full">
      <div className="mb-10 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Image src={epita_image} alt="" className="w-20 h-auto" />
          </Link>
          <p className="text-sm text-neutral-700">
            © Epita SIGL {new Date().getFullYear()}
          </p>
        </div>
    </Container>
  )
}

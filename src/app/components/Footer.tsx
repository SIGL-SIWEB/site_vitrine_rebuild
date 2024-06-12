import Link from 'next/link'
import { Container } from '@/app/components/Container'
import Image from 'next/image'
import XIcon from '@mui/icons-material/X';
import epita_image from '@/app/assets/logo/epita.jpg'
import alumnis_image from '@/app/assets/logo/alumnis.png'

export function Footer() {
  return (
    <Container as="footer" className="w-full">
      <div className="mb-6 mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-6">
        <Link href="https://www.epita.fr/" aria-label="Home">
          <Image src={epita_image} alt="" className="w-20 h-auto" />
        </Link>
        <Link href="https://www.epita-alumni.org/fr/" aria-label="Home">
          <Image src={alumnis_image} alt="" className="w-20 h-auto" />
        </Link>
        <a href='https://x.com/SIGL_EPITA'><XIcon fontSize='large'/></a>
        <p className="text-sm text-neutral-700">
        SIGL © {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  )
}

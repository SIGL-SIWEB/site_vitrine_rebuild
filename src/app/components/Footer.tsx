import Link from 'next/link'
import { Container } from '@/app/components/Container'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import epita_image from '@/app/assets/logo/epita.jpg'

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full">
      <div className="mb-10 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
        <Link href="https://www.epita.fr/" aria-label="Home">
          <Image src={epita_image} alt="" className="w-20 h-auto" />
        </Link>
        <a href='https://www.linkedin.com/groups/3826/'><LinkedInIcon fontSize='large' style={{ color: '#2867B2' }}/></a>
        <a href='https://x.com/SIGL_EPITA'><TwitterIcon fontSize='large' style={{ color: '#1DA1F2' }}/></a>
        <p className="text-sm text-neutral-700">
        SIGL © {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  )
}

import Link from 'next/link'
import { IonIcon } from '@ionic/react';
import { Container } from '@/app/components/Container'
import Image from 'next/image'
import epita_image from '@/app/assets/logo/epita.jpg'
import { logoTwitter } from 'ionicons/icons';
import { logoLinkedin } from 'ionicons/icons';

const twitterColor = {
  color: '#1DA1F2'
}

const linkedinColor = {
  color: '#2867B2'
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full">
      <div className="mb-10 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
        <Link href="https://www.epita.fr/" aria-label="Home">
          <Image src={epita_image} alt="" className="w-20 h-auto" />
        </Link>
        <span style={twitterColor}><a href='https://x.com/SIGL_EPITA'><IonIcon size='large' icon={logoTwitter} /></a></span>
        <span style={linkedinColor}><a href='#'><IonIcon size='large' icon={logoLinkedin} /></a></span>
        <p className="text-sm text-neutral-700">
        SIGL © {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  )
}

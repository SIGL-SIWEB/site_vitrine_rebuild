import { StaticImageData } from 'next/image'
import { AlumnisImage } from '@/app/alumnis/AlumnisImage'
import { DelegateInfo } from '@/app/alumnis/DelegateInfo'


export function AlumnisDisplay({alumnis}: {alumnis: { image: StaticImageData, title: string, names: string[], linkedinUrl: string[], year: number }[]}) {
  return (
    alumnis.map((alumni) => (
        <AlumnisImage title={alumni.title} image={alumni.image}>
          <DelegateInfo delegates={ { names: alumni.names, linkedinUrl: alumni.linkedinUrl, year: alumni.year } }></DelegateInfo>
        </AlumnisImage>
    ))
  )
}
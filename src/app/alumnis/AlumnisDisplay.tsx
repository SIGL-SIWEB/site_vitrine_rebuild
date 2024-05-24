import { Blockquote } from '@/app/components/Blockquote'
import { StaticImageData } from 'next/image'
import { AlumnisImage } from '@/app/alumnis/AlumnisImage'


export function AlumnisDisplay({alumnis}: {alumnis: { image: StaticImageData, title: string, quotes: string[], names: string[], roles: string[] }[]}) {
    return (
        alumnis.map((alumni) => (
            <AlumnisImage title={alumni.title} image={alumni.image}>
            <Blockquote
              author={{ name: alumni.names[0], role: alumni.roles[0] }}
              className="mt-12"
            >
              {alumni.quotes[0]}
            </Blockquote>
            <Blockquote
              author={{ name: alumni.names[1], role: alumni.roles[1] }}
              className="mt-12"
            >
              {alumni.quotes[1]}
            </Blockquote>
          </AlumnisImage>
        ))
      )
}
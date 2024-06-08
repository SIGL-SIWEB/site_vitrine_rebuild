import { PageIntro } from '@/app/components/PageIntro'
import { AlumnisDisplay } from '@/app/alumnis/AlumnisDisplay'
import promo2025 from '@/app/assets/alumnis/2025.jpg'
import promo2024 from '@/app/assets/alumnis/2024.jpg'
import medals from '@/app/assets/alumnis/medals.jpg'

let alumnis = [{ image: promo2025, title: 'SIGL - 2025', names: ['Hugo Ratte', 'Vincent Nguyen'], linkedinUrl: ['https://www.linkedin.com/in/hugo-ratte/', ''], year: 2025,
                },
                { image: promo2024, title: 'SIGL - 2024', names: ['Victor Crépin', 'Georgia Bjärstål'], linkedinUrl: ['', ''], year: 2024, 
                },
                { image: medals, title: 'SIGL - 2000', names: ['Abraham Lincoln', 'Frank Tyger'], linkedinUrl: ['', ''], year: 2000,
                },
               ]

export default function Alumnis() {
  return (
    <>
      <PageIntro eyebrow="Alumnis - SIGL" title="Alumnis">
        <p>
          Alumnis' introduction
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <AlumnisDisplay alumnis={alumnis} />
      </div>

    </>
  )
}

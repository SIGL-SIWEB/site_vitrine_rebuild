import { PageIntro } from '@/app/components/PageIntro'
import { AlumnisDisplay } from '@/app/alumnis/AlumnisDisplay'
import promo2025 from '@/app/assets/alumnis/2025.jpg'
import promo2024 from '@/app/assets/alumnis/2024.jpg'
import medals from '@/app/assets/alumnis/medals.jpg'

let alumnis = [{ image: promo2025, title: 'SIGL - 20XX', quotes: ['The mere sense of living is joy enough', 'The only thing that will make you happy is being happy with who you are'], names: ['Emily Dickinson', 'Goldie Hawn'], roles: ['Delegate 20XX', 'Delegate 20XX'] 
                },
                { image: promo2024, title: 'SIGL - 20XX', quotes: ['Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy', 'The most important thing is to enjoy your life - to be happy - it\'s all that matters'], names: ['Ralph Marston', 'Audrey Hepburn'], roles: ['Delegate 20XX', 'Delegate 20XX']
                },
                { image: medals, title: 'SIGL - 20XX', quotes: ['In the end, it\'s not the years in your life that count. It\'s the life in your years', 'Doing what you like is freedom. Liking what you do is happiness'], names: ['Abraham Lincoln', 'Frank Tyger'], roles: ['Delegate 20XX', 'Delegate 20XX']
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

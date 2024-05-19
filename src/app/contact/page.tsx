import { Container } from '@/app/components/Container'
import { PageIntro } from '@/app/components/PageIntro'
import { ContactForm } from '@/app/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Question / Answer">
        <p></p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
        </div>
      </Container>
    </>
  )
}

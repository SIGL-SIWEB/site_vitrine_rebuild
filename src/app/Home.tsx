async function Home() {

    return (
      <>
        <Container className="mt-24 sm:mt-32 md:mt-56">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-[#38598F] [text-wrap:balance] sm:text-7xl">
              Système d'Information & Génie Logiciel
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
            Nowadays, companies have to develop Information Systems and complex softwares which core features are their ability to evolve, their reliability as well as their performance. Companies requirements are evolving even faster with the apparition of new market actors and disruptive business models backed up by the promise of new technologies, even more connected and cheaper than ever. There is a need for faster technologies in order to transform existing systems and create the new business services for both today and tomorrow : Online Presence, Interconnection with all Information Systems, new real-time services, better understanding of client needs.
            </p>
          </FadeIn>
        </Container>
  
        <CaseStudies caseStudies={1} />
  
        <Testimonial
          className="mt-24 sm:mt-32 lg:mt-40"
          alumni={{ name: 'alumni', promotion: 2020}}
        >
          Example of Citation..
        </Testimonial>
  
        <Services />
  
        <Event />
  
        <CaseStudies caseStudies={2} />
  
        <ContactSection />
      </>
    )
  }
  
  export default Home
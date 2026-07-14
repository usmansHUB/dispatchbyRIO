import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import AboutSection from '../components/home/About'
import Stats from '../components/home/Stats'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Pricing from '../components/home/Pricing'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'
import Partners from '../components/home/Partners'

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <AboutSection />
      <Stats />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home

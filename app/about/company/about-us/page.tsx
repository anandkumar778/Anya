
import AboutHero from '@/components/about/AboutHero'
import CertificationCarousel from '@/components/about/CertificationCaeousel'
import EventsSection from '@/components/about/EventsSection'
import InfrastructureSection from '@/components/about/InfrastructureSection'
import ProductionCapacitySection from '@/components/about/ProductionCapacitySection'
import TimelineSection from '@/components/about/TimelineSection'
// import ProductHeroFloatingCarousel from '@/components/products/ProductHeroFloatingCarousel'

const page = () => {
  return (
    <>
      <AboutHero/>
      <TimelineSection/>
      <CertificationCarousel/>
      <InfrastructureSection/>
      <ProductionCapacitySection/>
      <EventsSection/>
      {/* <ProductHeroFloatingCarousel/> */}
    </>
  )
}

export default page

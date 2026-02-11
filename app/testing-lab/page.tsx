import CertificationSection from '@/components/testingLab/CertificationSection'
import ContactSection from '@/components/testingLab/ContactSection'
import GallerySection from '@/components/testingLab/GallerySection'
import TestingLab from '@/components/testingLab/HeroSection'
import OverviewSection from '@/components/testingLab/OverviewSection'
import QualityPolicy from '@/components/testingLab/QualityPolicy'
import ReferenceStandards from '@/components/testingLab/ReferenceStandards'
import ServicesSection from '@/components/testingLab/ServiceSection'


const page = () => {
  return (
    <>
      <TestingLab/>
      <OverviewSection/>
      <QualityPolicy/>
      <CertificationSection/>
      <ServicesSection/>
      <ReferenceStandards/>
      <ContactSection/>
      <GallerySection/>
    </>
  )
}

export default page

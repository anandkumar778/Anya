import NightVisionSection from '@/components/products/NightVisionSection'
import ProductHeroFloatingCarousel from '@/components/products/ProductHeroFloatingCarousel'
import ThermalDevicesPage from './thermal-divices/page'
import DayOpticsPage from './day-optics/page'
import AccessoriesPage from './accessories/page'
import OthersPage from './others/page'



const page = () => {
  return (
    <>

      <ProductHeroFloatingCarousel/>
      <NightVisionSection/>
      <ThermalDevicesPage/>
      <DayOpticsPage/>
      <AccessoriesPage/>
      <OthersPage/>
    </>
  )
}

export default page
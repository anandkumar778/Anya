import ClientsScrollSection from "@/components/home/ClientsScrollSection";
import DarviProducts from "@/components/home/DarviProducts";
import DarviSection from "@/components/home/DarviSection";
import HeroSlider from "@/components/home/HeroSlider";
import MapSection from "@/components/home/MapSection";
import ReliabilitySection from "@/components/home/ReliabilitySection";
import VisionMission from "@/components/home/VisionMission";


export default function Home() {
  return (
   <>
       <HeroSlider/>
        <ReliabilitySection/>
        <VisionMission/>
          <DarviSection/>
            <DarviProducts/>
            <MapSection/>
            <ClientsScrollSection/>

   </>
  );
}

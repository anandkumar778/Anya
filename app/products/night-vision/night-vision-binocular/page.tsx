
import NightVisionBinocularPage from "../page";
import ProductFloatingCarousel from "./ProductFloatingCarousel";
import TechnicalParameters from "./TechnicalParameters";

export default function ProductDetailPage() {
  return (
    <main className="w-full">
      <ProductFloatingCarousel />
      <NightVisionBinocularPage/>
      <TechnicalParameters/>
    </main>
  );
}

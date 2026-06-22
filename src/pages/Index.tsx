import HeroSection from "@/components/HeroSection";
import CoffeeBar from "@/components/CoffeeBar";
import ArtGallery from "@/components/ArtGallery";
import EventZone from "@/components/EventZone";
import GalleryPreview from "@/components/GalleryPreview";
import LoungeArea from "@/components/LoungeArea";
import ContactDesk from "@/components/ContactDesk";
import ScrollProgress from "@/components/ScrollProgress";
import MenuPDF from "@/components/MenuPDF";

const Index = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      <HeroSection />
      <GalleryPreview />
      <CoffeeBar />
      <MenuPDF />
      <ArtGallery />
      <EventZone />
      <LoungeArea />
      <ContactDesk />
    </div>
  );
};

export default Index;

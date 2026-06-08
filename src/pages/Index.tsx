import HeroSection from "@/components/HeroSection";
import CoffeeBar from "@/components/CoffeeBar";
import ArtGallery from "@/components/ArtGallery";
import EventZone from "@/components/EventZone";
import LoungeArea from "@/components/LoungeArea";
import ContactDesk from "@/components/ContactDesk";
import ScrollProgress from "@/components/ScrollProgress";
import MenuViewer from "@/components/MenuViewer";
import GalleryPreview from "@/components/GalleryPreview";
import menuPdf from "@/assets/menu.pdf";

const Index = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      <HeroSection />
      <GalleryPreview />
      <MenuViewer src={menuPdf} />
      <CoffeeBar />
      <ArtGallery />
      <EventZone />
      <LoungeArea />
      <ContactDesk />
    </div>
  );
};

export default Index;

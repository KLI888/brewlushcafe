import HeroSection from "@/components/HeroSection";
import CoffeeBar from "@/components/CoffeeBar";
import ArtGallery from "@/components/ArtGallery";
import EventZone from "@/components/EventZone";
import LoungeArea from "@/components/LoungeArea";
import ContactDesk from "@/components/ContactDesk";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      <HeroSection />
      <CoffeeBar />
      <ArtGallery />
      <EventZone />
      <LoungeArea />
      <ContactDesk />
    </div>
  );
};

export default Index;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Palette } from "lucide-react";
import latteArt from "@/assets/latte-art.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import pastries from "@/assets/pastries.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import espresso from "@/assets/espresso.jpg";
import coldBrew from "@/assets/cold-brew.jpg";

const artworks = [
  { title: "Latte Art", artist: "Our Baristas", image: latteArt },
  { title: "Bean Origins", artist: "From the Farm", image: coffeeBeans },
  { title: "Fresh Pastries", artist: "Our Kitchen", image: pastries },
  { title: "Morning Cappuccino", artist: "Café Moments", image: cappuccino },
  { title: "The Perfect Shot", artist: "Espresso Bar", image: espresso },
  { title: "Cool & Refreshing", artist: "Summer Menu", image: coldBrew },
];

const ArtGallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedArt, setSelectedArt] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Palette className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="text-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            The Art Wall
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-md mx-auto">
            Coffee photography & café culture
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {artworks.map((art, i) => (
            <motion.div
              key={art.title}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
              onClick={() => setSelectedArt(i)}
              className="cursor-pointer group"
              style={{ perspective: "1000px" }}
            >
              <div className="relative rounded-xl overflow-hidden cafe-shadow group-hover:cafe-glow transition-all duration-500 border-4 border-cafe-caramel/30">
                {/* Real photo */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-display font-semibold text-primary-foreground text-sm">
                    {art.title}
                  </h3>
                  <p className="text-body text-xs text-primary-foreground/70">{art.artist}</p>
                </div>

                {/* Spotlight glow */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-12 bg-cafe-glow/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen gallery modal */}
      {selectedArt !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedArt(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden cafe-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={artworks[selectedArt].image}
              alt={artworks[selectedArt].title}
              className="w-full aspect-square object-cover"
            />
            <div className="bg-card p-6">
              <h3 className="text-display text-2xl font-bold text-foreground mb-1">
                {artworks[selectedArt].title}
              </h3>
              <p className="text-body text-muted-foreground">
                {artworks[selectedArt].artist}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ArtGallery;

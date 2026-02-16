import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lounge from "@/assets/lounge.jpg";
import mascot from "@/assets/mascot.png";
import pastries from "@/assets/pastries.jpg";
import latteArt from "@/assets/latte-art.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import { Star, Heart } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "The coziest café in town! The BrewLush Special changed my life. ☕", rating: 5 },
  { name: "James K.", text: "Amazing art, amazing coffee, amazing vibes. What more could you ask?", rating: 5 },
  { name: "Priya S.", text: "I come here every day for the atmosphere alone. The latte art is unreal!", rating: 5 },
];

const instaPhotos = [pastries, latteArt, coffeeBeans, cappuccino];

const LoungeArea = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={lounge} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Heart className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="text-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            The Lounge
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-md mx-auto">
            Relax, unwind, and feel at home
          </p>
        </motion.div>

        {/* Instagram-style photo wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-16"
        >
          {instaPhotos.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-xl overflow-hidden cafe-shadow border border-border"
            >
              <img src={photo} alt="Café moment" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border cafe-shadow"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-cafe-gold text-cafe-gold" />
                ))}
              </div>
              <p className="text-body text-sm text-foreground mb-4 italic">"{review.text}"</p>
              <p className="text-body text-xs font-semibold text-muted-foreground">— {review.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Community stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 mb-12"
        >
          {[
            { label: "Happy Customers", value: "12K+" },
            { label: "Cups Served Daily", value: "500+" },
            { label: "Community Events", value: "200+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-body text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-end gap-4 justify-center"
        >
          <motion.img
            src={mascot}
            alt="Mascot relaxing"
            className="w-24 drop-shadow-lg"
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="bg-card rounded-2xl rounded-bl-none p-3 cafe-shadow border border-border">
            <p className="text-body text-sm text-foreground">*sips contentedly* 😌☕</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoungeArea;

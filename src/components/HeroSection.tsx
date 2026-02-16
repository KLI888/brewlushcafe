import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroCafe from "@/assets/hero-cafe.jpg";
import mascot from "@/assets/mascot.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const mascotY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroCafe}
          alt="BrewLush Café exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Warm glow overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full cafe-glow opacity-40" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Welcome to
          </p>
          <h1 className="text-display text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            BrewLush
            <span className="block text-primary">Café</span>
          </h1>
          <p className="text-body text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
            A cozy corner where every cup tells a story. Step inside our world of warmth, art, and the perfect brew.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="#coffee-bar"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg hover:scale-105 transition-transform duration-300 cafe-shadow"
          >
            Enter the Café ☕
          </a>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground text-sm flex flex-col items-center gap-2"
          >
            <span>Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mascot */}
      <motion.div
        style={{ y: mascotY }}
        className="absolute bottom-8 right-8 md:right-16 z-10"
      >
        <motion.img
          src={mascot}
          alt="BrewLush mascot"
          className="w-28 md:w-40 drop-shadow-2xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Steam particles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-[2] pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cafe-cream/50"
            style={{ left: `${i * 30 - 60}px` }}
            animate={{
              y: [-20, -80],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

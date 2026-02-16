import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import coffeeCounter from "@/assets/coffee-counter.jpg";
import mascot from "@/assets/mascot.png";
import espressoImg from "@/assets/espresso.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import latteImg from "@/assets/latte.jpg";
import coldBrewImg from "@/assets/cold-brew.jpg";
import specialImg from "@/assets/brewlush-special.jpg";
import { Coffee } from "lucide-react";

const drinks = [
  { name: "Espresso", price: "$3.50", desc: "Bold & intense", image: espressoImg },
  { name: "Cappuccino", price: "$4.50", desc: "Frothy perfection", image: cappuccinoImg },
  { name: "Latte", price: "$5.00", desc: "Smooth & creamy", image: latteImg },
  { name: "Cold Brew", price: "$4.00", desc: "Chilled & refreshing", image: coldBrewImg },
  { name: "BrewLush Special", price: "$6.50", desc: "Our secret recipe", image: specialImg },
];

const CoffeeBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [hoveredDrink, setHoveredDrink] = useState<number | null>(null);

  return (
    <section
      id="coffee-bar"
      ref={ref}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={coffeeCounter} alt="Coffee counter" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 cafe-gradient-warm" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Coffee className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="text-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            The Coffee Bar
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-md mx-auto">
            Handcrafted with love, served with a smile
          </p>
        </motion.div>

        {/* Drinks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredDrink(i)}
              onMouseLeave={() => setHoveredDrink(null)}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer cafe-shadow hover:scale-105 transition-all duration-300 border border-border"
            >
              {/* Product image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover"
                  animate={hoveredDrink === i ? { scale: 1.15 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Coffee fill overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-primary/20 backdrop-blur-[1px]"
                  animate={hoveredDrink === i ? { height: "100%" } : { height: "0%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Steam on hover */}
                {hoveredDrink === i && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2">
                    {[0, 1, 2].map((j) => (
                      <motion.div
                        key={j}
                        className="absolute w-2 h-2 rounded-full bg-background/60"
                        style={{ left: `${j * 12 - 12}px` }}
                        animate={{ y: [-5, -30], opacity: [0.8, 0], scale: [0.5, 1.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.3 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-display font-semibold text-foreground text-base mb-1">
                  {drink.name}
                </h3>
                <p className="text-body text-xs text-muted-foreground mb-2">{drink.desc}</p>
                <p className="text-body font-bold text-primary text-lg">{drink.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-end gap-4 max-w-xs"
        >
          <img src={mascot} alt="Mascot at the coffee bar" className="w-20 drop-shadow-lg" />
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-card rounded-2xl rounded-bl-none p-3 cafe-shadow border border-border"
          >
            <p className="text-body text-sm text-foreground">
              Oops! Spilled some... 😅 <br/>
              <span className="text-muted-foreground text-xs">Try the BrewLush Special!</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeBar;

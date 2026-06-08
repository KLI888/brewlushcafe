import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import mascot from "@/assets/mascot.png";
import openMicImg from "@/assets/open-mic.jpg";
import liveMusicImg from "@/assets/live-music.jpg";
import coffeeTastingImg from "@/assets/coffee-tasting.jpg";
import latteWorkshopImg from "@/assets/latte-workshop.jpg";
import { Calendar, Mic, Music, Coffee as CoffeeIcon, Paintbrush } from "lucide-react";

const events = [
  { title: "Open Mic Night", icon: Mic, date: "Every Friday", time: "7:00 PM", image: openMicImg },
  { title: "Live Music", icon: Music, date: "Saturdays", time: "8:00 PM", image: liveMusicImg },
  { title: "Coffee Tasting", icon: CoffeeIcon, date: "1st Sunday", time: "3:00 PM", image: coffeeTastingImg },
  { title: "Latte Art Workshop", icon: Paintbrush, date: "2nd Sunday", time: "11:00 AM", image: latteWorkshopImg },
];

const EventZone = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Calendar className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="text-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Events & Happenings
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-md mx-auto">
            More than coffee — it's a community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onClick={() => setSelectedEvent(selectedEvent === i ? null : i)}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-border cafe-shadow"
              >
                {/* Event image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-display font-semibold text-foreground text-lg">
                    {event.title}
                  </h3>
                  <p className="text-body text-sm text-muted-foreground mt-1">
                    {event.date} • {event.time}
                  </p>

                  {selectedEvent === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <p className="text-body text-sm text-muted-foreground mb-4">
                        Join us for an unforgettable evening at BrewLush Café. Limited seats available!
                      </p>
                      <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:scale-[1.02] transition-transform">
                        Book Your Seat 🎟️
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mascot with mic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-end justify-end gap-4 max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-card rounded-2xl rounded-br-none p-3 cafe-shadow border border-border"
          >
            <p className="text-body text-sm text-foreground">
              🎤 Who's ready for the show?!
            </p>
          </motion.div>
          <img src={mascot} alt="Mascot with mic" className="w-20 drop-shadow-lg scale-x-[-1]" />
        </motion.div>
      </div>
    </section>
  );
};

export default EventZone;

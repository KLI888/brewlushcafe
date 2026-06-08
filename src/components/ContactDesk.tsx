import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import mascot from "@/assets/mascot.png";
import { MapPin, Send, Phone, Mail } from "lucide-react";

const ContactDesk = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={ref} className="relative min-h-screen py-24 overflow-hidden cafe-gradient">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="text-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Find Us & Say Hello
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-md mx-auto">
            We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border cafe-shadow">
              <h3 className="text-display text-2xl font-bold text-foreground mb-6">
                Reserve a Table
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <span className="text-5xl block mb-4">🎉</span>
                  <p className="text-display text-xl font-semibold text-foreground">
                    Message Sent!
                  </p>
                  <p className="text-body text-sm text-muted-foreground mt-2">
                    We'll get back to you soon
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-body text-sm font-medium text-foreground block mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-body text-sm font-medium text-foreground block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-body text-sm font-medium text-foreground block mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us what you need..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cafe-shadow"
                  >
                    <Send className="w-4 h-4" />
                    Reserve a Table
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden cafe-shadow border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086280796058!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="BrewLush Café Location"
              />
            </div>

            {/* Contact info */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border cafe-shadow space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-body text-sm font-semibold text-foreground">Address</p>
                  <p className="text-body text-sm text-muted-foreground">123 Brew Street, Coffee District</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-body text-sm font-semibold text-foreground">Phone</p>
                  <p className="text-body text-sm text-muted-foreground">+1 (555) BREW-LUX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-body text-sm font-semibold text-foreground">Email</p>
                  <p className="text-body text-sm text-muted-foreground">hello@brewlush.cafe</p>
                </div>
              </div>
            </div>

            {/* Mascot receptionist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-end gap-3"
            >
              <img src={mascot} alt="Mascot receptionist" className="w-16 drop-shadow-lg" />
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="bg-card rounded-2xl rounded-bl-none p-3 cafe-shadow border border-border"
              >
                <p className="text-body text-sm text-foreground">
                  Welcome! How can I help? 😊
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-border"
        >
          <p className="text-display text-2xl font-bold text-foreground mb-2">
            BrewLush Café
          </p>
          <p className="text-body text-sm text-muted-foreground">
            © 2026 BrewLush Café. Brewed with ❤️ and a lot of coffee.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDesk;

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="py-20 md:py-32 bg-card grain-overlay">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-7xl text-foreground tracking-wider text-center mb-16"
          >
            GET IN TOUCH
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: MapPin, label: "Head Office", value: "Plot No. 42, Industrial Area,\nJaipur, Rajasthan 302001" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "info@shreebalajiconstruction.com" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-body text-muted-foreground">{item.label}</p>
                    <p className="font-body text-foreground whitespace-pre-line">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-sm overflow-hidden h-80 md:h-auto bg-muted"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256517!2d75.62574059999999!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-heading text-2xl tracking-wider text-foreground mb-2">
            SHREE BALAJI CONSTRUCTION
          </p>
          <p className="text-xs font-body text-muted-foreground tracking-widest mb-6">
            PRECISION · SCALE · LEGACY
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {["Home", "Projects", "Our Team", "Careers", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const id = link === "Home" ? "hero" : link.toLowerCase().replace(/\s/g, "-");
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Linkedin, color: "hover:text-accent" },
              { icon: Instagram, color: "hover:text-primary" },
              { icon: MessageCircle, color: "hover:text-green-500" },
            ].map(({ icon: Icon, color }, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className={`w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground ${color} transition-colors duration-300`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-body">
            © 2025 Shree Balaji Construction. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Code } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <footer id="contact" className="py-16 md:py-[60px] bg-transparent flex flex-col items-center font-body">
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
        
        {/* Header Section with New Logo */}
        <header className="text-center mb-12 w-full flex flex-col items-center">
          <img src="/logo.png" alt="SB Logo" className="w-20 h-20 md:w-28 md:h-28 mb-8 rounded-full bg-white p-1.5 shadow-2xl ring-4 ring-primary/10" loading="lazy" decoding="async" />
          <h1 className="font-heading text-5xl md:text-[5rem] tracking-[6px] uppercase mb-3 text-foreground transition-all duration-300">
            Shree Balaji Construction
          </h1>
          <div className="text-[0.9rem] text-muted-foreground tracking-[5px] flex items-center justify-center gap-4 uppercase font-medium">
            PRECISION <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
            SCALE <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
            LEGACY
          </div>
        </header>

        {/* Navigation */}
        <nav className="mb-24">
          <ul className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 list-none m-0 p-0">
            <li><Link to="/" className="text-muted-foreground font-bold text-[0.95rem] tracking-[2px] hover:text-primary transition-all duration-300 uppercase relative group">HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/projects" className="text-muted-foreground font-bold text-[0.95rem] tracking-[2px] hover:text-primary transition-all duration-300 uppercase relative group">WE BUILD
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/vehicle-hire" className="text-muted-foreground font-bold text-[0.95rem] tracking-[2px] hover:text-primary transition-all duration-300 uppercase relative group">VEHICLE HIRE
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link></li>
          </ul>
        </nav>

        {/* Connect Section */}
        <section className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl tracking-[3px] uppercase text-foreground relative inline-block">
            Connect with us
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1 w-12 bg-primary"></div>
              <div className="h-1 w-4 bg-primary/30"></div>
            </div>
          </h2>
        </section>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {[
            { icon: MapPin, label: "Head Office", value: "Barmer, Rajasthan", href: "" },
            { icon: Phone, label: "Direct Phone", value: "+91 77428 25259\n+91 91667 88927", href: "tel:+917742825259" },
            { icon: Mail, label: "Business Email", value: "jakharvicky96@gmail.com", href: "mailto:jakharvicky96@gmail.com" },
            { 
              icon: Code, 
              label: "Web Developers", 
              value: "omprakashjakhar@gmail.com, parthgupta92006@gmail.com, rohitborana777@gmail.com", 
              href: "mailto:omprakashjakhar@gmail.com,parthgupta92006@gmail.com,rohitborana777@gmail.com" 
            },
          ].map((item, i) => {
            const isDeveloper = item.label === "Web Developers";
            const Content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-white/40 backdrop-blur-md py-12 px-6 rounded-sm text-center border border-border/60 transition-all duration-500 shadow-sm flex flex-col items-center h-full group ${
                   item.href 
                    ? "hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" 
                    : "hover:border-border hover:shadow-md"
                }`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-muted-foreground text-[0.7rem] tracking-[2px] uppercase mb-4 block font-bold">
                  {item.label}
                </span>
                <div className={`font-semibold text-foreground tracking-tight leading-relaxed ${isDeveloper ? 'text-xs md:text-[0.75rem]' : 'text-base'}`}>
                  {item.value.split(isDeveloper ? ',' : '\n').map((val, idx) => (
                    <span key={idx} className="block">{val.trim()}</span>
                  ))}
                </div>
              </motion.div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} className="block h-full">
                {Content}
              </a>
            ) : (
              <div key={item.label} className="h-full">
                {Content}
              </div>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground mt-8">
            © 2025 Shree Balaji Construction. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default ContactSection;

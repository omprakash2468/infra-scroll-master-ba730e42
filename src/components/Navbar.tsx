import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Projects", "Our Team", "Careers", "Contact"];

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="18" width="36" height="4" rx="1" fill="hsl(38,92%,50%)" />
    <rect x="18" y="2" width="4" height="36" rx="1" fill="hsl(217,91%,60%)" />
    <circle cx="20" cy="20" r="6" stroke="hsl(38,92%,50%)" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="2" fill="hsl(38,92%,50%)" />
    <line x1="8" y1="8" x2="14" y2="14" stroke="hsl(220,9%,46%)" strokeWidth="1.5" />
    <line x1="32" y1="8" x2="26" y2="14" stroke="hsl(220,9%,46%)" strokeWidth="1.5" />
    <line x1="8" y1="32" x2="14" y2="26" stroke="hsl(220,9%,46%)" strokeWidth="1.5" />
    <line x1="32" y1="32" x2="26" y2="26" stroke="hsl(220,9%,46%)" strokeWidth="1.5" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.02 }}
          >
            <Logo />
            <div className="hidden sm:block">
              <span className="font-heading text-xl tracking-wider text-foreground">
                SHREE BALAJI
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-muted-foreground font-body">
                CONSTRUCTION
              </span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => scrollTo(link === "Home" ? "hero" : link)}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(link === "Home" ? "hero" : link)}
                className="font-heading text-3xl tracking-wider text-foreground hover:text-primary transition-colors"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

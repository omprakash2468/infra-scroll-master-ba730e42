import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/", isHash: false },
  { name: "We Build", path: "/projects", isHash: false },
  { name: "Vehicle Hire", path: "/vehicle-hire", isHash: false },
  { name: "Our Team", path: "/#our-team", isHash: true }
];

const Logo = () => (
  <img src="/logo.png" alt="SB Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white p-0.5" />
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (link: { name: string, path: string, isHash: boolean }) => {
    setMobileOpen(false);
    
    if (link.name === "Home") {
      if (location.pathname !== "/") {
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (link.isHash) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(link.name.toLowerCase().replace(/\s/g, "-"));
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(link.name.toLowerCase().replace(/\s/g, "-"));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-500 bg-background flex h-20 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex w-full h-full">
          {/* Left Solid Logo Block */}
          <motion.div
            className="bg-primary px-4 md:px-8 w-[25%] flex items-center justify-start xl:justify-center cursor-pointer shrink-0"
            onClick={() => {
               if(location.pathname !== "/") navigate("/");
               window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            whileHover={{ backgroundColor: "hsl(var(--primary) / 0.9)" }}
          >
            <div className="flex items-center gap-3">
              <Logo />
              <div className="hidden sm:block text-primary-foreground">
                <span className="font-heading text-xl md:text-2xl tracking-wider block leading-none">
                  SHREE BALAJI
                </span>
                <span className="block text-[10px] tracking-[0.3em] font-body opacity-90 mt-1">
                  CONSTRUCTION
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Links Block */}
          <div className="flex-1 flex items-center justify-end px-6 lg:px-12 bg-background border-b border-border/10">
            <div className="hidden lg:flex items-center gap-12 xl:gap-16">
              {navLinks.map((link, i) => {
                const isActive = (location.pathname === link.path && !link.isHash) || 
                                 (link.name === "Home" && location.pathname === "/" && !location.hash);
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    onClick={() => handleNavigation(link)}
                    className={`font-heading text-[1.75rem] xl:text-[2rem] tracking-[2px] transition-colors duration-300 flex items-center gap-2 hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                    {/* Down chevron added to match the visual style requested */}
                    <ChevronDown className="w-5 h-5 opacity-50 mt-1" />
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground ml-auto"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNavigation(link)}
                className={`font-heading text-3xl tracking-wider transition-colors flex items-center gap-2 ${
                  (location.pathname === link.path && !link.isHash) || 
                  (link.name === "Home" && location.pathname === "/" && !location.hash) 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/assets/hero-bg.jpg";
import img2 from "@/assets/hero_background.png";
import img3 from "@/assets/project-1.jpg";
import img4 from "@/assets/project-2.jpg";
import img5 from "@/assets/project-3.jpg";
import img6 from "@/assets/project-4.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Swap every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black perspective-[2000px]">
      
      {/* 3D SPLIT ANIMATION BACKGROUND */}
      <div className="absolute inset-0 w-full h-full transform-style-3d">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 0.5, opacity: 0, zIndex: 0 }}
            animate={{ scale: 1, opacity: 1, zIndex: 10 }}
            exit={{ scale: 1, opacity: 1, zIndex: 20 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* LEFT HALF (Splits left when exiting) */}
            <motion.div
              className="absolute top-0 left-0 w-1/2 h-full overflow-hidden"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ 
                x: "-100%", 
                opacity: 0.8,
                rotateY: 15,
                transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
              }}
              style={{ transformOrigin: "left center" }}
            >
              <img 
                src={images[currentIndex]} 
                className="absolute top-0 left-0 w-[200%] h-full object-cover max-w-none" 
                alt="left half"
                loading="eager"
                fetchPriority={currentIndex === 0 ? "high" : "auto"}
                decoding="async"
              />
            </motion.div>
            
            {/* RIGHT HALF (Splits right when exiting) */}
            <motion.div
              className="absolute top-0 right-0 w-1/2 h-full overflow-hidden"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ 
                x: "100%", 
                opacity: 0.8,
                rotateY: -15,
                transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
              }}
              style={{ transformOrigin: "right center" }}
            >
              <img 
                src={images[currentIndex]} 
                className="absolute top-0 right-0 w-[200%] h-full object-cover max-w-none" 
                alt="right half"
                loading="eager"
                fetchPriority={currentIndex === 0 ? "high" : "auto"}
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Dark overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/90 pointer-events-none z-30" />
      </div>

      {/* Main Text Content */}
      <div className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 z-10 text-right max-w-[90%] sm:max-w-3xl px-4 pointer-events-none">
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] leading-[1.1]">
            WATER COVERS 70%<br />OF EARTH.
          </h1>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[1px] md:tracking-[2px] text-primary drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] leading-[1.1] mt-2">
            REST 30% COVERS<br />BY US.
          </h1>
        </motion.div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-primary scale-125 shadow-[0_0_10px_theme(colors.primary.DEFAULT)]" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

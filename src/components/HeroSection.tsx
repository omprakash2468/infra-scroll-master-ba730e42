import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const headingWords = ["BUILDING", "INDIA'S", "ROADS", "&", "RAILWAYS"];

const RoadSVG = () => (
  <svg
    className="absolute bottom-0 left-0 w-full h-20 md:h-32"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M0 100 Q360 60 720 100 Q1080 140 1440 100"
      stroke="hsl(38,92%,50%)"
      strokeWidth="3"
      fill="none"
      strokeDasharray="20 10"
      initial={{ strokeDashoffset: 2000 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 3, ease: "easeInOut", delay: 1.2 }}
    />
    <motion.line
      x1="0" y1="110" x2="1440" y2="110"
      stroke="hsl(220,9%,46%)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
    />
    <motion.line
      x1="0" y1="90" x2="1440" y2="90"
      stroke="hsl(217,91%,60%)"
      strokeWidth="1.5"
      strokeDasharray="4 8"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 1 }}
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Highway construction aerial view"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Dust particles */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-[3] text-center px-6 max-w-5xl">
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: "easeOut" }}
              className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-foreground"
              style={{
                color: word === "&" ? "hsl(38,92%,50%)" : undefined,
                textShadow: "0 4px 30px rgba(0,0,0,0.3)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground font-body tracking-wide"
        >
          Shree Balaji Construction — Precision. Scale. Legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground font-heading text-lg tracking-wider rounded-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
          >
            VIEW OUR PROJECTS
          </button>
          <button
            onClick={() => document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border-2 border-foreground/30 text-foreground font-heading text-lg tracking-wider rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            JOIN OUR TEAM
          </button>
        </motion.div>
      </div>

      <RoadSVG />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Projects = () => {
  return (
    <div className="pb-12 min-h-screen bg-background">
      {/* Hero Banner with the user's project photo */}
      <div className="w-full h-[80vh] relative bg-black z-10 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/project-hero.jpg" 
            alt="Infrastructure Projects Gallery" 
            className="w-full h-full object-cover opacity-60" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/90" />
        </div>
        
        {/* Right Middle - Quote (Home style) */}
        <div className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 z-40 text-right max-w-[80%] md:max-w-5xl px-4 pointer-events-none">
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] leading-tight uppercase">
              Every great story <br className="hidden sm:block" /> needs a start,
            </h1>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[2px] text-primary drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] leading-tight mt-4 uppercase">
              and every great <br className="hidden sm:block" /> journey needs a road
            </h1>
          </motion.div>
        </div>

        {/* Bottom Left - Project Name */}
        <div className="absolute bottom-16 left-6 md:left-20 z-40 text-left pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <div className="w-24 h-[4px] bg-primary shadow-lg shadow-primary/40" />
            <p className="font-heading text-2xl md:text-4xl text-white tracking-[6px] uppercase drop-shadow-lg">
              Amritsar - Jamnagar Expressway
            </p>
          </motion.div>
        </div>
      </div>

      {/* New Infrastructure Excellence Section (Reference Style) */}
      <div 
        className="bg-white py-24 md:py-32 relative z-20 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="font-heading text-4xl md:text-6xl tracking-wider text-slate-900 uppercase font-semibold leading-none">
                  BUILDING THE <br/> NATION'S ARTERIES
                </h2>
              </div>
              
              <p className="font-body text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl text-justify">
                At Shree Balaji Construction, we integrate precision engineering with rapid execution to build the arteries of the nation. 
                From massive earthworks and sub-base preparation to final bituminous layering, our projects are defined by structural integrity and safety. 
                Our commitment to excellence is reflected in our work on major corridors, including the Amritsar–Jamnagar Expressway, setting new benchmarks in Indian road infrastructure.
              </p>

              {/* Business Enquiries Line (Reference Style) */}
              <div className="mt-12 pt-4">
                <p className="text-slate-800 font-body text-sm md:text-base flex flex-wrap items-center gap-3">
                  <span className="uppercase tracking-widest font-bold text-xs text-slate-500">For business enquiries, please contact:</span>
                  <a 
                    href="mailto:jakharvicky96@gmail.com"
                    className="bg-primary px-3 py-1 font-bold text-white rounded-sm text-xs md:text-sm hover:scale-105 hover:shadow-lg transition-all"
                  >
                    jakharvicky96@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Framed Image (Reference Style - Bridge Image layout) */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Outer Decorative Frame (Grey Box from reference) */}
              <div className="absolute -inset-4 md:-inset-10 bg-slate-50 border border-slate-200 -z-10 translate-x-4 md:translate-x-10" />
              
              {/* Offset Primary Border (Yellow box from reference) */}

              
              {/* Secondary Bottom Left Offset (Blackish border) */}


              {/* Main Image Container */}
              <div className="relative z-10 bg-white p-2 border border-slate-200 shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden grayscale-[5%] hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="/road-paving.png" 
                    alt="Road Infrastructure Paving" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Projects;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { name: "Heavy Earthwork & Embankment Operations", location: "Hilly Sector", type: "Road", year: "2024", image: "/project-g.jpg" },
  { name: "Site Preparation & Large-Scale Land Leveling", location: "Industrial Zone", type: "Road", year: "2024", image: "/project-h.jpg" },
  { name: "Soil Stabilization and Road Base Preparation", location: "National Highway", type: "Road", year: "2024", image: "/project-i.jpg" },
  { name: "Main Carriage Way Site Clearing", location: "Gujarat-MP Border", type: "Road", year: "2024", image: "/project-a.jpg" },
  { name: "Interstate Road Base Construction", location: "NH-52 Extension", type: "Road", year: "2024", image: "/project-b.jpg" },
  { name: "Highway Earthwork Operations", location: "Rajasthan Border", type: "Road", year: "2023", image: "/project-c.jpg" },
  { id: 9, name: "Desert Highway Base Excavation", location: "Barmer Sector", type: "Road", year: "2024", image: "/project-d.jpg" },
  { name: "Major Trenching & Embankment Work", location: "Udaipur Sector", type: "Road", year: "2024", image: "/project-j.jpg" },
  { name: "Industrial Land Gradation & Leveling", location: "Kutch Industrial Zone", type: "Road", year: "2024", image: "/project-k.jpg" },
  { name: "High-Speed Corridor Base Preparation", location: "Amritsar Expressway Segment", type: "Road", year: "2024", image: "/project-l.jpg" },
  { name: "Strategic Road Stabilization Operations", location: "Western Rajasthan Border", type: "Road", year: "2024", image: "/project-m.jpg" },
  { name: "Sunset Paving & Compaction Cycle", location: "Barmer Highway Project", type: "Road", year: "2024", image: "/project-n.jpg" },
  { name: "Advanced Highway Infrastructure Drone Survey", location: "National Corridor", type: "Road", year: "2024", image: "/project-o.jpg", croplogo: true },
  { name: "Large-Scale Expressway Development", location: "Interstate Link", type: "Road", year: "2024", image: "/project-p.jpg", croplogo: true },
  { name: "Bridge Vertical Column Column Structural Work", location: "Infrastructure Project", type: "Infrastructure", year: "2024", image: "/project-e.jpg" },
  { name: "Industrial Structural Building Frame Construction", location: "Construction Site", type: "Infrastructure", year: "2024", image: "/project-f.jpg" },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            (project as any).croplogo ? "scale-105 origin-top-left" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      
      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-heading tracking-widest text-sm md:text-base uppercase">
            {project.type}
          </span>
          <h3 className="font-heading text-2xl md:text-4xl text-white tracking-wider uppercase leading-none drop-shadow-lg group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <div className="w-12 h-1 bg-primary mt-2 origin-left transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="pt-6 md:pt-10 pb-24 md:pb-32 grain-overlay blueprint-grid">
      <div className="mx-auto px-4 md:px-8 max-w-[92%]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <h2 className="font-heading text-4xl md:text-6xl tracking-tighter mb-10 uppercase">
            OUR <span className="text-primary">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

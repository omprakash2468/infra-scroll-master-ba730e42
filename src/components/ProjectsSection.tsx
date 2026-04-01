import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { name: "NH-48 Flyover Extension", location: "Rajasthan", type: "Road", year: "2023", image: project1 },
  { name: "Jaipur-Delhi Rail Corridor", location: "Haryana", type: "Railway", year: "2022", image: project2 },
  { name: "Mumbai-Pune Expressway Widening", location: "Maharashtra", type: "Road", year: "2024", image: project3 },
  { name: "Godavari Railway Bridge", location: "Andhra Pradesh", type: "Railway", year: "2021", image: project4 },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group overflow-hidden rounded-sm"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-3 py-1 text-xs font-body tracking-wider rounded-sm ${
            project.type === "Railway"
              ? "bg-accent/20 text-accent"
              : "bg-primary/20 text-primary"
          }`}>
            {project.type.toUpperCase()}
          </span>
          <span className="text-sm text-muted-foreground font-body">{project.year}</span>
        </div>
        <h3 className="font-heading text-3xl md:text-5xl text-foreground tracking-wide">
          {project.name}
        </h3>
        <div className="mt-2 h-0.5 bg-primary origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
        <p className="mt-2 text-muted-foreground font-body">{project.location}</p>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-20 md:py-32 grain-overlay">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-5xl md:text-7xl text-foreground tracking-wider">
            OUR PROJECTS
          </h2>
          <div className="road-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

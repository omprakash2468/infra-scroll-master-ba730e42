import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "KM Roads Built" },
  { value: 12, suffix: "", label: "Railway Projects" },
  { value: 200, suffix: "+", label: "Team Members" },
  { value: 15, suffix: "", label: "Years Experience" },
];

const team = [
  { name: "RAJESH SHARMA", role: "Founder & CEO", color: "primary" },
  { name: "PRIYA GUPTA", role: "Co-Founder & COO", color: "primary" },
  { name: "VIKRAM SINGH", role: "Chief Engineer", color: "accent" },
  { name: "ANITA DESAI", role: "Project Manager", color: "accent" },
  { name: "SURESH KUMAR", role: "Safety Director", color: "accent" },
  { name: "MEERA PATEL", role: "Lead Architect", color: "accent" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl text-primary">
      {count}{suffix}
    </span>
  );
};

const TeamSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });

  return (
    <section id="our-team" className="py-20 md:py-32 bg-limestone blueprint-grid relative">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-body tracking-wider text-asphalt/60 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-5xl md:text-7xl text-asphalt tracking-wider">
            THE PEOPLE BEHIND THE PROGRESS
          </h2>
          <div className="road-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(245,158,11,0.15)" }}
              className="bg-foreground/5 backdrop-blur-sm rounded-sm p-8 text-center border border-transparent hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-asphalt/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <User className="w-10 h-10 text-asphalt/40 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-2xl tracking-wider text-asphalt">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-body text-asphalt/60">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

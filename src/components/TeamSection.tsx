import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User } from "lucide-react";

const stats = [
  { value: 2, suffix: "", label: "Airport Projects" },
  { value: 2, suffix: "", label: "Railway Projects" },
  { value: 3, suffix: "", label: "Expressway Projects" },
  { value: 200, suffix: "+", label: "KM PWD Roads" },
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const team = [
  { name: "VIRENDRA JAKHAR", role: "Visionary Founder", color: "primary", image: "/virendra.jpg" },
  { name: "SHARWAN JAKHAR", role: "Strategic Co-founder", color: "primary", image: "/sharwan.jpg" },
  { name: "DHOKLARAM JI BENIWAL", role: "Executive Co-founder", color: "primary", image: "/dhoklaram.jpg" },
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
    <section id="our-team" className="py-20 md:py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
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
          <h2 className="font-heading text-4xl md:text-6xl tracking-tighter mb-16 uppercase text-center">
          The people behind the progress
        </h2>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(245,158,11,0.2)" }}
              className="bg-foreground/5 backdrop-blur-sm rounded-sm p-12 text-center border border-transparent hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 shadow-xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
              </div>
              <h3 className="font-heading text-4xl tracking-wider text-asphalt">
                {member.name}
              </h3>
              <p className="mt-2 text-lg font-body text-asphalt/60 uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

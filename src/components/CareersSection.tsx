import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Check, Upload } from "lucide-react";

const jobs = [
  { title: "Site Engineer", desc: "Oversee on-site construction activities and ensure quality standards.", location: "Multiple Locations" },
  { title: "Project Manager", desc: "Lead and coordinate large-scale infrastructure projects.", location: "Jaipur, Rajasthan" },
  { title: "Safety Officer", desc: "Implement and monitor safety protocols across all construction sites.", location: "Pan India" },
];

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="careers" className="py-20 md:py-32 bg-background grain-overlay relative">
      {/* Hiring badge */}
      <div className="absolute top-8 right-8 z-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-heading tracking-wider text-sm rounded-sm animate-pulse-badge">
          🚧 WE'RE HIRING
        </span>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-5xl md:text-7xl text-foreground tracking-wider">
            BUILD YOUR CAREER WITH US
          </h2>
          <div className="road-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, borderColor: "hsl(38,92%,50%)" }}
              className="p-8 bg-card border border-border rounded-sm group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading text-2xl tracking-wider text-foreground">{job.title}</h3>
              <p className="mt-2 text-sm font-body text-muted-foreground">{job.desc}</p>
              <p className="mt-4 text-xs font-body text-primary tracking-wider">{job.location}</p>
            </motion.div>
          ))}
        </div>

        {/* Application form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="font-heading text-3xl text-foreground tracking-wider">APPLICATION SUBMITTED</h3>
                <p className="mt-2 text-muted-foreground font-body">We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <select
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Position Applied For</option>
                  <option>Site Engineer</option>
                  <option>Project Manager</option>
                  <option>Safety Officer</option>
                  <option>Other</option>
                </select>
                <label className="flex items-center gap-3 px-4 py-3 bg-card border border-dashed border-border rounded-sm cursor-pointer hover:border-primary transition-colors">
                  <Upload className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-body text-muted-foreground">Upload Resume (PDF)</span>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </label>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-heading text-lg tracking-wider rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-lg shadow-primary/20"
                >
                  SUBMIT APPLICATION
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;

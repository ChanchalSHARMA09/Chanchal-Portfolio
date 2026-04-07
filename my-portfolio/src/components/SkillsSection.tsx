import { motion } from "framer-motion";

const skillCategories = [
  { title: "Frontend", skills: ["HTML", "CSS", "Tailwind CSS", "React.js"] },
  { title: "Backend", skills: ["Node.js", "Express.js"] },
  { title: "Database", skills: ["MongoDB"] },
  { title: "Languages", skills: ["JavaScript", "C++"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman"] },
  { title: "Learning", skills: ["AWS Basics", "AI Integration"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            <span className="section-number">02.</span>{" "}
            Skills
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="terminal-window max-w-3xl"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">skills --list-all</span>
          </div>
          <div className="p-6 md:p-8 font-mono space-y-7">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <p className="text-primary text-sm md:text-base mb-3">
                  <span className="text-muted-foreground">$</span> cat {cat.title.toLowerCase()}.config
                </p>
                <div className="flex flex-wrap gap-2.5 ml-5">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="text-sm md:text-base px-4 py-2 rounded-lg bg-primary/10 text-foreground border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

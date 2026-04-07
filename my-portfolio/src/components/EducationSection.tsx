import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

const education = [
  { title: "B.Tech (3rd Year)", place: "Ajay Kumar Garg Engineering College (AKGEC)" },
  { title: "Class 12", place: "Sunbeam School, Varuna" },
  { title: "Class 10", place: "Sunbeam School, Varuna" },
  { title: "Primary Schooling", place: "St. Mary's Convent School" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            <span className="section-number">04.</span>{" "}
            Education
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
            <span className="ml-3 text-xs font-mono text-muted-foreground">education.log</span>
          </div>
          <div className="p-6 md:p-8 font-mono space-y-2">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <GraduationCap className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{edu.title}</h3>
                  <p className="text-base text-muted-foreground mt-0.5">{edu.place}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-primary" />
            Achievement
          </h3>
          <motion.div
            whileHover={{ y: -3 }}
            className="terminal-window"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">achievement.md</span>
            </div>
            <div className="p-6 md:p-8">
              <h4 className="font-semibold text-xl text-foreground">🏆 Runner-Up – Block Verse Tech Competition</h4>
              <p className="text-base md:text-lg text-muted-foreground mt-3 leading-relaxed">
                Secured 2nd position by building an innovative tech solution, demonstrating strong problem-solving and development skills.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

import { motion } from "framer-motion";
import techStack from "@/assets/tech-stack.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div  initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut" as const }}>
          <h2 className="section-title">
            <span className="section-number">01.</span>{" "}
            About Me
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6 text-muted-foreground text-base md:text-lg leading-[1.8]"
          >
            <p>
              I am a <span className="text-foreground font-medium">B.Tech student</span> and an aspiring MERN Stack Developer with a strong interest in building real-world applications. I have experience working with technologies like React, Node.js, Express, and MongoDB.
            </p>
            <p>
              I have built multiple full-stack projects, including <span className="text-foreground font-medium">AI-integrated</span> and <span className="text-foreground font-medium">real-time applications</span>. Currently, I am expanding my knowledge in Cloud Computing and exploring how AI can be integrated into modern web solutions.
            </p>
            <p>
              I enjoy solving problems, learning new technologies, and building impactful products. I am actively seeking internship opportunities in Web Development and Cloud.
            </p>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="rounded-xl overflow-hidden glow-border">
              <img src={techStack} alt="Technology network" loading="lazy" width={800} height={600} className="w-full h-44 object-cover opacity-70 hover:opacity-90 transition-opacity duration-500 hover:scale-105" style={{ transition: 'opacity 0.5s, transform 0.5s' }} />
            </div>

            <div className="terminal-window">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary/20 bg-primary/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">focus.sh</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-3">
                <p className="text-primary text-xs">#!/bin/bash</p>
                <p className="text-muted-foreground text-xs"># current_focus</p>
                {[
                  "Learning Cloud Computing (AWS)",
                  "Exploring AI in web apps",
                  "Building full-stack projects",
                  "Practicing DSA in C++",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">$</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

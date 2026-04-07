import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const TypingLine = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, x: -5 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.3 }}
    className="block"
  >
    {text}
  </motion.span>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden section-padding pt-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" width={1920} height={1080} />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/85 to-background" />
      </div>

      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="terminal-window mb-12 max-w-2xl text-left"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">chanchal@portfolio:~</span>
          </div>
          <div className="p-6 font-mono text-base md:text-lg space-y-2">
            <TypingLine text="$ whoami" delay={0.3} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <span className="text-primary text-xl md:text-2xl font-bold">Chanchal Sharma</span>
            </motion.div>
            <TypingLine text="$ cat role.txt" delay={1} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
              <span className="text-foreground text-base md:text-lg">MERN Stack Developer | Cloud Learner</span>
            </motion.div>
            <TypingLine text="$ echo $MISSION" delay={1.7} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <span className="text-muted-foreground text-base">Building scalable web apps with AI & modern technologies</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 2.3, repeat: Infinity, duration: 1 }}
              className="text-primary inline-block mt-2"
            >
              █
            </motion.span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-5 leading-[1.05]">
            Chanchal <span className="text-gradient">Sharma</span>
          </h1>
          <p className="font-mono text-xl md:text-2xl text-primary mb-4">
            MERN Stack Developer | Cloud Learner
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Building scalable web apps with AI & modern technologies
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="mailto:chanshar2021@gmail.com" className="p-3.5 rounded-xl bg-secondary hover:bg-primary/10 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-110">
            <Mail className="w-5 h-5 text-foreground" />
          </a>
          <a href="https://github.com/ChanchalSHARMA09" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-secondary hover:bg-primary/10 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-110">
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a href="https://linkedin.com/in/chanchalsharma01" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-secondary hover:bg-primary/10 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-7 h-7 text-muted-foreground hover:text-primary transition-colors" />
      </motion.a>
    </section>
  );
};

export default HeroSection;

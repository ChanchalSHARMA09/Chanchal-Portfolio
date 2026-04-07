import { motion } from "framer-motion";
import { Mail,  Github, Linkedin, Send, ArrowUpRight, Sparkles } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-125 rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute top-20 right-10 w-50 h-50 rounded-full bg-primary/3 blur-[80px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Open for opportunities
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-14 max-w-xl mx-auto leading-relaxed">
            I'm actively looking for internship opportunities in Web Development and Cloud. Got a project idea or opportunity? Let's talk!
          </p>
        </motion.div>

        {/* Terminal contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="terminal-window max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">contact --connect</span>
          </div>
          <div className="p-6 md:p-8 font-mono">
            <p className="text-primary text-sm md:text-base mb-6">$ chanchal.connect()</p>

            <div className="grid gap-4">
              <motion.a
                href="mailto:chanshar2021@gmail.com"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 p-4 md:p-5 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-base md:text-lg text-foreground">chanshar2021@gmail.com</p>
                </div>
                <Send className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>

              <motion.a
                href="https://github.com/ChanchalSHARMA09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 p-4 md:p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-base md:text-lg text-foreground">ChanchalSHARMA09</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:-translate-y-0.5 transition-all duration-300" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/chanchalsharma01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 p-4 md:p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-base md:text-lg text-foreground">chanchalsharma01</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:-translate-y-0.5 transition-all duration-300" />
              </motion.a>
            </div>

            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-primary inline-block mt-6 text-lg"
            >
              █
            </motion.span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="mailto:chanshar2021@gmail.com"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-mono text-lg font-semibold shadow-[0_0_25px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)] transition-shadow duration-300"
          >
            <Send className="w-5 h-5" />
            $ say_hello
          </motion.a>
        </motion.div>
      </div>

      <div className="text-center mt-24 text-sm text-muted-foreground font-mono">
        <p>{"// Built with 💚 by Chanchal Sharma"}</p>
      </div>
    </section>
  );
};

export default ContactSection;

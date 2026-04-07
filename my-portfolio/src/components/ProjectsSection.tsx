import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectsBg from "@/assets/projects-bg.jpg";

const projects = [
  {
    title: "B2B Wholesale Platform",
    description: "A B2B wholesale platform for men's traditional wear with AI-based insights and inquiry system.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    features: [
      "Admin dashboard for product management",
      "Dealer authentication system",
      "Inquiry-based ordering (no direct checkout)",
      "AI-powered insights & recommendations",
      "Scalable backend architecture (MVC)",
    ],
  },
  {
    title: "AI Social Media Platform",
    description: "A social media platform with AI-powered features designed to enhance user engagement and content creation.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    features: [
      "User authentication & profiles",
      "Create, like, comment, and share posts",
      "AI-generated captions & content suggestions",
      "Personalized feed system",
      "Responsive UI",
    ],
  },
  {
    title: "Food Delivery App",
    description: "A full-stack food delivery web application with real-time map-based tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Maps API"],
    features: [
      "User authentication & ordering system",
      "Browse restaurants and menus",
      "Live delivery tracking using maps",
      "Dynamic order status updates",
      "Responsive UI",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 right-0 w-1/2 h-96 overflow-hidden opacity-10 pointer-events-none">
        <img src={projectsBg} alt="" loading="lazy" width={1200} height={600} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-background" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            <span className="section-number">03.</span>{" "}
            Projects
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="terminal-window group"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-primary/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground">~/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-sm font-mono px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="font-mono space-y-2">
                  <p className="text-primary text-sm mb-3">$ cat README.md</p>
                  {project.features.map((f, j) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05, duration: 0.3 }}
                      className="text-sm md:text-base text-muted-foreground flex items-start gap-3 ml-3"
                    >
                      <span className="text-primary mt-0.5">▹</span>
                      {f}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

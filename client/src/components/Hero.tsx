import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@assets/generated_images/professional_headshot_of_software_developer.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden transition-colors duration-500 bg-transparent"
    >
      <div className="container-width relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full pt-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium">Hello!</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6 tracking-tight">
              <span className="block text-foreground">My name is</span>
              <span className="block text-primary">Vitalii Shynkaruk</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12">
              Senior Senior Full Stack & AI Engineer 
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/shynkaruk-8ab528234/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Shynkaruk-new-project-test-www"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:94vshynkaryk@ukr.net"
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center h-full pt-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-light">
              I am a Senior Full Stack & AI Developer with 10+ years of experience building scalable web, mobile, and AI-powered applications. I specialize in Python backend development using Django, Flask, and FastAPI, combined with Node.js for high-performance, modern architectures.

My AI expertise includes developing and integrating machine learning models, LLM-based solutions, and intelligent automation systems. I build data-driven APIs, deploy AI services, and create user-facing applications using React and Next.js, alongside cross-platform mobile development with React Native and Flutter.

I help startups and businesses transform ideas into reliable, production-ready systems with a strong focus on performance, scalability, and real-world impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-all shadow-lg shadow-primary/20 active:scale-95 text-center min-w-[160px]"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 border border-white/20 bg-transparent hover:bg-white/5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 min-w-[160px]"
              >
                <Download className="w-5 h-5" /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

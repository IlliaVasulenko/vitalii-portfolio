import { motion } from "framer-motion";

const experiences = [
  {
    period: "Dec 2025 - Present",
    role: "Senior Senior Full Stack & AI | Mobile APP Engineer ",
    company: "Upwork",
    location: "Kuprina, Kovel, Ukraine",
    skills: ["Python", "Node.js", "React", "Next.js", "FastAPI", "Express.js", "LLMs", "RAG Pipelines", "Vector Databases", "AWS", "Docker", "DevOps", "PostgreSQL"],
    description: "Full Stack & AI Developer. Python Engineer |Django Flask FastAPI|.  Mobile APP Developer"
  },
  {
    period: "May 2021 - Present",
    role: "Senior Senior Full Stack & AI Engineer ",
    company: "Volnexis",
    location: "Donetsk Oblast, Ukraine",
    skills: ["Python", "Node.js", "React", "Next.js", "FastAPI", "Express.js", "LLMs", "RAG Pipelines", "Vector Databases", "AWS", "Docker", "DevOps", "PostgreSQL"],
    description: "Full Stack & AI Development. Built AI-driven trading and automation systems using Python (Django, Flask, FastAPI) and Node.js. Developed trading bots, market data pipelines, and API-based integrations.Created mobile applications using React Native alongside web platforms. Automated workflows and system operations using n8n. Designed scalable, low-latency backend APIs and services. Integrated AI/ML models for intelligent decision-making. Supported DevOps, deployments, and system reliability."
  },
  { 
    period: "August 2018 - April 2021",
    role: "Full Stack Engineer | Python, Node, .NET/C# | CMS |",
    company: "Kryonode Systems",
    location: "Kyiv, Ukraine",
    skills: ["C#", ".NET", "ASP.NET", "Oracle", "VistaDB", "MySQL", "Cloud Services", "Distributed Systems"],
    description: "Full Stack .NET, C# Development. Developed and maintained full-stack applications using Python, Node.js, and .NET/C#. Built scalable backend services and APIs for web-based platforms. Implemented CMS-driven solutions and custom integrations. Contributed to frontend development and system architecture. Ensured performance, security, and maintainability across projects"
  },
  {
    period: "Mar 2016 - May 2018",
    role: "Python Developer",
    company: "",
    location: "Kuprina, Kovel, Ukraine",
    skills: ["Python", "Node.js", "Express", "NLP",  "React", "Vue.js", "Angular"],
    description: "Python & Node PHP. Developed backend systems and APIs using Python. Built and maintained scalable, data-driven applications. Integrated third-party services and internal tools. Optimized performance, reliability, and code quality"
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Work Experiences</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="relative space-y-12 before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-white/10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-24 group"
            >
              {/* Timeline Indicator */}
              <div className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-white/20 z-10 flex items-center justify-center">
                <div className="w-4 h-[2px] bg-white/40" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left Side: Role and Company Info */}
                <div className="w-full md:w-64 shrink-0">
                   <h3 className="text-xl font-bold text-foreground mb-4">{exp.role}</h3>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-background font-bold text-xs uppercase overflow-hidden">
                        {/* Mock Logo using Company Initials if no image */}
                        {exp.company.substring(0, 2)}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                   </div>
                   <p className="text-sm font-medium text-muted-foreground mb-1">{exp.period}</p>
                   <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">[Full Time] [Remote]</p>
                </div>

                {/* Right Side: Description */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                  <div className="mb-6">
                    <ul className="space-y-4">
                      {exp.description.split('. ').map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-4 text-foreground/80 text-base leading-relaxed font-light">
                          <span className="text-primary mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary font-bold border border-primary/20 uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

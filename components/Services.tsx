"use client";

import { Code, Palette, Zap, Search } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";
import { motion } from "motion/react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications using modern technologies like React, Next.js, and TypeScript.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Converting designs into pixel-perfect, user-friendly interfaces with attention to detail and best practices.",
    technologies: ["Figma", "Framer Motion", "ShadcnUI", "HeroUI"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, accessibility, and user experience across all devices.",
    technologies: ["Core Web Vitals", "Lighthouse", "Bundle Analysis", "Lazy Loading"]
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description: "Implementing SEO best practices and analytics to improve visibility and track user engagement.",
    technologies: ["Next.js SEO", "Google Analytics", "Meta Tags", "Schema Markup"]
  }
];

export const Services = () => {
  return (
    <section className="w-full py-16 ">
      <div className="flex flex-col items-center justify-center gap-12">
        <h1 className="text-4xl font-bold tracking-tighter">
          <AuroraText>WHAT I DO</AuroraText>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
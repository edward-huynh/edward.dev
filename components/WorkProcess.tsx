"use client";

import { MessageCircle, Lightbulb, Code2, Rocket, CheckCircle } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";
import { motion } from "motion/react";

const processSteps = [
  {
    icon: MessageCircle,
    title: "Discovery & Planning",
    description: "We start with a detailed discussion about your project goals, target audience, and requirements. I analyze your needs and create a comprehensive project plan.",
    duration: "1-2 days",
    deliverables: ["Project scope document", "Timeline & milestones", "Technical requirements"]
  },
  {
    icon: Lightbulb,
    title: "Design & Prototyping",
    description: "Based on your requirements, I create wireframes and interactive prototypes. We iterate on the design until it perfectly matches your vision.",
    duration: "3-5 days",
    deliverables: ["Wireframes", "Interactive prototype", "Design system"]
  },
  {
    icon: Code2,
    title: "Development",
    description: "I build your application using modern technologies and best practices. Regular updates keep you informed of progress throughout development.",
    duration: "1-4 weeks",
    deliverables: ["Clean, maintainable code", "Responsive design", "Performance optimization"]
  },
  {
    icon: CheckCircle,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing ensures your application works flawlessly across all devices and browsers. I test for performance, accessibility, and user experience.",
    duration: "2-3 days",
    deliverables: ["Cross-browser testing", "Performance audit", "Accessibility compliance"]
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "I handle the deployment process and provide ongoing support. You'll receive documentation and training to manage your new application effectively.",
    duration: "1-2 days",
    deliverables: ["Live deployment", "Documentation", "Training & support"]
  }
];

export const WorkProcess = () => {
  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">
            <AuroraText>HOW I WORK</AuroraText>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My proven process ensures your project is delivered on time, within budget, and exceeds your expectations.
          </p>
        </div>
        
        <div className="w-full max-w-6xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/70 to-primary/50 hidden md:block" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary-foreground border-2 border-primary/40 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        {/* <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                          {index + 1}
                        </div> */}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <h3 className="text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Deliverables:</h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how my process can help bring your vision to life. 
              Every project is unique, and I adapt my approach to fit your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Start a Project
              </a>
              <a
                href="mailto:phat2911@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/20 text-foreground font-medium hover:bg-primary/10 transition-colors duration-300"
              >
                Ask Questions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
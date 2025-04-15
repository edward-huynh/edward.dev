"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

export const Experience = () => {
  return (
    <div className="w-full ">
      <Terminal className="w-full bg-primary/20">
        <TypingAnimation className="w-full break-words text-xl font-semibold text-black/70">
          &gt; Công Ty Cổ Phần Tiên Phong CDS
        </TypingAnimation>

        <AnimatedSpan
          delay={1500}
          className="w-full break-words text-green-600"
        >
          <span className="break-words">✔ Position: Front End Developer</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2000}
          className="w-full break-words text-green-600"
        >
          <span>✔ Timeline: 09/2023 - Present</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2500}
          className="w-full break-words text-green-600"
        >
          <span className="break-words whitespace-pre-wrap">
            ✔ Stacking: ReactJS, NextJS, VueJS, NuxtJS, TailwindCSS, HeroUI,
            ShadcnUI, Framer Motion, UnoCSS, SWR, Zod, Recoil
          </span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={3000}
          className="w-full  break-words text-green-600"
        >
          <p className="break-words whitespace-pre-wrap">
            ✔ Description: Developed and maintained responsive web applications,
            implemented reusable UI components, optimized performance, and
            collaborated with design team to ensure pixel-perfect
            implementation. Integrated REST APIs and managed state using modern
            solutions.
          </p>
        </AnimatedSpan>
      </Terminal>
    </div>
  );
};

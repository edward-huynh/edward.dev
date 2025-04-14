"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

export const Experience = () => {
  return (
    <div className="w-full ">
      <Terminal className="w-full">
        <TypingAnimation className="w-full break-words text-xl font-semibold text-black/70">
          &gt; Công Ty Cổ Phần Tiên Phong CDS
        </TypingAnimation>

        <AnimatedSpan
          delay={1500}
          className="w-full break-words text-green-500"
        >
          <span className="break-words"> ✔ Position: Front End Developer</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2000}
          className="w-full break-words text-green-500"
        >
          <span>✔ Timeline: 09/2023 - Present</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2500}
          className="w-full break-words text-green-500"
        >
          <span className="break-words">
            ✔ Stacking: ReactJS, NextJS, VueJS, NuxtJS, TailwindCSS, HeroUI,
            ShadcnUI, Framer Motion, UnoCSS, SWR, Zod, Recoil
          </span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={3000}
          className="w-full  break-words text-green-500"
        >
          <p className="break-words whitespace-pre-wrap">
            ✔ Description: Developed and maintained responsive web applications,
            implemented reusable UI components, optimized performance, and
            collaborated with design team to ensure pixel-perfect
            implementation. Integrated REST APIs and managed state using modern
            solutions.
          </p>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Writing components.json.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Checking registry.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating tailwind.config.ts</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Updating app/globals.css</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! Project initialization completed.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-muted-foreground">
          You may now add components.
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

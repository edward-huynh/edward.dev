"use client";
import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper/modules'
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

interface ExperienceData {
  company: string;
  position: string;
  timeline: string;
  stacking: string;
  description: string;
}

const experienceData: ExperienceData[] = [
  {
    company: "Công Ty Cổ Phần Tiên Phong CDS",
    position: "Front End Developer",
    timeline: "09/2023 - Present",
    stacking: "ReactJS, NextJS, VueJS, NuxtJS, TailwindCSS, HeroUI, ShadcnUI, Framer Motion, UnoCSS, SWR, Zod, Recoil, Zustand, SEO",
    description: "Developed and maintained responsive web applications, implemented reusable UI components, optimized performance, and collaborated with design team to ensure pixel-perfect implementation. Integrated REST APIs and managed state using modern solutions."
  },
  {
    company: "Lavenes Studio",
    position: "Junior Frontend Developer",
    timeline: "01/2023 - 03/2024",
    stacking: "Html5, Css3, Javascript, Typescript, ReactJS, NextJS, TailwindCSS, Bootstrap, ShadcnUI, HeroUI, Framer Motion, Swiper, Redux, Recoil, React Hook Form, Zod, SWR, Git, Figma, SEO",
    description: "Assisted in developing user interfaces for web applications, learned modern frontend technologies, and contributed to team projects under senior developer guidance."
  }
];

export const Experience = () => {
  return (
    <div className="w-full ">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {experienceData.map((experience, index) => (
          <SwiperSlide key={index}>
            <Terminal className="w-full bg-primary/20">
              <TypingAnimation className="w-full break-words text-xl font-semibold text-black/70">
                 {`> ${experience.company}`}
               </TypingAnimation>

              <AnimatedSpan
                delay={1500}
                className="w-full break-words text-green-600"
              >
                <span className="break-words">
                  ✔ Position: {experience.position}
                </span>
              </AnimatedSpan>

              <AnimatedSpan
                delay={2000}
                className="w-full break-words text-green-600"
              >
                <span>✔ Timeline: {experience.timeline}</span>
              </AnimatedSpan>

              <AnimatedSpan
                delay={2500}
                className="w-full break-words text-green-600"
              >
                <span className="break-words whitespace-pre-wrap">
                  ✔ Stacking: {experience.stacking}
                </span>
              </AnimatedSpan>

              <AnimatedSpan
                delay={3000}
                className="w-full break-words text-green-600"
              >
                <p className="break-words whitespace-pre-wrap">
                  ✔ Description: {experience.description}
                </p>
              </AnimatedSpan>
            </Terminal>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

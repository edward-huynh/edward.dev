"use client";

import { cn } from "@/lib/utils";
import { AuroraText } from "./magicui/aurora-text";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Nguyễn Diên Sỹ Đạo",
    username: "Team Leader Frontend CDS",
    body: "An exceptional developer with outstanding technical skills and problem-solving abilities. His attention to detail and clean code practices make him a valuable asset to any team.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Võ Minh Cảnh",
    username: "Team Member Admin CDS",
    body: "Working with him has been a pleasure. His ability to quickly understand complex requirements and deliver high-quality solutions is impressive. A true professional.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Chung Chí Lâm",
    username: "Team Member Admin CDS",
    body: "His expertise in modern web technologies and dedication to creating user-friendly interfaces is remarkable. Always goes above and beyond to ensure project success.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Hồ Minh Oanh",
    username: "Team Leader Admin CDS",
    body: "A highly skilled developer who consistently delivers excellent results. His collaborative nature and technical knowledge make him an invaluable team member.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Trần Tiến Đạt",
    username: "Team Leader Backend CDS",
    body: "His ability to bridge frontend and backend development is exceptional. Always maintains high code quality and follows best practices. A reliable and talented developer.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Trần Quang Nhật",
    username: "Founder Lavenes Studio",
    body: "An innovative developer who brings creative solutions to complex problems. His technical expertise and commitment to excellence make him stand out in the industry.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const ReviewInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold tracking-tighter ">
        <AuroraText>REVIEWS</AuroraText>
      </h1>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
};

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-96 cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 p-4",
        // light styles
        "border-primary/40 hover:bg-primary/20",
        "dark:border-primary/40 dark:hover:bg-primary/20"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

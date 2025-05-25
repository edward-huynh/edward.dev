"use client";
import { Code, HomeIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const routes = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <Code />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <PhoneCall />,
  },
];
export const FloatRoute = () => {
  return (
    <div className="absolute bottom-[40%] right-5  flex flex-col gap-2">
      {routes.map((e, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                className="size-12 text-primary bg-white rounded-full border border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
                href={e.href}
              >
                {e.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">{e.name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

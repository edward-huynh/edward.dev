"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IProject } from "@/model/projects";
import Link from "next/link";

interface Carousel3DGlobeProps {
  items: IProject[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const Carousel3DGlobe = ({
  items,
  autoPlay = true,
  interval = 3000,
  className,
}: Carousel3DGlobeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalItems = items.length;

  // Reset the timer when currentIndex changes
  useEffect(() => {
    if (autoPlay) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, interval);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoPlay, interval]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate positions for all items in a globe-like arrangement
  const getItemPosition = (index: number) => {
    // Calculate angle based on position in the array and current index
    const itemCount = Math.min(totalItems, 8); // Show max 8 items at once
    const angleStep = (2 * Math.PI) / itemCount;

    // Calculate relative position (0 to itemCount-1)
    let relativeIndex = (index - currentIndex + totalItems) % totalItems;
    if (relativeIndex >= itemCount / 2) relativeIndex -= itemCount;
    if (relativeIndex <= -itemCount / 2) relativeIndex += itemCount;

    // Convert to angle (in radians)
    const angle = relativeIndex * angleStep;

    // Calculate 3D position on a sphere
    const radius = 400; // Radius of the globe
    const x = radius * Math.sin(angle);
    const z = radius * Math.cos(angle) - radius * 0.6; // Offset to push items back

    // Calculate rotation and scale based on position
    const rotateY = (angle * 180) / Math.PI; // Convert to degrees

    // Items further from center should be smaller
    const distanceFromCenter = Math.abs(angle) / Math.PI;
    const scale = 1 - distanceFromCenter * 0.4;

    // Determine visibility based on angle
    const isVisible = Math.abs(angle) < Math.PI * 0.8;

    return {
      x,
      z,
      rotateY,
      scale,
      isVisible,
      zIndex: 10 - Math.round(distanceFromCenter * 10),
    };
  };

  return (
    <div className={cn("relative w-full h-[600px] overflow-hidden", className)}>
      <div className="absolute inset-0 flex items-center justify-center perspective-[1200px]">
        {/* Globe background effect */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full border border-gray-200/20 opacity-30"
          style={{ transform: "translateZ(-600px)" }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full border border-gray-200/30 opacity-30"
          style={{ transform: "translateZ(-400px)" }}
        />

        {items.map((item, index) => {
          const { x, z, rotateY, scale, isVisible, zIndex } =
            getItemPosition(index);

          return (
            <AnimatePresence key={index} mode="wait">
              {isVisible && (
                <motion.div
                  className="absolute w-[350px] h-[450px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  initial={{
                    x: direction > 0 ? 500 : -500,
                    z: -400,
                    rotateY: direction > 0 ? -90 : 90,
                    scale: 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    x,
                    z,
                    rotateY,
                    scale,
                    opacity: scale * 0.9 + 0.1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  exit={{
                    x: direction > 0 ? -500 : 500,
                    z: -400,
                    rotateY: direction > 0 ? 90 : -90,
                    scale: 0.5,
                    opacity: 0,
                    transition: { duration: 0.4 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex,
                  }}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="relative w-full h-full bg-white rounded-xl overflow-hidden flex flex-col"
                  >
                    <div className="relative w-full h-[60%] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-top rounded-t-lg"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow gap-2">
                      <h3 className="text-lg font-bold truncate">
                        {item.name}
                      </h3>

                      <div className="w-full flex flex-wrap gap-1 items-center">
                        {item.category.map((category, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-primary/50 px-2 py-1 rounded-full font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm line-clamp-3">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-20"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-20"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

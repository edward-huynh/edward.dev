"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IProject } from "@/model/projects";
import Link from "next/link";

interface Carousel3DProps {
  items: IProject[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const Carousel3D = ({
  items,
  autoPlay = true,
  interval = 3000,
  className,
}: Carousel3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate indices for the carousel items
  const getVisibleIndices = () => {
    const totalItems = items.length;
    if (totalItems <= 1) return [0];
    if (totalItems === 2) return [0, 1];

    const prevIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;

    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleIndices = getVisibleIndices();

  // Get position for each card
  const getCardPosition = (index: number) => {
    if (items.length <= 1) return { x: 0, z: 0, rotateY: 0, scale: 1 };

    const positions = [
      { x: -350, z: -200, rotateY: 45, scale: 0.85 }, // Left card
      { x: 0, z: 0, rotateY: 0, scale: 1 }, // Center card
      { x: 350, z: -200, rotateY: -45, scale: 0.85 }, // Right card
    ];

    const positionIndex = visibleIndices.indexOf(index);
    return positionIndex !== -1
      ? positions[positionIndex]
      : { x: 0, z: -350, rotateY: 0, scale: 0.6 };
  };

  return (
    <div className={cn("relative w-full h-[600px] overflow-hidden", className)}>
      <div className="absolute inset-0 flex items-center justify-center perspective-[1200px]">
        {items.map((item, index) => {
          const { x, z, rotateY, scale } = getCardPosition(index);
          const isVisible = visibleIndices.includes(index);

          return (
            <AnimatePresence key={index} mode="wait">
              {isVisible && (
                <motion.div
                  className="absolute w-[400px] h-[500px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  initial={{
                    x: direction > 0 ? 400 : -400,
                    z: -250,
                    rotateY: direction > 0 ? -60 : 60,
                    scale: 0.6,
                  }}
                  animate={{
                    x,
                    z,
                    rotateY,
                    scale,
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    x: direction > 0 ? -400 : 400,
                    z: -250,
                    rotateY: direction > 0 ? 60 : -60,
                    scale: 0.6,
                    transition: { duration: 0.5 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: index === currentIndex ? 10 : 5,
                  }}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="relative w-full h-full bg-white rounded-xl overflow-hidden flex flex-col "
                  >
                    <div className="relative w-full h-[100%] overflow-hidden ">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-top rounded-t-lg"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow gap-2">
                      <h3 className="text-lg font-bold truncate text-black">
                        {item.name}
                      </h3>

                      <div className="w-full flex flex-wrap gap-1 items-center ">
                        {item.category.map((category, index) => (
                          <span
                            key={index}
                            className="text-[10px] bg-primary/50 px-2 py-1 rounded-full font-medium text-black"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm line-clamp-4 text-black">{item.description}</p>
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
        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-secondary/70 hover:bg-secondary rounded-full p-2 shadow-md z-20"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-secondary/70 hover:bg-secondary rounded-full p-2 shadow-md z-20"
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

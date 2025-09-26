"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LoadingRoute = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Listen to navigation events
    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  // Update loading state when pathname or search params change
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
    ></motion.div>
  );
};

export default LoadingRoute;

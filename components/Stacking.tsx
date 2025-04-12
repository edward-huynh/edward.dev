"use client";
import { icons } from "@/assets/img/icons";
import Image from "next/image";
import { motion } from "motion/react";

export const Stacking = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {icons.map((icon, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-1 item-center bg-primary/20 py-1 px-3 text-sm font-semibold rounded-full"
          >
            <Image src={icon.icon} width={20} height={20} alt="" />
            <span>{icon.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

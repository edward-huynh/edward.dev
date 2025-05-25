"use client";

import { ProjectsData } from "@/data";
import Image from "next/image";
import { IProject } from "@/model/projects";
import { Carousel3D } from "../Carousel3D";
import { Carousel3DGlobe } from "../Carousel3DGlobe";
import { AuroraText } from "../magicui/aurora-text";
import { motion } from "framer-motion";

export const ListProjects = ({
  type,
}: {
  type: "GRID" | "CAROUSEL" | "GLOBE";
}) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">
        <AuroraText>PROJECTS</AuroraText>
      </h1>
      <div className="w-full">
        {type === "GRID" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ProjectsData.slice(0, 8).map((item, index) => (
              <ProjectItem key={index} item={item} />
            ))}
          </motion.div>
        )}
        {type === "CAROUSEL" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel3D items={ProjectsData} autoPlay={true} interval={4000} />
          </motion.div>
        )}
        {type === "GLOBE" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel3DGlobe
              items={ProjectsData}
              autoPlay={true}
              interval={4000}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ProjectItem = ({ item }: { item: IProject }) => {
  return (
    <div className="flex flex-col gap-5 border rounded-lg p-5 ">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-2 items-center">
          <div className="size-[40px] min-w-[40px] rounded-full bg-primary"></div>
          <div className="flex flex-col ">
            <p className="text-lg font-bold capitalize">{item.name}</p>
            <span className="text-xs font-thin ">Tiên Phong CDS</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="">{item.description}</div>
      <div className="rounded-lg overflow-hidden shadow-sm">
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={500}
          className="w-full object-cover rounded-lg h-[400px] object-top  "
        />
      </div>
    </div>
  );
};

"use client";

import { ProjectsData } from "@/data";
import Image from "next/image";
import { IProject } from "@/model/projects";
import { Carousel3D } from "../Carousel3D";
import { AuroraText } from "../magicui/aurora-text";

export const ListProjects = ({ type }: { type: "GRID" | "CAROUSEL" }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold tracking-tighter ">
        <AuroraText>PROJECTS</AuroraText>
      </h1>
      <div className=" w-full  gap-5  ">
        {type === "GRID" && (
          <>
            {ProjectsData.slice(0, 4).map((item, index) => (
              <ProjectItem key={index} item={item} />
            ))}
          </>
        )}
        {type === "CAROUSEL" && (
          <Carousel3D items={ProjectsData} autoPlay={true} interval={4000} />
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

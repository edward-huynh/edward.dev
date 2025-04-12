"use client";

import { Carousel3D } from "../Carousel3D";
import { ProjectsData } from "@/data";

export const Carousel3DExample = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Dự án nổi bật</h2>
        <Carousel3D
          items={ProjectsData}
          autoPlay={true}
          interval={4000}
          className="mb-10"
        />

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Carousel 3D hiển thị các dự án với hiệu ứng xoay 3D mượt mà
          </p>
          <p className="text-sm text-gray-500">
            Sử dụng framer-motion để tạo hiệu ứng chuyển động
          </p>
        </div>
      </div>
    </section>
  );
};

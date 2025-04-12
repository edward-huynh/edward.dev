"use client";

import { Carousel3DExample } from "@/components/examples/Carousel3DExample";

export default function Carousel3DDemo() {
  return (
    <section className="size-full p-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Demo Carousel 3D
        </h1>
        <p className="text-center mb-10 max-w-2xl mx-auto">
          Component Carousel3D sử dụng framer-motion để tạo hiệu ứng 3D cho
          carousel. Component này hiển thị các phần tử trong một không gian 3D
          với hiệu ứng xoay và chuyển động mượt mà.
        </p>

        <Carousel3DExample />

        <div className="mt-16 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Cách sử dụng</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
            <code>{`import { Carousel3D } from "@/components/Carousel3D";
import { ProjectsData } from "@/data";

export default function MyPage() {
  return (
    <Carousel3D 
      items={ProjectsData} 
      autoPlay={true}
      interval={4000}
    />
  );
}`}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-6 mb-2">Props</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>items</strong>: Mảng các đối tượng dự án (IProject[])
            </li>
            <li>
              <strong>autoPlay</strong>: Tự động chuyển slide (mặc định: true)
            </li>
            <li>
              <strong>interval</strong>: Thời gian giữa các lần chuyển slide
              (mặc định: 3000ms)
            </li>
            <li>
              <strong>className</strong>: CSS classes tùy chỉnh
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

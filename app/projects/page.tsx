"use client";

import { useState } from "react";
import { ListProjects } from "@/components/projects/ListProjects";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Grid3x3, Globe } from "lucide-react";
import { CubeIcon } from "@radix-ui/react-icons";

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"GRID" | "CAROUSEL" | "GLOBE">(
    "GRID"
  );

  const toggleViewMode = () => {
    // Rotate through three view modes: GRID -> CAROUSEL -> GLOBE -> GRID
    if (viewMode === "GRID") setViewMode("CAROUSEL");
    else if (viewMode === "CAROUSEL") setViewMode("GLOBE");
    else setViewMode("GRID");
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dự án của tôi</h1>
        <Button
          onClick={toggleViewMode}
          variant="outline"
          className="flex items-center gap-2"
        >
          {viewMode === "GRID" ? (
            <>
              <CubeIcon className="h-4 w-4" />
              Xem dạng 3D
            </>
          ) : viewMode === "CAROUSEL" ? (
            <>
              <Globe className="h-4 w-4" />
              Xem dạng địa cầu
            </>
          ) : (
            <>
              <Grid3x3 className="h-4 w-4" />
              Xem dạng lưới
            </>
          )}
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ListProjects type={viewMode} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

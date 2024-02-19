"use client";

import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { projectData } from "@/utils/projectData";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const filteredProject = projectData.filter(
    (project) => project.id === currentIndex
  );

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 4 : prevIndex - 1));
  };

  const followingSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 4 ? 1 : prevIndex + 1));
  };

  return (
    <div className="relative">
      {/* arrow buttons */}
      <ChevronLeft
        className="absolute left-0 bottom-1/2 text-secondary"
        size={42}
        onClick={previousSlide}
      />
      <ChevronRight
        className="absolute right-0 bottom-1/2 text-secondary"
        size={42}
        onClick={followingSlide}
      />
      {/* Card */}
      {filteredProject.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          name={project.name}
          description={project.description}
          setCurrentIndex={setCurrentIndex}
        />
      ))}
    </div>
  );
}

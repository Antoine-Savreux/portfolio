"use client";

import ProjectCard from "./ProjectCard";
import forumImage from "@/../public/images/forum.jpg";
import weatherAppImage from "@/../public/images/weather-app.jpg";
import websiteImage from "@/../public/images/website.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const projectData = [
  {
    id: 1,
    name: "website",
    description: "a fully responsive website",
    image: websiteImage,
  },
  {
    id: 2,
    name: "weatherApp",
    description: "weather app",
    image: weatherAppImage,
  },
  {
    id: 3,
    name: "forum",
    description: "my personal view of forum",
    image: forumImage,
  },
  {
    id: 4,
    name: "website2",
    description:
      "a fully responsive website 2 a fully responsive website 2 a fully responsive website 2 a fully responsive website 2 a fully responsive website 2 a fully responsive website 2 ",
    image: websiteImage,
  },
];

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

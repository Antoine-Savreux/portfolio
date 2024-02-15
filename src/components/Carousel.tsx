import ProjectCard from "./ProjectCard";
import forumImage from "@/../public/images/forum.jpg";
import weatherAppImage from "@/../public/images/weather-app.jpg";
import websiteImage from "@/../public/images/website.jpg";

export default function Carousel() {
  const projectData = [
    {
      name: "website",
      description: "a fully responsive website",
      image: websiteImage,
    },
    {
      name: "weatherApp",
      description: "weather app",
      image: weatherAppImage,
    },
    {
      name: "forum",
      description: "my personal view of forum",
      image: forumImage,
    },
    {
      name: "website2",
      description: "a fully responsive website 2",
      image: websiteImage,
    },
  ];
  return (
    <div className="">
      {/* Card */}
      <ProjectCard image={websiteImage} name="test" description="test" />
    </div>
  );
}

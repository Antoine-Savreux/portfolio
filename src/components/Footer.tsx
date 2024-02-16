import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary flex flex-col items-center p-4 gap-2">
      <div className="flex space-x-2">
        <Github className=" text-primary" size={28} />
        <Linkedin className="text-primary" size={28} />
      </div>
      <p className="text-primary text-xs">
        Designed and built by Antoine Savreux
      </p>
    </footer>
  );
}

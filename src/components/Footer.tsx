import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary flex flex-col items-center p-8 gap-2">
      <div className="flex space-x-2">
        <Link href="https://github.com/Antoine-Savreux" target="blank">
          <Github className=" text-primary" size={28} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/antoine-savreux-079791281/"
          target="blank"
        >
          <Linkedin className=" text-primary" size={28} />
        </Link>
      </div>
      <p className="text-primary text-xs">
        Designed and built by Antoine Savreux
      </p>
    </footer>
  );
}

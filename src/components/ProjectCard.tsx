import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ image, name, description, url }: any) {
  return (
    <Link href={process.env.NEXT_PUBLIC_GITHUB_PERSONAL + url} target="blank">
      <div className="flex flex-col bg-bgCard rounded-2xl border-2 border-borderCard shadow-2xl overflow-clip h-80">
        <Image src={image} alt={name} className="h-3/5 object-cover" />
        <div className="px-4 pt-4 space-y-1 h-2/5">
          <h3 className="text-2xl font-semibold text-darkText">{name}</h3>
          <figcaption className="text-pretty line-clamp-2 text-textLightCard font-light">
            {description}
          </figcaption>
        </div>
      </div>
    </Link>
  );
}

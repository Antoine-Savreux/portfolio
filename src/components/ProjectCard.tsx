import Image from "next/image";

export default function ProjectCard({
  image,
  name,
  description,
  setCurrentIndex,
}: any) {
  return (
    <div className="flex flex-col bg-bgCard rounded-2xl border-2 border-borderCard shadow-2xl overflow-clip">
      <Image src={image} alt={name} />
      <div className="px-4 pb-12 pt-4 space-y-1">
        <h3 className="text-2xl font-semibold text-darkText">name</h3>
        <figcaption className="text-justify line-clamp-2 text-textLightCard font-light">
          {description}
        </figcaption>
      </div>
    </div>
  );
}

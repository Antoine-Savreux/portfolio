import Image from "next/image";

export default function ProjectCard({ image, name, description }: any) {
  return (
    <div className="flex flex-col bg-bgCard rounded-2xl border-2 border-borderCard shadow-xl overflow-hidden">
      <Image src={image} />
      <div className="px-4 pb-12 pt-4 space-y-1">
        <h3 className="text-2xl font-semibold text-darkText">name</h3>
        <figcaption className="text-justify line-clamp-2 text-textLightCard font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At neque
          cupiditate tenetur eum, quia mollitia eveniet, doloremque distinctio
          quasi nobis assumenda iste. Optio odit, nam pariatur repellat officiis
          quam dolorem.
        </figcaption>
      </div>
    </div>
  );
}

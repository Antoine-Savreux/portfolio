import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/utils/projectData";
import Title from "@/components/Title";
import ButtonWithLink from "@/components/ButtonWithLink";

export default function WorkPage() {
  return (
    <main className="min-h-full flex flex-col items-center p-8 space-y-8">
      <Title title="Mes projets" />
      <p className="text-base text-justify font-medium text-secondary">
        Retrouvez les différents projets sur lesquels je travaille ou j&apos;ai
        pu travaillé :
      </p>
      <section className="flex flex-col items-center space-y-4">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            url={project.url}
          />
        ))}
      </section>
      <ButtonWithLink title="Collaborer !" href="/contact" type="contact" />
    </main>
  );
}

import ButtonWithLink from "./ButtonWithLink";

export default function IntroTextButton({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-secondary">{text}</p>
      <ButtonWithLink
        title="Voir tous mes projets"
        href="/work"
        type="projects"
      />
    </div>
  );
}

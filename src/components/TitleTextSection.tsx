export default function TitleTextSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className=" space-y-6">
      <h1 className="text-5xl font-bold text-secondary">{title}</h1>
      <p className="text-base text-justify font-medium text-secondary">
        {text}
      </p>
    </section>
  );
}

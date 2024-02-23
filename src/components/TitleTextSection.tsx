export default function TitleTextSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className=" space-y-6 2xl:space-y-12 2xl:flex 2xl:flex-col 2xl:items-center">
      <h1 className="text-5xl 2xl:text-7xl font-bold text-secondary">
        {title}
      </h1>
      <p className="text-justify font-medium text-secondary 2xl:mx-12">
        {text}
      </p>
    </section>
  );
}

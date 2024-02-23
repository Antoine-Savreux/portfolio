export default function TitleTextSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className=" space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 2xl:flex 2xl:flex-col 2xl:items-center">
      <h1 className="text-5xl lg:text-6xl 2xl:text-7xl 2xl:text-nowrap font-bold text-secondary">
        {title}
      </h1>
      <p className="text-justify font-normal text-secondary 2xl:mx-12">
        {text}
      </p>
    </section>
  );
}

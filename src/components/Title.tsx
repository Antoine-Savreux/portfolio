export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold text-secondary text-pretty">
      {title}
    </h1>
  );
}

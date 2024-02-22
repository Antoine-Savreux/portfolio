export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-5xl font-bold text-secondary text-nowrap">{title}</h1>
  );
}

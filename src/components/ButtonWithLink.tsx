import Link from "next/link";
export default function Button({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <button className="bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full">
        {title}
      </button>
    </Link>
  );
}

import Link from "next/link";
import { Send, Download } from "lucide-react";

const buttonIcons = {
  contact: <Send />,
  download: <Download />,
};

export default function ButtonWithLink({
  title,
  href,
  type,
}: {
  title: string;
  href: string;
  type: string;
}) {
  const icon = buttonIcons[type];
  return (
    <Link href={href}>
      <button className="bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full flex gap-2">
        {title}
        {icon}
      </button>
    </Link>
  );
}

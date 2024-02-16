import Link from "next/link";
import { Send, Download, Folder } from "lucide-react";

const buttonIcons: Record<string, JSX.Element> = {
  contact: <Send />,
  download: <Download />,
  projects: <Folder />,
};

export default function ButtonWithLink({
  title,
  href,
  type,
}: {
  title: string;
  href: string;
  type: keyof typeof buttonIcons;
}) {
  const icon = buttonIcons[type];
  return (
    <Link href={href}>
      <button className="bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full flex gap-2 items-center">
        {title}
        {icon}
      </button>
    </Link>
  );
}

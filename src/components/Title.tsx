import { ArrowRightCircle } from "lucide-react";

export default function Title({ title }: { title: string }) {
  return (
    <div className="flex items-center space-x-2 justify-center w-full text-nowrap">
      <ArrowRightCircle size={34} className="text-secondary" />
      <h1 className="text-5xl font-bold text-secondary">{title}</h1>
    </div>
  );
}

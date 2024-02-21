"use client";

import { Download } from "lucide-react";

export default function DownloadButton({
  text,
  type,
  filePath,
  fileName,
}: {
  text: string;
  type: keyof typeof buttonIcons;
  filePath: string;
  fileName: string;
}) {
  const buttonIcons: Record<string, JSX.Element> = {
    download: <Download />,
  };

  const icon = buttonIcons[type];

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  return (
    <button
      onClick={handleDownload}
      className="bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full flex gap-2 items-center"
    >
      {text}
      {icon}
    </button>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antoine Savreux - Portfolio",
  description: "V1 de mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.className} h-screen w-screen bg-gradient-to-r from-bgApp`}
      >
        {/* header */}
        <Header />
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* header */}
        <Header />
        <Layout>{children}</Layout>
        {/* footer */}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const hanken_grotesk = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Results summary component",
  description: "Page built for a Frontend Mentor challenge",
  authors: { name: "Jena Carry" },
  keywords: [
    "Frontend Mentor",
    "Frontend",
    "Mentor",
    "Results summary component",
    "Result",
    "Summary",
    "Component",
    "HTML",
    "CSS",
    "TailwindCSS",
    "TypeScript",
    "React",
    "Next.js",
    "Responsive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hanken_grotesk.className}>{children}</body>
    </html>
  );
}

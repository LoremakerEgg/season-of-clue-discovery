import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Season of Discovery Clues",
  description: "Created by LoremakerEgg@GitHub using NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

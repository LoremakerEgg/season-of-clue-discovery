import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { SortWrapper } from "./context/sortContext";

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
    <SortWrapper>
      <html lang="en">
        <head>
          <link rel="icon" href="favicon.ico" />
        </head>
        <body className={inter.className}>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SortWrapper>
  );
}

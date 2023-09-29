import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Announcement from "./components/Announcement";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "This is the next",
  description: "So cool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Announcement />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

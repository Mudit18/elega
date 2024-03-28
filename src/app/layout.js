import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elega",
  description: "Elevating Tech Hiring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-customDarkBg1'}>{children}</body>
    </html>
  );
}

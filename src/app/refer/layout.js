'use client'

import { Inter } from "next/font/google";
import "../globals.css";
import { SessionProvider } from "next-auth/react";
import ToastProvider from "./toast.provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session}) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className + '  !bg-customDarkBg1'}>
          <ToastProvider>
            {children}
          </ToastProvider>
        </body>
      </html>
    </SessionProvider>
  );
}

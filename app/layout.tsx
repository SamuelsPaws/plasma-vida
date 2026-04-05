import type { Metadata } from "next";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: '400',
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plasma Vida Center",
  description: "Cuidamos tu salud de forma natural.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body
        className={clsx(
          geistSans.className,
          'relative'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

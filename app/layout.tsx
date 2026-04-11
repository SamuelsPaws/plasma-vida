import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: "Plasma Vida Center",
  description: "Cuidamos tu salud de forma natural.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Plasma Vida Center",
  url: "https://plasma-vida.vercel.app",
  logo: "https://plasma-vida.vercel.app/assets/logo.png",
}

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
          poppins.className,
          'relative'
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

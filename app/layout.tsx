import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import clsx from "clsx";
import WhatsappFloat from "@/components/WhatsappFloat";
import MotionProvider from "@/components/MotionProvider";
import { organization } from "@/data/organization";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: organization.name,
  description: organization.shortDescription,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: organization.name,
  url: organization.url,
  logo: organization.logoUrl,
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
          roboto.className,
          'relative'
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <Header />
          {children}
          <WhatsappFloat />
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

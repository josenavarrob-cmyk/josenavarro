import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josenavarro.vercel.app"),
  title: {
    default: "Jose Navarro",
    template: "%s | Jose Navarro"
  },
  description:
    "Customer Success leader exploring the intersection of AI, work, technology, and human behavior.",
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title: "Jose Navarro",
    description:
      "Essays on AI, work, technology, and society by Jose Navarro.",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

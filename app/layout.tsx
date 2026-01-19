import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SignatureIntro from "@/components/SignatureIntro";
import SignatureWatermark from "@/components/SignatureWatermark";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Liviu Orehovschi",
  description: "Software engineer and builder. Co-founder of xVal. Minerva University Class of '25.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Liviu Orehovschi",
    description: "Software engineer and builder. Co-founder of xVal. Minerva University Class of '25.",
    url: "https://liviuorehovschi.com",
    siteName: "Liviu Orehovschi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Liviu Orehovschi",
    description: "Software engineer and builder. Co-founder of xVal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SignatureIntro />
        <Navbar />
        <main className="pt-16">{children}</main>
        <SignatureWatermark />
      </body>
    </html>
  );
}

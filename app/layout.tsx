import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Taskopedia - Global Talent Solutions Powered by Bangladesh",
  description: "Hire world-class remote talent from Bangladesh. Access highly skilled, English-speaking professionals for long-term offshore placements, managed freelance work, and dedicated teams.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Taskopedia - Global Talent Solutions Powered by Bangladesh",
    description: "Hire world-class remote talent from Bangladesh. Access highly skilled, English-speaking professionals for long-term offshore placements, managed freelance work, and dedicated teams.",
    url: "https://taskopedia.com",
    siteName: "Taskopedia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Taskopedia - Talent for every task",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskopedia - Global Talent Solutions Powered by Bangladesh",
    description: "Hire world-class remote talent from Bangladesh. Access highly skilled, English-speaking professionals for long-term offshore placements, managed freelance work, and dedicated teams.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

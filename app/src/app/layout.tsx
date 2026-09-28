import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiyora - Midnight",
  description: "Prove membership without revealing your private credential. Built on Midnight.",
  icons: {
    icon: "/stitch/5e7077903d6849efbf0c19a4d13b7d75.png",
    shortcut: "/stitch/5e7077903d6849efbf0c19a4d13b7d75.png",
    apple: "/stitch/5e7077903d6849efbf0c19a4d13b7d75.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/stitch/5e7077903d6849efbf0c19a4d13b7d75.png" type="image/png" />
        <link rel="apple-touch-icon" href="/stitch/5e7077903d6849efbf0c19a4d13b7d75.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=JetBrains+Mono:wght@300;400;500;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="flex min-h-full flex-col bg-surface text-primary">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

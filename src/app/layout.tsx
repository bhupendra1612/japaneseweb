import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://easyjapanese.digitalrise24.com"),
  title: {
    default: "EasyJapanese — Learn Japanese the Modern Way",
    template: "%s | EasyJapanese",
  },
  description:
    "Master Japanese with visual learning, animated kanji strokes, gamification, and AI-powered practice. Structured JLPT path from N5 to N1.",
  keywords: [
    "learn japanese",
    "JLPT",
    "kanji",
    "japanese language",
    "N5",
    "N4",
    "N3",
    "N2",
    "N1",
    "japanese online",
    "gamified learning",
  ],
  authors: [{ name: "Digital Rise 24" }],
  creator: "Digital Rise 24",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easyjapanese.digitalrise24.com",
    siteName: "EasyJapanese",
    title: "EasyJapanese — Learn Japanese the Modern Way",
    description:
      "Master Japanese with visual learning, gamification, and AI practice. JLPT N5 to N1.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyJapanese — Learn Japanese the Modern Way",
    description:
      "Master Japanese with visual learning, gamification, and AI practice.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-surface-dark text-gray-900 dark:text-gray-100`} suppressHydrationWarning>
        <Suspense>
          <Providers>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}

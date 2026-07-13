import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Jaeyeon Won – Software Engineer",
  description:
    "Jaeyeon Won's interactive portfolio — ECE student at UT Austin building embedded systems, apps, and AI-powered tools. Explore experience, projects, and skills.",
  openGraph: {
    title: "Jaeyeon Won – Software Engineer",
    description:
      "Interactive portfolio showcasing experience, projects, and skills in software engineering, embedded systems, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 전체 페이지 래퍼 */}
        <div className="min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

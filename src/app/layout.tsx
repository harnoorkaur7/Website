import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import headerImage from "../images/header1.jpeg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
];

export const metadata: Metadata = {
  title: "Harnoor Kaur",
  description:
    "Academic portfolio for Harnoor Kaur showcasing research, CV, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="relative w-full">
            <div className="relative h-48 w-full sm:h-[16rem] md:h-[18rem] lg:h-[20rem]">
              <Image
                src={headerImage}
                alt="Research location"
                fill
                className="object-cover object-[50%_70%]"
                priority
                quality={100}
                sizes="1920px"
                unoptimized={false}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
                  Harnoor Kaur
                </h1>
              </div>
            </div>
            <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-5">
                <div className="flex-1" />
                <div className="flex items-center gap-3 text-xs sm:gap-6 sm:text-sm font-medium text-white drop-shadow-md">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-12">{children}</div>
          </main>
          <footer className="border-t border-slate-200 bg-slate-50 py-4 text-xs sm:py-6 sm:text-sm text-slate-500">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 sm:flex-row sm:justify-between sm:px-6">
              <p>© {new Date().getFullYear()} Harnoor Kaur</p>
              <p className="text-slate-400"></p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

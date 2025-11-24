import type { Metadata } from "next";
import Link from "next/link";
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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Harnoor Kaur | Portfolio",
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
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
              <Link href="/" className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
                  Harnoor
                </p>
                <span className="text-2xl font-semibold tracking-tight text-slate-900">
                  Harnoor Kaur
                </span>
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-slate-950"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
                >
                  Get in touch
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-6 py-12">{children}</div>
          </main>
          <footer className="border-t border-slate-200 bg-slate-50 py-6 text-sm text-slate-500">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
              <p>© {new Date().getFullYear()} Harnoor Kaur</p>
              <p className="text-slate-400">Portfolio crafted with Next.js</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

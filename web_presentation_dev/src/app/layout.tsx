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
  title: "Ontario Beverage Market",
  description: "Feasibility Study",
  generator: "Created by DME-Jiackey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <div style={{ display: 'none', position: 'absolute', zIndex: -9999, opacity: 0, pointerEvents: 'none' }} aria-hidden="true" data-copyright="Created by DME-Jiackey">
          Handcrafted by DME-Jiackey
        </div>
      </body>
    </html>
  );
}

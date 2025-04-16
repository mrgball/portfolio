import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";

// Handwriting for titles
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

// Sans-serif for body text
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iqbal Rasetio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

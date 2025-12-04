import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '700'], // Specify desired weights
  style: ['normal', 'italic'],
  subsets: ['latin'], // Specify required subsets
  display: 'swap', // 'swap' ensures text is visible while the font loads
  variable: '--font-josefin-sans', // Optional: for use with CSS variables or Tailwind
});


export const metadata: Metadata = {
  title: "Blog Editor",
  description: "Improve your Writing - Quick & Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} ${josefinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "The Plug Coin",
  description: "Official website of Plug on Solana",
  openGraph: {
    title: "The Plug Coin",
    description: "Official website of Plug on Solana",
    images: [
      {
        url: "/images/plugShares.jpg",
        width: 1200,
        height: 630,
        alt: "The Plug Coin",
      },
    ],
    type: "website",
    url: "https://theplugcoin.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Plug Coin",
    description: "Official website of Plug on Solana",
    images: ["/images/plugShares.jpg"],
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
        {children}
      </body>
    </html>
  );
}
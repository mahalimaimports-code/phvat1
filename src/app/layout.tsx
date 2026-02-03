import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PH Compliance-First Accounting",
  description: "Compliance-first invoicing and VAT-aware accounting for PH MSMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

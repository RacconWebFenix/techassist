import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from '@/lib/utils'
import HeaderMenu from "@/components/HeaderMenu";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: "TechAssist - Mais que tecnologia, assistência completa.",
  description: "Mais que tecnologia, assistência completa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'antialiased',
        inter.className,
      )}>
        <HeaderMenu />
        {children}
      </body>
    </html>
  );
}

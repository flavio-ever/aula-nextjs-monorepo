import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { HeaderSkeleton } from "./_components/skeletons";
import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "Aula Next.JS 15+",
  description: "Demonstração de recursos do Next.js 15+ para apresentação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
       className={`antialiased min-h-screen bg-background`}
        // className={`${inter.variable} antialiased min-h-screen bg-background`}
      >
        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

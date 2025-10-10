import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aula Next.JS 15+",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
      </head>
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

import "./globals.css";

import BottomGradient from "@/components/layout/bottom-gradient";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme";
import TopGradientLayout from "@/components/layout/top-gradient";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopGradientLayout />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

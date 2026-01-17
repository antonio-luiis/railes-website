import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConditionalNavbar } from "@/components/ConditionalNavbar";
import { Footer } from "@/components/Footer";
import { siteSettings } from "@/lib/mock-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Railes | Manufacturing Execution System",
  description: "See. Control. Optimize. All in one platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`} suppressHydrationWarning>
        <ConditionalNavbar siteSettings={siteSettings} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

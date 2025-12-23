import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConditionalNavbar } from "@/components/ConditionalNavbar";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Railes | Manufacturing Execution System",
  description: "See. Control. Optimize. All in one platform.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch site settings
  const siteSettings = await client.fetch(siteSettingsQuery);

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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConditionalNavbar } from "@/components/ConditionalNavbar";
import { Footer } from "@/components/Footer";
import { siteSettings } from "@/lib/mock-data";
import Script from "next/script";

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
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-GWXNBPXYDR" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GWXNBPXYDR');
          `}
        </Script>

        <ConditionalNavbar siteSettings={siteSettings} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

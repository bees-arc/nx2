import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollRevealProvider from "@/components/ui/ScrollRevealProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NYX — Digital Experiences Built to Perform",
    template: "%s | NYX",
  },
  description:
    "NYX is a digital design studio building websites and UI/UX experiences that turn attention into action. Website Design, Development & UI/UX.",
  keywords: ["website design", "web development", "UI/UX design", "digital agency", "NYX"],
  authors: [{ name: "NYX Studio" }],
  creator: "NYX Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nyxstudio.co",
    siteName: "NYX",
    title: "NYX — Digital Experiences Built to Perform",
    description:
      "We build digital experiences that turn attention into action. Website Design, Development & UI/UX.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYX — Digital Experiences Built to Perform",
    description: "We build digital experiences that turn attention into action.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        <main>
          <ScrollRevealProvider>
            {children}
          </ScrollRevealProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}

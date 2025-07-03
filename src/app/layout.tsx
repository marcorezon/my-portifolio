import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { BackgroundGradient } from "@/components/common/BackgroundGradient.tsx/BackgroundGradient";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "About me | Marco",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="w-full minFullScreen mt-[75px]">{children}</div>
        <BackgroundGradient />
        <Footer />
      </body>
    </html>
  );
}

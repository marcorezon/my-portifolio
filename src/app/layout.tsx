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
        <BackgroundGradient />
        <div className="w-full min-h-full xs:pb-[50px] md:pt-[75px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

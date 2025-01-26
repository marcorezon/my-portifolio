import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { BackgroundGradient } from "@/components/common/BackgroundGradient.tsx/BackgroundGradient";

const signika_negative = Signika_Negative({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
});

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
    <html lang="en" className={`${signika_negative.variable}`}>
      <body>
        <Header />
        <BackgroundGradient />
        <div className="w-full min-h-full xs:pb-[50px] md:pt-[75px]">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";

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
        <div className="w-full min-h-full xs:pb-[75px] md:pb-0 md:pt-[75px]">{children}</div>
      </body>
    </html>
  );
}

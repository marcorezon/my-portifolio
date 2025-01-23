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
        <div className="pt-[75px] w-full h-full">{children}</div>
      </body>
    </html>
  );
}

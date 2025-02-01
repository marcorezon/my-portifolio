import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import "./globals.css";
import { BackgroundGradient } from "@/components/common/BackgroundGradient.tsx/BackgroundGradient";


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
        <div className="w-full min-h-full">{children}</div>
        <BackgroundGradient />
      </body>
    </html>
  );
}

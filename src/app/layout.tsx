import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
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
      <body className="xs:pb-[110px] md:pb-[35px] bg-black">
        <Header />
        <div className="w-full min-h-full xs:pb-[50px] md:pt-[75px]">{children}</div>
      </body>
    </html>
  );
}

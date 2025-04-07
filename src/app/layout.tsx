import type { Metadata } from "next";
import "./globals.css";
import BackgroundAnimation from "@/components/background-animation";
import {Toaster} from "sonner";

export const metadata: Metadata = {
  title: "Portoflio Alexis",
  description: "Portfolio de Alexis, développeur web full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={"dark"}>
      <body className="min-h-screen bg-[#0f0f14] text-[#e2e8f0]">
      <Toaster  richColors={true}/>
      <BackgroundAnimation/>
        {children}
      </body>
    </html>
  );
}

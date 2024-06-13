import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja",
  description: "Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

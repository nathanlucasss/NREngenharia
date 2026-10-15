import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loremprime.example.com"),
  title: {
    default: "Lorem Prime | Casas à venda em Campo Belo",
    template: "%s | Lorem Prime",
  },
  description:
    "Corretora em Campo Belo, MG. Casas à venda na cidade, com visita marcada direto com quem anuncia.",
  openGraph: {
    title: "Lorem Prime | Casas à venda em Campo Belo",
    description:
      "Veja casas à venda em Campo Belo, MG, e fale com a corretora para agendar uma visita.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}

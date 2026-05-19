import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nrengenharia.example.com"),
  title: {
    default: "NR Engenharia | Imoveis em Campo Belo MG",
    template: "%s | NR Engenharia",
  },
  description:
    "Portal de busca de imoveis com filtros completos, mapa e detalhes para Campo Belo em Minas Gerais.",
  openGraph: {
    title: "NR Engenharia",
    description:
      "Busca de imoveis em Campo Belo MG com experiencia de listagem no estilo grandes corretoras.",
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
    <html lang="pt-BR" className={nunito.variable}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

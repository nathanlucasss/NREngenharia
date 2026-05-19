"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useScrolled } from "@/hooks/use-scrolled";

const menuLinks = [
  { href: "/imoveis", label: "Comprar" },
  { href: "/imoveis", label: "Atendimento" },
  { href: "/imoveis", label: "Lancamentos" },
  { href: "/imoveis", label: "Imoveis de Luxo" },
  { href: "/imoveis", label: "Corretores" },
  { href: "/imoveis", label: "Ajuda" },
];

export function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrolled(20);

  return (
    <header className={scrolled ? "lux-header scrolled" : "lux-header"}>
      <div className="site-container lux-header-inner">
        <Link href="/" className="lux-brand" aria-label="Voltar para pagina inicial">
          NR Engenharia
        </Link>

        <nav className="lux-nav" aria-label="Navegacao principal">
          {menuLinks.map((link) => (
            <Link key={link.label} href={link.href} className="lux-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="lux-actions">
          <button type="button" className="lux-button ghost">
            Entrar
          </button>
          <button type="button" className="lux-button ghost">
            Criar conta
          </button>
          <button type="button" className="lux-button primary">
            Anunciar imovel
          </button>
        </div>

        <button
          type="button"
          className={isMenuOpen ? "lux-menu-button active" : "lux-menu-button"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="lux-mobile-menu"
          aria-label="Abrir menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="lux-mobile-menu"
            className="lux-mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="site-container lux-mobile-menu-inner">
              {menuLinks.map((link) => (
                <Link key={link.label} href={link.href} className="lux-mobile-link">
                  {link.label}
                </Link>
              ))}
              <button type="button" className="lux-button ghost">
                Entrar
              </button>
              <button type="button" className="lux-button ghost">
                Criar conta
              </button>
              <button type="button" className="lux-button primary">
                Anunciar imovel
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

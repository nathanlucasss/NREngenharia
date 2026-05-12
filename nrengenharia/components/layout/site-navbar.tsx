"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useScrolled } from "@/hooks/use-scrolled";

interface SiteNavbarProps {
  transparentOnTop?: boolean;
}

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/imoveis", label: "Imoveis" },
  { href: "/#contato", label: "Contato" },
];

export function SiteNavbar({ transparentOnTop = false }: SiteNavbarProps) {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = transparentOnTop && isHome && !scrolled && !isMenuOpen;

  return (
    <header className={isTransparent ? "site-header transparent" : "site-header solid"}>
      <div className="site-container site-header-inner">
        <Link href="/" className="brand-mark" aria-label="Voltar para pagina inicial">
          Lorem Prime
        </Link>

        <nav className="desktop-nav" aria-label="Navegacao principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/imoveis" className="cta-button desktop-cta">
          Ver Imoveis
        </Link>

        <button
          type="button"
          className={isMenuOpen ? "menu-button active" : "menu-button"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="site-container mobile-menu-inner">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="mobile-link">
                  {link.label}
                </Link>
              ))}
              <Link href="/imoveis" className="cta-button">
                Ver Imoveis
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

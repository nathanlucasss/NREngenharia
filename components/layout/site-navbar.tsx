"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useScrolled } from "@/hooks/use-scrolled";

interface SiteNavbarProps {
  transparentOnTop?: boolean;
}

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export function SiteNavbar({ transparentOnTop = false }: SiteNavbarProps) {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = transparentOnTop && isHome && !scrolled && !isMenuOpen;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={isTransparent ? "site-header transparent" : "site-header solid"}>
      <div className="site-container site-header-inner">
        <Link href="/" className="brand" aria-label="Lorem Prime, página inicial">
          <span className="brand-monogram" aria-hidden>
            LP
          </span>
          <span className="brand-name">Lorem Prime</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "nav-link active" : "nav-link"}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/imoveis" className="cta-button desktop-cta">
          Ver casas
        </Link>

        <button
          type="button"
          className={isMenuOpen ? "menu-button active" : "menu-button"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
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
            initial={{ opacity: 1, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <div className="site-container mobile-menu-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/imoveis" className="cta-button" onClick={() => setIsMenuOpen(false)}>
                Ver casas
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

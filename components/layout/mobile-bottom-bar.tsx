"use client";

import Link from "next/link";

export function MobileBottomBar() {
  return (
    <nav className="mobile-bottom-bar" aria-label="Navegacao mobile">
      <Link href="/">Inicio</Link>
      <Link href="/imoveis">Buscar</Link>
      <Link href="/imoveis">Mapa</Link>
      <Link href="/imoveis">Favoritos</Link>
    </nav>
  );
}

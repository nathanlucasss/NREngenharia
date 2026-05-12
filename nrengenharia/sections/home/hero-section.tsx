"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  image: string;
}

export function HeroSection({ image }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <Image
        src={image}
        alt="Imovel de alto padrao"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-overlay" />

      <div className="site-container hero-content">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/imoveis" className="cta-button">
            Ver Imoveis
          </Link>
          <Link href="#destaques" className="ghost-button light">
            Explorar destaques
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

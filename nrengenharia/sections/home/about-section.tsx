import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section className="section-block section-dark">
      <div className="site-container split-layout">
        <FadeIn>
          <div className="split-copy">
            <p className="section-eyebrow">Sobre</p>
            <h2 className="section-heading">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.
            </h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <p className="section-description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="split-image-wrap">
            <Image
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80"
              alt="Arquitetura contemporanea"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="split-image"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

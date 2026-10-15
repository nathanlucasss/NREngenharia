"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d={direction === "left" ? "M11.2 3.8 L6 9 L11.2 14.2" : "M6.8 3.8 L12 9 L6.8 14.2"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const safeImages = useMemo(() => {
    return images.length > 0
      ? images
      : [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
        ];
  }, [images]);

  const currentImage = safeImages[index] ?? safeImages[0];
  const total = safeImages.length;

  const goToPrevious = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-root">
      <div
        className="carousel-main"
        tabIndex={0}
        role="region"
        aria-label={`Galeria de ${alt}`}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") goToPrevious();
          if (event.key === "ArrowRight") goToNext();
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="carousel-main-image-wrap"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={currentImage}
              alt={alt}
              fill
              className="carousel-main-image"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          className="carousel-control left"
          onClick={goToPrevious}
          aria-label="Imagem anterior"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          className="carousel-control right"
          onClick={goToNext}
          aria-label="Próxima imagem"
        >
          <Chevron direction="right" />
        </button>

        <div className="carousel-counter">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      <div className="carousel-thumbs">
        {safeImages.map((image, imageIndex) => (
          <button
            key={`${image}-${imageIndex}`}
            type="button"
            className={index === imageIndex ? "carousel-thumb active" : "carousel-thumb"}
            onClick={() => setIndex(imageIndex)}
            aria-label={`Abrir imagem ${imageIndex + 1}`}
            aria-current={index === imageIndex}
          >
            <Image
              src={image}
              alt=""
              fill
              className="carousel-thumb-image"
              sizes="160px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const safeImages = useMemo(() => {
    return images.length > 0
      ? images
      : [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
        ];
  }, [images]);

  const currentImage = safeImages[index] ?? safeImages[0];

  const goToPrevious = () => {
    setIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-root">
      <div className="carousel-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="carousel-main-image-wrap"
            initial={{ opacity: 0.2, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 0.98 }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src={currentImage}
              alt={alt}
              fill
              className="carousel-main-image"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <button type="button" className="carousel-control left" onClick={goToPrevious}>
          <span aria-hidden>{"<-"}</span>
        </button>
        <button type="button" className="carousel-control right" onClick={goToNext}>
          <span aria-hidden>{"->"}</span>
        </button>

        <div className="carousel-counter">
          {index + 1} / {total}
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
          >
            <Image
              src={image}
              alt={`${alt} miniatura ${imageIndex + 1}`}
              fill
              className="carousel-thumb-image"
              sizes="120px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

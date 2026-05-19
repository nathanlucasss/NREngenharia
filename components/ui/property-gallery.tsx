import { ImageCarousel } from "@/components/ui/image-carousel";

interface PropertyGalleryProps {
  images: string[];
  alt: string;
}

export function PropertyGallery({ images, alt }: PropertyGalleryProps) {
  return <ImageCarousel images={images} alt={alt} />;
}

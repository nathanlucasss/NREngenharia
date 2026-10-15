import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function FadeIn({ children, className }: FadeInProps) {
  return <div className={className}>{children}</div>;
}

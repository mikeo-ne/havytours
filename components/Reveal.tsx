"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/hooks";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "ol";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const [ref, visible] = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

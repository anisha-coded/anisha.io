import React from "react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function Polaroid({
  src,
  alt,
  caption,
  ratio = "aspect-[4/5]",
  rotate = "-rotate-2",
  className,
}) {
  return (
    <figure
      className={cn(
        "bg-card p-2 shadow-[0_16px_30px_-22px_rgba(67,85,47,0.75)] transition-transform duration-500 ease-out hover:rotate-0",
        rotate,
        className
      )}
    >
      <Image src={src} alt={alt} className={cn("w-full object-cover", ratio)} />
      {caption ? (
        <figcaption className="px-1 pb-1 pt-2 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-hazel">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
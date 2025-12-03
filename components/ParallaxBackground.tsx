"use client";

import Image from "next/image";

interface ParallaxBackgroundProps {
  imageSrc: string;
  className?: string;
}

export default function ParallaxBackground({
  imageSrc,
  className = "",
}: ParallaxBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={imageSrc}
        alt="Background"
        fill
        priority
        quality={85}
        className="object-cover"
        style={{
          objectPosition: "center 40%", // Foca na parte inferior, escondendo completamente o topo com texto
        }}
      />
      {/* Gradiente escuro nas bordas - efeito vinheta */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      {/* Gradiente mais escuro no topo para esconder qualquer texto */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/90 via-black/60 to-transparent" />
    </div>
  );
}

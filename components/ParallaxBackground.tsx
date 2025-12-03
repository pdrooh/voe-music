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
      {/* Overlay escuro para melhorar legibilidade do texto */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Overlay mais escuro no topo para esconder qualquer texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/80" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
    </div>
  );
}

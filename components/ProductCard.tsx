"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl?: string;
  imagePosition?: string; // Para ajustar o posicionamento da imagem (ex: "center 30%", "center top", etc)
  imageScale?: number; // Para dar zoom na imagem (ex: 1.2 = 20% de zoom)
  available: boolean;
  whatsappLink?: string;
  delay?: number;
}

export default function ProductCard({
  name,
  price,
  imageUrl,
  imagePosition = "center center",
  imageScale = 1,
  available,
  whatsappLink,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="bg-accent-dark/40 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/60 transition-all duration-300 group overflow-hidden card-glow hover:card-glow-hover"
    >
      <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden group-hover:brightness-110 transition-all duration-300">
        {imageUrl ? (
          <div 
            className="absolute inset-0 bg-cover" 
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: imagePosition,
              backgroundSize: imageScale !== 1 ? `${100 * imageScale}%` : 'cover',
            }} 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag size={64} className="text-white/30" />
          </div>
        )}
        {!available && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-condensed text-lg text-white">ESGOTADO</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-condensed text-xl text-white mb-2">{name}</h3>
        <p className="text-lg font-bold text-white mb-4">{price}</p>
        {available && whatsappLink ? (
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="neon" className="w-full">
              <ShoppingBag size={18} className="mr-2" />
              Comprar no WhatsApp
            </Button>
          </a>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            <Check size={18} className="mr-2" />
            Indisponível
          </Button>
        )}
      </div>
    </motion.div>
  );
}


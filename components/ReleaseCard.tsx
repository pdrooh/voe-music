"use client";

import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";
import { Button } from "./ui/button";

interface ReleaseCardProps {
  title: string;
  artist: string;
  coverUrl?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  delay?: number;
}

export default function ReleaseCard({
  title,
  artist,
  coverUrl,
  youtubeUrl,
  spotifyUrl,
  delay = 0,
}: ReleaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-accent-dark/30 rounded-lg border border-white/20 hover:border-white/50 transition-all group overflow-hidden"
    >
      <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback para hqdefault se maxresdefault não estiver disponível
              const currentSrc = e.currentTarget.src;
              if (currentSrc.includes('maxresdefault')) {
                e.currentTarget.src = currentSrc.replace('maxresdefault', 'hqdefault');
              } else {
                e.currentTarget.style.display = 'none';
              }
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Music size={64} className="text-white/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {youtubeUrl && (
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <Play size={24} className="text-white ml-1" fill="white" />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-condensed text-lg md:text-xl text-white mb-1 break-words leading-tight" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          wordBreak: 'break-word'
        }}>{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{artist}</p>
        <div className="flex gap-2">
          {youtubeUrl && (
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                YouTube
              </Button>
            </a>
          )}
          {spotifyUrl && (
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                Spotify
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}


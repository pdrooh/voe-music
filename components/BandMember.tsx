"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

interface BandMemberProps {
  name: string;
  role: string;
  delay?: number;
}

export default function BandMember({ name, role, delay = 0 }: BandMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center p-6 bg-accent-dark/30 rounded-lg border border-white/20 hover:border-white/50 transition-all group"
    >
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-gray-700 group-hover:to-gray-800 transition-all">
        <Music2 size={48} className="text-white/50 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-condensed text-xl text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
    </motion.div>
  );
}


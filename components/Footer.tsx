"use client";

import Link from "next/link";
import { Instagram, Youtube, Music, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-accent-dark/20 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="font-impact text-2xl sm:text-3xl text-white mb-2">
              VOE <span className="text-gray-300">MUSIC</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 italic">
              Mais que músicas, são orações.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#banda" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Banda
                </Link>
              </li>
              <li>
                <Link href="#lancamentos" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Lançamentos
                </Link>
              </li>
              <li>
                <Link href="#loja" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link href="#agenda" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Agenda
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/voemusic.oficial/?igsh=MW1tcmRqbDZxa2V6cA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://open.spotify.com/intl-pt/artist/5NUftlA80vjye1K0oxwiSv?si=gL0djgC0QnO5VYBOl136dg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Spotify"
              >
                <Music size={20} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5514998592865&text=Olá%21+Gostaria+de+saber+mais+informações+para+uma+possível+agenda+da+VOE+MUSIC.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-dark/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 px-4">
            © {new Date().getFullYear()} VOE MUSIC - Ministério de Louvor da Igreja VOE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}


"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Music2, Calendar, MessageCircle, ShoppingBag, Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReleaseCard from "@/components/ReleaseCard";
import ProductCard from "@/components/ProductCard";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Mais que músicas, são orações.",
    "Som do céu sobre a terra.",
    "Adoração que transforma vidas.",
    "Música que toca o coração de Deus.",
    "Canções que expressam nosso anseio.",
  ];

  // Partículas com valores fixos e independentes - calculadas uma vez
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 10 + 10, // 10-20 segundos - velocidade fixa
      delay: Math.random() * 5,
      xMove: (Math.random() - 0.5) * 50,
      yMove: -100 - Math.random() * 50, // Movimento vertical variado
      opacity: [
        0.05 + Math.random() * 0.1,
        0.2 + Math.random() * 0.1,
        0.05 + Math.random() * 0.1
      ],
    }));
  }, []); // Calculado apenas uma vez, independente de qualquer mudança

  // Garantir que a página sempre comece no topo ao recarregar
  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
    // Também garantir após o carregamento completo
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Efeito Typewriter
  useEffect(() => {
    if (!mounted) return;

    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNext = 1000;

    // Iniciar a digitação após um delay inicial
    if (displayedText === "" && !isDeleting && currentPhraseIndex === 0) {
      const startTimeout = setTimeout(() => {
        setDisplayedText(currentPhrase[0] || "");
      }, 1000);
      return () => clearTimeout(startTimeout);
    }

    if (!isDeleting && displayedText === currentPhrase) {
      // Pausa antes de começar a deletar
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      // Pausa antes de começar a próxima frase
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, pauseBeforeNext);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, mounted, phrases]);

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome") as string;
    const pastor = formData.get("pastor") as string;
    const igreja = formData.get("igreja") as string;
    const contato = formData.get("contato") as string;
    const data = formData.get("data") as string;
    const local = formData.get("local") as string;

    const mensagem = `Olá! Gostaria de solicitar um show/agenda da VOE MUSIC.

*Informações do Evento:*
• Nome: ${nome}
• Pastor da igreja local: ${pastor}
• Nome da igreja: ${igreja}
• Contato responsável: ${contato}
• Data do evento: ${data}
• Local do evento: ${local}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5514998592865&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <ParallaxBackground imageSrc="/show-1.JPG" />
        
        {/* Background Layers - Gradiente sutil nas bordas */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 z-[1]" style={{ background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%)' }} />
        
        {/* Animated Gradient Orbs - Independentes */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none z-[2]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(163,163,163,0.03),transparent_50%)] pointer-events-none z-[2]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none z-[2]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Animated Grain Overlay - Independente */}
        <motion.div
          className="absolute inset-0 bg-grain opacity-30 pointer-events-none z-[2]"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles Effect - Independentes e Responsivas */}
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full z-[3]"
            style={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [0, particle.yMove, 0],
              x: [0, particle.xMove, 0],
              opacity: particle.opacity,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
              repeatDelay: 0,
            }}
          />
        ))}
        
        {/* Animated Light Rays - Independente */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-impact text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] mb-4 sm:mb-6 leading-none px-2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-white inline-block relative text-glow-subtle">
                VOE
              </span>{" "}
              <span className="text-gray-300 inline-block relative text-glow-subtle">
                MUSIC
              </span>
            </motion.h1>

            <motion.p
              className="text-condensed text-lg sm:text-xl md:text-2xl lg:text-4xl mb-6 sm:mb-8 text-white tracking-wider px-4 relative min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                opacity: { duration: 1, delay: 0.5 },
                y: { duration: 1, delay: 0.5 },
              }}
            >
              <span className="relative inline-block">
                {displayedText}
                <motion.span
                  className="inline-block w-[2px] sm:w-[3px] h-[0.8em] sm:h-[0.9em] bg-white ml-1 sm:ml-1.5 align-middle"
                  animate={{
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="neon"
                  onClick={() => scrollToSection("lancamentos")}
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto relative overflow-hidden group backdrop-blur-sm"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">VER LANÇAMENTOS</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("agenda")}
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto relative overflow-hidden group backdrop-blur-sm"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">AGENDAR SHOW</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="cursor-pointer"
                onClick={() => scrollToSection("banda")}
              >
                <ChevronDown
                  size={32}
                  className="text-white hover:text-gray-300 transition-colors"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Banda Section */}
      <section id="banda" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-impact text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 leading-tight px-2 text-glow-subtle">
              <span className="text-white inline-block">A</span>{" "}
              <span className="text-gray-300 inline-block">BANDA</span>
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start"
            >
              {/* Foto da Banda */}
              <div className="relative order-2 md:order-1">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/30 shadow-2xl card-glow hover:card-glow-hover transition-all duration-300">
                  <img
                    src="/banda.jpg"
                    alt="VOE MUSIC - A Banda"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Texto */}
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    A Voe Music nasceu no coração da Igreja Voe, como uma expressão viva de adoração coletiva.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    Somos líderes, músicos e cantores que carregam a fome por um mover genuíno da glória de Deus. Acreditamos no poder manifesto do Espírito através de uma adoração sem performance, mas carregada de paixão por Jesus.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-3 sm:mb-4">
                    Estamos debaixo da visão da nossa igreja local, em plena unidade com o que Deus tem revelado à nossa liderança. Cantamos o que estamos vivendo como igreja e isso faz com que cada canção carregue algo único, com propósito e poder.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-3 sm:mb-4">
                    Nossas canções são ecos do que o Espírito está soprando em nosso meio. A Voe Music existe com o intuito de liberar o som do céu sobre a terra.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                    Mais do que músicas, nossas canções são orações que expressam nosso anseio por um avivamento.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lançamentos Section */}
      <section id="lancamentos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-accent-dark/50 to-accent-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-impact text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 leading-tight px-2 text-glow-subtle">
              <span className="text-white inline-block">LANÇAMENTOS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Nossas músicas e álbuns disponíveis nas principais plataformas
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
              <motion.a
                href="https://open.spotify.com/intl-pt/artist/5NUftlA80vjye1K0oxwiSv?si=gL0djgC0QnO5VYBOl136dg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-xs sm:text-sm md:text-base backdrop-blur-sm">
                  <Music2 size={16} className="mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Spotify</span>
                  <span className="sm:hidden">Spotify</span>
                </Button>
              </motion.a>
              <motion.a
                href="https://music.youtube.com/channel/UCRnwjs_17IJuY50tKI7V6Jw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-xs sm:text-sm md:text-base backdrop-blur-sm">
                  <Play size={16} className="mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">YouTube Music</span>
                  <span className="sm:hidden">YT Music</span>
                </Button>
              </motion.a>
              <motion.a
                href="https://www.deezer.com/br/artist/11362762"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  <Music2 size={20} className="mr-2" />
                  Deezer
                </Button>
              </motion.a>
              <motion.a
                href="https://music.amazon.com.br/artists/B06XP8DDXJ/voe-music"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  <Music2 size={20} className="mr-2" />
                  Amazon Music
                </Button>
              </motion.a>
              <motion.a
                href="https://music.apple.com/br/artist/voe-music/1818668346"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  <Music2 size={20} className="mr-2" />
                  Apple Music
                </Button>
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ReleaseCard
              title="Inefável"
              artist="VOE MUSIC"
              coverUrl="https://img.youtube.com/vi/TSCZWri0_Wo/maxresdefault.jpg"
              youtubeUrl="https://youtu.be/TSCZWri0_Wo?si=fIflJ9BC2ZvbEWkE"
              spotifyUrl="https://open.spotify.com/intl-pt/track/3PPMXgNoXTx1CMTeqPwcRZ?si=67dbb42123774ebc"
              delay={0}
            />
            <ReleaseCard
              title="Paira"
              artist="VOE MUSIC"
              coverUrl="https://img.youtube.com/vi/kdxunfraYM0/maxresdefault.jpg"
              youtubeUrl="https://youtu.be/kdxunfraYM0?si=976RZvHh-d0MkjTM"
              spotifyUrl="https://open.spotify.com/intl-pt/track/1mQ3v4nvABqaaA4idpg5N0?si=e2c018ac8703452c"
              delay={0.1}
            />
            <ReleaseCard
              title="Fogo, Paixão e Lágrimas"
              artist="VOE MUSIC"
              coverUrl="https://img.youtube.com/vi/0X1lBaNhRsA/maxresdefault.jpg"
              youtubeUrl="https://youtu.be/0X1lBaNhRsA?si=KvB8UOpXiJsjDH20"
              spotifyUrl="https://open.spotify.com/intl-pt/track/7MhupCDIhxkPLG6OoWra8e?si=bf656e2b833c4f65"
              delay={0.2}
            />
            <ReleaseCard
              title="Guardado em Seu Amor"
              artist="VOE MUSIC"
              coverUrl="https://img.youtube.com/vi/NLRRBhHwNtQ/maxresdefault.jpg"
              youtubeUrl="https://youtu.be/NLRRBhHwNtQ?si=PS_jAQrgw5BnrG77"
              spotifyUrl="https://open.spotify.com/intl-pt/track/1KIcZbk5h2qQN5Od2ICD9T?si=78c745b1094448ff"
              delay={0.3}
            />
            <ReleaseCard
              title="Outro Igual Não Há (Ao Rei Nós Coroamos)"
              artist="VOE MUSIC"
              coverUrl="https://img.youtube.com/vi/HmD42nmeGss/maxresdefault.jpg"
              youtubeUrl="https://youtu.be/HmD42nmeGss?si=q2E9Vt-T9-neQxLH"
              spotifyUrl="https://open.spotify.com/intl-pt/track/2eAOxkH8NVgdLY1YlbFK7k?si=ab782091351d4908"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Loja Section */}
      <section id="loja" className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-impact text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 leading-tight px-2 text-glow-subtle">
              <span className="text-white inline-block">LOJA</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Camisetas e produtos exclusivos do VOE MUSIC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ProductCard
              name="Camiseta VOE MUSIC - Modelo 1"
              price="R$ 120,00"
              imageUrl="/camiseta-1.jpg"
              imagePosition="center 35%"
              available={true}
              whatsappLink="https://api.whatsapp.com/send/?phone=5514998592865&text=Olá%21+Gostaria+de+comprar+a+Camiseta+VOE+MUSIC+-+Modelo+1&type=phone_number&app_absent=0"
              delay={0}
            />
            <ProductCard
              name="Camiseta VOE MUSIC - Modelo 2"
              price="R$ 120,00"
              imageUrl="/camiseta-2.jpg"
              imagePosition="center 35%"
              available={true}
              whatsappLink="https://api.whatsapp.com/send/?phone=5514998592865&text=Olá%21+Gostaria+de+comprar+a+Camiseta+VOE+MUSIC+-+Modelo+2&type=phone_number&app_absent=0"
              delay={0.1}
            />
            <ProductCard
              name="Camiseta VOE MUSIC - Modelo 3"
              price="R$ 120,00"
              imageUrl="/camiseta-3.jpg"
              imagePosition="center 30%"
              available={true}
              whatsappLink="https://api.whatsapp.com/send/?phone=5514998592865&text=Olá%21+Gostaria+de+comprar+a+Camiseta+VOE+MUSIC+-+Modelo+3&type=phone_number&app_absent=0"
              delay={0.2}
            />
            <ProductCard
              name="Camiseta VOE MUSIC - Modelo 4"
              price="R$ 120,00"
              imageUrl="/camiseta-4.jpg"
              imagePosition="center 20%"
              imageScale={1.3}
              available={true}
              whatsappLink="https://api.whatsapp.com/send/?phone=5514998592865&text=Olá%21+Gostaria+de+comprar+a+Camiseta+VOE+MUSIC+-+Modelo+4&type=phone_number&app_absent=0"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-accent-dark to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-impact text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 leading-tight px-2 text-glow-subtle">
              <span className="text-white inline-block">AGENDA</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Quer levar o VOE MUSIC para o seu evento? Entre em contato conosco!
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-stretch">
              {/* Imagem em Destaque */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-full min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-2xl order-1 lg:order-1"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(/agenda.PNG)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* Formulário em Card Elegante */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative order-2 lg:order-2 flex items-stretch"
              >
                <div className="w-full bg-black/80 backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl">
                  <div className="text-center mb-4 sm:mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/10 mb-2 sm:mb-3">
                      <Calendar size={24} className="sm:size-7 md:size-8 text-white" />
                    </div>
                    <h3 className="text-condensed text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white mb-2 sm:mb-3 leading-tight">AGENDAR SHOW</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5 px-2">
                      Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp
                    </p>
                  </div>

                  <form className="space-y-2.5 sm:space-y-3" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm bg-black/50 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all"
                    />
                    <input
                      type="text"
                      name="pastor"
                      placeholder="Pastor da igreja local"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm bg-black/50 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all"
                    />
                    <input
                      type="text"
                      name="igreja"
                      placeholder="Nome da igreja"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm bg-black/50 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all"
                    />
                    <input
                      type="tel"
                      name="contato"
                      placeholder="Contato responsável (WhatsApp)"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm bg-black/50 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all"
                    />
                    <input
                      type="date"
                      name="data"
                      placeholder="Data do evento"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm bg-black/50 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all"
                    />
                    <input
                      type="text"
                      name="local"
                      placeholder="Local do evento"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm bg-black/50 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all"
                    />
                    <Button variant="neon" className="w-full text-xs sm:text-sm py-2.5 sm:py-3 mt-1" type="submit">
                      Enviar Solicitação
                    </Button>
                  </form>

                  <div className="mt-4 sm:mt-5 text-center">
                    <p className="text-xs text-gray-400 mb-3">ou</p>
                    <a
                      href="https://api.whatsapp.com/send/?phone=5514998592865&text=Olá%21+Gostaria+de+saber+mais+informações+para+uma+possível+agenda+da+VOE+MUSIC.&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg" className="w-full text-xs sm:text-sm py-2.5 sm:py-3">
                        <MessageCircle size={16} className="sm:size-4 mr-2" />
                        Falar no WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="font-impact text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 leading-tight px-2 text-glow-subtle">
              <span className="text-white inline-block">CONTATO</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Entre em contato conosco para parcerias, dúvidas ou mais informações
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <motion.a
              href="https://www.instagram.com/voemusic.oficial/?igsh=MW1tcmRqbDZxa2V6cA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-accent-dark/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/20 hover:border-white/60 transition-all duration-300 text-center group card-glow hover:card-glow-hover"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Music2 size={24} className="sm:size-7 md:size-8 text-white" />
              </div>
              <h3 className="text-condensed text-base sm:text-lg md:text-xl text-white mb-2">INSTAGRAM</h3>
              <p className="text-xs sm:text-sm text-gray-400 break-words">@voemusic.oficial</p>
            </motion.a>

            <motion.a
              href="https://open.spotify.com/intl-pt/artist/5NUftlA80vjye1K0oxwiSv?si=gL0djgC0QnO5VYBOl136dg"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-accent-dark/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/60 transition-all duration-300 text-center group card-glow hover:card-glow-hover"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Music2 size={24} className="sm:size-7 md:size-8 text-white" />
              </div>
              <h3 className="text-condensed text-base sm:text-lg md:text-xl text-white mb-2">SPOTIFY</h3>
              <p className="text-xs sm:text-sm text-gray-400">Ouça no Spotify</p>
            </motion.a>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=5514998592865&text=Olá%21+Gostaria+de+saber+mais+informações+para+uma+possível+agenda+da+VOE+MUSIC.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-accent-dark/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/60 transition-all duration-300 text-center group card-glow hover:card-glow-hover"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <MessageCircle size={24} className="sm:size-7 md:size-8 text-white" />
              </div>
              <h3 className="text-condensed text-base sm:text-lg md:text-xl text-white mb-2">WHATSAPP</h3>
              <p className="text-xs sm:text-sm text-gray-400">Contato para convites</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

// Importing the exact generated image
// @ts-ignore
import coverImg from "../assets/images/metodo_caneta_mockup_1789586977098.jpg";

interface HeaderProps {
  isInstagram?: boolean;
}

export default function Header({ isInstagram = false }: HeaderProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const savedTime = localStorage.getItem("countdown_dietacaneta_15m");
    let initialTime = 15 * 60;
    if (savedTime) {
      const parsed = parseInt(savedTime, 10);
      if (!isNaN(parsed) && parsed > 0) {
        initialTime = parsed;
      }
    }
    setTimeLeft(initialTime);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const resetVal = 15 * 60;
          localStorage.setItem("countdown_dietacaneta_15m", resetVal.toString());
          return resetVal;
        }
        const newVal = prev - 1;
        localStorage.setItem("countdown_dietacaneta_15m", newVal.toString());
        return newVal;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#FCFAF6] via-[#FAF6ED] to-white border-b border-olive-200">
      {/* Delicate background decorative gradients for a high-end designer touch */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[55%] bg-brand-green/3 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[45%] bg-brand-red/2 rounded-full filter blur-3xl -z-10" />

      {/* 15-minute Limited Time Banner */}
      <div className="bg-brand-red text-white py-3 px-4 text-center text-xs md:text-sm font-bold tracking-wider flex items-center justify-center gap-2 shadow-sm font-sans z-20 relative">
        <span className="inline-flex h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
        <span className="uppercase text-[10px] md:text-xs tracking-widest text-[#fcf8f2]">Oferta de lançamento · expira em</span>
        <span className="bg-white/15 px-2.5 py-0.5 rounded font-mono text-xs md:text-sm font-black tracking-widest text-brand-yellow">
          {formatTime(timeLeft)}
        </span>
      </div>

      {isInstagram && (
        <div className="bg-[#10702d] text-white py-2 px-4 text-center text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-inner font-sans z-20 relative border-b border-[#0c5622]">
          <span>🎁</span>
          <span>Você está em uma página de oferta exclusiva para seguidores do Instagram!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-8 md:pt-4 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-1 md:mt-2">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Tag / Category Badge - Clean, elegant & premium typography */}
            <div className="inline-flex items-center self-start px-3.5 py-1.5 rounded-full bg-brand-green/5 text-brand-green border border-brand-green/15 text-[10.5px] font-bold tracking-[0.14em] uppercase shadow-2xs mb-3">
              <span>GUIA PRÁTICO PARA MULHERES QUE USAM CANETA EMAGRECEDORA</span>
            </div>

            {/* Headline and ad matching title */}
            <div className="mb-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-green uppercase tracking-tight leading-snug font-sans">
                A CANETA DIMINUIU SUA FOME.
                <span className="block text-brand-red mt-1">
                  MAS VOCÊ SABE O QUE COMER AGORA?
                </span>
              </h1>
            </div>

            {/* Subheadline description */}
            <div className="mb-3">
              <p className="text-sm md:text-base text-olive-750 font-sans leading-relaxed max-w-2xl font-medium">
                Descubra como se alimentar mesmo com pouco apetite, nutrir seu corpo e cuidar da sua massa muscular durante o emagrecimento sem dietas complicadas.
              </p>
            </div>

            {/* 3 Key Benefit Bullet Items */}
            <div className="space-y-2.5 mb-5 font-sans">
              <div className="flex items-center gap-2.5 text-sm md:text-base text-olive-850 font-medium">
                <Check className="w-5 h-5 text-brand-green flex-shrink-0 stroke-[2.5]" />
                <span>Sem precisar pesar comida ou contar calorias</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm md:text-base text-olive-850 font-medium">
                <Check className="w-5 h-5 text-brand-green flex-shrink-0 stroke-[2.5]" />
                <span>14 dias de cardápios prontos para facilitar sua rotina</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm md:text-base text-olive-850 font-medium">
                <Check className="w-5 h-5 text-brand-green flex-shrink-0 stroke-[2.5]" />
                <span>Estratégias para lidar com a volta do apetite</span>
              </div>
            </div>

            {/* Main CTA Button & Under-button assurance */}
            <div className="pt-2 flex flex-col items-start gap-2.5">
              <a 
                href="#planos"
                className="inline-flex items-center justify-center bg-[#10702d] hover:bg-[#0c5722] text-white font-black px-8 py-4.5 rounded-[20px] shadow-xl hover:shadow-emerald-900/10 transition-all duration-200 transform hover:-translate-y-0.5 text-center group text-base select-none cursor-pointer w-full sm:w-auto"
              >
                <span className="flex items-center gap-2 uppercase font-sans tracking-wide">
                  <span>QUERO APRENDER O QUE COMER</span>
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </span>
              </a>
              <div className="flex items-center gap-2 text-xs text-olive-700 font-semibold pl-1">
                <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Apenas R$ 29,97 · Garantia de 7 dias</span>
              </div>
            </div>

          </div>

          {/* Book Image Cover Column without bonus or price stickers */}
          <div className="lg:col-span-5 flex justify-center items-center relative pt-4 lg:pt-0">
            {/* Soft background ambient lights */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-yellow/10 rounded-full filter blur-3xl -z-10" />
            <div className="absolute bottom-4 left-1/4 w-80 h-80 bg-brand-green/5 rounded-full filter blur-3xl -z-10" />

            <div className="relative z-10 w-full max-w-[420px] lg:max-w-[480px]">
              {/* Premium Book Mockup Showcase */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-2xl shadow-[0_20px_50px_-12px_rgba(6,53,21,0.22)] overflow-hidden border border-white/60 bg-[#FCFAF5]"
              >
                <img 
                  src={coverImg} 
                  alt="Método D.I.E.T.A. da Caneta - Livro e Guias de Acompanhamento"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover select-none"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

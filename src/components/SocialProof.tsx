/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, ShieldCheck, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const EXPERIENCES = [
  {
    id: "exp-1",
    theme: "Clareza das Orientações",
    focus: "Facilidade de compreensão e aplicação",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/07/lucineia.jpeg",
    alt: "Relato autêntico sobre clareza das orientações educativas"
  },
  {
    id: "exp-2",
    theme: "Praticidade dos Cardápios",
    focus: "Refeições simples e práticas para a rotina",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/07/e7e51f3b-82dc-4de3-8f12-3a45a399794f.jpeg",
    alt: "Relato autêntico sobre praticidade dos cardápios educativos"
  },
  {
    id: "exp-3",
    theme: "Organização na Rotina",
    focus: "Adaptação leve sem complicação no dia a dia",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/07/0a0924a9-7493-442d-81ed-f2b7edf5b552-1.jpeg",
    alt: "Relato autêntico sobre organização e aplicabilidade na rotina"
  }
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string; theme: string } | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXPERIENCES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === EXPERIENCES.length - 1 ? 0 : prev + 1));
  };

  const currentExperience = EXPERIENCES[currentIndex];

  return (
    <section className="bg-[#F8F6F0] py-10 sm:py-14 md:py-20 border-b border-[#EAE4D7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-[#116B38] uppercase bg-[#EFECE3] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full inline-block font-sans border border-[#EAE4D7]">
            EXPERIÊNCIAS REAIS
          </span>
          
          <h2 className="text-[23px] xs:text-[25px] sm:text-3xl md:text-4xl font-bold font-sans text-[#203D2B] mt-2.5 sm:mt-3 tracking-tight leading-snug">
            O que dizem sobre os materiais da Nutri Andréia
          </h2>
          
          <p className="text-[14px] sm:text-[15px] text-[#203D2B]/80 mt-2 font-sans font-medium leading-relaxed">
            Relatos espontâneos sobre a clareza das orientações e a experiência com os materiais educativos.
          </p>
        </div>

        {/* Carousel Filter/Selector Tabs (Desktop & Mobile) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6 flex-wrap">
          {EXPERIENCES.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold transition-all cursor-pointer font-sans ${
                  isActive
                    ? "bg-[#116B38] text-white shadow-2xs"
                    : "bg-white text-[#203D2B]/75 hover:text-[#203D2B] border border-[#EAE4D7]"
                }`}
              >
                <span>{item.theme}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Card Container */}
        <div className="relative max-w-md mx-auto">
          
          {/* Main Slide Card */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-[#EAE4D7] shadow-xs flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExperience.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header Tag / Theme */}
                <div className="flex items-center justify-between mb-2.5 pb-2.5 border-b border-[#EAE4D7]">
                  <span className="text-xs sm:text-[13px] font-bold text-[#116B38] uppercase tracking-wide font-sans">
                    {currentExperience.theme}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#203D2B]/60 font-medium font-sans">
                    {currentIndex + 1} de {EXPERIENCES.length}
                  </span>
                </div>

                {/* Subtitle / Focus */}
                <p className="text-[12px] sm:text-[13px] text-[#203D2B]/75 mb-2.5 font-sans leading-snug">
                  {currentExperience.focus}
                </p>

                {/* Image Container with high readability & click to enlarge */}
                <div 
                  onClick={() => setSelectedImage({ 
                    url: currentExperience.imageUrl, 
                    alt: currentExperience.alt, 
                    theme: currentExperience.theme 
                  })}
                  className="relative group overflow-hidden rounded-xl bg-zinc-50 border border-[#EAE4D7] cursor-pointer"
                  title="Clique para ampliar"
                >
                  <img
                    src={currentExperience.imageUrl}
                    alt={currentExperience.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain mx-auto transition-transform duration-200 group-hover:scale-[1.01]"
                  />
                  
                  {/* Subtle hover overlay indicating click to enlarge */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/95 text-[#203D2B] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5 text-[#116B38]" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>

                {/* Ethical Footer */}
                <div className="mt-3 pt-2.5 border-t border-[#EAE4D7] flex items-center justify-between text-[10.5px] sm:text-[11px] text-[#203D2B]/70 font-sans">
                  <span className="flex items-center gap-1 text-[#203D2B] font-medium">
                    <Check className="w-3.5 h-3.5 text-[#116B38] stroke-[2.8]" />
                    <span>Conteúdo autorizado</span>
                  </span>
                  <span className="text-[10px] text-[#203D2B]/60">
                    Identidade preservada
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows Controls */}
          <div className="flex items-center justify-between mt-3.5 px-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Relato anterior"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#203D2B] bg-white hover:bg-[#F8F6F0] border border-[#EAE4D7] px-3 py-1.5 rounded-xl shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#116B38]" />
              <span>Anterior</span>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {EXPERIENCES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para relato ${idx + 1}`}
                  className={`transition-all rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? "w-5 h-1.5 bg-[#116B38]"
                      : "w-1.5 h-1.5 bg-[#DDD5C3] hover:bg-[#B79C68]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próximo relato"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#203D2B] bg-white hover:bg-[#F8F6F0] border border-[#EAE4D7] px-3 py-1.5 rounded-xl shadow-2xs transition-colors cursor-pointer"
            >
              <span>Próximo</span>
              <ChevronRight className="w-4 h-4 text-[#116B38]" />
            </button>
          </div>

        </div>

        {/* Ethical Footer Note (CFN Compliance & Transparency) */}
        <div className="mt-6 sm:mt-8 max-w-xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs text-[#203D2B]/75 leading-relaxed font-sans flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#116B38] flex-shrink-0" />
            <span>
              Em conformidade com o CFN, os relatos são voluntários, respeitam o sigilo e refletem a experiência educacional com os materiais.
            </span>
          </p>
        </div>

      </div>

      {/* Accessible Image Modal for Full Mobile & Desktop Readability */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 p-4 flex items-center justify-center cursor-zoom-out backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full bg-white rounded-2xl sm:rounded-3xl p-4 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-zinc-100">
                <span className="text-xs font-bold text-[#116B38] uppercase">
                  {selectedImage.theme}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[80vh] overflow-y-auto rounded-xl">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>

              <p className="text-[10.5px] text-zinc-500 text-center mt-2.5">
                Relato espontâneo autêntico · Identidade resguardada
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

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
    <section className="bg-[#FAF9F5] py-14 md:py-20 border-b border-olive-150 relative overflow-hidden">
      {/* Subtle organic watermark accents */}
      <div className="absolute top-10 left-6 text-6xl opacity-5 select-none pointer-events-none">🌿</div>
      <div className="absolute bottom-10 right-6 text-6xl opacity-5 select-none pointer-events-none">🍃</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#10702d] uppercase bg-olive-100/80 px-3.5 py-1.5 rounded-full inline-block font-sans border border-olive-200/60">
            EXPERIÊNCIAS REAIS
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-zinc-900 mt-4 tracking-tight leading-tight">
            O que dizem sobre os materiais da Nutri Andréia
          </h2>
          
          <p className="text-sm sm:text-base text-olive-800 mt-3 font-sans font-medium leading-relaxed">
            Relatos espontâneos sobre a clareza das orientações e a experiência com os materiais educativos.
          </p>
        </div>

        {/* Carousel Filter/Selector Tabs (Desktop & Mobile) */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {EXPERIENCES.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer font-sans ${
                  isActive
                    ? "bg-[#10702d] text-white shadow-xs"
                    : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80"
                }`}
              >
                <span>{item.theme}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Card Container */}
        <div className="relative max-w-lg mx-auto">
          
          {/* Main Slide Card */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-zinc-200/90 shadow-md flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExperience.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header Tag / Theme */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-zinc-100">
                  <span className="text-xs sm:text-sm font-bold text-[#10702d] uppercase tracking-wide font-sans">
                    {currentExperience.theme}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium font-sans">
                    {currentIndex + 1} de {EXPERIENCES.length}
                  </span>
                </div>

                {/* Subtitle / Focus */}
                <p className="text-xs sm:text-sm text-zinc-600 mb-3 font-sans leading-snug">
                  {currentExperience.focus}
                </p>

                {/* Image Container with high readability & click to enlarge */}
                <div 
                  onClick={() => setSelectedImage({ 
                    url: currentExperience.imageUrl, 
                    alt: currentExperience.alt, 
                    theme: currentExperience.theme 
                  })}
                  className="relative group overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-150 cursor-pointer"
                  title="Clique para ampliar"
                >
                  <img
                    src={currentExperience.imageUrl}
                    alt={currentExperience.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[380px] object-contain mx-auto transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                  
                  {/* Subtle hover overlay indicating click to enlarge */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/95 text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#10702d]" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>

                {/* Ethical Footer */}
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 font-sans">
                  <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#10702d] stroke-[2.5]" />
                    <span>Conteúdo autorizado</span>
                  </span>
                  <span className="text-[10px] text-zinc-500">
                    Identidade preservada
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Relato anterior"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-3.5 py-2 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#10702d]" />
              <span>Anterior</span>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {EXPERIENCES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para relato ${idx + 1}`}
                  className={`transition-all rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? "w-6 h-2 bg-[#10702d]"
                      : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próximo relato"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-3.5 py-2 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Próximo</span>
              <ChevronRight className="w-4 h-4 text-[#10702d]" />
            </button>
          </div>

        </div>

        {/* Ethical Footer Note (CFN Compliance & Transparency) */}
        <div className="mt-8 max-w-xl mx-auto text-center">
          <p className="text-xs text-olive-700/80 leading-relaxed font-sans flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10702d] flex-shrink-0" />
            <span>
              Em conformidade ética com o Conselho Federal de Nutrição (CFN), não utilizamos fotos de antes e depois nem expomos dados pessoais. Os relatos refletem a experiência educacional com os materiais.
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
              className="relative max-w-lg w-full bg-white rounded-3xl p-4 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-100">
                <span className="text-xs font-bold text-[#10702d] uppercase">
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

              <p className="text-[11px] text-zinc-500 text-center mt-3">
                Relato espontâneo autêntico · Identidade resguardada
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, ShieldCheck, ZoomIn, X } from "lucide-react";
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
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string; theme: string } | null>(null);

  return (
    <section className="bg-[#F8F6F0] py-6 sm:py-8 md:py-10 border-b border-[#EAE4D7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with compact spacing */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
          <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#203D2B]/70 uppercase font-sans mb-1 block">
            EXPERIÊNCIAS REAIS
          </span>
          
          <h2 className="font-serif text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#203D2B] tracking-tight leading-snug">
            O que dizem sobre os materiais da Nutri Andréia
          </h2>
          
          <p className="text-[13.5px] sm:text-[15px] text-[#203D2B]/80 mt-1 font-sans font-normal leading-relaxed">
            Relatos espontâneos sobre a clareza das orientações e a experiência com os materiais educativos.
          </p>
        </div>

        {/* Depoimentos um abaixo do outro com espaçamento reduzido */}
        <div className="max-w-md sm:max-w-lg mx-auto space-y-2.5 sm:space-y-3">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.04 }}
              className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-[#EAE4D7] shadow-2xs hover:border-[#DDD5C3] transition-all"
            >
              {/* Header com tema e foco */}
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#EAE4D7]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#116B38]" />
                  <span className="text-[11px] sm:text-[11.5px] font-bold text-[#116B38] uppercase tracking-wide font-sans">
                    {exp.theme}
                  </span>
                </div>
                <span className="text-[10.5px] sm:text-[11px] text-[#203D2B]/60 font-sans">
                  {exp.focus}
                </span>
              </div>

              {/* Imagem do Depoimento com clique para ampliar */}
              <div 
                onClick={() => setSelectedImage({ 
                  url: exp.imageUrl, 
                  alt: exp.alt, 
                  theme: exp.theme 
                })}
                className="relative group overflow-hidden rounded-lg bg-[#FAF8F5] border border-[#EAE4D7]/80 cursor-pointer"
                title="Clique para ampliar"
              >
                <img
                  src={exp.imageUrl}
                  alt={exp.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[250px] sm:max-h-[290px] object-contain mx-auto transition-transform duration-200 group-hover:scale-[1.01]"
                />
                
                {/* Overlay sutil ao passar o cursor */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/95 text-[#203D2B] text-[10.5px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1 font-sans">
                    <ZoomIn className="w-3 h-3 text-[#116B38]" />
                    <span>Ampliar</span>
                  </span>
                </div>
              </div>

              {/* Rodapé ético discreto */}
              <div className="mt-1.5 pt-1.5 border-t border-[#EAE4D7] flex items-center justify-between text-[10.5px] sm:text-[11px] text-[#203D2B]/70 font-sans">
                <span className="flex items-center gap-1 text-[#203D2B] font-medium">
                  <Check className="w-3 h-3 text-[#116B38] stroke-[2.8]" />
                  <span>Conteúdo autorizado</span>
                </span>
                <span className="text-[10px] text-[#203D2B]/55">
                  Identidade preservada
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical Footer Note */}
        <div className="mt-3.5 sm:mt-4 max-w-xl mx-auto text-center">
          <p className="text-[10.5px] sm:text-[11px] text-[#203D2B]/70 leading-relaxed font-sans flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#116B38] flex-shrink-0" />
            <span>
              Em conformidade com o CFN, os relatos são voluntários, respeitam o sigilo e refletem a experiência educacional com os materiais.
            </span>
          </p>
        </div>

      </div>

      {/* Accessible Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/75 z-50 p-4 flex items-center justify-center cursor-zoom-out backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative max-w-lg w-full bg-white rounded-2xl p-4 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#EAE4D7]">
                <span className="text-xs font-bold text-[#116B38] uppercase font-sans">
                  {selectedImage.theme}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-1 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors cursor-pointer"
                  aria-label="Fechar"
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

              <p className="text-[11px] text-[#203D2B]/60 text-center mt-2.5 font-sans">
                Relato espontâneo autêntico · Identidade resguardada
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

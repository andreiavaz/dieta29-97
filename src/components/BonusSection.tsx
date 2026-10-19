/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Check, Video } from "lucide-react";
import { motion } from "motion/react";

const RECIPE_GUIDES = [
  {
    title: "Receitas para Almoço",
    description: "Opções nutritivas e fáceis para compor suas refeições principais.",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/94053bf0-eb4e-41f8-bed6-86912076bee9.png",
    alt: "Capa do Guia de Receitas para Almoço"
  },
  {
    title: "Receitas para Lanche",
    description: "Praticidade para os momentos de pouco apetite ou pausas do dia.",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/ea166169-9be6-497d-9273-8cfebffe17e6.png",
    alt: "Capa do Guia de Receitas para Lanche"
  },
  {
    title: "Receitas para Jantar",
    description: "Preparações leves e aconchegantes para encerrar a rotina.",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/94053bf0-eb4e-41f8-bed6-86912076bee9.png",
    alt: "Capa do Guia de Receitas para Jantar"
  }
];

export default function BonusSection() {
  return (
    <section className="bg-[#FAF8F5] py-10 sm:py-14 md:py-20 border-b border-[#EAE4D7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-[#203D2B]/70 uppercase font-sans mb-2 block">
            MATERIAIS COMPLEMENTARES
          </span>

          <h2 className="font-serif text-[23px] xs:text-[25px] sm:text-[30px] md:text-[36px] font-bold text-[#203D2B] tracking-tight leading-snug">
            Além do método, você recebe materiais para colocar tudo em prática
          </h2>

          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#203D2B]/80 mt-2 sm:mt-3 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            Tenha em mãos ideias simples de refeições e uma aula direcionada para apoiar suas escolhas durante o tratamento com a caneta.
          </p>
        </div>

        {/* 1. Aula de Planejamento Alimentar com Mockup Oficial */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-[#EAE4D7] shadow-2xs mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Mockup da Aula em Vídeo */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex items-center justify-center">
                <img
                  src="https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/ed0d5ad6-b33e-40d8-ba37-1cc94e949cda.png"
                  alt="Mockup da Aula Especial em Vídeo com Andréia Vaz"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain select-none drop-shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Video Lesson Copy */}
            <div className="md:col-span-7 space-y-2.5 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#116B38]/10 text-[#116B38] text-[10.5px] font-bold uppercase tracking-wider font-sans">
                <Video className="w-3.5 h-3.5" />
                <span>Aula Especial em Vídeo</span>
              </div>

              <h3 className="font-serif text-[18px] sm:text-[22px] font-bold text-[#203D2B] leading-snug">
                Aula: Planejamento Alimentar para Quem Usa Caneta
              </h3>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#203D2B]/75 font-sans leading-relaxed font-normal">
                Uma aula em vídeo com a nutricionista Andréia Vaz ensinando como estruturar sua rotina de refeições e adaptar sua alimentação no dia a dia com leveza e segurança.
              </p>

              <div className="pt-1 flex flex-wrap gap-4 text-[12.5px] text-[#203D2B] font-medium font-sans">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#116B38] stroke-[2.8]" />
                  <span>Conteúdo didático e direto</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#116B38] stroke-[2.8]" />
                  <span>Assista no celular ou computador</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#116B38] stroke-[2.8]" />
                  <span>Acesso digital imediato</span>
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. 3 Guias de Receitas */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#203D2B]/65 font-sans">
              3 Guias de Receitas Inclusos
            </h4>
            <span className="text-[11.5px] font-medium text-[#203D2B]/70 flex items-center gap-1 font-sans">
              <BookOpen className="w-3.5 h-3.5 text-[#116B38]" />
              <span>Formato digital em PDF</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {RECIPE_GUIDES.map((guide, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.04 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#EAE4D7] shadow-2xs hover:border-[#DDD5C3] transition-all flex items-center gap-3.5"
              >
                {/* Compact eBook Mockup beside text */}
                <div className="w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#FAF8F5] border border-[#EAE4D7] flex items-center justify-center p-1 shadow-2xs">
                  <img
                    src={guide.imageUrl}
                    alt={guide.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                {/* Text beside mockup */}
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] uppercase font-semibold text-[#116B38] tracking-wider block mb-0.5 font-sans">
                    Guia Prático
                  </span>

                  <h4 className="text-[14px] sm:text-[15px] font-bold text-[#203D2B] font-sans leading-snug">
                    {guide.title}
                  </h4>

                  <p className="text-[12px] sm:text-[13px] text-[#203D2B]/70 font-sans mt-0.5 leading-snug font-normal">
                    {guide.description}
                  </p>

                  <div className="mt-2 pt-1.5 border-t border-[#EAE4D7] flex items-center justify-between text-[11px] text-[#116B38] font-medium font-sans">
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3 stroke-[2.8]" />
                      <span>Incluso</span>
                    </span>
                    <span className="text-[#203D2B]/50 text-[10px]">PDF Digital</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quiet editorial transition note to the offer section */}
        <div className="text-center pt-2">
          <p className="text-[13px] sm:text-[14px] text-[#203D2B]/75 font-sans font-medium">
            Todos esses materiais fazem parte do acesso completo ao Método D.I.E.T.A. da Caneta.
          </p>
        </div>

      </div>
    </section>
  );
}

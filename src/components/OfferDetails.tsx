/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const MODULE_ITEMS = [
  {
    title: "O que comer quando a fome diminui",
    description: "Aprenda a fazer escolhas mais nutritivas mesmo nos dias em que o apetite quase desaparece."
  },
  {
    title: "Como montar refeições equilibradas sem pesar alimentos",
    description: "Use uma estrutura simples para organizar seus pratos sem contar calorias."
  },
  {
    title: "Como preservar sua massa muscular durante o emagrecimento",
    description: "Entenda quais hábitos alimentares ajudam a cuidar do seu corpo enquanto o peso diminui."
  },
  {
    title: "Como lidar com sintomas comuns durante o uso da caneta",
    description: "Tenha orientações práticas para situações como enjoo, intestino preso, fraqueza e platô."
  },
  {
    title: "14 dias de cardápios prontos para facilitar sua rotina",
    description: "Tenha sugestões simples para parar de improvisar e ganhar mais clareza no dia a dia."
  },
  {
    title: "Como construir hábitos para não depender da caneta para sempre",
    description: "Use esse período para criar uma base mais consistente para o longo prazo."
  }
];

const BONUS_INCLUDED = [
  "Guia digital completo",
  "14 dias de cardápios prontos",
  "Método D.I.E.T.A. explicado passo a passo",
  "Orientações práticas para o dia a dia"
];

export default function OfferDetails() {
  return (
    <section id="metodo" className="bg-[#F8F6F0] py-10 sm:py-14 md:py-20 border-b border-[#EAE4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-[23px] xs:text-[25px] sm:text-3xl md:text-4xl font-bold font-sans text-[#203D2B] tracking-tight leading-snug">
            O que você vai encontrar no Método D.I.E.T.A. da Caneta
          </h2>
          <p className="text-[14.5px] sm:text-base md:text-lg text-[#203D2B]/80 mt-2 sm:mt-3 leading-relaxed max-w-2xl mx-auto font-sans font-medium">
            Um plano prático para te ajudar a aproveitar essa fase com mais clareza, leveza e direção sem dietas complicadas.
          </p>
        </div>

        {/* Content Grid: Mockup on the left, Cards + Included block on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Product Mockup - Scaled proportionally on mobile */}
          <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-none flex justify-center"
            >
              <div className="absolute inset-0 bg-[#203D2B]/5 rounded-3xl filter blur-xl -z-10" />

              <img
                src="https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/08fd9998-b11a-4dab-9b7a-7fddbe7a7db0.png"
                alt="Método D.I.E.T.A. da Caneta - Mockup do Guia e Cardápios"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-[460px] sm:max-h-[540px] drop-shadow-lg select-none"
              />
            </motion.div>
          </div>

          {/* Right Column: 6 Main Cards + Mini Bloco Complementar */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            
            {/* 6 Main Cards */}
            {MODULE_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 border border-[#EAE4D7] shadow-2xs hover:border-[#DDD5C3] transition-all"
              >
                <h3 className="text-[14px] sm:text-base font-bold text-[#203D2B] font-sans leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12.5px] sm:text-sm text-[#203D2B]/75 leading-relaxed font-sans mt-1">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Mini Bloco Complementar: Você recebe ainda */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-4 sm:mt-5 bg-[#EFECE3] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#EAE4D7] shadow-2xs"
            >
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#203D2B] font-sans flex items-center gap-1.5 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B79C68] fill-[#B79C68]/30" />
                <span>Você recebe ainda:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BONUS_INCLUDED.map((included, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[12.5px] sm:text-sm text-[#203D2B] font-medium font-sans">
                    <span className="w-4 h-4 rounded-full bg-[#116B38] text-white flex items-center justify-center text-[10px] flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{included}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

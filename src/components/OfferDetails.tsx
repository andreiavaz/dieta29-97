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
    <section id="metodo" className="bg-[#FAF9F5] py-16 md:py-24 border-b border-olive-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-zinc-900 tracking-tight leading-tight">
            O que você vai encontrar no Método D.I.E.T.A. da Caneta
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-olive-800 mt-4 leading-relaxed max-w-2xl mx-auto font-sans font-medium">
            Um plano prático para te ajudar a aproveitar essa fase com mais clareza, leveza e direção sem dietas complicadas.
          </p>
        </div>

        {/* Content Grid: Mockup on the left, Cards + Included block on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[420px] lg:max-w-none flex justify-center"
            >
              {/* Subtle ambient light behind mockup */}
              <div className="absolute inset-0 bg-brand-green/5 rounded-3xl filter blur-2xl -z-10" />

              <img
                src="https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/08fd9998-b11a-4dab-9b7a-7fddbe7a7db0.png"
                alt="Método D.I.E.T.A. da Caneta - Mockup do Guia e Cardápios"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-[580px] drop-shadow-xl select-none"
              />
            </motion.div>
          </div>

          {/* Right Column: 6 Main Cards + Mini Bloco Complementar */}
          <div className="lg:col-span-7 space-y-3.5">
            
            {/* 6 Main Cards */}
            {MODULE_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="bg-white rounded-2xl p-5 border border-zinc-200/90 shadow-2xs hover:border-olive-300 transition-all"
              >
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-sans leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans mt-1.5">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Mini Bloco Complementar: Você recebe ainda */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="mt-6 bg-[#F6F4EB] rounded-2xl p-5 sm:p-6 border border-[#E4DEC9] shadow-2xs"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-green font-sans flex items-center gap-2 mb-3.5">
                <Sparkles className="w-4 h-4 text-brand-green fill-brand-green/20" />
                <span>Você recebe ainda:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BONUS_INCLUDED.map((included, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-800 font-medium font-sans">
                    <span className="w-4 h-4 rounded-full bg-[#10702d] text-white flex items-center justify-center text-[10px] flex-shrink-0">
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

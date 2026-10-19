/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

const IDENTIFICATION_ITEMS = [
  "Sua fome diminuiu tanto que você não sabe o que comer para nutrir seu corpo.",
  "Você está emagrecendo, mas se preocupa em perder massa muscular junto com o peso.",
  "Seu intestino ficou mais lento ou você sente enjoos e desconfortos durante o tratamento.",
  "Você tem medo de recuperar o peso caso precise interromper a medicação.",
  "Já tentou várias dietas e não quer voltar a viver contando calorias ou passando fome.",
  "Quer aprender a comer melhor agora e construir hábitos que façam sentido no longo prazo."
];

export default function ObjectionBreaker() {
  return (
    <section className="bg-[#FAF9F5] py-12 md:py-16 border-b border-olive-150">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-sm p-6 sm:p-8 md:p-10">
          
          {/* Eyebrow */}
          <div className="text-center mb-2">
            <span className="text-[11px] font-bold tracking-[0.18em] text-zinc-500 uppercase font-sans">
              VOCÊ SE IDENTIFICA?
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-[30px] font-bold text-zinc-900 tracking-tight leading-snug font-sans">
              Você começou a usar a caneta, mas ainda tem dúvidas sobre como cuidar da sua alimentação?
            </h2>
            <p className="text-sm md:text-[15px] text-zinc-500 mt-2.5 font-sans">
              Veja se alguma dessas situações faz parte da sua rotina:
            </p>
          </div>

          {/* 6 Situations List - 1 Column, compact and elegant */}
          <div className="space-y-2.5 mt-7">
            {IDENTIFICATION_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="flex items-center gap-3.5 px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 transition-colors"
              >
                <div className="w-5 h-5 rounded-full border border-emerald-600 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.8]" />
                </div>
                <p className="text-xs sm:text-sm md:text-[14.5px] text-zinc-800 font-sans leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Transition Box - Deep Forest Green with high-contrast soft gold button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="mt-8 bg-[#0d2817] text-white rounded-2xl p-6 sm:p-8 text-center"
          >
            <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white">
              Você não precisa descobrir tudo sozinha.
            </h3>
            
            <p className="text-xs sm:text-sm text-zinc-200 font-sans mt-2.5 max-w-xl mx-auto leading-relaxed">
              A caneta ajuda a diminuir a fome. O Método D.I.E.T.A. te ensina a fazer escolhas alimentares mais conscientes durante o tratamento.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 bg-[#d8c292] hover:bg-[#cfb680] text-[#0a2414] font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md uppercase tracking-wider font-sans cursor-pointer group min-h-[46px]"
              >
                <span>QUERO CONHECER O MÉTODO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

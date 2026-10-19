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
    <section className="bg-[#F8F6F0] py-9 sm:py-12 md:py-16 border-b border-[#EAE4D7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Main Card Container - Compact & balanced on mobile */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EAE4D7] shadow-xs p-4 sm:p-7 md:p-9">
          
          {/* Eyebrow */}
          <div className="text-center mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-[#203D2B]/60 uppercase font-sans">
              VOCÊ SE IDENTIFICA?
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[22px] xs:text-[24px] sm:text-2xl md:text-[28px] font-bold text-[#203D2B] tracking-tight leading-snug font-sans">
              Você começou a usar a caneta, mas ainda tem dúvidas sobre como cuidar da sua alimentação?
            </h2>
            <p className="text-[13.5px] sm:text-[15px] text-[#203D2B]/75 mt-1.5 sm:mt-2 font-sans">
              Veja se alguma dessas situações faz parte da sua rotina:
            </p>
          </div>

          {/* 6 Situations List - 1 Column, compact and perfectly readable */}
          <div className="space-y-2 sm:space-y-2.5 mt-5 sm:mt-6">
            {IDENTIFICATION_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[#EAE4D7] bg-white hover:border-[#DDD5C3] transition-colors"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#116B38] flex items-center justify-center text-[#116B38] flex-shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.8]" />
                </div>
                <p className="text-[13px] sm:text-[14.5px] text-[#203D2B] font-sans leading-snug sm:leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Transition Box - Deep Green #203D2B with soft gold button #B79C68 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-6 sm:mt-8 bg-[#203D2B] text-white rounded-xl sm:rounded-2xl p-5 sm:p-7 text-center"
          >
            <h3 className="text-[16px] sm:text-xl font-bold font-sans tracking-tight text-white leading-snug">
              Você não precisa descobrir tudo sozinha.
            </h3>
            
            <p className="text-[12.5px] sm:text-sm text-zinc-200 font-sans mt-2 max-w-xl mx-auto leading-relaxed">
              A caneta ajuda a diminuir a fome. O Método D.I.E.T.A. te ensina a fazer escolhas alimentares mais conscientes durante o tratamento.
            </p>

            <div className="mt-4 sm:mt-5 flex justify-center">
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 bg-[#B79C68] hover:bg-[#a68a57] text-[#203D2B] font-bold text-[13.5px] sm:text-[14px] px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl transition-all shadow-xs uppercase tracking-wider font-sans cursor-pointer group min-h-[46px]"
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

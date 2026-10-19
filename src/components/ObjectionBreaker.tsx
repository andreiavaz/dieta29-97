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
    <section className="bg-[#F8F6F0] py-10 sm:py-14 md:py-18 border-b border-[#EAE4D7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Main Card Container with soft hairline border and ivory background */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EAE4D7] shadow-xs p-5 sm:p-7 md:p-9">
          
          {/* Eyebrow */}
          <div className="text-center mb-2">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-[#203D2B]/70 uppercase font-sans">
              VOCÊ SE IDENTIFICA?
            </span>
          </div>

          {/* Heading in Playfair Display */}
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
            <h2 className="font-serif text-[23px] xs:text-[25px] sm:text-[28px] md:text-[32px] font-bold text-[#203D2B] tracking-tight leading-snug">
              Você começou a usar a caneta, mas ainda tem dúvidas sobre como cuidar da sua alimentação?
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#203D2B]/75 mt-2 font-sans font-normal">
              Veja se alguma dessas situações faz parte da sua rotina:
            </p>
          </div>

          {/* 6 Situations List - Editorial layout, compact on mobile */}
          <div className="space-y-2.5 sm:space-y-3">
            {IDENTIFICATION_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.025 }}
                className="flex items-start sm:items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[#EAE4D7] bg-[#FAF8F5]/50 hover:bg-white hover:border-[#DDD5C3] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#116B38]/10 text-[#116B38] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <Check className="w-3 h-3 stroke-[2.8]" />
                </div>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#203D2B] font-sans leading-snug sm:leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Transition Box - Deep Green #203D2B with soft gold button #B79C68 */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="mt-6 sm:mt-8 bg-[#203D2B] text-white rounded-xl sm:rounded-2xl p-5 sm:p-7 text-center"
          >
            <h3 className="font-serif text-[18px] sm:text-2xl font-bold tracking-tight text-[#F8F6F0] leading-snug">
              Você não precisa descobrir tudo sozinha.
            </h3>
            
            <p className="text-[13px] sm:text-[14.5px] text-[#EAE4D7] font-sans mt-2 max-w-xl mx-auto leading-relaxed font-normal">
              A caneta ajuda a diminuir a fome. O Método D.I.E.T.A. te ensina a fazer escolhas alimentares mais conscientes durante o tratamento.
            </p>

            <div className="mt-4 sm:mt-5 flex justify-center">
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 bg-[#B79C68] hover:bg-[#a68a57] text-[#203D2B] font-bold text-[13.5px] sm:text-[14px] px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl transition-all shadow-xs uppercase tracking-wider font-sans cursor-pointer group min-h-[46px]"
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

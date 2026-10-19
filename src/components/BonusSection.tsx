/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const RECIPE_GUIDES = [
  {
    title: "Receitas de Almoço",
    description: "Ideias para variar as refeições principais.",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/94053bf0-eb4e-41f8-bed6-86912076bee9.png",
    alt: "Capa do Guia Receitas de Almoço"
  },
  {
    title: "Receitas de Lanche",
    description: "Opções práticas para a rotina.",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/ea166169-9be6-497d-9273-8cfebffe17e6.png",
    alt: "Capa do Guia Receitas de Lanche"
  },
  {
    title: "Receitas de Jantar",
    description: "Sugestões para encerrar o dia.",
    imageUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/94053bf0-eb4e-41f8-bed6-86912076bee9.png",
    alt: "Capa do Guia Receitas de Jantar"
  }
];

export default function BonusSection() {
  return (
    <section className="bg-[#F8F6F0] py-10 sm:py-14 md:py-20 border-b border-[#EAE4D7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-[#116B38] uppercase bg-[#EFECE3] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full inline-block font-sans border border-[#EAE4D7]">
            SEU ACESSO INCLUI MUITO MAIS
          </span>

          <h2 className="text-[23px] xs:text-[25px] sm:text-3xl md:text-4xl font-bold font-sans text-[#203D2B] mt-2.5 sm:mt-3 tracking-tight leading-snug">
            Além do Método D.I.E.T.A., você recebe materiais extras para colocar tudo em prática.
          </h2>

          <p className="text-[14.5px] sm:text-base text-[#203D2B]/80 mt-2 sm:mt-2.5 max-w-2xl mx-auto font-sans font-medium leading-relaxed">
            Você não precisa ficar apenas na teoria. Tenha receitas práticas e uma aula com a Nutri Andréia para ajudar a organizar sua alimentação durante o tratamento.
          </p>
        </div>

        {/* 1. DESTAQUE PRINCIPAL: Masterclass Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-9 border border-[#EAE4D7] shadow-xs relative overflow-hidden mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Real Masterclass Mockup Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-[#EAE4D7] bg-[#F8F6F0] p-1.5 sm:p-2">
                <img
                  src="https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/ed0d5ad6-b33e-40d8-ba37-1cc94e949cda.png"
                  alt="Masterclass Faça a Caneta Trabalhar a Seu Favor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-lg select-none"
                />
              </div>
            </div>

            {/* Masterclass Copy Details */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFECE3] text-[#116B38] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-[#EAE4D7]">
                <Sparkles className="w-3 h-3 text-[#B79C68]" />
                <span>INCLUSA NA OFERTA</span>
              </div>

              <h3 className="text-[18px] sm:text-2xl font-bold font-sans text-[#203D2B] leading-snug">
                Masterclass Faça a Caneta Trabalhar a Seu Favor
              </h3>

              <p className="text-[13px] sm:text-[14.5px] text-[#203D2B]/75 font-sans leading-relaxed">
                Uma aula em vídeo com orientações práticas para ajudar você a transformar os conhecimentos do método em escolhas alimentares no dia a dia.
              </p>

              <div className="pt-1 flex flex-wrap gap-3 sm:gap-4 text-[12px] sm:text-xs text-[#203D2B]/85 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#116B38] stroke-[2.8]" />
                  <span>Acesso digital imediato</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#116B38] stroke-[2.8]" />
                  <span>Assista no celular ou computador</span>
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. GUIAS DE RECEITAS: 3 Cards Menores */}
        <div className="mb-7 sm:mb-9">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#203D2B]/60 font-sans">
              3 Guias Práticos de Receitas Inclusos
            </h4>
            <span className="text-[11px] font-semibold text-[#116B38] flex items-center gap-1 font-sans">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Formatos digitais em PDF</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
            {RECIPE_GUIDES.map((guide, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#EAE4D7] shadow-2xs hover:border-[#DDD5C3] transition-all flex items-center gap-3 sm:gap-3.5"
              >
                {/* Compact eBook Mockup beside text */}
                <div className="w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#F8F6F0] border border-[#EAE4D7] flex items-center justify-center p-1 shadow-2xs">
                  <img
                    src={guide.imageUrl}
                    alt={guide.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                {/* Text beside mockup */}
                <div className="flex-grow min-w-0">
                  <span className="text-[9.5px] uppercase font-bold text-[#116B38] tracking-wider block mb-0.5 font-sans">
                    Bônus Digital
                  </span>

                  <h4 className="text-[13.5px] sm:text-[15px] font-bold text-[#203D2B] font-sans leading-snug">
                    {guide.title}
                  </h4>

                  <p className="text-[11.5px] sm:text-[12.5px] text-[#203D2B]/70 font-sans mt-0.5 leading-snug">
                    {guide.description}
                  </p>

                  <div className="mt-1.5 pt-1.5 border-t border-[#EAE4D7] flex items-center justify-between text-[10.5px] text-[#116B38] font-bold font-sans">
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3 stroke-[2.8]" />
                      <span>Incluso</span>
                    </span>
                    <span className="text-[#203D2B]/50 font-normal text-[9.5px]">eBook PDF</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. BOX FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#EAE4D7] shadow-xs text-center max-w-xl mx-auto"
        >
          <p className="text-[11px] sm:text-xs font-bold text-[#203D2B]/70 uppercase tracking-wide font-sans">
            Método + Masterclass + 3 Guias de Receitas
          </p>

          <div className="mt-2 mb-2.5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#203D2B] font-sans tracking-tight">
              Tudo incluso por R$ 29,97
            </h3>
          </div>

          <p className="text-[11.5px] sm:text-xs text-[#203D2B]/60 font-sans font-medium">
            Pagamento único · Acesso digital
          </p>

          <div className="mt-4 flex justify-center">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 bg-[#116B38] hover:bg-[#0e572d] text-white font-bold text-[13.5px] sm:text-[14px] px-6 py-3.5 rounded-xl shadow-xs transition-all uppercase tracking-wider font-sans cursor-pointer group min-h-[48px]"
            >
              <span>QUERO GARANTIR O PACOTE COMPLETO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

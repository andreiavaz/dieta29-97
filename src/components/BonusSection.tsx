/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

// @ts-ignore
import recipeBundleImg from "../assets/images/recipe_bundle_1781100383033.png";

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
    <section className="bg-cream-50 py-16 md:py-24 border-b border-olive-150 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#10702d] uppercase bg-olive-100/90 px-3.5 py-1.5 rounded-full inline-block font-sans border border-olive-200/80">
            SEU ACESSO INCLUI MUITO MAIS
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-zinc-900 mt-4 tracking-tight leading-tight">
            Além do Método D.I.E.T.A., você recebe materiais extras para colocar tudo em prática.
          </h2>

          <p className="text-sm sm:text-base text-olive-800 mt-3 max-w-2xl mx-auto font-sans font-medium leading-relaxed">
            Você não precisa ficar apenas na teoria. Tenha receitas práticas e uma aula com a Nutri Andréia para ajudar a organizar sua alimentação durante o tratamento.
          </p>
        </div>

        {/* 1. DESTAQUE PRINCIPAL: Masterclass Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-zinc-200/90 shadow-sm relative overflow-hidden mb-8"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-olive-100/40 rounded-full filter blur-3xl -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Masterclass Mockup Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 bg-zinc-50 p-2">
                <img
                  src="https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/ed0d5ad6-b33e-40d8-ba37-1cc94e949cda.png"
                  alt="Masterclass Faça a Caneta Trabalhar a Seu Favor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-xl select-none"
                />
              </div>
            </div>

            {/* Masterclass Copy Details */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-[#10702d] text-[11px] font-bold uppercase tracking-wider border border-olive-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INCLUSA NA OFERTA</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-zinc-900 leading-snug">
                Masterclass Faça a Caneta Trabalhar a Seu Favor
              </h3>

              <p className="text-sm sm:text-[15px] text-zinc-600 font-sans leading-relaxed">
                Uma aula em vídeo com orientações práticas para ajudar você a transformar os conhecimentos do método em escolhas alimentares no dia a dia.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-zinc-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10702d] stroke-[2.5]" />
                  <span>Acesso digital imediato</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10702d] stroke-[2.5]" />
                  <span>Assista no celular ou computador</span>
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. GUIAS DE RECEITAS: 3 Cards Menores */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">
              3 Guias Práticos de Receitas Inclusos
            </h4>
            <span className="text-xs font-semibold text-[#10702d] flex items-center gap-1 font-sans">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Formatos digitais para consultar quando quiser</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {RECIPE_GUIDES.map((guide, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/90 shadow-2xs hover:border-olive-300 transition-all flex items-center gap-4"
              >
                {/* Compact eBook Mockup beside text */}
                <div className="w-20 h-24 sm:w-22 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-50 border border-zinc-150 flex items-center justify-center p-1.5 shadow-2xs">
                  <img
                    src={guide.imageUrl}
                    alt={guide.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                {/* Text beside mockup */}
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#10702d] tracking-wider block mb-0.5 font-sans">
                    Bônus Digital
                  </span>

                  <h4 className="text-sm sm:text-base font-bold text-zinc-900 font-sans leading-snug">
                    {guide.title}
                  </h4>

                  <p className="text-xs text-zinc-600 font-sans mt-1 leading-relaxed">
                    {guide.description}
                  </p>

                  <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-[#10702d] font-bold font-sans">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Incluso</span>
                    </span>
                    <span className="text-zinc-500 font-normal text-[10px]">eBook PDF</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. BOX FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-green/20 shadow-md text-center max-w-2xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-bold text-zinc-600 uppercase tracking-wide font-sans">
            Método + Masterclass + 3 Guias de Receitas
          </p>

          <div className="mt-3 mb-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c311c] font-sans tracking-tight">
              Tudo incluso por R$ 29,97
            </h3>
          </div>

          <p className="text-xs text-zinc-600 font-sans font-medium">
            Pagamento único · Acesso digital
          </p>

          <div className="mt-5 flex justify-center">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 bg-[#10702d] hover:bg-[#0c5722] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md transition-all uppercase tracking-wider font-sans cursor-pointer group"
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

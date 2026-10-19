/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export default function AuthorSection() {
  return (
    <section className="bg-cream-50 py-16 md:py-24 border-b border-olive-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Author Image card */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center">
            
            <div className="relative w-full max-w-[340px] md:max-w-[380px]">
              
              {/* Blur accent background */}
              <div className="absolute inset-x-4 inset-y-12 bg-olive-100 rounded-3xl filter blur-xl opacity-80 -z-10" />

              {/* Main Photo container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-[#FAF9F5]"
              >
                <img 
                  src="https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/04/unnamed-23.jpg" 
                  alt="Andréia Vaz - Nutricionista Clínica"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center select-none"
                />
              </motion.div>

              {/* Float badge for 20 years */}
              <div className="absolute -top-4 -left-4 bg-[#4c6640] text-cream-50 py-2.5 px-3.5 rounded-xl shadow-lg -rotate-6 flex flex-col items-center justify-center">
                <span className="text-lg font-black leading-none">20</span>
                <span className="text-[8px] font-extrabold uppercase tracking-widest mt-1">Anos Clínica</span>
              </div>

            </div>

          </div>

          {/* Right Column: Narrative Copy text */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#4c6640] uppercase bg-[#edf0e9] px-3.5 py-1.5 rounded-full inline-block font-sans">
                Sobre a Nutricionista
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-olive-900 mt-4 tracking-tight leading-tight">
                Quem é Andréia Vaz?
              </h2>
            </div>

            {/* Warm Narrative Box layout */}
            <div className="space-y-4 text-sm md:text-base text-olive-800 leading-relaxed font-sans">
              
              <p>
                Sou nutricionista clínica há quase 20 anos e ajudo mulheres a emagrecer de forma leve, sem dietas restritivas e sem viver em guerra com a comida.
              </p>

              <p>
                Nos últimos anos acompanhei muitas mulheres usando canetas emagrecedoras e percebi um problema comum:
              </p>

              <p className="font-semibold text-olive-950 p-4 bg-olive-100/40 rounded-xl border-l-[4px] border-[#4c6640]">
                A caneta reduz a fome, mas não ensina o que comer.
              </p>

              <p>
                Foi por isso que criei <strong className="text-olive-950 font-semibold">A Dieta da Caneta</strong>.
              </p>

              <p>
                Um guia simples e prático para ajudar você a emagrecer com mais segurança, preservar massa muscular e evitar recuperar o peso depois.
              </p>

            </div>

            {/* Signature Box */}
            <div className="pt-6 border-t border-olive-100 space-y-4">
              <p className="font-serif italic text-base md:text-lg text-[#4c6640] font-semibold leading-relaxed">
                "Eu não ensino você a comer menos. Eu ensino você a comer certo, para que o resultado seja seu para sempre."
              </p>
              
              <div className="pt-1">
                <p className="text-lg font-bold text-olive-950 font-serif">Andréia Vaz</p>
                <p className="text-xs text-olive-600 font-sans mt-0.5 font-semibold">Nutricionista Clínica • CRN-8 3188</p>
              </div>

              {/* Professional Google Reputation Card */}
              <div className="mt-4 p-4 bg-white rounded-2xl border border-zinc-200/90 shadow-2xs flex items-start gap-3.5 max-w-md">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-base shadow-2xs">
                  ⭐
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[#f59e0b] tracking-wider text-xs font-black">★★★★★</span>
                    <span className="text-xs font-bold text-zinc-900 font-sans">5,0/5 no Google</span>
                    <span className="text-zinc-300">·</span>
                    <span className="text-xs text-zinc-500 font-medium font-sans">77 avaliações públicas</span>
                  </div>
                  <p className="text-[11.5px] text-zinc-600 font-sans mt-1 leading-snug">
                    Conheça as avaliações sobre o atendimento profissional da nutricionista Andréia Vaz.
                  </p>
                  <span className="text-[9.5px] text-zinc-600 block mt-1 font-sans">
                    Avaliações referentes à reputação e ao atendimento profissional da nutricionista.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

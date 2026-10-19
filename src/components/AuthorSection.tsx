/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function AuthorSection() {
  return (
    <section className="bg-[#F8F6F0] py-12 sm:py-16 md:py-24 border-b border-[#EAE4D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Header: Title renders before the photo on small screens */}
        <div className="lg:hidden text-center mb-6">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-[#203D2B]/70 uppercase font-sans mb-1.5 block">
            SOBRE A NUTRICIONISTA
          </span>
          <h2 className="font-serif text-[24px] xs:text-[26px] sm:text-[30px] font-bold text-[#203D2B] tracking-tight leading-snug">
            Quem é Andréia Vaz?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Author Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              
              {/* Photo container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden border border-[#EAE4D7] shadow-sm bg-white"
              >
                <img 
                  src="https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/04/unnamed-23.jpg" 
                  alt="Andréia Vaz - Nutricionista Clínica"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center select-none"
                />
              </motion.div>

              {/* Discreet 20 years clinical experience badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#203D2B] text-[#F8F6F0] py-2 px-3.5 rounded-xl shadow-md flex items-center gap-2 border border-[#B79C68]/30">
                <span className="font-serif text-lg sm:text-xl font-bold leading-none text-[#B79C68]">20</span>
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider font-sans leading-tight">
                  Anos de<br />Experiência
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* Desktop Header */}
            <div className="hidden lg:block">
              <span className="text-[11px] font-semibold tracking-[0.14em] text-[#203D2B]/70 uppercase font-sans mb-1.5 block">
                SOBRE A NUTRICIONISTA
              </span>
              <h2 className="font-serif text-[32px] md:text-[36px] font-bold text-[#203D2B] tracking-tight leading-snug">
                Quem é Andréia Vaz?
              </h2>
            </div>

            {/* Narrative text in short paragraphs */}
            <div className="space-y-3.5 text-[14px] sm:text-[15.5px] text-[#203D2B]/85 leading-relaxed font-sans font-normal">
              <p>
                Sou nutricionista clínica há quase 20 anos e ajudo mulheres a emagrecer de forma leve, sem dietas restritivas e sem viver em guerra com a comida.
              </p>

              <p>
                Nos últimos anos acompanhei de perto pacientes em tratamento com canetas emagrecedoras e observei um desafio comum:
              </p>

              <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-[#EAE4D7] text-[#203D2B] font-medium">
                A medicação reduz o apetite, mas não ensina o que o seu corpo precisa para manter a saúde e a energia.
              </div>

              <p>
                Foi a partir dessa experiência prática em consultório que desenvolvi o <strong className="font-semibold text-[#203D2B]">Método D.I.E.T.A. da Caneta</strong>.
              </p>

              <p>
                Um material simples e objetivo para você aproveitar essa fase com mais clareza, cuidar da sua massa muscular e construir uma rotina sustentável para o futuro.
              </p>
            </div>

            {/* Signature & Credentials */}
            <div className="pt-3 border-t border-[#EAE4D7] space-y-3">
              <p className="font-serif italic text-[15px] sm:text-[16px] text-[#203D2B] leading-relaxed">
                "Não se trata de comer menos. Trata-se de comer com propósito, para que os resultados pertençam a você no longo prazo."
              </p>
              
              <div>
                <p className="text-[16px] font-bold text-[#203D2B] font-serif">Andréia Vaz</p>
                <p className="text-[12px] text-[#203D2B]/70 font-sans mt-0.5">Nutricionista Clínica · CRN-8 3188</p>
              </div>

              {/* Verified Google Reputation Card */}
              <div className="mt-4 p-3.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-[#EAE4D7] shadow-2xs flex items-start gap-3.5 max-w-md">
                <div className="w-9 h-9 rounded-xl bg-[#B79C68]/15 border border-[#B79C68]/30 flex items-center justify-center flex-shrink-0 text-[#B79C68]">
                  <Star className="w-5 h-5 fill-[#B79C68] stroke-none" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[#B79C68] text-xs font-bold font-sans">★★★★★</span>
                    <span className="text-xs font-bold text-[#203D2B] font-sans">5,0/5 no Google</span>
                    <span className="text-[#203D2B]/30">·</span>
                    <span className="text-[11.5px] text-[#203D2B]/70 font-sans font-medium">77 avaliações públicas</span>
                  </div>
                  <p className="text-[12px] text-[#203D2B]/75 font-sans mt-1 leading-snug">
                    Conheça as avaliações sobre o atendimento profissional da nutricionista Andréia Vaz.
                  </p>
                  <span className="text-[10px] text-[#203D2B]/50 block mt-1 font-sans">
                    Avaliações referentes à reputação e ao atendimento clínico profissional.
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

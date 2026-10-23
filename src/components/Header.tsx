/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

// Importing the verified generated mockup
// @ts-ignore
import coverImg from "../assets/images/metodo_caneta_mockup_1789586977098.jpg";

interface HeaderProps {
  isInstagram?: boolean;
}

export default function Header({ isInstagram = false }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-[#FAF8F5] border-b border-[#EAE4D7] pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20">
      {/* Subtle organic ambient background glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-[#203D2B]/[0.03] rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-[#981B36]/[0.02] rounded-full filter blur-3xl -z-10" />

      {isInstagram && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="bg-[#203D2B]/5 border border-[#203D2B]/15 text-[#203D2B] py-2 px-4 rounded-xl text-center text-xs font-medium font-sans">
            Condição especial disponível para seguidoras do Instagram
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Headline with exact contrast between deep green and bordeaux */}
            <div className="mb-4 sm:mb-5">
              <h1 className="font-serif text-[28px] xs:text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold tracking-tight leading-[1.14] sm:leading-[1.16] text-[#203D2B]">
                A CANETA DIMINUIU SUA FOME.
                <span className="block text-[#981B36] mt-1.5 sm:mt-2">
                  MAS VOCÊ SABE O QUE COMER AGORA?
                </span>
              </h1>
            </div>

            {/* Subheadline description */}
            <div className="mb-5 sm:mb-6">
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#203D2B]/80 font-sans leading-relaxed max-w-2xl font-normal">
                Descubra como se alimentar mesmo com pouco apetite, nutrir seu corpo e cuidar da sua massa muscular durante o emagrecimento sem dietas complicadas.
              </p>
            </div>

            {/* 3 Key Benefit Bullet Items */}
            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7 font-sans">
              <div className="flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[15px] text-[#203D2B] font-medium">
                <span className="w-5 h-5 rounded-full bg-[#116B38]/10 text-[#116B38] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                </span>
                <span>Sem precisar pesar comida ou contar calorias</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[15px] text-[#203D2B] font-medium">
                <span className="w-5 h-5 rounded-full bg-[#116B38]/10 text-[#116B38] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                </span>
                <span>14 dias de cardápios prontos para facilitar sua rotina</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[15px] text-[#203D2B] font-medium">
                <span className="w-5 h-5 rounded-full bg-[#116B38]/10 text-[#116B38] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                </span>
                <span>Estratégias para lidar com a volta do apetite</span>
              </div>
            </div>

            {/* Main CTA Button & Under-button assurance */}
            <div className="pt-1 flex flex-col items-start gap-2.5">
              <a 
                href="#planos"
                className="inline-flex items-center justify-center bg-[#116B38] hover:bg-[#0e572d] text-white font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-center group text-[14px] sm:text-[15px] select-none cursor-pointer w-full sm:w-auto min-h-[48px]"
              >
                <span className="flex items-center gap-2 uppercase font-sans tracking-wide">
                  <span>QUERO APRENDER O QUE COMER</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </span>
              </a>

              <div className="flex items-center gap-1.5 text-[12.5px] sm:text-[13px] text-[#203D2B]/75 font-medium pl-1 font-sans">
                <ShieldCheck className="w-4 h-4 text-[#116B38] flex-shrink-0" />
                <span>Apenas R$ 27 · Garantia de 7 dias</span>
              </div>
            </div>

          </div>

          {/* Book Image Cover Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative pt-2 lg:pt-0">
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-2xl shadow-[0_16px_40px_-10px_rgba(32,61,43,0.18)] overflow-hidden border border-[#EAE4D7] bg-white"
              >
                <img 
                  src={coverImg} 
                  alt="Método D.I.E.T.A. da Caneta - Livro e Guias de Acompanhamento"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover select-none"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

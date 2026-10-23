/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, ShieldCheck, ArrowRight, Lock } from "lucide-react";
import { motion } from "motion/react";
import { CHECKOUT_URL, OFFER_PRICE } from "../data";

interface PricingSectionProps {
  isInstagram?: boolean;
}

const INCLUDED_ITEMS = [
  "Guia digital Método D.I.E.T.A. da Caneta",
  "14 dias de sugestões de cardápios práticos",
  "Guia de receitas para almoço",
  "Guia de receitas para lanche",
  "Guia de receitas para jantar",
  "Aula: Planejamento Alimentar para Quem Usa Caneta"
];

export default function PricingSection({ isInstagram = false }: PricingSectionProps) {
  const trackCheckout = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: "Método D.I.E.T.A. da Caneta",
        value: OFFER_PRICE,
        currency: "BRL"
      });
    }
  };

  return (
    <section id="planos" className="bg-[#F8F6F0] py-12 sm:py-16 md:py-24 border-b border-[#EAE4D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-[#203D2B]/70 uppercase font-sans mb-2 block">
            SEU PRÓXIMO PASSO COMEÇA AQUI
          </span>

          <h2 className="font-serif text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#203D2B] tracking-tight leading-snug">
            Comece a cuidar da sua alimentação com mais clareza e confiança
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#203D2B]/80 mt-2.5 sm:mt-3 font-sans font-normal leading-relaxed">
            Tenha acesso ao Método D.I.E.T.A. da Caneta e a todos os materiais complementares para facilitar sua rotina.
          </p>
        </div>

        {/* Unified Single Offer Card */}
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs border border-[#EAE4D7] relative"
          >
            {/* Top Seal */}
            <div className="text-center mb-5">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#116B38] bg-[#116B38]/10 px-4 py-1 rounded-full font-sans">
                ACESSO COMPLETO
              </span>
            </div>

            {/* Product Title & Price Header */}
            <div className="text-center border-b border-[#EAE4D7] pb-6 mb-6">
              <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#203D2B] tracking-tight">
                Método D.I.E.T.A. da Caneta
              </h3>

              <div className="mt-4">
                <span className="text-[12px] uppercase font-medium text-[#203D2B]/60 tracking-wider block font-sans">
                  Pagamento único de
                </span>
                
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-[#203D2B] font-serif">R$</span>
                  <span className="text-5xl sm:text-6xl font-bold font-serif text-[#203D2B] tracking-tight">
                    27
                  </span>
                </div>

                <span className="text-xs text-[#203D2B]/60 font-sans font-medium block mt-1.5">
                  Sem mensalidade · Acesso imediato
                </span>
              </div>
            </div>

            {/* Included Items Checklist */}
            <div className="space-y-3 mb-8">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#203D2B]/70 font-sans mb-2">
                Conteúdo incluso:
              </p>

              {INCLUDED_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#116B38]/10 text-[#116B38] flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[2.8]" />
                  </span>
                  <span className="text-[13.5px] sm:text-[14.5px] text-[#203D2B] font-medium font-sans leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button (1 of the 2 primary content buttons) */}
            <div>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCheckout}
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#116B38] hover:bg-[#0e572d] text-white font-bold py-4 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 uppercase tracking-wider font-sans cursor-pointer text-[14px] sm:text-[15px] min-h-[50px] group"
              >
                <span>QUERO MEU ACESSO POR R$ 27</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </a>

              <div className="flex items-center justify-center gap-2 text-[11.5px] text-[#203D2B]/70 font-sans mt-3.5">
                <Lock className="w-3.5 h-3.5 text-[#116B38]" />
                <span>Pagamento 100% seguro via Eduzz</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 7 Days Unconditional Guarantee Box - Minimalist vector icon, no emojis */}
        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto bg-white border border-[#EAE4D7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            
            <div className="w-14 h-14 rounded-2xl bg-[#B79C68]/15 border border-[#B79C68]/30 flex items-center justify-center flex-shrink-0 text-[#B79C68]">
              <ShieldCheck className="w-8 h-8 stroke-[1.8]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-[18px] sm:text-[20px] text-[#203D2B] font-bold">
                Garantia Incondicional de 7 Dias
              </h3>
              
              <p className="text-[13px] sm:text-[14px] text-[#203D2B]/75 leading-relaxed font-sans font-normal">
                Você pode acessar o método, conferir todos os cardápios e receitas com calma. Se em até 7 dias você entender que o conteúdo não era o que esperava, basta solicitar e faremos a devolução integral do valor pago. Sem questionamentos.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

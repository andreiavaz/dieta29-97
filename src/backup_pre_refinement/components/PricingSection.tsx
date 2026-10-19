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
  "14 dias de sugestões de cardápios",
  "Guia de receitas para almoço",
  "Guia de receitas para lanche",
  "Guia de receitas para jantar",
  "Aula Caneta da caneta"
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
    <section id="planos" className="bg-cream-100 py-16 md:py-24 border-b border-olive-150">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#10702d] uppercase bg-olive-100/90 px-3.5 py-1.5 rounded-full inline-block font-sans border border-olive-200/80">
            SEU PRÓXIMO PASSO COMEÇA AQUI
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-zinc-900 mt-4 tracking-tight leading-tight">
            Comece a cuidar da sua alimentação com mais clareza e confiança
          </h2>

          <p className="text-sm sm:text-base text-olive-800 mt-3 font-sans font-medium leading-relaxed">
            Tenha acesso ao Método D.I.E.T.A. da Caneta e a todos os materiais complementares para facilitar sua rotina.
          </p>
        </div>

        {/* Unified Single Offer Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 shadow-xl border-2 border-brand-green/20 relative"
          >
            {/* Top Badge */}
            <div className="flex justify-center -mt-10 sm:-mt-13 mb-5">
              <span className="bg-[#10702d] text-white text-xs font-black uppercase px-6 py-2 rounded-full shadow-md tracking-wider">
                ACESSO COMPLETO
              </span>
            </div>

            {/* Product Title & Subtitle */}
            <div className="text-center border-b border-zinc-150 pb-6 mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-sans tracking-tight">
                Método D.I.E.T.A. da Caneta
              </h3>

              <div className="mt-4">
                <span className="text-xs uppercase font-bold text-zinc-500 tracking-wider block">
                  Pagamento único de
                </span>
                
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="text-2xl font-bold text-[#0c311c]">R$</span>
                  <span className="text-5xl sm:text-6xl font-black font-sans text-[#0c311c] tracking-tight">
                    29,97
                  </span>
                </div>

                <span className="text-xs text-zinc-500 font-medium block mt-1">
                  Sem mensalidade.
                </span>
              </div>
            </div>

            {/* Included Items Checklist */}
            <div className="space-y-3.5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">
                O que você recebe:
              </p>

              {INCLUDED_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#eaf4ec] text-[#10702d] flex items-center justify-center text-xs font-bold">
                    <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-800 font-medium font-sans leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCheckout}
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#10702d] hover:bg-[#0c5622] text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg hover:shadow-emerald-900/15 transition-all uppercase tracking-wider font-sans cursor-pointer text-sm sm:text-base min-h-[52px]"
              >
                <span>QUERO MEU ACESSO POR R$ 29,97</span>
                <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-sans mt-3.5">
                <Lock className="w-3.5 h-3.5 text-[#10702d]" />
                <span>Pagamento 100% seguro via Eduzz · Acesso imediato</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 7 Days Guarantee Section */}
        <div className="mt-14 max-w-3xl mx-auto bg-white border border-[#CBD9CC] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full border-4 border-dashed border-[#576f3c] flex items-center justify-center text-3xl mb-2.5 bg-cream-50 shadow-inner">
                🏆
              </div>
              <span className="text-[10px] text-[#576f3c] font-black uppercase tracking-wider">Risco Zero</span>
              <span className="text-xs text-olive-700 font-bold mt-0.5">7 Dias De Proteção</span>
            </div>

            <div className="md:col-span-8 space-y-3 text-center md:text-left">
              <h3 className="font-sans text-xl sm:text-2xl text-zinc-950 font-bold">
                Garantia Incondicional de 7 Dias
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                Adquira, leia o método e comece a aplicar. Se em até 7 dias você sentir que o material não era para você, basta solicitar e você receberá 100% do seu dinheiro de volta, sem burocracia ou questionamentos. O risco é todo nosso.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

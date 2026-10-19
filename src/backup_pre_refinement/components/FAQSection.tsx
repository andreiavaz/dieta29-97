/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Já estou emagrecendo com a caneta. Por que preciso desse método?",
    answer: "Porque diminuir a fome não é a mesma coisa que aprender a se alimentar bem. O Método D.I.E.T.A. da Caneta ajuda você a organizar suas refeições, fazer escolhas nutritivas mesmo com pouco apetite e desenvolver hábitos que apoiam sua saúde durante o tratamento."
  },
  {
    id: "faq-2",
    question: "E se eu quase não sentir fome? Vou conseguir seguir os cardápios?",
    answer: "Sim, o guia traz sugestões de refeições para os dias de pouco apetite, além de 14 dias de cardápios que podem ser adaptados à sua rotina. Não é uma dieta rígida nem exige pesar alimentos ou contar calorias. Se a falta de apetite dificultar a alimentação adequada, é importante buscar orientação profissional."
  },
  {
    id: "faq-3",
    question: "Esse método pode me ajudar a não recuperar o peso quando parar a caneta?",
    answer: "O método ensina hábitos alimentares que podem apoiar o controle do peso a longo prazo, como organização das refeições, consumo adequado de proteínas e uma rotina mais consistente. Mas não garante que o peso não volte, e qualquer mudança na medicação deve ser acompanhada pelo médico."
  },
  {
    id: "faq-4",
    question: "O que exatamente vou receber ao comprar por R$ 29,97?",
    answer: "Você recebe o Método D.I.E.T.A. da Caneta, 14 dias de sugestões de cardápios, três guias de receitas — almoço, lanche e jantar — e uma aula de planejamento alimentar. Tudo em formato digital, com pagamento único e garantia de 7 dias."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#FAF9F5] py-16 md:py-24 border-b border-olive-150">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#10702d] uppercase bg-olive-100/90 px-3.5 py-1.5 rounded-full inline-block font-sans border border-olive-200/80">
            AINDA TEM DÚVIDAS?
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-zinc-900 mt-4 tracking-tight leading-tight">
            Perguntas frequentes
          </h2>

          <p className="text-sm sm:text-base text-olive-800 mt-2.5 font-sans font-medium leading-relaxed">
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#10702d] transition-colors leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-olive-100/70 border-olive-300 text-[#10702d]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-zinc-100">
                        <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed pt-3">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Help Block */}
        <div className="mt-10 text-center p-5 sm:p-6 bg-white border border-zinc-200/90 rounded-2xl shadow-2xs">
          <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed flex items-center justify-center gap-1.5 flex-wrap">
            <Mail className="w-4 h-4 text-[#10702d] flex-shrink-0" />
            <span>Ainda restou alguma dúvida? Fale com o nosso suporte através do e-mail:</span>
            <a
              href="mailto:andreianutricaoclinica@gmail.com"
              className="font-bold text-[#10702d] hover:underline"
            >
              andreianutricaoclinica@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import Header from "./Header";
import ObjectionBreaker from "./ObjectionBreaker";
import OfferDetails from "./OfferDetails";
import SocialProof from "./SocialProof";
import BonusSection from "./BonusSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import AuthorSection from "./AuthorSection";
import { ArrowUp, ShoppingBag, Instagram, Facebook } from "lucide-react";

export default function LandingPage() {
  const [showSticky, setShowSticky] = useState(false);
  const [isInstagram, setIsInstagram] = useState(false);

  useEffect(() => {
    // Set document title dynamically
    document.title = "Método D.I.E.T.A. da Caneta | Andréia Vaz - Nutricionista";

    // Detect Instagram context
    const pathname = window.location.pathname.toLowerCase();
    const search = window.location.search.toLowerCase();
    if (
      pathname === "/instagram" || 
      pathname === "/ig" || 
      search.includes("instagram") || 
      search.includes("src=ig") || 
      search.includes("ref=ig")
    ) {
      setIsInstagram(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const trackCheckout = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: "Método D.I.E.T.A. da Caneta",
        value: 27.00,
        currency: "BRL"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#203D2B] font-sans flex flex-col justify-between selection:bg-[#B79C68]/20 selection:text-[#203D2B]">
      
      {/* 1. HERO HEADER (First Fold) */}
      <Header isInstagram={isInstagram} />

      {/* 2. IDENTIFICAÇÃO (Second Fold) */}
      <ObjectionBreaker />

      {/* 3. APRESENTAÇÃO DO MÉTODO (Third Fold) */}
      <OfferDetails />

      {/* 4. PROVA SOCIAL (Experiências Reais) */}
      <SocialProof />

      {/* 5. MATERIAIS COMPLEMENTARES (Bônus & Aula) */}
      <BonusSection />

      {/* 6. OFERTA OFICIAL (R$ 27 & Garantia) */}
      <PricingSection isInstagram={isInstagram} />

      {/* 7. FAQ (Perguntas Frequentes) */}
      <FAQSection />

      {/* 8. AUTORIDADE (Quem é Andréia Vaz) */}
      <AuthorSection />

      {/* 9. RODAPÉ INSTITUCIONAL */}
      <footer className="bg-[#203D2B] text-[#F8F6F0] pt-8 pb-28 sm:pb-16 border-t border-[#1a3223] font-sans text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          
          {/* Institutional Brand */}
          <div className="space-y-0.5">
            <p className="font-serif text-[17px] sm:text-lg font-bold text-[#F8F6F0]">
              Andréia Vaz
            </p>
            <p className="text-xs text-[#EAE4D7]/80">
              Nutricionista Clínica · CRN-8 3188
            </p>
          </div>

          {/* Aviso Educativo Legal */}
          <p className="text-[11px] text-[#EAE4D7]/65 leading-relaxed max-w-2xl mx-auto pt-1">
            Método D.I.E.T.A. da Caneta — Material exclusivamente educativo. Não substitui o diagnóstico, prescrição ou acompanhamento médico e nutricional individualizado.
          </p>

          {/* Direitos Reservados */}
          <p className="text-[11.5px] text-[#EAE4D7]/75 pt-1">
            © 2026 Andréia Vaz. Todos os direitos reservados.
          </p>

          {/* Dados abaixo dos Direitos Reservados: CNPJ e Localização */}
          <p className="text-[11px] sm:text-xs text-[#EAE4D7]/70 tracking-wide pt-1">
            CNPJ: 42.446.060/0001-82 · Maringá — Paraná
          </p>

          {/* Redes Sociais */}
          <div className="flex items-center justify-center gap-5 text-xs text-[#EAE4D7]/80">
            <a
              href="https://www.instagram.com/andreiavaznutri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              title="Instagram da Nutricionista Andréia Vaz"
            >
              <Instagram className="w-3.5 h-3.5 text-[#B79C68]" />
              <span>@andreiavaznutri</span>
            </a>
            <span className="text-[#EAE4D7]/30">·</span>
            <a
              href="https://www.facebook.com/nutricionistaandreiavaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              title="Facebook da Nutricionista Andréia Vaz"
            >
              <Facebook className="w-3.5 h-3.5 text-[#B79C68]" />
              <span>Nutricionista Andréia Vaz</span>
            </a>
          </div>

        </div>
      </footer>

      {/* FLOATING BOTTOM CONVERSION BAR ON MOBILE / DESKTOP */}
      <div 
        className={`fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#EAE4D7] py-3 px-4 shadow-lg z-40 flex items-center justify-between transition-all duration-300 transform ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-3 sm:gap-4">
          
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#203D2B]/10 flex items-center justify-center text-[#203D2B]">
              <ShoppingBag className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-[#203D2B]">Método D.I.E.T.A. da Caneta</p>
              <p className="text-[11px] text-[#203D2B]/70">Acesso completo por <strong className="text-[#116B38] font-bold">R$ 27</strong> · Pagamento único</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button 
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#FAF8F5] hover:bg-[#EAE4D7] text-[#203D2B] cursor-pointer transition-colors border border-[#EAE4D7]"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <a 
              href="https://sun.eduzz.com/G92EBBVZWE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackCheckout}
              className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-2 bg-[#116B38] hover:bg-[#0e572d] text-white text-xs sm:text-[13px] font-bold px-5 py-2.5 sm:py-3 rounded-xl transition-all shadow-sm cursor-pointer uppercase tracking-wider"
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Garantir por R$ 27</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}

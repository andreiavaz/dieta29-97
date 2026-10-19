import React, { useState, useEffect } from "react";
import Header from "./Header";
import ObjectionBreaker from "./ObjectionBreaker";
import OfferDetails from "./OfferDetails";
import SocialProof from "./SocialProof";
import BonusSection from "./BonusSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import AuthorSection from "./AuthorSection";
import { ArrowUp, ShoppingCart, Instagram, Facebook } from "lucide-react";

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
      if (window.scrollY > 700) {
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

  return (
    <div className="min-h-screen text-olive-950 font-sans flex flex-col justify-between selection:bg-gold-500 selection:text-olive-950">
      
      {/* 1. HERO HEADER AREA (Includes Promessa e Capa Mockup) */}
      <Header isInstagram={isInstagram} />

      {/* 2. OBJECTIONS DISPELLER SECTION {"A Dieta da Caneta é para você que"} */}
      <ObjectionBreaker />

      {/* 4 & 5. TANGIBILIZATION & CHAPTER SECRETS INSIDE DETAILED GREEN BENTO */}
      <OfferDetails />

      {/* 6. ETHICAL TESTIMONIALS (Sensations feedback & Authority banner) */}
      <SocialProof />

      {/* 7. GIFT BONUSES (Included Recipe eBooks & Video Masterclass) */}
      <BonusSection />

      {/* 8 & 9. ANCHOR PRICE MATRIX, PLANS COMPASS (R$27 vs R$47) & RISK-FREE GUARANTEE */}
      <PricingSection isInstagram={isInstagram} />

      {/* 10. EXPANDABLE CLINICAL FAQ ACCORDION */}
      <FAQSection />

      {/* 11. AUTHOR BIO, ETHICS DECAL & CONTACTS */}
      <AuthorSection />

      {/* INSTITUTIONAL FOOTER */}
      <footer className="bg-[#0a2313] text-cream-50 pt-8 pb-28 sm:pb-16 border-t border-[#14361f] font-sans text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          {/* Aviso Educativo Legal */}
          <p className="text-[11px] text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Método D.I.E.T.A. da Caneta — Material educativo. Não substitui acompanhamento médico ou nutricional individualizado.
          </p>

          {/* Direitos Reservados */}
          <p className="text-xs text-zinc-300 font-medium">
            © 2026 Andréia Vaz. Todos os direitos reservados.
          </p>

          {/* CNPJ E LOCALIZAÇÃO */}
          <p className="text-xs text-zinc-300 font-semibold tracking-wide">
            CNPJ: 42.446.060/0001-82 · Maringá — Paraná
          </p>

          {/* REDES SOCIAIS */}
          <div className="flex items-center justify-center gap-5 pt-1 text-xs text-zinc-300">
            <a
              href="https://www.instagram.com/andreiavaznutri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#d8c292]" />
              <span>@andreiavaznutri</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="https://www.facebook.com/nutricionistaandreiavaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              title="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 text-[#d8c292]" />
              <span>Nutricionista Andréia Vaz</span>
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BOTTOM CONVERSION BAR */}
      <div className={`fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-olive-150 py-3.5 px-4 shadow-2xl z-40 flex items-center justify-between transition-all duration-300 transform ${
        showSticky ? "translate-y-0" : "translate-y-full"
      }`}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xl">📖</span>
            <div>
              <p className="text-xs font-bold text-brand-green">Método D.I.E.T.A. da Caneta</p>
              <p className="text-[10px] text-zinc-600">Acesso completo por apenas <strong className="text-[#10702d] font-bold text-xs">R$ 29,97</strong> · Pagamento único</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button 
              type="button"
              onClick={scrollToTop}
              className="p-2 ml-1 rounded-xl bg-olive-100 hover:bg-olive-200 text-olive-850 cursor-pointer transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <a 
              href="https://sun.eduzz.com/E0D65V1Y91"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-2 bg-[#10702d] hover:bg-[#0c5622] text-white text-xs font-extrabold px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              <ShoppingCart className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Garantir por R$ 29,97</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}

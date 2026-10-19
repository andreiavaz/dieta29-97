/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ObjectionItem, FAQItem, BonusItem, FoodItem } from "./types";

export const APP_TITLE = "A Dieta da Caneta";
export const APP_SUBTITLE = "Descubra como se alimentar mesmo com pouco apetite, nutrir seu corpo e cuidar da sua massa muscular durante o emagrecimento sem dietas complicadas";

export const MAIN_PROMISE_1 = "Aprenda exatamente o que comer enquanto usa a caneta emagrecedora para evitar recuperar o peso quando o tratamento terminar.";
export const MAIN_PROMISE_2 = "Mesmo que você já tenha tentado várias dietas, esteja em platô ou tenha medo de voltar a engordar quando parar a medicação.";

export const OBJECTIONS: ObjectionItem[] = [
  {
    id: "obj-1",
    emoji: "🎯",
    title: "Sem norte nas refeições",
    situation: "Começou a usar a caneta, e não sabe o que comer",
    solution: "Você terá cardápios práticos com porções e combinações ideais para potencializar o efeito da medicação."
  },
  {
    id: "obj-2",
    emoji: "🔄",
    title: "Medo do rebote (engordar tudo de novo)",
    situation: "Tem medo de recuperar todo o peso quando parar a medicação",
    solution: "Aprenda a reeducar o hipotálamo enquanto a fome está controlada para redefinir o seu 'set point' de peso."
  },
  {
    id: "obj-3",
    emoji: "🤢",
    title: "Efeitos colaterais inconvenientes",
    situation: "Está sentindo sintomas como enjoo, intestino preso, queda de cabelo, fraqueza ou cansaço.",
    solution: "Ajustes específicos de fibras, hidratação e micronutrientes para neutralizar os efeitos colaterais digestivos mais frequentes."
  },
  {
    id: "obj-4",
    emoji: "💪",
    title: "Perda de massa e flacidez extrema",
    situation: "Está emagrecendo mas não quer perder músculo e ficar flácida",
    solution: "Protocolo proteico preciso que sinaliza para o corpo queimar gordura enquanto protege os seus músculos e sua pele."
  },
  {
    id: "obj-5",
    emoji: "💔",
    title: "Histórico de dietas frustradas",
    situation: "Já tentou dietas, restrições e várias estratégias no passado e tem medo de viver mais uma frustração.",
    solution: "Uma abordagem sem terrorismo nutricional que cabe na vida real, focada na sustentabilidade."
  },
  {
    id: "obj-7",
    emoji: "⏳",
    title: "Depender da caneta para sempre",
    situation: "Não quer passar o resto da vida dependendo da caneta para manter o peso.",
    solution: "O método D.I.E.T.A. cria independência metabólica para que você sustente o resultado com suas próprias pernas."
  },
  {
    id: "obj-8",
    emoji: "⚖️",
    title: "Pavor de pesar comida e contar calorias",
    situation: "Quer aprender a fazer boas escolhas sem pesar alimentos, contar calorias ou viver de dieta.",
    solution: "Regra visual do prato de ouro: aprenda a olhar para a porção e estimar a composição ideal em 3 segundos."
  },
  {
    id: "obj-9",
    emoji: "😔",
    title: "Culpa crônica ao comer",
    situation: "Está cansada de sentir culpa toda vez que come e deseja construir uma relação mais leve com a alimentação.",
    solution: "Resgate da paz com a comida. Nenhum alimento isolado é um vilão se você domina a combinação secreta."
  },
  {
    id: "obj-10",
    emoji: "🛡️",
    title: "Colocar a saúde em risco",
    situation: "Quer aproveitar ao máximo os resultados da caneta sem colocar sua saúde em risco.",
    solution: "Suporte clínico focado em segurança nutricional e funcionamento perfeito do intestino e sistema imunológico."
  }
];

export const TANGIBLES: string[] = [
  "O erro que faz milhares de mulheres recuperarem todo o peso depois da caneta",
  "Como transformar a redução da fome em emagrecimento de verdade",
  "O Método D.I.E.T.A., composto por 5 pilares para resultados duradouros",
  "Como montar refeições equilibradas sem pesar alimentos",
  "O que comer nos dias em que a fome desaparece",
  "Como evitar os principais efeitos colaterais do tratamento",
  "Os alimentos que não podem faltar na sua rotina",
  "14 dias de cardápios prontos para copiar",
  "Como criar hábitos para não depender da caneta para sempre"
];

export const INSIDE_CONTENT: string[] = [
  "Por que tantas mulheres recuperam todo o peso depois que param a caneta e como evitar esse erro.",
  "Como transformar a redução da fome em uma oportunidade para emagrecer com saúde.",
  "Os 5 pilares do Método D.I.E.T.A., desenvolvidos para ajudar você a preservar massa muscular, acelerar resultados e construir hábitos duradouros.",
  "O que comer nos dias em que a fome praticamente desaparece.",
  "Como montar refeições equilibradas sem precisar pesar alimentos ou contar calorias.",
  "A forma mais simples de organizar seu prato para emagrecer sem passar fome.",
  "Os alimentos que não podem faltar na rotina de quem usa caneta emagrecedora.",
  "Como evitar os efeitos colaterais mais comuns, como fraqueza, intestino preso, queda de cabelo e platô.",
  "14 dias de sugestões de cardápios prontos para facilitar seu dia a dia.",
  "Um plano simples para criar hábitos que permanecem mesmo depois do tratamento.",
  "Estratégias para não voltar a ganhar peso quando parar a medicação.",
  "Exercícios práticos para colocar tudo em ação imediatamente."
];

export const COMPLIANT_FEEDBACKS = [
  {
    text: "Eu não sabia o que comer e vivia com medo de fazer errado. Agora eu olho pro prato e sei exatamente como conciliar com a medicação.",
    author: "Karina M.",
    role: "Paciente em tratamento",
    location: "SP",
    tag: "Liberdade Nutricional",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "O enjoo melhorou muito quando ajustei a alimentação. Não imaginava que era tão simples controlar os efeitos colaterais.",
    author: "Mariana S.",
    role: "Usuária de semaglutida",
    location: "MG",
    tag: "Conforto e Alívio",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "Finalmente um material de nutrição que cabe na minha rotina corrida de mãe e profissional. Sem dietas mirabolantes.",
    author: "Rebeca T.",
    role: "Mãe e profissional",
    location: "PR",
    tag: "Praticidade",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "Parei de me sentir culpada toda vez que comia. O conhecimento do método me deu paz na hora de sentar à mesa.",
    author: "Claudia F.",
    role: "Restaurando o set point",
    location: "RS",
    tag: "Relação com a Comida",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "b-1",
    title: "Receitas de Almoço",
    description: "Pratos simples, nutritivos e ricos em proteína para manter o metabolismo ativo.",
    tag: "🎁 Grátis",
    retailPrice: 37
  },
  {
    id: "b-2",
    title: "Receitas de Lanche",
    description: "Opções rápidas e deliciosas para manter a saciedade ao longo do dia.",
    tag: "🎁 Grátis",
    retailPrice: 37
  },
  {
    id: "b-3",
    title: "Receitas de Jantar",
    description: "Receitas leves e saciantes para encerrar o dia de forma saudável e leve.",
    tag: "🎁 Grátis",
    retailPrice: 37
  },
  {
    id: "b-4",
    title: "Masterclass Planejamento Alimentar para Quem Usa Caneta",
    description: "Uma aula prática exclusiva mostrando em vídeo como planejar e estruturar sua alimentação no dia a dia.",
    tag: "🎥 Aula Exclusiva",
    retailPrice: 47
  }
];

export const CHECKOUT_URL = "https://sun.eduzz.com/E0D65V1Y91";
export const OFFER_PRICE = 29.97;

export const ACCESS_OFFER = {
  price: 29.97,
  link: "https://sun.eduzz.com/E0D65V1Y91",
  items: [
    "Guia digital Método D.I.E.T.A. da Caneta",
    "14 dias de sugestões de cardápios",
    "Guia de receitas para almoço",
    "Guia de receitas para lanche",
    "Guia de receitas para jantar",
    "Aula - A dieta da caneta - planejamento Alimentar para Quem Usa Caneta"
  ]
};

export const ACCESS_PREMIUM = ACCESS_OFFER;
export const ACCESS_COMMON = ACCESS_OFFER;
export const ACCESS_PREMIUM_IG = ACCESS_OFFER;
export const ACCESS_COMMON_IG = ACCESS_OFFER;

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona o pagamento?",
    answer: "A compra é feita em ambiente 100% seguro pela Eduzz. Você pode pagar no cartão (à vista ou parcelado), no Pix ou no boleto bancário."
  },
  {
    id: "faq-2",
    question: "Quando e como recebo o material?",
    answer: "O acesso é imediato e digital. Assim que o pagamento for aprovado (Pix e Cartão levam menos de 2 minutos), você recebe um e-mail de acesso exclusivo de onde poderá baixar e ler tudo no celular, tablet ou computador, quantas vezes quiser."
  },
  {
    id: "faq-3",
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso é vitalício. Você pode fazer o download dos materiais, mantê-los salvos para sempre e consultar todas as vezes que precisar do método."
  },
  {
    id: "faq-4",
    question: "Funciona pra qualquer caneta emagrecedora?",
    answer: "Sim. As orientações contidas se aplicam a quem está utilizando análogos de GLP-1 e GIP em geral, como a semaglutida (Ozempic/Wegovy), liraglutida (Saxenda), deocoglutida ou liraglutida, e tirzepatida (Mounjaro), prescrevidos pelo seu médico."
  },
  {
    id: "faq-5",
    question: "Preciso já estar usando a caneta?",
    answer: "Não. O guia foi desenvolvido tanto para quem já iniciou o tratamento quanto para quem está programando o início com indicação médica e deseja blindar o metabolismo e saber o que comer desde o primeiro dia."
  },
  {
    id: "faq-6",
    question: "É uma consulta individual?",
    answer: "Não, este é um guia digital completo em formato de eBook para você seguir no seu próprio ritmo. No entanto, dentro do eBook você encontrará instruções detalhadas de como dar novos passos e solicitar acompanhamento clínico individualizado comigo."
  },
  {
    id: "faq-7",
    question: "E se eu não gostar?",
    answer: "Garantimos a sua satisfação total. Você tem 7 dias de garantia incondicional. Se não gostar, basta enviar um e-mail para a equipe e devolvemos 100% do seu dinheiro, sem burocracias ou perguntas."
  },
  {
    id: "faq-8",
    question: "Tem suporte se eu tiver dúvidas?",
    answer: "Sim! Oferecemos suporte completo por e-mail para qualquer dúvida relacionada ao acesso, visualização ou downloads dos eBooks. No Plano Resultado Completo, você também conta adicionalmente com a inteligência artificial Nutri Responde para tirar dúvidas instantâneas."
  }
];

export const FOODS_DB: FoodItem[] = [
  {
    id: "food-chicken",
    name: "Peito de Frango Grelhado",
    category: "protein",
    potency: "Proteção contra flacidez",
    benefits: "Riquíssimo em proteínas magras de altíssimo valor biológico. Ajuda a sinalizar ao cérebro saciedade contínua e blinda sua massa magra durante o emagrecimento rápido.",
    icon: "🍗"
  },
  {
    id: "food-broccoli",
    name: "Brócolis no Vapor",
    category: "vegetable",
    potency: "Volume e Intestino",
    benefits: "Fibras insolúveis de alta qualidade que auxiliam no trânsito intestinal (ótimo contra o intestino preso da medicação) com curtíssima densidade calórica.",
    icon: "🥦"
  },
  {
    id: "food-quinoa",
    name: "Quinoa Cozida",
    category: "carb",
    potency: "Energia sem pico de insulina",
    benefits: "Carboidrato de baixo índice glicêmico rico em lisina e fibra. Dá a energia necessária para espantar a fraqueza sem disparar a glicose do prato.",
    icon: "🌾"
  },
  {
    id: "food-avocado",
    name: "Fatias de Abacate",
    category: "healthy-fat",
    potency: "Saúde hormonal & Cérebro",
    benefits: "Ácidos graxos monoinsaturados excelentes para lubrificar o trato digestivo, desacelerar a digestão de forma saudável e nutrir o cérebro.",
    icon: "🥑"
  },
  {
    id: "food-egg",
    name: "Ovo Cozido",
    category: "protein",
    potency: "Mantém a massa muscular",
    benefits: "Proteína perfeita + colina na gema para blindar a queda de cabelo e dar saciedade celular profunda, essencial nos dias em que a fome some.",
    icon: "🥚"
  },
  {
    id: "food-spinach",
    name: "Espinafre Fresco",
    category: "vegetable",
    potency: "Combate a queda de cabelo",
    benefits: "Abundante em ferro, vitamina A e C. Ajuda a manter os folículos capilares fortalecidos em processos de emagrecimento rápido.",
    icon: "🥬"
  }
];

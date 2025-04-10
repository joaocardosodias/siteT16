export interface Project {
  id: string
  title: string
  description: string
  fullDescription?: string
  image: string
  technologies: string[]
  features?: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: "project1",
    title: "Stock Market Tycoon",
    description:
      "Jogo de simulação onde você administra sua própria corretora de valores e compete para se tornar o maior magnata do mercado de ações.",
    fullDescription:
      "Um simulador completo do mercado financeiro onde você começa com uma pequena corretora e precisa crescer até dominar Wall Street. Negocie ações, contrate analistas, desenvolva algoritmos de trading e reaja a eventos de mercado em tempo real. Cada decisão afeta sua reputação e o valor das ações da sua empresa.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Unity", "C#", "Firebase", "API de Dados Financeiros", "IA para NPCs"],
    features: [
      "Mercado dinâmico com mais de 100 empresas virtuais",
      "Ciclos econômicos que afetam diferentes setores",
      "Sistema de reputação que influencia seus negócios",
      "Modo carreira com 30+ níveis de progressão",
      "Multiplayer para competir com amigos",
    ],
    link: "https://example.com/stock-tycoon",
  },
  {
    id: "project2",
    title: "Real Estate Empire",
    description:
      "RPG de estratégia onde você constrói um império imobiliário, negociando propriedades e criando fundos de investimento imobiliário.",
    fullDescription:
      "Um RPG de estratégia em pixel art onde você começa como um pequeno investidor imobiliário e evolui até criar seu próprio fundo de investimento. Compre, venda e desenvolva propriedades em uma cidade que evolui dinamicamente. Enfrente crises econômicas, mudanças de zoneamento e concorrentes agressivos enquanto expande seu império.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Godot Engine", "GDScript", "Node.js", "MongoDB", "Procedural Generation"],
    features: [
      "Mapa da cidade gerado proceduralmente",
      "Ciclos econômicos que afetam valores imobiliários",
      "Sistema de desenvolvimento de propriedades",
      "Negociação com NPCs para compra e venda",
      "Modo sandbox e modo história com objetivos",
    ],
    link: "https://example.com/realestate-empire",
  },
  {
    id: "project3",
    title: "Market Wizards",
    description:
      "Jogo de cartas colecionáveis onde cada carta representa um ativo financeiro com poderes especiais baseados em seu comportamento real no mercado.",
    fullDescription:
      "Um jogo de cartas colecionáveis digital onde você monta seu deck com diferentes ativos financeiros. Cada carta tem poderes baseados em características reais: ações de tecnologia dão bônus de inovação, títulos do governo oferecem proteção, commodities têm efeitos de volatilidade. Aprenda sobre diversificação e alocação de ativos enquanto compete em torneios e sobe no ranking global.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Redux", "Node.js", "WebGL", "Socket.io"],
    features: [
      "Mais de 300 cartas baseadas em ativos reais",
      "Sistema de combate que simula movimentos de mercado",
      "Modo história que ensina conceitos de investimento",
      "Torneios semanais com prêmios virtuais",
      "Editor de deck com análise de diversificação",
    ],
    link: "https://example.com/market-wizards",
  },
  {
    id: "project4",
    title: "Yield Hunter",
    description:
      "Jogo de aventura em pixel art onde você é um caçador de rendimentos, explorando cavernas e masmorras que representam diferentes classes de ativos de renda fixa.",
    fullDescription:
      "Um jogo de aventura em pixel art onde você explora um mundo onde as masmorras são diferentes tipos de investimentos em renda fixa. Enfrente os monstros da inflação, desvie das armadilhas da liquidez e derrote os chefes da volatilidade. Cada tesouro encontrado representa um rendimento, e você precisa balancear risco e retorno para maximizar seus ganhos e completar sua coleção de relíquias financeiras.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Phaser.js", "TypeScript", "Tiled", "Howler.js", "PixiJS"],
    features: [
      "Mundo aberto com 5 regiões baseadas em classes de ativos",
      "Sistema de combate baseado em conceitos financeiros",
      "Equipamentos que representam estratégias de investimento",
      "Modo roguelike com masmorras geradas aleatoriamente",
      "Sistema de crafting para criar novos investimentos",
    ],
    link: "https://example.com/yield-hunter",
  },
  {
    id: "project5",
    title: "Global Markets Quest",
    description:
      "RPG de mundo aberto onde você viaja por diferentes países, cada um com seu próprio mercado financeiro, moeda e regras econômicas únicas.",
    fullDescription:
      "Um RPG de mundo aberto onde cada região representa um país com seu próprio mercado financeiro. Viaje entre EUA, Japão, Brasil, Europa e China, aprendendo sobre diferentes moedas, regulações e oportunidades de investimento. Complete missões para desbloquear novas estratégias, forme alianças com NPCs locais e construa uma carteira global enquanto enfrenta eventos como crises cambiais e acordos comerciais.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Unreal Engine", "Blueprint", "C++", "AWS GameLift", "FMOD"],
    features: [
      "5 regiões distintas com mercados únicos",
      "Sistema de câmbio dinâmico entre moedas",
      "Missões baseadas em eventos econômicos reais",
      "Personagens inspirados em investidores famosos",
      "Modo cooperativo para estratégias de investimento em equipe",
    ],
    link: "https://example.com/global-markets",
  },
]

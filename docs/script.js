// Project data
const projects = [
  {
    id: "project1",
    title: "Stock Market Tycoon",
    description:
      "Jogo de simulação onde você administra sua própria corretora de valores e compete para se tornar o maior magnata do mercado de ações.",
    fullDescription:
      "Um simulador completo do mercado financeiro onde você começa com uma pequena corretora e precisa crescer até dominar Wall Street. Negocie ações, contrate analistas, desenvolva algoritmos de trading e reaja a eventos de mercado em tempo real. Cada decisão afeta sua reputação e o valor das ações da sua empresa.",
    image: "https://placehold.co/800x450/1e40af/ffffff?text=Stock+Market+Tycoon",
    technologies: ["Unity", "C#", "Firebase", "API de Dados Financeiros", "IA para NPCs"],
    features: [
      "Mercado dinâmico com mais de 100 empresas virtuais",
      "Ciclos econômicos que afetam diferentes setores",
      "Sistema de reputação que influ encia seus negócios",
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
    image: "https://placehold.co/800x450/2563eb/ffffff?text=Real+Estate+Empire",
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
      "Um jogo de cartas colecionáveis digital onde você monta seu deck com diferentes ativos financeiros. Cada carta tem poderes baseadas em características reais: ações de tecnologia dão bônus de inovação, títulos do governo oferecem proteção, commodities têm efeitos de volatilidade. Aprenda sobre diversificação e alocação de ativos enquanto compete em torneios e sobe no ranking global.",
    image: "https://placehold.co/800x450/3b82f6/ffffff?text=Market+Wizards",
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
    image: "https://placehold.co/800x450/60a5fa/ffffff?text=Yield+Hunter",
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
    image: "https://placehold.co/800x450/93c5fd/ffffff?text=Global+Markets+Quest",
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

// DOM Elements
const projectsSection = document.getElementById("projects")
const projectModal = document.getElementById("project-modal")
const modalContent = document.getElementById("modal-content")
const exploreButton = document.getElementById("explore-button")

// Audio Elements
const clickSound = document.getElementById("click-sound")
const hoverSound = document.getElementById("hover-sound")
const gameThemes = [
  document.getElementById("game1-theme"),
  document.getElementById("game2-theme"),
  document.getElementById("game3-theme"),
  document.getElementById("game4-theme"),
  document.getElementById("game5-theme"),
]

// Current playing theme
let currentTheme = null

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Render projects
  renderProjects()

  // Add event listeners
  exploreButton.addEventListener("click", () => {
    playSound("click")
    scrollToProjects()
  })

  // Add hover sound to buttons
  const buttons = document.querySelectorAll(".pixel-button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      playSound("hover")
    })
  })

  // Close modal when clicking outside
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeModal()
    }
  })
})

// Render all projects
function renderProjects() {
  projects.forEach((project, index) => {
    const projectElement = createProjectElement(project, index)
    projectsSection.appendChild(projectElement)
  })
}

// Create a project element
function createProjectElement(project, index) {
  const projectContainer = document.createElement("div")
  projectContainer.className = "min-h-screen py-20"
  projectContainer.id = `project-${index}`

  const projectCard = document.createElement("div")
  projectCard.className = "container mx-auto px-4 h-full flex items-center"

  projectCard.innerHTML = `
        <div class="project-card">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 relative overflow-hidden">
                    <div class="aspect-video relative">
                        <img src="${project.image || "https://placehold.co/800x450/1e3a8a/ffffff?text=Game+Screenshot"}" alt="${project.title}" class="w-full h-full object-cover" style="image-rendering: pixelated;">
                        <div class="project-image-gradient"></div>
                    </div>
                </div>
                <div class="md:w-1/2 p-6 md:p-8">
                    <div class="project-title-container">
                        <div class="project-number-indicator pixel-borders"></div>
                        <h3 class="project-number">Jogo ${index + 1}</h3>
                    </div>
                    <h2 class="project-title">${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map((tech) => `<span class="technology-tag">${tech}</span>`).join("")}
                    </div>
                    <button class="pixel-button bg-blue-600 hover:bg-blue-500 text-white font-pixel py-2 px-6 rounded-sm flex items-center view-details-button" data-index="${index}">
                        VER DETALHES
                    </button>
                </div>
            </div>
        </div>
    `

  // Add event listener to the button
  setTimeout(() => {
    const detailsButton = projectCard.querySelector(".view-details-button")
    detailsButton.addEventListener("click", function () {
      const index = Number.parseInt(this.getAttribute("data-index"))
      openProjectDetails(index)
    })
  }, 0)

  projectContainer.appendChild(projectCard)
  return projectContainer
}

// Open project details modal
function openProjectDetails(index) {
  playSound("click")
  const project = projects[index]

  // Play game theme
  playGameTheme(index)

  // Prevent scrolling
  document.body.style.overflow = "hidden"

  // Create modal content
  modalContent.innerHTML = `
        <div class="p-6">
            <div class="modal-header">
                <h2 class="modal-title">${project.title}</h2>
                <button class="modal-close-button" id="close-modal-button">X</button>
            </div>
            
            <div class="modal-image-container">
                <img src="${project.image || "https://placehold.co/800x450/1e3a8a/ffffff?text=Game+Screenshot"}" alt="${project.title}" class="modal-image">
            </div>
            
            <div class="modal-content space-y-4">
                <p>${project.fullDescription || project.description}</p>
                
                <div class="modal-section">
                    <h3 class="modal-section-title">Tecnologias</h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map((tech) => `<span class="technology-tag">${tech}</span>`).join("")}
                    </div>
                </div>
                
                ${
                  project.features
                    ? `
                <div class="modal-section">
                    <h3 class="modal-section-title">Características</h3>
                    <ul class="modal-features-list">
                        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
                    </ul>
                </div>
                `
                    : ""
                }
                
                <div class="modal-play-button-container">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="modal-play-button">
                        JOGAR AGORA <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/gamepad-2.svg" alt="Gamepad" class="w-6 h-6 ml-3 icon-white">
                    </a>
                </div>
                
                <p class="modal-redirect-note">
                    <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/external-link.svg" alt="External Link" class="inline-block w-4 h-4 mr-1 icon-blue">
                    Você será redirecionado para o site do jogo
                </p>
            </div>
        </div>
    `

  // Show modal
  projectModal.classList.remove("hidden")

  // Add event listener to close button
  document.getElementById("close-modal-button").addEventListener("click", closeModal)
}

// Close modal
function closeModal() {
  playSound("click")
  projectModal.classList.add("hidden")
  document.body.style.overflow = "auto"

  // Stop game theme
  stopGameTheme()
}

// Scroll to projects section
function scrollToProjects() {
  const firstProject = document.getElementById("project-0")
  if (firstProject) {
    firstProject.scrollIntoView({ behavior: "smooth" })
  }
}

// Play sound
function playSound(type) {
  if (type === "click") {
    clickSound.currentTime = 0
    clickSound.play().catch((err) => console.error("Error playing sound:", err))
  } else if (type === "hover") {
    hoverSound.currentTime = 0
    hoverSound.play().catch((err) => console.error("Error playing sound:", err))
  }
}

// Play game theme
function playGameTheme(index) {
  // Stop current theme if playing
  stopGameTheme()

  // Play new theme
  currentTheme = gameThemes[index]
  if (currentTheme) {
    currentTheme.volume = 0.5
    currentTheme.play().catch((err) => console.error("Error playing game theme:", err))
  }
}

// Stop game theme
function stopGameTheme() {
  if (currentTheme) {
    currentTheme.pause()
    currentTheme.currentTime = 0
    currentTheme = null
  }
}

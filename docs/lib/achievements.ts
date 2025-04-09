export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
}

export const achievements: Achievement[] = [
  {
    id: "all_projects_viewed",
    title: "Explorador Completo",
    description: "Visualizou todos os 5 projetos do portfólio",
    icon: "trophy",
  },
  {
    id: "first_project",
    title: "Primeiro Passo",
    description: "Visualizou o primeiro projeto do portfólio",
    icon: "star",
  },
  {
    id: "visit_external",
    title: "Aventureiro",
    description: "Visitou um projeto externo através do link",
    icon: "external-link",
  },
]

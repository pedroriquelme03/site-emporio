/**
 * Custom themes and configurations for Empório das Cortinas
 */

export const COLORS = {
  primary: "#1A1A1A", // Black/Dark
  secondary: "#F5F2ED", // Warm Off-white
  accent: "#C5A059", // Gold
  muted: "#8E9299", // Gray
};

export const ROUTES = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Produtos", path: "/produtos" },
  { name: "Processo", path: "/processo" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contato" },
];

export const PRODUCTS = [
  {
    id: "cortinas",
    title: "Cortinas Sob Medida",
    description: "Elegância e fluidez em tecidos nobres para transformar qualquer ambiente.",
    image: "https://picsum.photos/seed/curtain1/800/600",
  },
  {
    id: "persianas",
    title: "Persianas",
    description: "Controle solar inteligente com design contemporâneo e funcionalidade.",
    image: "https://picsum.photos/seed/blind1/800/600",
  },
  {
    id: "moveis",
    title: "Móveis",
    description: "Peças exclusivas de curadoria para compor seu projeto com sofisticação.",
    image: "https://picsum.photos/seed/furniture1/800/600",
  },
  {
    id: "decoracao",
    title: "Decoração",
    description: "Detalhes que fazem a diferença na finalização do seu espaço.",
    image: "https://picsum.photos/seed/decor1/800/600",
  },
];

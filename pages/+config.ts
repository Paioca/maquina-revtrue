import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Global vike + vike-react config. Each page can override these in its own +config.ts.
export default {
  extends: vikeReact,
  // Pré-render todas as rotas estáticas no build → HTML estático por rota
  prerender: true,
  // Defaults globais (sobrescritos por +config.ts de cada página)
  title: "RevTrue — Mais receita do mesmo pipeline",
  description:
    "Revenue as a Service. A gente entra na sua operação, encontra o maior gargalo de receita e ataca com AI, dados e método. Sem promessa de número. Com diagnóstico que você leva pra casa.",
  lang: "pt-BR",
} satisfies Config;

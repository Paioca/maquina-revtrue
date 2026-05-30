import felipePortrait from "./assets/partners/felipe.webp";
import matheusphPortrait from "./assets/partners/matheusph.webp";

export interface Partner {
  id: "felipe" | "matheusph";
  name: string;
  /** Short label used on the card (e.g. "Vendas"). */
  roleShort: string;
  /** Full role label used on the modal header / bio context. */
  role: string;
  expertise: string[];
  prevCompanies: string[];
  bio: string;
  linkedin: string;
  /** Image source (placeholder until official illustrations arrive). */
  portrait?: string;
}

export const partners: Partner[] = [
  {
    id: "felipe",
    name: "Felipe Galli",
    roleShort: "Vendas",
    role: "Vendas",
    prevCompanies: ["Oracle", "Locaweb", "RD Station"],
    expertise: ["Vendas B2B", "Revenue Architecture", "Pipeline & Forecast"],
    bio:
      "14 anos em vendas B2B. Passou por Locaweb, Oracle e Resultados Digitais. Operou deals enterprise, ramp de time comercial e estruturação de pipeline em ticket alto e ciclo longo. Certificado em Revenue Architecture e Bowtie Analytics (Winning by Design) e Receita Previsível.",
    linkedin: "https://www.linkedin.com/in/felipegalli/",
    portrait: felipePortrait,
  },
  {
    id: "matheusph",
    name: "Matheus PH",
    roleShort: "Growth · RevOps",
    role: "Growth, Marketing e RevOps",
    prevCompanies: ["Educbank", "HeroSpark"],
    expertise: ["Growth", "Marketing", "RevOps", "CRM", "AI", "Dados"],
    bio:
      "Já foi Diretor de Crescimento na Educbank e na HeroSpark. Especialista em CRM, growth, marketing e RevOps. Cuida da infra que sustenta a operação comercial: stack, dados, automação, ritual.",
    linkedin: "https://www.linkedin.com/in/matheusph/",
    portrait: matheusphPortrait,
  },
];

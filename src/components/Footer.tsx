/* Footer (cream, 4 cols) */
import { Logo } from "../ui";

const cream = "#F6F3EE";

const FOOTER_COLS = [
  {
    title: "Contato",
    links: [
      { l: "contato@revtrue.com.br", h: "mailto:contato@revtrue.com.br" },
      { l: "São Paulo · Sorocaba", h: "#" },
    ],
  },
  {
    title: "Navegação",
    links: [
      { l: "O problema", h: "/#problema" },
      { l: "Como trabalhamos", h: "/#metodo" },
      { l: "A sessão", h: "/#oferta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { l: "Política de Privacidade", h: "/privacidade" },
      { l: "Termos de Uso", h: "/termos" },
    ],
  },
];

function FooterCol({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "rgba(20,24,31,.55)",
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
        {links.map((link) => (
          <li key={link.l}>
            <a
              href={link.h}
              target={link.h.startsWith("http") ? "_blank" : undefined}
              rel={link.h.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ color: "rgba(20,24,31,.78)", fontSize: 13.5, textDecoration: "none" }}
            >
              {link.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: cream,
        color: "rgba(20,24,31,.65)",
        padding: "60px 40px 40px",
        borderTop: "1px solid rgba(20,24,31,.1)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          className="rev-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 40,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(20,24,31,.1)",
          }}
        >
          <div>
            <Logo variant="primary" style={{ height: 28, width: "auto", display: "block" }} />
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.55,
                color: "rgba(20,24,31,.6)",
                marginTop: 18,
                maxWidth: 280,
              }}
            >
              Diagnóstico comercial para empresas que querem crescer com estrutura.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 12,
            fontFamily: "var(--font-mono)",
            color: "rgba(20,24,31,.5)",
          }}
        >
          {/* suppressHydrationWarning: o ano é calculado no build (SSG) e no client.
              Se SSG rodar perto da virada de ano, os valores podem diferir e React
              dispara error #418 (hydration mismatch). Suprimir aqui é seguro porque
              o conteúdo final renderiza correto no client após hidratação. */}
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} Revtrue · São Paulo · Sorocaba
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rev-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .rev-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

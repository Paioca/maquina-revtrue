/* EmpresaOferta — Seção 6 · A Oferta
 * $100M Offers: stack de valor + elimina objeções + dream outcome
 * DotCom Secrets: High-Ticket Application Funnel
 * StoryBrand: CTA claro + diferencia do mercado */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";

const navy = "#14181F";
const orange = "#D45A2A";

const stack = [
  {
    item: "45 minutos direto com Felipe",
    detalhe: "Sem SDR, sem assistente, sem roteiro de qualificação. Você fala com quem vai fazer o trabalho.",
  },
  {
    item: "Diagnóstico honesto da sua operação",
    detalhe: "Onde a venda trava, o que o número está dizendo, e o que você pode mudar essa semana — não no próximo trimestre.",
  },
  {
    item: "Prioridade clara do que resolver primeiro",
    detalhe: "Não uma lista genérica de melhorias. O que tem maior impacto no menor tempo, na ordem certa.",
  },
  {
    item: "Documento escrito do que mapeamos",
    detalhe: "Você leva. Usa como quiser. Mesmo que não sigamos juntos depois.",
  },
  {
    item: "Zero pressão pra fechar qualquer coisa",
    detalhe: "Se fizer sentido continuar, você me procura. Eu não vou te ligar, mandar follow-up nem criar urgência falsa.",
  },
];

export function EmpresaOferta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="oferta"
        style={{
          background: navy,
          color: "white",
          padding: "120px 0",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
          <div className="oferta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px", alignItems: "start" }}>

            {/* Coluna esquerda: provocação + posicionamento */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: orange,
                  fontWeight: 700,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  margin: "0 0 28px",
                }}
              >
                A sessão de diagnóstico
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(34px, 4.5vw, 66px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.035em",
                  margin: 0,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Toda "sessão gratuita" do mercado é pitch{" "}
                <span style={{ color: orange }}>disfarçado de diagnóstico.</span>
              </h2>

              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,.75)", margin: "32px 0 0" }}>
                Você agenda. Um assistente faz perguntas de um roteiro. No final, chega uma proposta com "condições especiais pra fechar hoje". Você não aprendeu nada. Só perdeu uma hora.
              </p>

              <div
                style={{
                  margin: "36px 0",
                  padding: "28px 32px",
                  background: "rgba(255,255,255,.04)",
                  borderLeft: `3px solid ${orange}`,
                  borderRadius: "0 14px 14px 0",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "white",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Na sessão de diagnóstico da Revtrue, você fala diretamente comigo. Sem intermediário. Sem roteiro. Sem pitch no final.
                </p>
              </div>

              {/* Avatar do Felipe */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 22px",
                  background: "rgba(255,255,255,.04)",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <img
                  src="/felipe.webp"
                  alt="Felipe Galli"
                  width={56}
                  height={56}
                  style={{ width: 56, height: 56, borderRadius: 999, objectFit: "cover", flexShrink: 0 }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "white" }}>Felipe Galli</p>
                  <p style={{ margin: "3px 0 0", fontSize: 13, color: "rgba(255,255,255,.5)", fontFamily: "var(--font-mono)", letterSpacing: ".04em" }}>
                    É com quem você vai falar
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna direita: stack de valor + CTA */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "rgba(255,255,255,.4)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  margin: "0 0 28px",
                }}
              >
                O que você recebe na sessão
              </p>

              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {stack.map((s, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "22px 0",
                      borderBottom: i < stack.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
                    }}
                  >
                    <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: "white", lineHeight: 1.4 }}>
                      <span style={{ color: orange, marginRight: 10 }}>✓</span>
                      {s.item}
                    </p>
                    <p style={{ margin: "6px 0 0 26px", fontSize: 15, color: "rgba(255,255,255,.6)", lineHeight: 1.55 }}>
                      {s.detalhe}
                    </p>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  style={{
                    background: orange,
                    color: "white",
                    border: 0,
                    padding: "20px 32px",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 16,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  Quero falar direto com o Felipe <Icon name="arrow-right" size="md" />
                </button>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "rgba(255,255,255,.45)",
                    margin: 0,
                    letterSpacing: ".03em",
                  }}
                >
                  5 min pra preencher · 45 min de conversa real · sem pitch no final
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={open} onOpenChange={setOpen} />

      <style>{`
        @media (max-width: 900px) {
          .oferta-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          #oferta { padding: 80px 0 !important; }
        }
      `}</style>
    </>
  );
}

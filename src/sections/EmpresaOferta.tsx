/* EmpresaOferta — Seção 6 · A Oferta
 * Grand Slam Offer com provocação ao mercado */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";

const navy = "#14181F";
const orange = "#D45A2A";

const entrega = [
  "Diagnóstico direto de onde a venda trava: processo, time, número, ou os três",
  "O que mudar primeiro, na ordem certa",
  "Documento escrito com o que mapeamos, pra você levar e usar como quiser",
  "Se decidir continuar trabalhando junto, você me procura. Eu não vou te ligar, não vou mandar follow-up, não vou criar urgência falsa",
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

            {/* Coluna esquerda: provocação */}
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  margin: 0,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Vou ser direto: toda "sessão gratuita" do mercado é{" "}
                <span style={{ color: orange }}>pitch disfarçado.</span>
              </h2>

              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,.75)", margin: "32px 0 0" }}>
                Você agenda, fala com um assistente que faz perguntas de um roteiro, e no final recebe uma proposta comercial com "condições especiais pra fechar hoje".
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,.75)", margin: "20px 0 0" }}>
                Não aprendeu nada. Só perdeu uma hora.
              </p>

              <div
                style={{
                  marginTop: 36,
                  padding: "28px 32px",
                  background: `${orange}15`,
                  borderRadius: 16,
                  border: `1px solid ${orange}40`,
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "white",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Comigo é diferente. Você fala diretamente comigo.{" "}
                  <span style={{ color: orange }}>Sem intermediário, sem SDR, sem roteiro de qualificação.</span>
                </p>
              </div>

              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: "28px 0 0" }}>
                Em 45 minutos eu te digo o que está travando a sua venda e o que você pode começar a fazer{" "}
                <strong style={{ color: "white" }}>essa semana</strong>. Não no mês que vem. Não "depois de fechar contrato". Essa semana.
              </p>
            </div>

            {/* Coluna direita: foto inline + o que você recebe */}
            <div>
              {/* Foto pequena inline — reforça "você fala comigo" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 36,
                  padding: "16px 20px",
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
                    Founder · Revtrue
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: orange,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  margin: "0 0 28px",
                }}
              >
                O que você recebe
              </p>

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                {entrega.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 20,
                      padding: "24px 0",
                      borderBottom: i < entrega.length - 1 ? "1px solid rgba(255,255,255,.08)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: orange,
                        fontWeight: 700,
                        letterSpacing: ".06em",
                        paddingTop: 3,
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
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
                    color: "rgba(255,255,255,.5)",
                    margin: 0,
                    letterSpacing: ".02em",
                  }}
                >
                  5 minutos pra preencher · 45 minutos de conversa real · sem pitch no final
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={open} onOpenChange={setOpen} />

      <style>{`
        @media (max-width: 900px) {
          .oferta-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #oferta { padding: 80px 0 !important; }
        }
      `}</style>
    </>
  );
}

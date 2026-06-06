/* Calculadora de Meta — funil reverso.
 * Parte da meta de faturamento mensal e calcula quantas reuniões, propostas,
 * negociações e fechamentos são necessários, dado o ticket médio e as taxas
 * de conversão (ou benchmark B2B se o usuário não souber as dele). */
import { useMemo, useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";
const cream = "#F6F3EE";

/* Benchmark B2B (editável). Ordem: topo → fundo do funil. */
const BENCH = {
  reuniaoProposta: 55,
  propostaNegociacao: 65,
  negociacaoFechamento: 50,
  fechamentoVenda: 80,
};

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

const onlyDigits = (s: string) => Number(s.replace(/\D/g, "")) || 0;

function NumberField({
  label,
  prefix,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  prefix?: string;
  value: number;
  onChange: (n: number) => void;
  placeholder?: string;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.55)",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {prefix && (
          <span
            style={{
              position: "absolute",
              left: 16,
              color: "rgba(255,255,255,.5)",
              fontSize: 16,
              fontWeight: 600,
              pointerEvents: "none",
            }}
          >
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="numeric"
          value={value ? value.toLocaleString("pt-BR") : ""}
          placeholder={placeholder}
          onChange={(e) => onChange(onlyDigits(e.target.value))}
          style={{
            width: "100%",
            height: 52,
            padding: prefix ? "0 16px 0 44px" : "0 16px",
            borderRadius: 12,
            background: navy,
            border: "1px solid rgba(255,255,255,.14)",
            color: "white",
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
      </div>
    </label>
  );
}

function RateRow({
  label,
  value,
  onChange,
  disabled,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  disabled: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "14px 0",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <span style={{ fontSize: 14, color: "rgba(255,255,255,.8)", lineHeight: 1.3 }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
        <input
          type="number"
          min={1}
          max={100}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Math.max(1, Math.min(100, Number(e.target.value) || 0)))}
          style={{
            width: 64,
            height: 40,
            padding: "0 8px",
            textAlign: "right",
            borderRadius: 8,
            background: navy,
            border: "1px solid rgba(255,255,255,.14)",
            color: "white",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
        <span style={{ color: orange, fontWeight: 700, fontSize: 15 }}>%</span>
      </div>
    </div>
  );
}

export function Calculadora() {
  const [open, setOpen] = useState(false);

  const [meta, setMeta] = useState(0);
  const [ticket, setTicket] = useState(0);
  const [ciclo, setCiclo] = useState(0);

  const [useBenchmark, setUseBenchmark] = useState(true);
  const [rates, setRates] = useState(BENCH);

  const eff = useBenchmark ? BENCH : rates;

  const r = useMemo(() => {
    if (meta <= 0 || ticket <= 0) return null;
    const c1 = eff.reuniaoProposta / 100;
    const c2 = eff.propostaNegociacao / 100;
    const c3 = eff.negociacaoFechamento / 100;
    const c4 = eff.fechamentoVenda / 100;

    const vendas = Math.ceil(meta / ticket);
    const fechamento = Math.ceil(vendas / c4);
    const negociacao = Math.ceil(fechamento / c3);
    const propostas = Math.ceil(negociacao / c2);
    const reunioes = Math.ceil(propostas / c1);
    const valorFinal = vendas * ticket;

    return { vendas, fechamento, negociacao, propostas, reunioes, valorFinal };
  }, [meta, ticket, eff]);

  const stages = r
    ? [
        { label: "Reuniões", value: r.reunioes },
        { label: "Propostas", value: r.propostas },
        { label: "Negociação", value: r.negociacao },
        { label: "Fechamento", value: r.fechamento },
        { label: "Vendas", value: r.vendas },
      ]
    : [];

  const max = r ? r.reunioes : 1;

  return (
    <>
      {/* ─── Hero ─── */}
      <section style={{ background: navy, color: "white", padding: "100px 0 56px" }}>
        <div className="lp-container" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              background: navySoft,
              color: orange,
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              marginBottom: 32,
              border: `1px solid ${orange}40`,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 99, background: orange }} />
            Calculadora de Meta
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(34px, 6vw, 72px)",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              margin: 0,
              fontWeight: 700,
              color: "white",
            }}
          >
            Quantas reuniões a sua meta <span style={{ color: orange }}>realmente exige?</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,.72)", margin: "28px 0 0", maxWidth: 640 }}>
            Preencha sua meta mensal e o ticket médio. A calculadora monta o funil de trás pra frente e mostra o volume que cada etapa precisa entregar.
          </p>
        </div>
      </section>

      {/* ─── Corpo: inputs + resultado ─── */}
      <section style={{ background: navySoft, color: "white", padding: "56px 0 100px" }}>
        <div className="lp-container" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="calc-grid"
            style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: 32, alignItems: "start" }}
          >
            {/* Inputs */}
            <div
              style={{
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <NumberField label="Meta de faturamento (mês)" prefix="R$" value={meta} onChange={setMeta} placeholder="50.000" />
              <NumberField label="Ticket médio" prefix="R$" value={ticket} onChange={setTicket} placeholder="5.000" />
              <NumberField label="Ciclo de venda (dias pra fechar)" value={ciclo} onChange={setCiclo} placeholder="30" />

              {/* Taxas de conversão */}
              <div style={{ marginTop: 4 }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    cursor: "pointer",
                    padding: "14px 16px",
                    borderRadius: 12,
                    background: useBenchmark ? `${orange}14` : "rgba(255,255,255,.03)",
                    border: `1px solid ${useBenchmark ? orange + "45" : "rgba(255,255,255,.1)"}`,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={useBenchmark}
                    onChange={(e) => setUseBenchmark(e.target.checked)}
                    style={{ marginTop: 3, width: 18, height: 18, accentColor: orange, flexShrink: 0 }}
                  />
                  <span>
                    <span style={{ display: "block", fontWeight: 700, fontSize: 14, color: "white" }}>
                      Não sei minhas taxas de conversão
                    </span>
                    <span style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,.6)", marginTop: 2, lineHeight: 1.45 }}>
                      Usar benchmark de mercado B2B como ponto de partida.
                    </span>
                  </span>
                </label>

                <div style={{ marginTop: 18 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.5)",
                      fontWeight: 700,
                      margin: "0 0 6px",
                    }}
                  >
                    Conversão entre etapas
                  </p>
                  <RateRow label="Reunião → Proposta" value={eff.reuniaoProposta} disabled={useBenchmark} onChange={(n) => setRates({ ...rates, reuniaoProposta: n })} />
                  <RateRow label="Proposta → Negociação" value={eff.propostaNegociacao} disabled={useBenchmark} onChange={(n) => setRates({ ...rates, propostaNegociacao: n })} />
                  <RateRow label="Negociação → Fechamento" value={eff.negociacaoFechamento} disabled={useBenchmark} onChange={(n) => setRates({ ...rates, negociacaoFechamento: n })} />
                  <RateRow label="Fechamento → Venda" value={eff.fechamentoVenda} disabled={useBenchmark} onChange={(n) => setRates({ ...rates, fechamentoVenda: n })} />
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div>
              {!r ? (
                <div
                  style={{
                    border: "1px dashed rgba(255,255,255,.18)",
                    borderRadius: 20,
                    padding: "60px 32px",
                    textAlign: "center",
                    color: "rgba(255,255,255,.5)",
                    fontSize: 16,
                    lineHeight: 1.6,
                  }}
                >
                  Preencha a <strong style={{ color: "white" }}>meta</strong> e o{" "}
                  <strong style={{ color: "white" }}>ticket médio</strong> pra ver o seu funil.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {/* Funil */}
                  <div
                    style={{
                      background: "rgba(255,255,255,.03)",
                      border: "1px solid rgba(255,255,255,.08)",
                      borderRadius: 20,
                      padding: "28px 24px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: orange,
                        fontWeight: 700,
                        margin: "0 0 20px",
                      }}
                    >
                      O funil pra bater {brl(meta)}/mês
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {stages.map((s, i) => {
                        const widthPct = Math.max(22, (s.value / max) * 100);
                        const last = i === stages.length - 1;
                        return (
                          <div key={s.label}>
                            <div
                              style={{
                                width: `${widthPct}%`,
                                background: last ? orange : `rgba(212,90,42,${0.28 + i * 0.12})`,
                                borderRadius: 10,
                                padding: "14px 18px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 12,
                                transition: "width .25s ease",
                                minWidth: 0,
                              }}
                            >
                              <span style={{ fontSize: 14, fontWeight: 600, color: "white", whiteSpace: "nowrap" }}>{s.label}</span>
                              <span className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>
                                {s.value.toLocaleString("pt-BR")}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Valor final + ritmo */}
                  <div className="calc-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={{ background: `${orange}16`, border: `1px solid ${orange}45`, borderRadius: 16, padding: "22px 24px" }}>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: orange, fontWeight: 700, margin: "0 0 8px" }}>
                        Valor final
                      </p>
                      <p className="font-display" style={{ fontSize: "clamp(26px,3.2vw,36px)", fontWeight: 700, color: "white", margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>
                        {brl(r.valorFinal)}
                      </p>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", margin: "8px 0 0" }}>{r.vendas} vendas × {brl(ticket)}</p>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "22px 24px" }}>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", fontWeight: 700, margin: "0 0 8px" }}>
                        Ritmo necessário
                      </p>
                      <p className="font-display" style={{ fontSize: "clamp(26px,3.2vw,36px)", fontWeight: 700, color: "white", margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>
                        {Math.ceil(r.reunioes / 4.33)} <span style={{ fontSize: 16, color: "rgba(255,255,255,.6)" }}>reuniões/sem</span>
                      </p>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", margin: "8px 0 0" }}>
                        ~{Math.max(1, Math.round((r.reunioes / 22) * 10) / 10)} por dia útil
                        {ciclo > 0 && <> · ciclo de {ciclo} dias</>}
                      </p>
                    </div>
                  </div>

                  {ciclo > 0 && (
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.65)", margin: 0, paddingLeft: 16, borderLeft: `2px solid ${orange}` }}>
                      Como seu ciclo é de {ciclo} dias, as reuniões de hoje viram receita daqui a ~{ciclo} dias. Pra bater a meta deste mês, o pipeline precisava ter começado {ciclo} dias atrás.
                    </p>
                  )}

                  {/* CTA */}
                  <div
                    style={{
                      background: navy,
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: 20,
                      padding: "28px 26px",
                    }}
                  >
                    <h3 className="font-display" style={{ fontSize: "clamp(20px,2.4vw,26px)", fontWeight: 700, color: cream, margin: 0, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                      Esse volume parece distante do que você faz hoje?
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: "12px 0 22px" }}>
                      A diferença entre o funil que você tem e o que a meta exige é exatamente o que o Felipe mapeia na sessão de diagnóstico.
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="lp-cta-btn"
                      style={{
                        background: orange,
                        color: "white",
                        border: 0,
                        padding: "18px 28px",
                        borderRadius: 12,
                        fontWeight: 700,
                        fontSize: 16,
                        cursor: "pointer",
                        fontFamily: "inherit",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      Falar com o Felipe Galli <Icon name="arrow-right" size="md" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", margin: "32px 0 0", maxWidth: 720, lineHeight: 1.6 }}>
            * Estimativa. As taxas de benchmark são uma referência de mercado B2B e variam por setor, canal e maturidade da operação. O número real sai do diagnóstico da sua operação.
          </p>
        </div>
      </section>

      <BookingModal open={open} onOpenChange={setOpen} />

      <style>{`
        @media (max-width: 880px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .calc-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

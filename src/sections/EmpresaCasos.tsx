/* EmpresaCasos — Seção 4 · Mini-casos
 * Prova por setor: três cenários diferentes, mesma causa-raiz */

const navy = "#14181F";
const orange = "#D45A2A";

const casos = [
  {
    setor: "Distribuidora",
    detalhe: "interior de SP · 22 vendedores externos · R$34MM",
    resultado: "Taxa de fechamento +31% em 60 dias",
    historia:
      "O dono sabia o quanto vendia por semana, mas não sabia em que ponto os negócios travavam. Metade do time estava trabalhando em oportunidades que nunca iam fechar. Quando mapeamos as etapas da venda, liberamos capacidade sem contratar mais ninguém.",
  },
  {
    setor: "Escritório de advocacia",
    detalhe: "Curitiba · 6 sócios · captação 100% por indicação",
    resultado: "4 contratos novos em 3 meses da própria base",
    historia:
      "O sócio mais novo queria crescer, mas não sabia como prospectar sem parecer desesperado. Montamos um processo simples de relacionamento ativo com a carteira existente. Os contratos vieram de clientes que já estavam na base e nunca tinham sido abordados com proposta de serviço adicional.",
  },
  {
    setor: "Empresa de facilities",
    detalhe: "São Paulo · R$12MM · alta rotatividade de clientes",
    resultado: "Churn caiu pela metade no primeiro semestre",
    historia:
      "O dono achava que era problema de preço. Era problema de pós-venda. Não existia ritual de acompanhamento depois que o contrato assinava. Criamos um processo de check-in trimestral.",
  },
];

export function EmpresaCasos() {
  return (
    <section
      id="casos"
      style={{
        background: navy,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(40px, 5.5vw, 80px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            margin: 0,
            fontWeight: 700,
            color: "white",
          }}
        >
          Parece familiar?
        </h2>

        <div
          className="casos-grid"
          style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {casos.map((c, i) => (
            <div
              key={i}
              style={{
                padding: "36px 32px",
                background: "rgba(255,255,255,.03)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.08)",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {/* Número */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: orange,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  marginBottom: 20,
                }}
              >
                0{i + 1}
              </span>

              {/* Setor */}
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  margin: 0,
                  color: "white",
                  lineHeight: 1.15,
                }}
              >
                {c.setor}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "rgba(255,255,255,.4)",
                  margin: "8px 0 24px",
                  letterSpacing: ".03em",
                  lineHeight: 1.5,
                }}
              >
                {c.detalhe}
              </p>

              {/* História */}
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: "0 0 28px", flex: 1 }}>
                {c.historia}
              </p>

              {/* Resultado */}
              <div
                style={{
                  marginTop: "auto",
                  padding: "16px 20px",
                  background: `${orange}18`,
                  borderRadius: 10,
                  border: `1px solid ${orange}40`,
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(15px, 1.4vw, 18px)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: orange,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {c.resultado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .casos-grid { grid-template-columns: 1fr !important; }
          #casos { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}

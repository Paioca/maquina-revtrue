/* Página /como-funciona · 5 perguntas em sequência editorial sobre o modelo fracionado */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";
import { useSeo } from "../lib/useSeo";

const navy = "#14181F";
const cream = "#F6F3EE";
const orange = "#D45A2A";

const perguntas = [
  {
    q: "O que é fractional executive?",
    a: "Um modelo no qual um executivo sênior ocupa cadeira dentro da empresa em tempo fracionado, normalmente 1 a 3 dias por semana, dirigindo uma área específica sem ser hire definitivo. Origem no mercado americano, comum em board de startup pós-Seed que precisa de senioridade antes de comportar um VP full-time. A Revtrue aplica o modelo na cadeira de receita: arquitetura, vendas, growth e dados na mesma operação.",
  },
  {
    q: "O que a Revtrue faz na prática?",
    a: "A Revtrue entra dentro da operação. Senta nas reuniões executivas, dirige forecast e priorização semanais, calibra pipeline, acompanha aquisição e conversão, lê os dados pra ajustar o que vira receita primeiro. Tudo no Slack, no CRM e nas reuniões que já existem. O time atual continua executando. A Revtrue carrega a cabeça única que mede receita.",
  },
  {
    q: "O que a Revtrue não faz?",
    a: "A Revtrue não substitui o time. A execução do dia a dia, mídia paga, criativos, outbound, CRM, continua com o time do cliente. A Revtrue carrega a direção, a priorização e a medição. A fronteira é clara, e a operação acontece dentro dela.",
  },
  {
    q: "Como é diferente de consultoria?",
    a: "Consultoria entrega deck e vai embora. A Revtrue ocupa cadeira, dirige a operação semana a semana, e responde por resultado de receita. A entrega não é PDF nem relatório, é operação rodando com previsibilidade, motion instalado e time produzindo. Quando a operação se sustenta sozinha, a Revtrue passa a cadeira pro VP ou CRO definitivo.",
  },
  {
    q: "O diagnóstico é um pitch de vendas?",
    a: "Não. A Sessão de Receita é uma reunião de 60 minutos onde mapeamos a operação ao vivo, com os dois sócios da Revtrue na sala. Você sai com o diagnóstico escrito, gratuito, contendo plano priorizado pra destravar receita. Se faz sentido seguir junto, conversamos. Se não, o diagnóstico é seu, e o time do cliente pode tocar o que aprendeu sozinho.",
  },
];

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://revtrue.com.br/como-funciona#faq",
  mainEntity: perguntas.map((p) => ({
    "@type": "Question",
    name: p.q,
    acceptedAnswer: { "@type": "Answer", text: p.a },
  })),
};

export function ComoFunciona() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useSeo({
    title: "How it works — Revtrue",
    description:
      "Como funciona o modelo fracionado da Revtrue. Cinco perguntas sobre cadeira de receita, escopo, diferença de consultoria e Sessão de Receita.",
    canonical: "/como-funciona",
    robots: "index, follow, max-image-preview:large",
    jsonLd: faqPageLd,
  });

  return (
    <>
      {/* Hero da página */}
      <section
        style={{
          background: cream,
          color: navy,
          padding: "120px 40px 80px",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: orange,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            Modelo fracionado
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(56px, 9vw, 132px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              margin: 0,
              fontWeight: 700,
              color: navy,
            }}
          >
            How it works.
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.55,
              color: "rgba(20,24,31,.7)",
              marginTop: 36,
              marginBottom: 0,
              maxWidth: 720,
            }}
          >
            Cinco perguntas sobre o modelo fracionado da Revtrue.
          </p>
        </div>
      </section>

      {/* Q&A editorial */}
      <section
        style={{
          background: cream,
          color: navy,
          padding: "40px 40px 100px",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {perguntas.map((p, i) => (
            <div
              key={i}
              style={{
                paddingTop: 56,
                paddingBottom: 56,
                borderTop: i === 0 ? "1px solid rgba(20,24,31,.15)" : "none",
                borderBottom: "1px solid rgba(20,24,31,.15)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: ".15em",
                  color: orange,
                  marginBottom: 16,
                }}
              >
                0{i + 1}
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(28px, 3.6vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  margin: 0,
                  fontWeight: 700,
                  color: navy,
                  marginBottom: 24,
                }}
              >
                {p.q}
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "rgba(20,24,31,.78)",
                  margin: 0,
                  maxWidth: 780,
                }}
              >
                {p.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section
        style={{
          background: cream,
          color: navy,
          padding: "60px 40px 140px",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            style={{
              alignSelf: "flex-start",
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
            Aplicar para uma Sessão de Receita <Icon name="arrow-right" size="md" />
          </button>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "rgba(20,24,31,.55)",
              margin: 0,
              letterSpacing: ".02em",
            }}
          >
            5 min preenchendo · sem custo · agendamento em seguida
          </p>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}

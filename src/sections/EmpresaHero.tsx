/* EmpresaHero — Seção 1 · Hook
 * DotCom Secrets: Bait que atrai o cliente ideal
 * StoryBrand: vilão externo + CTA direto
 * $100M Offers: dream outcome na headline */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";

export function EmpresaHero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        style={{ position: "relative", padding: "100px 40px 120px", overflow: "hidden", background: navy, color: "white" }}
      >
        {/* Grid de fundo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-10%",
            top: "20%",
            width: 600,
            height: 600,
            borderRadius: 999,
            background: `radial-gradient(circle, ${orange}3a 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
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
              marginBottom: 40,
              border: `1px solid ${orange}40`,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 99, background: orange }} />
            Diagnóstico Comercial
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(44px, 7.5vw, 118px)",
              lineHeight: 0.93,
              letterSpacing: "-0.045em",
              margin: 0,
              fontWeight: 700,
              color: "white",
              maxWidth: 1100,
            }}
          >
            Sua venda não<br />
            trava por falta<br />
            de vendedor.<br />
            <span style={{ color: orange }}>Trava por falta<br />de processo.</span>
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "rgba(255,255,255,.72)",
              margin: "48px 0 0",
              maxWidth: 640,
            }}
          >
            Em 45 minutos, você sai sabendo exatamente onde sua operação comercial trava — e o que mudar primeiro para ter uma venda que funciona independente de quem está na cadeira.
          </p>

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
              Quero entender onde minha venda trava <Icon name="arrow-right" size="md" />
            </button>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "rgba(255,255,255,.45)",
                margin: 0,
                letterSpacing: ".04em",
              }}
            >
              5 min pra preencher · 45 min de conversa direta · sem proposta no final
            </p>
          </div>
        </div>
      </section>

      <BookingModal open={open} onOpenChange={setOpen} />

      <style>{`
        @media (max-width: 768px) {
          #hero { padding: 80px 24px 100px !important; }
        }
      `}</style>
    </>
  );
}

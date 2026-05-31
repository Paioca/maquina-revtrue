/* EmpresaHero — Hook amplo
 * Não ataca um ângulo único — fala com qualquer empreendedor que sente que deveria crescer mais */
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
              fontSize: "clamp(34px, 8vw, 118px)",
              lineHeight: 0.93,
              letterSpacing: "-0.045em",
              margin: 0,
              fontWeight: 700,
              color: "white",
              maxWidth: 1100,
            }}
          >
            Seu negócio deveria<br />
            estar crescendo<br />
            <span style={{ color: orange }}>mais do que está.</span>
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.65,
              color: "rgba(255,255,255,.72)",
              margin: "48px 0 0",
              maxWidth: 660,
            }}
          >
            Você trabalha, investe, tenta. O resultado não acompanha. Em algum ponto da operação comercial tem um gargalo. Enquanto não souber onde, o crescimento não vem.
          </p>

          <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lp-cta-btn"
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

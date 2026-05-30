/* §08 CTA Final · MANTÉM original conforme documento boutique */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";

const navy = "#14181F";
const orange = "#D45A2A";

export function FinalCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="cta" style={{ background: orange, color: navy, padding: "120px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(48px, 8vw, 124px)",
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              margin: 0,
              fontWeight: 700,
              color: "white",
            }}
          >
            Pronto pra ver onde
            <br />
            a receita <em style={{ color: navy, fontStyle: "italic", fontWeight: 700 }}>tá travando?</em>
          </h2>
          <button
            type="button"
            onClick={() => setOpen(true)}
            style={{
              marginTop: 48,
              background: navy,
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
            Agendar Sessão de Receita <Icon name="arrow-right" size="md" />
          </button>
        </div>
      </section>

      <BookingModal open={open} onOpenChange={setOpen} />
    </>
  );
}

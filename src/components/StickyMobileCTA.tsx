/* Barra CTA fixa no rodapé — só mobile (tráfego Instagram, atenção curta).
   Controlada por CSS .lp-sticky-cta (display:none no desktop). */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "./BookingModal";

const orange = "#D45A2A";

export function StickyMobileCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lp-sticky-cta">
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            width: "100%",
            background: orange,
            color: "white",
            border: 0,
            padding: "16px 24px",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            fontFamily: "inherit",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          Agendar Sessão de Diagnóstico <Icon name="arrow-right" size="sm" />
        </button>
      </div>

      <BookingModal open={open} onOpenChange={setOpen} />
    </>
  );
}

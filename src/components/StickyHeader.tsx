/* Header sticky (navy with blur) */
import { Logo, Icon } from "../ui";

const orange = "#D45A2A";

export function StickyHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(20,24,31,.78)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        className="rev-header-row"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a href="/" aria-label="Topo" style={{ display: "block", flexShrink: 0 }}>
          <Logo variant="light" style={{ height: 38, width: "auto", display: "block" }} />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <a
            href="/como-funciona"
            className="rev-header-link"
            style={{
              color: "rgba(255,255,255,.78)",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "inherit",
              letterSpacing: ".01em",
              whiteSpace: "nowrap",
            }}
          >
            How it works
          </a>
          <a
            href="/sobre"
            className="rev-header-sobre rev-header-link"
            style={{
              color: "rgba(255,255,255,.78)",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "inherit",
              letterSpacing: ".01em",
              whiteSpace: "nowrap",
            }}
          >
            Sobre
          </a>
          <a
            href="/#processo"
            className="rev-header-cta"
            style={{
              background: orange,
              color: "white",
              border: 0,
              padding: "13px 22px",
              minHeight: 44,
              borderRadius: 99,
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "inherit",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            Agendar uma sessão <Icon name="arrow-right" size="xs" />
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .rev-header-row { padding: 14px 16px !important; gap: 10px !important; }
          .rev-header-row .rev-header-cta { padding: 10px 14px !important; font-size: 12px !important; }
          .rev-header-link { display: none !important; }
        }
      `}</style>
    </header>
  );
}

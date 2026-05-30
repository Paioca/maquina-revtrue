/* Form próprio com 5 campos (Nome, Empresa, Email, WhatsApp, Faturamento).
   POST direto na HubSpot Forms API v3 — sem embed, sem branding.
   Defesas anti-bot: honeypot oculto, tempo mínimo até envio e rate-limit local. */
import { FormEvent, useEffect, useRef, useState } from "react";

const HS_PORTAL = "51253609";
// A/B com a LP (lp.revtrue.com.br): LP usa o form bfeed8eb…, site principal usa este
const HS_FORM_ID = "a56f54ce-7845-4d47-aeb1-05f3084393a4";
const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL}/${HS_FORM_ID}`;

const MIN_FILL_TIME_MS = 3000; // bots costumam submeter em < 1s
const RATE_LIMIT_MS = 30_000; // 30s entre envios pelo mesmo browser
const RATE_LIMIT_KEY = "revtrue:bookingLastSubmitAt";

const FATURAMENTO_OPCOES = [
  "Até R$ 3M",
  "R$ 3M a R$ 10M",
  "R$ 10M a R$ 30M",
  "R$ 30M a R$ 100M",
  "R$ 100M+",
];

export interface BookingFormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  faturamento: string;
}

interface Props {
  onSuccess: (data: BookingFormData) => void;
}

export function CustomBookingForm({ onSuccess }: Props) {
  const [data, setData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    faturamento: "",
  });
  // Honeypot: bots autofill costumam preencher qualquer input visível ao DOM
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mountedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  function update<K extends keyof typeof data>(key: K, value: string) {
    // Telefone aceita só dígitos (e + opcional no início pra código do país)
    if (key === "telefone") {
      let cleaned = value.replace(/[^\d+]/g, "");
      if (cleaned.includes("+")) {
        cleaned = "+" + cleaned.replace(/\+/g, "");
      }
      value = cleaned;
    }
    setData((d) => ({ ...d, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    // Honeypot — descarta silenciosamente (não dá feedback pro bot saber que detectou)
    if (website.trim() !== "") {
      onSuccess(data);
      return;
    }

    // Tempo mínimo de preenchimento — humano leva > 3s
    if (Date.now() - mountedAtRef.current < MIN_FILL_TIME_MS) {
      setError("Aguarda um instante antes de enviar.");
      return;
    }

    // Rate-limit local — 30s entre envios pelo mesmo browser
    try {
      const last = Number(window.localStorage.getItem(RATE_LIMIT_KEY) || 0);
      if (last && Date.now() - last < RATE_LIMIT_MS) {
        const secs = Math.ceil((RATE_LIMIT_MS - (Date.now() - last)) / 1000);
        setError(`Você acabou de enviar. Tenta de novo em ${secs}s.`);
        return;
      }
    } catch {
      // localStorage indisponível (private mode) — segue sem rate limit
    }

    setSubmitting(true);
    setError(null);

    const body = {
      fields: [
        { objectTypeId: "0-1", name: "firstname", value: data.nome },
        { objectTypeId: "0-1", name: "company", value: data.empresa },
        { objectTypeId: "0-1", name: "email", value: data.email },
        { objectTypeId: "0-1", name: "phone", value: data.telefone },
        { objectTypeId: "0-1", name: "faturamento", value: data.faturamento },
      ],
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "",
      },
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        // Não expõe corpo do HubSpot pro usuário (pode vazar PII / detalhes técnicos)
        throw new Error(
          res.status >= 500
            ? "Servidor temporariamente indisponível. Tenta de novo em instantes."
            : "Não conseguimos enviar agora. Confere os dados e tenta de novo.",
        );
      }
      try {
        window.localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
      } catch {
        // ignore
      }
      onSuccess(data);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Falha ao enviar. Tenta de novo.";
      setError(msg);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* Honeypot — invisível para humanos, irresistível para bots.
          aria-hidden + tabIndex + autoComplete=off + position absoluto fora da tela. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Não preencha este campo
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>
      <Field
        label="Nome"
        value={data.nome}
        onChange={(v) => update("nome", v)}
        required
        autoComplete="given-name"
      />
      <Field
        label="Empresa"
        value={data.empresa}
        onChange={(v) => update("empresa", v)}
        required
        autoComplete="organization"
      />
      <Field
        label="E-mail"
        type="email"
        value={data.email}
        onChange={(v) => update("email", v)}
        required
        autoComplete="email"
        inputMode="email"
      />
      <Field
        label="WhatsApp"
        type="tel"
        value={data.telefone}
        onChange={(v) => update("telefone", v)}
        required
        placeholder="+55 11 99999-9999"
        autoComplete="tel"
        inputMode="tel"
      />
      <SelectField
        label="Faturamento anual"
        value={data.faturamento}
        onChange={(v) => update("faturamento", v)}
        options={FATURAMENTO_OPCOES}
        required
      />

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-rev-500 hover:bg-rev-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-display font-bold uppercase tracking-wide text-base transition"
      >
        {submitting ? "Enviando…" : "Avançar pro calendário"}
      </button>

      <p className="font-mono text-[11px] text-true-400 text-center mt-1">
        Seus dados ficam só no nosso CRM. Sem mailing externo.
      </p>
    </form>
  );
}

/* ─── primitives ────────────────────────────────────────────────────── */

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search" | "none";
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  autoComplete,
  inputMode,
}: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-true-300 font-semibold">
        {label}
        {required && <span className="text-rev-500"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="h-12 px-4 rounded-lg bg-true-950 border border-true-700 text-white placeholder:text-true-500 focus:outline-none focus:border-rev-500 focus:ring-2 focus:ring-rev-500/20 transition"
      />
    </label>
  );
}

interface SelectProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}

function SelectField({ label, value, onChange, options, required }: SelectProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-true-300 font-semibold">
        {label}
        {required && <span className="text-rev-500"> *</span>}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="h-12 px-4 rounded-lg bg-true-950 border border-true-700 text-white focus:outline-none focus:border-rev-500 focus:ring-2 focus:ring-rev-500/20 transition appearance-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23E8693B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 16px center",
          backgroundSize: "16px",
          paddingRight: "44px",
        }}
      >
        <option value="" disabled>
          Selecione…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

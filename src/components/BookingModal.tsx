/* Modal de booking — Step 1: Form custom (POST direto na HubSpot Forms API),
   Step 2: Calendly com prefill de nome+email (skip duplicação). */
import { useEffect, useMemo, useState } from "react";
import { Dialog } from "../ui";
import { CustomBookingForm, type BookingFormData } from "./CustomBookingForm";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CALENDLY_BASE = "https://calendly.com/admin-revtrue/30min";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

function loadScriptOnce(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.src = src;
  s.id = id;
  s.async = true;
  document.body.appendChild(s);
}

export function BookingModal({ open, onOpenChange }: Props) {
  const [step, setStep] = useState<"form" | "calendar">("form");
  const [formData, setFormData] = useState<BookingFormData | null>(null);

  useEffect(() => {
    if (open) {
      setStep("form");
      setFormData(null);
    }
  }, [open]);

  useEffect(() => {
    if (step !== "calendar") return;
    loadScriptOnce(CALENDLY_SCRIPT, "calendly-embed-script");
  }, [step]);

  // URL do Calendly com prefill (name + email pulam no form do Calendly)
  const calendlyUrl = useMemo(() => {
    const url = new URL(CALENDLY_BASE);
    url.searchParams.set("hide_event_type_details", "1");
    url.searchParams.set("hide_gdpr_banner", "1");
    if (formData) {
      url.searchParams.set("name", formData.nome);
      url.searchParams.set("email", formData.email);
      // Custom answers (a1, a2, a3): só funcionam se a config do evento
      // no Calendly tiver perguntas customizadas nessa ordem. Se não tiver,
      // são ignoradas — sem prejuízo.
      url.searchParams.set("a1", formData.empresa);
      url.searchParams.set("a2", formData.telefone);
      url.searchParams.set("a3", formData.faturamento);
    }
    return url.toString();
  }, [formData]);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Agendar Sessão de Diagnóstico"
      className="max-w-3xl"
    >
      <div className="flex flex-col gap-7">
        {/* Stepper */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1 rounded-full bg-rev-500" />
          <div
            className={
              "flex-1 h-1 rounded-full transition-colors " +
              (step === "calendar" ? "bg-rev-500" : "bg-true-700")
            }
          />
        </div>

        {/* Step heading */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-rev-500 font-bold">
            {step === "form" ? "01 · Suas infos" : "02 · Escolha um horário"}
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">
            {step === "form"
              ? "Pra começar, preciso te conhecer."
              : "Quase lá. Escolha o melhor dia."}
          </h3>
          <p className="font-sans text-sm text-true-300 mt-1">
            {step === "form"
              ? "45 minutos direto com o Felipe. Documento escrito ao final, sem custo."
              : "Conversa direto com o Felipe. Confirmação por e-mail."}
          </p>
        </div>

        {/* Step 1 — Custom form (POST → HubSpot Forms API) */}
        {step === "form" && (
          <CustomBookingForm
            onSuccess={(data) => {
              setFormData(data);
              setStep("calendar");
            }}
          />
        )}

        {/* Step 2 — Calendly inline widget (com prefill name+email) */}
        {step === "calendar" && (
          <div
            className="calendly-inline-widget"
            data-url={calendlyUrl}
            style={{ minWidth: 320, height: 700, colorScheme: "auto" }}
          />
        )}
      </div>
    </Dialog>
  );
}

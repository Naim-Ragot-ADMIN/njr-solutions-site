"use client";

import { useState } from "react";
import {
  initialContactFormValues,
  type ContactFormValues,
  validateContactForm,
} from "@/lib/contact-form";
import { business, responsePromise } from "@/lib/site-data";

type ContactFormProps = {
  submitLabel?: string;
};

type FeedbackState =
  | { type: "success" | "error"; title: string; message: string }
  | null;

type TouchedFields = Partial<Record<keyof ContactFormValues, boolean>>;

export function ContactForm({
  submitLabel = "Demander un devis",
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(
    initialContactFormValues,
  );
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  const validationErrors = validateContactForm(values);

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function markTouched(field: keyof ContactFormValues) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  function getFieldError(field: keyof ContactFormValues) {
    if (!hasSubmitted && !touched[field]) {
      return undefined;
    }

    return validationErrors[field];
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasSubmitted(true);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
      consent: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      setFeedback({
        type: "error",
        title: "Quelques informations sont à compléter",
        message:
          "Merci de corriger les champs signalés afin que nous puissions vous recontacter proprement.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
        }),
      });

      const payload = (await response.json()) as
        | { ok?: boolean; error?: string; message?: string }
        | undefined;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? "Échec de l'envoi du message.");
      }

      setValues(initialContactFormValues);
      setTouched({});
      setHasSubmitted(false);
      setFeedback({
        type: "success",
        title: "Message envoyé",
        message: `Merci. ${business.name} revient vers vous rapidement. ${responsePromise}.`,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer le message pour le moment.";

      setFeedback({
        type: "error",
        title: "Envoi impossible",
        message:
          `${message} Vous pouvez aussi nous appeler directement au ${business.phone}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="section-card rounded-[2rem] p-6 sm:p-7"
    >
      <div className="border-b border-[rgba(16,23,18,0.08)] pb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
          Demande de contact
        </p>
        <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
          Décrivez votre besoin en quelques mots. Je vous réponds avec une
          proposition claire et adaptée.
        </p>
      </div>

      <div className="mt-5 grid gap-4">
        <Field
          label="Nom"
          name="name"
          value={values.name}
          onChange={(value) => updateField("name", value)}
          onBlur={() => markTouched("name")}
          error={getFieldError("name")}
          autoComplete="name"
          placeholder="Prénom et nom"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={(value) => updateField("email", value)}
          onBlur={() => markTouched("email")}
          error={getFieldError("email")}
          autoComplete="email"
          placeholder="Votre adresse email"
        />
        <Field
          label="Téléphone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(value) => updateField("phone", value)}
          onBlur={() => markTouched("phone")}
          error={getFieldError("phone")}
          autoComplete="tel"
          placeholder="Votre numéro de téléphone"
        />
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-[var(--foreground)]"
          >
            Besoin / message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            onBlur={() => markTouched("message")}
            rows={4}
            className="input-field resize-none"
            placeholder="Ex. WiFi instable, robot tondeuse à installer, caméra connectée ou PC lent."
            aria-invalid={Boolean(getFieldError("message"))}
            aria-describedby={
              getFieldError("message") ? "message-error" : undefined
            }
          />
          {getFieldError("message") ? (
            <p id="message-error" className="mt-2 text-sm text-red-700">
              {getFieldError("message")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 rounded-[1.25rem] border border-[rgba(16,23,18,0.08)] bg-white/62 p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            onBlur={() => markTouched("consent")}
            className="mt-1 h-4 w-4 rounded border-[rgba(16,23,18,0.18)] text-[var(--color-primary)]"
          />
          <span className="text-sm leading-6 text-[var(--color-muted)]">
            J&apos;accepte d&apos;être recontacté au sujet de cette demande.
          </span>
        </label>
        {getFieldError("consent") ? (
          <p className="mt-2 text-sm text-red-700">
            {getFieldError("consent")}
          </p>
        ) : null}
      </div>

      {feedback ? (
        <div
          aria-live="polite"
          className={[
            "mt-4 rounded-[1.35rem] px-4 py-4 text-sm",
            feedback.type === "success"
              ? "bg-[rgba(20,56,45,0.08)] text-[var(--color-primary)]"
              : "bg-red-50 text-red-700",
          ].join(" ")}
        >
          <p className="font-semibold">{feedback.title}</p>
          <p className="mt-1 leading-7">{feedback.message}</p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-sm leading-6 text-[var(--color-muted)]">
          Formulaire rapide. Vous pouvez aussi appeler ou passer par WhatsApp.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-primary min-w-56 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Envoi en cours..." : submitLabel}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  autoComplete,
  placeholder,
}: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-[var(--foreground)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="input-field"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

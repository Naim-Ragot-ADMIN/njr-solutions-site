import { Resend } from "resend";

type Env = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
};

type CloudflareFunctionContext = {
  request: Request;
  env: Env;
};

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(
  data: Record<string, unknown>,
  status = 200,
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function onRequestPost(
  context: CloudflareFunctionContext,
): Promise<Response> {
  try {
    if (!context.env.RESEND_API_KEY) {
      return jsonResponse(
        {
          ok: false,
          error: "Configuration serveur manquante (RESEND_API_KEY).",
        },
        500,
      );
    }

    const rawBody = (await context.request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: sanitize(rawBody.name),
      email: sanitize(rawBody.email),
      phone: sanitize(rawBody.phone),
      message: sanitize(rawBody.message),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      return jsonResponse(
        { ok: false, error: "Tous les champs sont obligatoires." },
        400,
      );
    }

    if (!emailRegex.test(payload.email)) {
      return jsonResponse({ ok: false, error: "Email invalide." }, 400);
    }

    const resend = new Resend(context.env.RESEND_API_KEY);
    const toEmail = context.env.CONTACT_TO_EMAIL || "naimragot06@gmail.com";
    const fromEmail = context.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from: `NJR Solutions <${fromEmail}>`,
      to: [toEmail],
      replyTo: payload.email,
      subject: "Nouvelle demande de contact",
      text: [
        "Nouvelle demande de contact",
        "",
        `Nom : ${payload.name}`,
        `Email : ${payload.email}`,
        `Téléphone : ${payload.phone}`,
        "",
        "Message :",
        payload.message,
      ].join("\n"),
    });

    return jsonResponse({ ok: true, message: "Message envoyé." }, 200);
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: "Erreur serveur pendant l'envoi de l'email.",
      },
      500,
    );
  }
}

export function onRequest(): Response {
  return jsonResponse({ ok: false, error: "Méthode non autorisée." }, 405);
}

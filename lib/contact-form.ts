export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export const initialContactFormValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};

const phoneRegex = /^[0-9+\s().-]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Veuillez renseigner votre nom.";
  }

  if (!values.email.trim()) {
    errors.email = "Veuillez renseigner votre email.";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "L'adresse email semble invalide.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Veuillez renseigner votre téléphone.";
  } else if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = "Le numéro de téléphone semble incomplet.";
  }

  if (!values.message.trim()) {
    errors.message = "Décrivez brièvement votre besoin.";
  } else if (values.message.trim().length < 12) {
    errors.message = "Ajoutez quelques mots pour que nous puissions vous guider.";
  }

  if (!values.consent) {
    errors.consent = "Votre accord est nécessaire pour être recontacté.";
  }

  return errors;
}

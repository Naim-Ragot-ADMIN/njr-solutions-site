export type ContactFormValues = {
  name: string;
  phone: string;
  message: string;
  consent: boolean;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export const initialContactFormValues: ContactFormValues = {
  name: "",
  phone: "",
  message: "",
  consent: false,
};

const phoneRegex = /^[0-9+\s().-]{8,}$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Veuillez renseigner votre nom.";
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

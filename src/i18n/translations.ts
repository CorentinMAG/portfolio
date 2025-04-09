import { Translation } from "./type";
import fr from "./translations/fr";
import en from "./translations/en";

export const translations: Record<"en" | "fr", Translation> = {
  en,
  fr,
};

import i18n from "../locales/localeSetup";
import { IUseLocale } from "./types";

export const useLocale = (): IUseLocale => {
  const lang = (translationKey: string) =>
    i18n.t(translationKey, { defaultValue: translationKey });
  return { lang };
};

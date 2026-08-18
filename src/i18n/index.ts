import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as en from "./en/index";
import * as ja from "./ja/index";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            ja: {
                translation: ja,
            },
        },

        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
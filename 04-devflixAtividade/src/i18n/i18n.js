import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      search: "Search movies",
      movieNotFound: "Movie not found",
    },
  },
  "pt-BR": {
    translation: {
      search: "Pesquisar filmes",
      movieNotFound: "Filme não encontrado",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

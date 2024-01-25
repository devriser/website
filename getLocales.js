const locales = {
  en: () => import("./locales/English/en.json").then((res) => res.default),

  fr: () => import("./locales/French/fr.json").then((res) => res.default),

  ar: () => import("./locales/Arabic/ar.json").then((res) => res.default),
  cn: () => import("./locales/Chinese/cn.json").then((res) => res.default),
};

export const getLocales = (lang) => {
  return locales[lang]();
};

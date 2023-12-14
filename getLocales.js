// type LocaleContent = {
//   heroTitle: string;
//   heroHeading: string;
//   heroButtonOne: string;
//   heroButtonTwo: string;
// };

// type Locales = {
//   [key: string]: () => Promise<LocaleContent>;
// };

const locales = {
  en: () => import("./locales/English/en.json").then((res) => res.default),

  fr: () => import("./locales/French/fr.json").then((res) => res.default),
};

export const getLoacales = (lang) => {
  return locales[lang]();
};

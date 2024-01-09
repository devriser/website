export type FAQType = {
  [question: string]: string;
};

export type ContactFormTypes = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  document: string;
  description: string;
  faq: FAQType;
};

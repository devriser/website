import ContactUsForm from "@/components/shared/ContactUsForm/ContactUsForm";
import React from "react";
import { getLocales } from "../../../../getLocales";

export default async function ContactUs({ params }: any) {
  const lang = await getLocales(params.lang);

  return (
    <div className="bg-primary p-6 px-8 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-secondary-reverse text-text-heading font-medium">
          {lang.contactForm.mainHeading}
        </p>
        <p>{lang.contactForm.subHeading}</p>
      </div>

      <div>
        <ContactUsForm params={params} />
      </div>
    </div>
  );
}

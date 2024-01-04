import ContactUsForm from "@/components/shared/ContactUsForm/ContactUsForm";
import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-primary p-6 px-8 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-secondary-reverse text-text-heading font-medium">
          Feel Free share On Your idea?
        </p>
        <p>
          You are one step closer to developing an agile business product that
          will become your next success story. Let&apos;s talk in depth about
          your project&apos;s requirements and business model:
        </p>
      </div>

      <div>
        <ContactUsForm />
      </div>
    </div>
  );
}

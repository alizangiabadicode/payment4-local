import React from "react";
import FaqItem from "@/components/shared/faq.collapsible.window.tsx";
import initTranslations from "@/app/i18n";

const FAQ = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t } = await initTranslations(locale, ["faq"]);
  return (
    <div className="container px-5 md:px-0 flex flex-col gap-y-[30px] my-[50px] max-w-4xl">
      {[...Array(8).keys()].map((idx) => (
        <FaqItem
          key={idx}
          question={t(`q${idx + 1}.q`)}
          answer={t(`q${idx + 1}.a`)}
        />
      ))}
    </div>
  );
};

export default FAQ;

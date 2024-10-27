import React from "react";
import FaqItem from "@/components/shared/faq.collapsible.window.tsx";
import initTranslations from "@/app/i18n";

const FAQ = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { t } = await initTranslations(locale, ["faq"]);
    return (
        <div className="container px-5 md:px-0 flex flex-col gap-y-[30px] my-[50px] max-w-4xl">
            <div>
                <p className="font-bold mb-4">{t("generalInformationTitle")}</p>
                {[...Array(3).keys()].map((idx) => (
                    <FaqItem
                        key={idx}
                        question={t(`generalInformation.${idx}.q`)}
                        answer={t(`generalInformation.${idx}.a`)}
                    />
                ))}
            </div>
            <div>
                <p className="font-bold mb-4">{t("accountAndSecurityTitle")}</p>
                {[...Array(2).keys()].map((idx) => (
                    <FaqItem
                        key={idx}
                        question={t(`accountAndSecurity.${idx}.q`)}
                        answer={t(`accountAndSecurity.${idx}.a`)}
                    />
                ))}
            </div>
            <div>
                <p className="font-bold mb-4">{t("transactionsCommissionTitle")}</p>
                {[...Array(5).keys()].map((idx) => (
                    <FaqItem
                        key={idx}
                        question={t(`transactionsCommission.${idx}.q`)}
                        answer={t(`transactionsCommission.${idx}.a`)}
                    />
                ))}
            </div>
            <div>
                <p className="font-bold mb-4">{t("settlementTitle")}</p>
                {[...Array(3).keys()].map((idx) => (
                    <FaqItem key={idx} question={t(`settlement.${idx}.q`)} answer={t(`settlement.${idx}.a`)} />
                ))}
            </div>
            <div>
                <p className="font-bold mb-4">{t("developersTitle")}</p>
                {[...Array(5).keys()].map((idx) => (
                    <FaqItem key={idx} question={t(`developers.${idx}.q`)} answer={t(`developers.${idx}.a`)} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;

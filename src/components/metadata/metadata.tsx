import initTranslations from "@/app/i18n";
import { Metadata } from "next";
import { useTranslation } from "react-i18next";

export const metaDataBuilder = async (locale: string): Promise<Metadata> => {
    const { t, i18n } = await initTranslations(locale, ["seo"]);

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            type: "website",
            siteName: "Payment4",
            url: `https://payment4.com${locale !== "en" ? "/" + locale : ""}`,
            title: t("title"),
            description: t("description"),
            images: [
                {
                    url: "https://storage.payment4.com/logos/payment4-logo.png",
                    type: "image/png",
                    alt: "Payment4 Logo",
                },
            ],
        },
        twitter: {
            title: t("title"),
            description: t("description"),
            images: [
                {
                    url: "https://storage.payment4.com/logos/payment4-logo.png",
                    type: "image/png",
                    alt: "Payment4 Logo",
                },
            ],
            card: "summary_large_image",
        },
        alternates: {
            canonical: `https://payment4.com${locale !== "en" ? "/" + locale : ""}`,
        },
        robots: "index,follow",
        icons: {
            icon: "/images/favicon.ico",
        },
    };
};

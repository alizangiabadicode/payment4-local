import type { Metadata } from "next";
import "./globals.css";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
import localFont from "next/font/local";
import { Providers } from "./provider";
import initTranslations from "../i18n";
import TranslationsProvider from "@/configs/TranslationsProvider";
import { LayoutProvider } from "./layout.provider";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import { HotjarSnippet } from "@/components/tracking/hotjar.snippet";
import { TwitterSnippet } from "@/components/tracking/twitter.snippet";
import { metaDataBuilder } from "@/components/metadata/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await metaDataBuilder(params.locale);
}
const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

const yekanBakh = localFont({
  src: [
    {
      path: "../../../public/fonts/YekanBakh-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/YekanBakh-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/YekanBakh-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/YekanBakh-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-yekanBakh",
});
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["translation"];
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${poppins.variable} ${yekanBakh.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] bg-white dark:bg-dark">
        <Providers>
          <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
            <LayoutProvider>{children}</LayoutProvider>
          </TranslationsProvider>
        </Providers>
      </body>

      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      {process.env.NEXT_PUBLIC_GA4_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID} />}
      {process.env.NEXT_PUBLIC_HJ_ID && Number(process.env.NEXT_PUBLIC_HJ_ID) && <HotjarSnippet />}
      {process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID && <TwitterSnippet />}
    </html>
  );
}

import { Button } from "@/components/shared/button";
import { DownloadIcon } from "@/icons/svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export interface PluginOption {
    title: string;
    description: string;
    lightImageUrl: string;
    darkImageUrl: string;
    installLink: string;
    mobileLightImageUrl?: string;
    mobileDarkImageUrl?: string;
}

const CryptoPlugins = () => {
    const { t } = useTranslation();
    const pluginOptions: PluginOption[] = [
        {
            title: t("pluginPage.pluginOptions.openCart.title"),
            description: t("pluginPage.pluginOptions.openCart.description"),
            darkImageUrl: "/images/open.cart.dark.png",
            lightImageUrl: "/images/open.cart.light.png",
            installLink: `${process.env.NEXT_PUBLIC_APP_STORAGE_URL}/open_cart/payment4_open_cart.zip`,
        },
        {
            title: t("pluginPage.pluginOptions.woocommerce.title"),
            description: t("pluginPage.pluginOptions.woocommerce.description"),
            darkImageUrl: "/images/woocommerce.png",
            lightImageUrl: "/images/woocommerce.png",
            installLink: `${process.env.NEXT_PUBLIC_APP_STORAGE_URL}/wp/payment4.zip`,
        },
        {
            title: t("pluginPage.pluginOptions.whmcs.title"),
            description: t("pluginPage.pluginOptions.whmcs.description"),
            darkImageUrl: "/images/whmcs.dark.png",
            lightImageUrl: "/images/whmcs.light.png",
            mobileDarkImageUrl: "/images/whmcs.mobile.dark.png",
            mobileLightImageUrl: "/images/whmcs.mobile.light.png",
            installLink: `${process.env.NEXT_PUBLIC_APP_STORAGE_URL}/whmcs/payment4_whmcs.zip`,
        },
        {
            title: t("pluginPage.pluginOptions.prestaShop.title"),
            description: t("pluginPage.pluginOptions.prestaShop.description"),
            darkImageUrl: "/images/prestashop.png",
            lightImageUrl: "/images/prestashop.png",
            mobileDarkImageUrl: "/images/prestashop.png",
            mobileLightImageUrl: "/images/prestashop.png",
            installLink: `${process.env.NEXT_PUBLIC_APP_STORAGE_URL}/presta_shop/payment4_presta_shop.zip`,
        },
    ];

    return (
        <section className="py-12 bg-gray-900 ">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-10">{t("pluginPage.cryptoPaymentPlugins")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pluginOptions.slice(0, 2).map((plugin, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-6 flex flex-col justify-between dark:bg-dark-gradient-card bg-light-gradient-card"
                        >
                            <div>
                                <h2 className="text-[20px] lg:text-[24px] font-bold mb-3">{plugin.title}</h2>
                                <p className="text-[12px] lg:text-[14px] text-[#121212A1] dark:text-[#FFFFFFA1] mb-5">
                                    {plugin.description}
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <Button
                                    onClick={() => {
                                        window.open(plugin.installLink, "_blank");
                                    }}
                                    className="h-[38px] py-2 !px-[10px] !pr-4 rounded-md flex  justify-center items-center gap-x-2 "
                                >
                                    <div className="ml-2">
                                        <DownloadIcon color="#FFFFFF" />
                                    </div>
                                    {t("downloadLink")}
                                </Button>
                            </div>
                            <div className="flex justify-center mt-[30px] dark:hidden">
                                <Image
                                    src={plugin.lightImageUrl}
                                    alt={plugin.title}
                                    width={181}
                                    height={115}
                                    className="object-contain"
                                />
                            </div>
                            <div className="justify-center mt-[30px] dark:flex hidden">
                                <Image
                                    src={plugin.darkImageUrl}
                                    alt={plugin.title}
                                    width={181}
                                    height={115}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                    <div
                        className="rounded-lg p-6 flex lg:flex-row flex-col
          justify-between md:col-span-2 dark:bg-dark-gradient-card 
          bg-light-gradient-card"
                    >
                        <div>
                            <div className="flex flex-col">
                                <h2 className="text-[20px] lg:text-[24px] font-bold mb-3">{pluginOptions[2].title}</h2>
                                <p className="text-[12px] lg:text-[14px] text-[#121212A1] dark:text-[#FFFFFFA1] mb-5 max-w-[487px]">
                                    {pluginOptions[2].description}
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <Button
                                    onClick={() => {
                                        window.open(pluginOptions[2].installLink, "_blank");
                                    }}
                                    className="h-[38px] py-2 !px-[10px] !pr-4 rounded-md flex  justify-center items-center gap-x-2 "
                                >
                                    <div className="ml-2">
                                        <DownloadIcon color="#FFFFFF" />
                                    </div>
                                    {t("downloadLink")}
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Image
                                src={pluginOptions[2].darkImageUrl}
                                alt={pluginOptions[2].title}
                                width={284}
                                height={185}
                                className="object-contain lg:dark:block hidden"
                            />
                            <Image
                                src={pluginOptions[2].lightImageUrl}
                                alt={pluginOptions[2].title}
                                width={284}
                                height={185}
                                className="object-contain dark:hidden hidden lg:block"
                            />
                            <Image
                                src={pluginOptions[2].mobileDarkImageUrl || ""}
                                alt={pluginOptions[2].title}
                                width={212}
                                height={133}
                                className="object-contain dark:block lg:dark:hidden hidden mt-[20px]"
                            />
                            <Image
                                src={pluginOptions[2].mobileLightImageUrl || ""}
                                alt={pluginOptions[2].title}
                                width={212}
                                height={133}
                                className="object-contain dark:hidden lg:hidden mt-[20px]"
                            />
                        </div>
                    </div>
                    <div
                        className="rounded-lg p-6 flex lg:flex-row flex-col
          justify-between md:col-span-2 dark:bg-dark-gradient-card 
          bg-light-gradient-card"
                    >
                        <div>
                            <div className="flex flex-col">
                                <h2 className="text-[20px] lg:text-[24px] font-bold mb-3">{pluginOptions[3].title}</h2>
                                <p className="text-[12px] lg:text-[14px] text-[#121212A1] dark:text-[#FFFFFFA1] mb-5 max-w-[487px]">
                                    {pluginOptions[3].description}
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <Button
                                    onClick={() => {
                                        window.open(pluginOptions[3].installLink, "_blank");
                                    }}
                                    className="h-[38px] py-2 !px-[10px] !pr-4 rounded-md flex  justify-center items-center gap-x-2 "
                                >
                                    <div className="ml-2">
                                        <DownloadIcon color="#FFFFFF" />
                                    </div>
                                    {t("downloadLink")}
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Image
                                src={pluginOptions[3].darkImageUrl}
                                alt={pluginOptions[3].title}
                                width={284}
                                height={185}
                                className="object-contain lg:dark:block hidden"
                            />
                            <Image
                                src={pluginOptions[3].lightImageUrl}
                                alt={pluginOptions[3].title}
                                width={284}
                                height={185}
                                className="object-contain dark:hidden hidden lg:block"
                            />
                            <Image
                                src={pluginOptions[3].mobileDarkImageUrl || ""}
                                alt={pluginOptions[3].title}
                                width={212}
                                height={133}
                                className="object-contain dark:block lg:dark:hidden hidden mt-[20px]"
                            />
                            <Image
                                src={pluginOptions[3].mobileLightImageUrl || ""}
                                alt={pluginOptions[3].title}
                                width={212}
                                height={133}
                                className="object-contain dark:hidden lg:hidden mt-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CryptoPlugins;

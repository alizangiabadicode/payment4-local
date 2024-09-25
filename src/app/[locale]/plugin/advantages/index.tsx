import {
  BlockchainIcon,
  ProcessIcon,
  TransactionGlobeIcon,
  WorldIcon,
} from "@/icons/svg";
import { useTheme } from "next-themes";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface AdvantageItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const CryptoAdvantages: React.FC = () => {
  const { t } = useTranslation();
  const { resolvedTheme: theme } = useTheme();
  const iconsColor = theme === "dark" ? "#9E6DFF" : "#864AFF";

  const advantages: AdvantageItem[] = Array.from({ length: 4 }, (_, index) => ({
    icon: [
      <ProcessIcon key="process-icon" color={iconsColor} />,
      <TransactionGlobeIcon key="transaction-icon" color={iconsColor} />,
      <BlockchainIcon key="blockchain-icon" color={iconsColor} />,
      <WorldIcon key="world-icon" color={iconsColor} />,
    ][index],
    title: t(`pluginPage.cryptoAdvantages.advantages.${index}.title`),
    description: t(
      `pluginPage.cryptoAdvantages.advantages.${index}.description`
    ),
  }));

  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[18px] lg:text-[20px] font-semibold mb-12 text-[black] dark:text-[white]">
          {t("pluginPage.cryptoAdvantages.heading")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage: AdvantageItem, index: number) => (
            <div
              key={index}
              className="bg-transparent rounded-lg lg:p-6 flex flex-col items-center text-start lg:text-center"
            >
              <div className="flex w-full gap-[10px]">
                {advantage.icon}
                <p className="lg:text-[16px] text-[14px] font-medium mb-3 text-start text-[black] dark:text-[white]">
                  {advantage.title}
                </p>
              </div>
              <p className="text-start dark:text-[#FFFFFFA1] text-[#121212A1] text-[12px] lg:text-[14px] leading-[30px]">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoAdvantages;

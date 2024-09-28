"use client";
import { Button } from "@/components/shared/button";
import { LeftArrowIcon, RightArrowIcon } from "@/icons/svg";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import CryptoPlugins from "./crypto.plugins";
import CryptoAdvantages from "./advantages";
import JoinUsSection from "./join.us";

const PluginPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const handleSignupClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${i18n.language}`;
    window.open(redirectUrl, "_blank");
  };
  return (
    <div className="container lg:px-[200px] p-1 lg:p-6">
      <div className="flex lg:flex-row flex-col justify-between items-center px-4">
        <div className="md:max-w-[490px] flex flex-col gap-[10px] mb-3 items-center lg:items-start">
          <p className="font-semibold text-[16px] lg:text-[24px] mb-[10px] text-center lg:text-start">
            {t("pluginPage.pluginHeader.title")}
          </p>
          <p className="text-[12px] lg:text-[16px] text-center lg:text-start text-[#121212] dark:text-[#D8D8D8]">
            {t("pluginPage.pluginHeader.description")}
          </p>
          <Button
            onClick={handleSignupClick}
            className="lg:py-[13px] py-[10px] !px-[13px] rounded-md flex justify-center 
          items-center gap-x-2 lg:w-[318px] w-[255px] lg:!text-[16px] !text-[12px]"
          >
            {t("pluginPage.pluginHeader.buttonText")}
            <div>{isRtl ? <LeftArrowIcon /> : <RightArrowIcon />}</div>
          </Button>
        </div>
        <div>
          <Image
            className="hidden dark:block"
            width={319}
            height={274}
            src={"/images/plugin.header.image.dark.png"}
            alt="vendor image"
          />
          <Image
            className="dark:hidden block"
            width={319}
            height={274}
            src={"/images/plugin.header.image.light.png"}
            alt="vendor image"
          />
        </div>
      </div>
      <CryptoPlugins />
      <CryptoAdvantages />
      <JoinUsSection />
    </div>
  );
};

export default PluginPage;

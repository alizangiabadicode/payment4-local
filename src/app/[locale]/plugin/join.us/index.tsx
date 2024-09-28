import { Button } from "@/components/shared/button";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const JoinUsSection: FC = () => {
  const { t, i18n } = useTranslation();
  const handleSignupClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${i18n.language}`;
    window.open(redirectUrl, "_blank");
  };
  return (
    <div className="dark:bg-dark-gradient-ad-card bg-light-gradient-ad-card py-[40px] px-4 mb-[120px]">
      <div className="flex flex-col gap-y-[24px] justify-center items-center">
        <div className="flex flex-col gap-y-[10px] max-w-[464px]">
          <p className="font-semibold text-[18px] lg:text-[20px] text-center">
            {t("pluginPage.joinUsSection.title")}
          </p>
          <p className="text-[14px] text-center dark:text-[#FFFFFFB2] text-[#121212B2]">
            {t("pluginPage.joinUsSection.description")}
          </p>
        </div>
        <div>
          <Button
            onClick={handleSignupClick}
            className="px-[60px] rounded-[8px] py-[8px]"
          >
            {t("pluginPage.joinUsSection.buttonText")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;

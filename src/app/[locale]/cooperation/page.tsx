"use client";

import Image from "next/image";
import React, { useState } from "react";
import Cards from "./cards";
import BusinessPartner from "./business.partner";
import CooperationForm from "@/components/forms/cooperation.form";
import { Snackbar } from "@/components/shared";
import { useTranslation } from "react-i18next";

const CooperationPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div className="container lg:px-[100px] p-6 max-w-6xl">
      <Snackbar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={t("successVendorRequest")}
      />
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="md:max-w-[490px] flex flex-col gap-[10px] mb-3">
          <p className="font-semibold text-[16px] lg:text-[24px] mb-[10px] text-center lg:text-start">
            {t("vendorPage.pageTitle")}
          </p>
          <p className="text-[12px] lg:text-[16px] text-center lg:text-start text-[#121212CC] dark:text-[#FFFFFFDE]">
            {t("vendorPage.pageDescription")}
          </p>
        </div>
        <div>
          <Image
            className="hidden dark:block"
            width={319}
            height={274}
            src={"/images/vendor.header.dark.png"}
            alt="vendor image"
          />
          <Image
            className="dark:hidden block"
            width={319}
            height={274}
            src={"/images/vendor.header.light.png"}
            alt="vendor image"
          />
        </div>
      </div>
      <Cards />
      <BusinessPartner />
      <div className="w-full flex justify-center">
        <CooperationForm setOpenSnackBar={setIsOpen} />
      </div>
    </div>
  );
};

export default CooperationPage;

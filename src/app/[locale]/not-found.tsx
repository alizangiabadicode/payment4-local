"use client";

import { Button } from "@/components/shared/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] px-[20px] md:px-0 mb-[50px] md:mb-0">
      <div className="grid justify-items-center">
        <Image
          src="/images/not-found-dark-img.png"
          width={540}
          height={500}
          alt="404"
          className="dark:block hidden"
        />
        <Image
          src="/images/not-found-light-img.png"
          width={540}
          height={500}
          alt="404"
          className="block dark:hidden"
        />
      </div>
      <div className="flex flex-col mt-[50px] items-center">
        <div className="flex flex-col gap-y-[10px]">
          <p className="text-[70px] md:text-[100px] font-bold">404</p>
          <p className="text-[28px] md:text-[34px] font-bold">
            {t("pageNotFound")}
          </p>
          <p className="text-[16px] md:text-[20px] dark:text-[#FFFFFFC7] text-[#121212C7] max-w-[420px] mt-[10px]">
            {t("notFoundDesc")}
          </p>
          <div className="px-[20px] md:px-0">
            <Button
              onClick={() => router.back()}
              className="py-[10px] md:py-[15px] ‌‌ w-full max-w-[400px] rounded-[15px] 
            text-[16px] md:text-[20px] font-semibold mt-[10px]"
            >
              {t("goBack")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

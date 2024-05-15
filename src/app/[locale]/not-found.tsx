"use client";

import { Button } from "@/components/shared/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] px-[20px] 
    md:px-0 mb-[50px] md:mb-0">
      <div className="grid justify-items-center content-center">
        <Image
          src="/images/not-found-dark-img.png"
          width={300}
          height={300}
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
      <div className="flex flex-col mt-[50px] md:mt-0 items-center justify-center">
        <div className="flex flex-col gap-y-[10px]">
          <p className="text-[50px] md:text-[70px]  font-bold">404</p>
          <p className="text-[20px] md:text-[28px]  font-bold">{t("pageNotFound")}</p>
          <p
            className="text-[16px] dark:text-[#FFFFFFC7] text-[#121212C7]
           max-w-[420px] mt-[10px]"
          >
            {t("notFoundDesc")}
          </p>
          <div>
            <Button
              onClick={() => router.back()}
              className="py-[6px] ‌‌ px-[1.5rem] 
            text-[14px] mt-[10px]"
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

import { Button } from "@/components/shared/button";
import Image from "next/image";
import React from "react";

export const DownloadSection = () => {
  return (
    <div
      className="relative bg-[#F6F4FF] mb-[100px] justify-items-center md:justify-items-end 
      w-full h-auto rounded-[8px] md:px-[44px] grid grid-col-1 md:grid-cols-3 
    py-[44px]"
    >
      <div className="flex flex-col mt-[100px] md:mt-0">
        <p className="text-[35px] xl:text-[40px] font-bold">همین حالا رایگان</p>
        <p className="text-[35px] xl:text-[40px] font-bold">
          دانــلـــــــــــود کــــــن!
        </p>
      </div>
      <div className="flex flex-col gap-y-[20px] max-w-[300px]">
        <p className="text-center md:text-start text-[16px] text-[#121212C7]">
          برای دریافت این سرویس روی دکمه زیر بزن و فایل رو دریافت کن!
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            onClick={() => {
              window.open(
                `${process.env.NEXT_PUBLIC_APP_STORAGE_URL}/wp/payment4.zip`,
                "_blank"
              );
            }}
          >
            دانلود رایگان افزونه
          </Button>
        </div>
      </div>
      <div
        className="absolute top-[-90px] md:top-[-20px] right-[50px] md:right-auto 
      md:left-[-37px] xl:left-0 -order-1 sm:right-[170px]"
      >
        <Image
          width={342}
          height={328}
          src="/images/wp-macbook.png"
          alt="macbook"
        />
      </div>
    </div>
  );
};

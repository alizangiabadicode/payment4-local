"use client";
import { Button } from "@/components/shared/button";
import Image from "next/image";
import React from "react";
import { Cards } from "./_components/cards";
import { Steps } from "./_components/steps";
import { IntroductionVideo } from "./_components/introduction.video";
import { DownloadSection } from "./_components/download.section";

const page = () => {
  return (
    <div className="container flex flex-col pt-[20px]">
      <div className="flex flex-col xl:flex-row items-center gap-y-[50px] xl:justify-around ">
        <div className="flex flex-col xl:max-w-[40%] mt-[40px] h-full items-center px-[10px] xl:px-0">
          <p className=" text-center font-bold text-[32px]">
            درگاه پرداخت رمزارزی Payment4
          </p>
          <p className="text-center font-bold text-[18px] mt-[4px]">
            حل چالش‌های انتقال پول در تبادلات بین المللی و درگاه‌های بانکی
          </p>
          <p className="text-center xl:text-start text-[14px] text-[#121212A1] mt-[16px] leading-[28px]">
            Payment4 یک درگاه پرداخت رمزارزی است و شیوه عملکرد آن مانند درگاه
            پرداخت‌های بانکی فعلی است. مشتری برای پرداخت به صفحه پرداخت در سایت
            payment4 منتقل می‌شود و پس از پرداخت به سایت پذیرنده عودت داده
            می‌شود. همچنین payment4 داشبوردی با امکانات متنوع در اختیار
            پذیرندگان قرار می‌دهد تا از تراکنش‌ها مطلع و امکان برداشت داشته
            باشند. 
          </p>
          <div className="flex gap-x-[20px] mt-[20px]">
            <div>
              <Button
                className="xl:px-[21px] text-[16px] py-[10px]"
                onClick={() => {
                  window.open(
                    `${process.env.NEXT_PUBLIC_APP_STORAGE_URL}/wp/payment4.zip`,
                    "_blank"
                  );
                }}
              >
                نصب رایگان افزونه
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  window.open(
                    `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lng=fa`,
                    "_blank"
                  );
                }}
                className="xl:px-[21px] text-[16px] py-[10px] bg-white !text-[#864AFF] border hover:bg-white"
              >
                ساخت حساب کاربری
              </Button>
            </div>
          </div>
        </div>
        <div className="px-[10px] xl:px-0">
          <Image
            className="dark:block hidden"
            width={700}
            height={500}
            src="/images/wp-dashboard.png"
            alt="dashboard"
          />
          <Image
            className="block dark:hidden"
            width={700}
            height={500}
            src="/images/wp-dashboard.png"
            alt="dashboard"
          />
        </div>
      </div>
      <Cards />
      <div>
        <Steps />
      </div>
      <IntroductionVideo />
      <div className="px-[10px] xl:px-[20px]">
        <DownloadSection />
      </div>
    </div>
  );
};

export default page;

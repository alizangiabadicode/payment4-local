import Stepper, { Step } from "@/components/shared/stepper";
import Image from "next/image";
import React from "react";

export const Steps = () => {
  const steps = [
    { title: "", description: "" },
    {
      number: 1,
      title: "ثبت‌ نام",
      description: "This is a description text.",
    },
    {
      number: 2,
      title: "ایجاد درگاه",
      description: "This is a description text.",
    },
    {
      number: 3,
      title: "دانلود و نصب افزونه",
      description: "This is a description text.",
    },
    {
      number: 4,
      title: "استفاده از API یا Paylink",
      description: "This is a description text.",
    },
  ];
  const images = [
    {
      title: "ثبت‌ نام",
      imgUrl: "/images/wp-step1.png",
      desc: "مرحله اول برای استفاده از درگاه Payment4، ساختن حساب کاربری است.",
    },
    {
      title: "ایجاد درگاه",
      imgUrl: "/images/wp-step2.png",
      desc: "پس از ثبت نام، کاربران می‌بایست درگاه پرداخت مورد نظر خود را ایجاد کنند.",
    },
    {
      title: "دانلود و نصب افزونه",
      imgUrl: "/images/wp-step3.png",
      desc: "پذیرندگان میتوانند از وبسایت ژاکت افزونه‌ی Payment4 را دانلود و نصب کنند.",
    },
    {
      title: "استفاده از API یا Paylink",
      imgUrl: "/images/wp-step4.png",
      desc: "می‌توانید با لینک پرداخت یا API، درگاه را در وبسایت یا اپلیکیشن خود پیاده سازی کنند.",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <p className="text-[24px] xl:text-[28px] font-bold mb-[32px] text-center">
          مراحل استفاده از Payment4
        </p>
      </div>
      <Stepper steps={steps} />
      <div
        className="flex flex-col xl:flex-row justify-evenly xl:px-[100px] items-center 
      xl:gap-x-[50px] gap-y-[20px]"
      >
        {images.map((image, index) => {
          return (
            <div
              className="flex px-[20px] flex-col gap-y-[10px] items-center"
              key={index}
            >
              <div
                key={index}
                className="relative w-[300px] xl:w-[248px] max-w-md h-[370px] xl:h-[317px] mt-2"
              >
                <Image
                  src={image.imgUrl}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
              <p className="xl:hidden text-[16px] font-bold">{image.title}</p>
              <p className="text-[13px] text-[#121212A1]">{image.desc}</p>
              {index !== images.length - 1 && (
                <div className="w-full xl:hidden">
                  <hr className="border border-[#EBEBEB] w-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

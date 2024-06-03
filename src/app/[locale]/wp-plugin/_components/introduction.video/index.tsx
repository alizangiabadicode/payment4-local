import React from "react";

export const IntroductionVideo = () => {
  return (
    <div className="flex flex-col items-center gap-y-[32px] my-[100px]">
      <p className="text-[28px] font-bold">معرفی و آموزش Payment4</p>
      <div
        className="relative overflow-hidden w-[75%] xl:w-1/2 pt-[42%] xl:pt-[28%]"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-[8px]"
          allowFullScreen
          src="https://aparat.com/video/video/embed/videohash/JKRzY/vt/frame"
        ></iframe>
      </div>
    </div>
  );
};

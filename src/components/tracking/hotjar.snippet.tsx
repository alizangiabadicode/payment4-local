"use client";
import Hotjar from "@hotjar/browser";
import { FC } from "react";

const HOTJAR_ID = process.env.NEXT_PUBLIC_HJ_ID;

export const HotjarSnippet: FC = () => {
  Hotjar.init(Number(HOTJAR_ID), 6);

  return null;
  // if (HOTJAR_ID) return null;
  // return (
  //   <div>
  //     <script id="hotjar-snippet">
  //       {`
  //         (function(h,o,t,j,a,r){
  //             h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //             h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
  //             a=o.getElementsByTagName('head')[0];
  //             r=o.createElement('script');r.async=1;
  //             r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //             a.appendChild(r);
  //         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  //       `}
  //     </script>
  //   </div>
  // );
};

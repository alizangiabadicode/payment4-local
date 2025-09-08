"use client";
import { FC, useEffect } from "react";

const TWITTER_PIXEL_ID = process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID;

export const TwitterSnippet: FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && TWITTER_PIXEL_ID) {
      // Twitter conversion tracking base code
      (function (e: any, t: any, n: any, s: any, u: any, a: any) {
        e.twq ||
          ((s = e.twq =
            function () {
              s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
            }),
          (s.version = "1.1"),
          (s.queue = []),
          (u = t.createElement(n)),
          (u.async = !0),
          (u.src = "https://static.ads-twitter.com/uwt.js"),
          (a = t.getElementsByTagName(n)[0]),
          a.parentNode.insertBefore(u, a));
      })(window, document, "script", undefined, undefined, undefined);

      // Configure Twitter pixel with the provided ID
      (window as any).twq("config", TWITTER_PIXEL_ID);
    }
  }, []);

  return null;
};

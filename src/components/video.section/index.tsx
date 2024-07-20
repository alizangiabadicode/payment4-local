"use client";

import { FC, useEffect, useRef } from "react";

export const VideoSection: FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.setAttribute("webkitAllowFullScreen", "true");
      iframeRef.current.setAttribute("mozAllowFullScreen", "true");
    }
  }, []);

  return (
    <>
      <style>
        {`
          .h_iframe-aparat_embed_frame {
            position: relative;
            width: 100%;
            padding-top: 57%;
          }
          .h_iframe-aparat_embed_frame iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
            border-radius:10px;
          }
        `}
      </style>
      <div className="h_iframe-aparat_embed_frame">
        <iframe
          ref={iframeRef}
          src="https://www.aparat.com/video/video/embed/videohash/x5072wq/vt/frame"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogPreviewProps {
  imageUrl: string;
  title: string;
  href: string;
}

export const BlogPreview: FC<BlogPreviewProps> = ({
  imageUrl,
  title,
  href,
}) => {
  return (
    <div className="flex gap-x-[20px]">
      <div>
        <Image
          loader={() => imageUrl}
          src={imageUrl}
          alt="blog image"
          width={89}
          height={89}
          className="rounded-[8px]"
        />
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <p className="text-[14px] font-semibold">{title}</p>
        <Link className="text-[#864AFF] font-semibold text-[14px]" href={href}>See more</Link>
      </div>
    </div>
  );
};

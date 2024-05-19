import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
        <Link
          className="text-[#864AFF] dark:text-[#9E6DFF] 
        font-semibold text-[14px]"
          href={href}
        >
          {t("seeMore")}
        </Link>
      </div>
    </div>
  );
};

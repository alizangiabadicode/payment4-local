import Image from "next/image";

export interface CardProps {
  imgUrl: string;
  title: string;
  desc: string;
}

export const Card = ({ imgUrl, title, desc }: CardProps) => {
  return (
    <div
      className="flex justify-center items-center flex-col bg-[#864AFF0A] h-[330px] xl:h-[305px]"
      style={{ boxShadow: "1px 1px 4px 0px #0000001F" }}
    >
      <div>
        <Image
          width={198}
          height={198}
          src={imgUrl}
          alt={`${title}image`}
          className="object-scale-down"
        />
      </div>
      <div className="flex flex-col items-center gap-[20px] mb-[60px] max-w-[372px] px-[10px] xl:px-0">
        <p className="text-[18px] font-bold text-center">{title}</p>
        <p className="text-[14px] text-[#121212C7] text-center">{desc}</p>
      </div>
    </div>
  );
};

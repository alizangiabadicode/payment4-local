import Image from "next/image";

export interface CardProps {
  imgUrl: string;
  title: string;
  desc: string;
}

export const Card = ({ imgUrl, title, desc }: CardProps) => {
  return (
    <div
      className="relative flex justify-end items-center flex-col min-h-[300px]
      bg-[#864AFF0A]"
      style={{ boxShadow: "1px 1px 4px 0px #0000001F" }}
    >
      <div className="min-h-[250px] min-w-[198px] absolute top-[-50px]">
        <Image
          fill
          src={imgUrl}
          alt={`${title}image`}
          className="object-scale-down"
        />
      </div>
      <div
        className="flex flex-col items-center gap-[15px] mb-[20px] 
      max-w-[382px] px-[10px] xl:px-0"
      >
        <p className="text-[18px] font-bold text-center">{title}</p>
        <p className="text-[14px] text-[#121212C7] text-center">{desc}</p>
      </div>
    </div>
  );
};

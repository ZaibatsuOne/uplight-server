import { FC } from "react";
import { IContactBlock } from "@/types/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  data: IContactBlock;
}
const ContactBlock: FC<Props> = ({ data }) => {
  let backgroundColor;

  switch (data.id) {
    case 1:
      backgroundColor = "bg-[#5662F6]";
      break;
    case 2:
      backgroundColor = "bg-[#FF0000]";
      break;
    case 3:
      backgroundColor = "bg-[#0088CC]";
      break;
    default:
      backgroundColor = "bg-[#231E1B]";
  }
  return (
    <div className="flex flex-col gap-8 items-center">
      <Image
        src={data.icon}
        alt={data.title}
        className={cn(
          "rounded-[32px] w-[120px] h-[120px] px-5 py-8 hover:scale-110 hover:opacity-75 duration-200",
          backgroundColor
        )}
        style={{ objectFit: "contain" }}
      />
      <div className="flex flex-col gap-4 items-center">
        <h5 className="text-xl font-semibold">{data.title}</h5>
        <p className="uppercase text-[#757575] tracking-[0.3em] text-sm">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
};

export default ContactBlock;

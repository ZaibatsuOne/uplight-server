import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
const Logo: FC<Props> = ({ className }) => {
  return (
    <h2 className={cn("uppercase text-[40px] font-semibold", className)}>ul</h2>
  );
};

export default Logo;

import { FC, PropsWithChildren, ReactNode } from "react";

interface Props {}

const Description: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <p className="text-[#757575] text-lg font-medium">{children}</p>;
};

export default Description;

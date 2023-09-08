import { FC } from "react";

const TopGradientLayout: FC = () => {
  return (
    <>
      <div className="animate-pulse absolute z-1 -top-7 bg-gradient-to-b from-[#3F64E9] to-transparent h-48 w-1/2 rounded-full left-16 blur-3xl" />
      <div className="animate-pulse absolute -z-1 -top-24 bg-gradient-to-b from-[#E93F3F] to-transparent h-80 w-1/2 rounded-full left-1/2 transform -translate-x-1/2 blur-3xl" />
      <div className="animate-pulse absolute -top-16 bg-gradient-to-b from-[#FFB800] to-transparent h-48 w-1/2 rounded-full right-16 blur-3xl" />
    </>
  );
};

export default TopGradientLayout;

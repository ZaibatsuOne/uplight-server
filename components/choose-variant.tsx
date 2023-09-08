"use client";

import { Dispatch, FC, SetStateAction } from "react";

import { motion } from "framer-motion";

interface Props {
  priceVariant: number;
  setPriceVariant: Dispatch<SetStateAction<number>>;
}

const ChooseVariant: FC<Props> = ({ priceVariant, setPriceVariant }) => {
  const variants = ["InGame Season", "Permanently"];

  return (
    <div className="bg-[#EEEEEE] p-1 rounded-3xl">
      {variants.map((variant, index) => (
        <button
          className={"relative p-3 rounded-3xl text-white"}
          onClick={(): void => setPriceVariant(index + 1)}
          key={index}
        >
          {priceVariant === index + 1 && (
            <motion.div
              layoutId="acttive-pill"
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black rounded-3xl"
            />
          )}
          <span className="relative z-1 mix-blend-exclusion">{variant}</span>
        </button>
      ))}
    </div>
  );
};

export default ChooseVariant;

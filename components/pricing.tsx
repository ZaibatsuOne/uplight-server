"use client";

import { FC, useState } from "react";

import ChooseVariant from "./choose-variant";
import Description from "./ui/description";
import PricingBlock from "./pricing-block";
import { motion } from "framer-motion";
import { pricingBlocks } from "@/data/data";

const Pricing: FC = () => {
  const [priceVariant, setPriceVariant] = useState(1);

  return (
    <motion.section
      initial={{ y: 110, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-8 items-center text-center py-20"
    >
      <header className="flex flex-col gap-5">
        <h2 className="text-3xl md:text-[44px] font-semibold">
          Access options
        </h2>
        <Description>All possible available access options</Description>
      </header>
      <ChooseVariant
        priceVariant={priceVariant}
        setPriceVariant={setPriceVariant}
      />
      <section className="grid xl:grid-cols-3 gap-8">
        {pricingBlocks.map((item) => (
          <PricingBlock data={item} priceVariant={priceVariant} />
        ))}
      </section>
    </motion.section>
  );
};

export default Pricing;

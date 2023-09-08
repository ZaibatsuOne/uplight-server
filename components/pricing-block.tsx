"use client";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

import { Button } from "./ui/button";
import { FC } from "react";
import { IPricingBlock } from "@/types/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  data: IPricingBlock;
  priceVariant: number;
}

const PricingBlock: FC<Props> = ({ data, priceVariant }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card
        className={cn(
          "flex flex-col items-center gap-8 p-4",
          data.id === 2 ? "bg-white text-black" : ""
        )}
      >
        <CardHeader className="flex flex-col gap-8">
          <h3 className="capitalize text-2xl font-bold">{data.title}</h3>
          <span className="flex gap-2 items-center font-bold px-2">
            <span className="text-[44px] whitespace-nowrap">
              ${priceVariant === 1 ? data.inGamePrice : data.permanentlyPrice}
            </span>
            <span className="text-base text-[#757575]">/InGame Season</span>
          </span>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3 font-extrabold">
            {data.options.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="items-center flex inset-0">
          <Button size="lg" className="flex px-32">
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingBlock;

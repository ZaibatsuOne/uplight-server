"use client";

import { Button } from "./ui/button";
import Description from "./ui/description";
import { FC } from "react";
import Image from "next/image";
import icon from "@/public/Building Construction.png";
import { motion } from "framer-motion";
const InDevelopmemtBlock: FC = () => {
  return (
    <motion.section
      initial={{ y: 110, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10 flex flex-col gap-10 items-center text-center"
    >
      <Image
        src={icon}
        alt="In development icon"
        className="bg-[#545454] p-3 rounded-2xl"
      />
      <h2 className="text-3xl md:text-[52px] font-semibold">
        Temporarily in development
      </h2>
      <Description>
        All existing and already completed common projects
      </Description>
      <div>
        <Button size="lg">InDev</Button>
      </div>
    </motion.section>
  );
};

export default InDevelopmemtBlock;

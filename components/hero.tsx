"use client";

import { Button } from "./ui/button";
import Description from "./ui/description";
import { FC } from "react";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <motion.section
      initial={{ y: 110, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-8 justify-center items-center py-20"
    >
      <header className="text-center">
        <h1 className="relative">
          <span className="absolute text-transparent bg-clip-text opacity-20 bg-gradient-to-r from-[#F80A0A] via-[#D3E131] to-[#03FFF0] text-[56px] md:text-[96px]  font-bold">
            UpLight
          </span>
          <span className="text-[56px] md:text-[96px]  font-bold">UpLight</span>
        </h1>
        <Description>Minecraft Server</Description>
      </header>
      <Button size="lg">Buy Access</Button>
    </motion.section>
  );
};

export default Hero;

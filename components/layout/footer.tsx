"use client";

import BottomGradient from "./bottom-gradient";
import { FC } from "react";
import Logo from "../ui/logo";
import { motion } from "framer-motion";

const Footer: FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className="container pt-14 "
    >
      <nav className="flex justify-between items-center bg-black/10 dark:bg-white/10 px-3 rounded-3xl">
        <Logo className="text-[60px]" />
        <span className="font-medium text-[10px] md:text-lg text-[#757575]">
          ©2023 UpLight. All rights reserved.
        </span>
      </nav>
      <BottomGradient />
    </motion.footer>
  );
};

export default Footer;

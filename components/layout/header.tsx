"use client";

import Discord from "@/public/Symbol.svg";
import Image from "next/image";
import Logo from "../ui/logo";
import { ModeToggle } from "../ui/theme-switch";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className="container relative mt-7 px-[50px] md:px-[140px]"
    >
      <nav className="flex justify-between items-center bg-black/10 dark:bg-white/10 px-3 rounded-3xl">
        <Logo />
        <div className="flex gap-4 fill-black">
          <Image
            src={Discord}
            alt="Discord icon"
            width={29}
            height={22}
            className="fill-slate-500"
            style={{ objectFit: "contain" }}
          />
          <Separator orientation="vertical" className="bg-black" />
          <ModeToggle />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

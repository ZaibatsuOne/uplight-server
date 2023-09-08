"use client";

import ContactBlock from "./contact-block";
import { FC } from "react";
import { contactBlocks } from "@/data/data";
import { motion } from "framer-motion";

const Contacs: FC = () => {
  return (
    <motion.section
      initial={{ y: 110, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-8 py-10 items-center"
    >
      <h2 className="text-4xl md:text-[52px] font-semibold">Our contacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">
        {contactBlocks.map((item) => (
          <ContactBlock data={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Contacs;

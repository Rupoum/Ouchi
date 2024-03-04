import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20  rounded-tl-3xl rounded-tr-3xl bg-[#004d32]">
      <div className="text border-t-2 border-b-2 flex border-zinc-300 text-white *:gap-10 overflow-hidden  whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[23vw] leading-none uppercase py-3  font-bold"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[23vw] leading-none uppercase py-3  font-bold"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[23vw] leading-none uppercase py-3  font-bold"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

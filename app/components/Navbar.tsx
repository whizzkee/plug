"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} px-4 md:px-8 py-4 md:py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
    >
      {/* Left Logo */}
      <h2 className="font-extrabold text-[20px] md:text-[24px] leading-[30.24px] text-white">
        $PLUG
      </h2>

      {/* Right Links */}
      <div className="flex gap-3 md:gap-6">
        <a
          href="https://x.com/plugcoinonsol"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/images/twitter.svg"
            className="w-7 h-7 md:w-9 md:h-9 object-contain"
            alt="Twitter"
            width={256}
            height={256}
          />
        </a>
        <a
          href="https://dexscreener.com/solana/5fkzvrrxhsstkgzms2t615yeb3k8wteuydzyleevefqi"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/images/dexLogo.png"
            className="w-7 h-7 md:w-9 md:h-9 object-contain"
            alt="DexScreener"
            width={256}
            height={256}
          />
        </a>
        <a
          href="https://t.me/plugofficialtg"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/images/telegram.svg"
            className="w-7 h-7 md:w-9 md:h-9 object-contain"
            alt="Telegram"
            width={256}
            height={256}
          />
        </a>
        <a
          href="https://t.co/cAGSmZ8jD7"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/images/geckoterminal_icon.png"
            className="w-7 h-7 md:w-9 md:h-9 object-contain"
            alt="GeckoTerminal"
            width={256}
            height={256}
          />
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;

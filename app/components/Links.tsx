import React from "react";
import Image from "next/image";

const Links = () => {
  return (
    <section id="links" className="py-20 text-center ">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-400">
        Unravel the Mystery
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12">
        <a
          href="https://x.com/plugcoinonsol"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-4 md:p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
        >
          <Image
            src="/images/twitter.svg"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
            alt="Twitter"
            width={256}
            height={256}
          />
          <i className="fab fa-twitter text-3xl"></i>
        </a>
        <a
          href="https://dexscreener.com/solana/5fkzvrrxhsstkgzms2t615yeb3k8wteuydzyleevefqi?__cf_chl_tk=5KWsjyV1MwaxFGXoSQbkQR7xh9bRCdO4.gDaBnIwVWw-1732149252-1.0.1.1-O6OH4OzOgtOvE2L1Tzf39xWe0k7_XKJMKpPLhVq37dY"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-4 md:p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
        >
          <Image
            src="/images/dexLogo.png"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
            alt="DexScreener"
            width={256}
            height={256}
          />
          <i className="fas fa-chart-line text-3xl"></i>
        </a>
        <a
          href="https://t.me/plugofficialtg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-4 md:p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
        >
          <Image
            src="/images/telegram.svg"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
            alt="Telegram"
            width={256}
            height={256}
          />
          <i className="fab fa-telegram text-3xl"></i>
        </a>
        <a
          href="https://t.co/cAGSmZ8jD7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-4 md:p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
        >
          <Image
            src="/images/geckoterminal_icon.png"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
            alt="GeckoTerminal"
            width={256}
            height={256}
          />
          <i className="fab fa-telegram text-3xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Links;

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-20 px-10 lg:px-20 gap-12">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-4">
          Fueling Mystery on Solana
        </h2>
        <p className="text-lg text-gray-400">
          Plug is a dark enigma. An onchain force that combines humor, power,
          and a touch of chaos. Own the legend.
        </p>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="relative w-full h-80 lg:h-96 animate-float">
          <Image
            src="/images/plugAbout2.png"
            alt="Plug Art"
            layout="fill"
            objectFit="cover"
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

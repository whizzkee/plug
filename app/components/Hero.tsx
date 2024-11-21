import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Who is Plug?";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <header className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-80 z-[-1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-40 z-[-1] animate-pulse" />

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-center">
        {typedText}
      </h1>

      <Image
        src="/images/plugMain.jpg"
        alt="Plug Logo"
        width={350}
        height={350}
        className="rounded-full shadow-xl border-4 border-black"
      />
      <a
        href="#links"
        className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform"
      >
        Discover Plug
      </a>
      <a
        href="https://pump.fun/coin/Cw5WAZfh3KD1Y63tAR7UMHtoX9QvNZPVWaawnVufpump"
        target="_blank"
        className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform"
      >
        Buy now
      </a>
    </header>
  );
};

export default Hero;

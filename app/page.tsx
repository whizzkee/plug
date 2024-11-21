"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

const Home = () => {
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
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-black via-slate-800 to-black text-white min-h-screen">
        {/* Hero Section */}
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
            href="#links"
            className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform"
          >
            Buy now
          </a>
        </header>

        {/* Art Showcase */}
        <section className="flex flex-col lg:flex-row items-center justify-between py-20 px-10 lg:px-20 gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-4">
              Fueling Mystery on Solana
            </h2>
            <p className="text-lg text-gray-400">
              Plug is a dark enigma. An onchain force that combines humor,
              power, and a touch of chaos. Own the legend.
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

        {/* Links Section */}
        <section id="links" className="py-20 text-center ">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-400">
            Unravel the Mystery
          </h2>
          <div className="flex justify-center items-center gap-12">
            <a
              href="https://x.com/plugcoinonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
            >
              <Image
                src="/images/twitter.svg"
                className="w-9 h-9"
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
              className="bg-black text-white p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
            >
              <Image
                src="/images/dexLogo.png"
                className="w-9 h-9"
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
              className="bg-black text-white p-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
            >
              <Image
                src="/images/telegram.svg"
                className="w-9 h-9"
                alt="Telegram"
                width={256}
                height={256}
              />
              <i className="fab fa-telegram text-3xl"></i>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-center text-gray-500 py-6">
          © 2024 Plug. The mystery continues.
        </footer>
      </div>
    </>
  );
};

export default Home;

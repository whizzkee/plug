import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const text = "Who is Plug?";
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex flex-col items-center justify-center min-h-screen relative pb-24 sm:pb-32">
      {/* Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-[-1]" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent z-[-1] animate-pulse" 
      />

      <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full px-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-center flex flex-wrap justify-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {characters.map((character, index) => (
            <motion.span
              key={index}
              variants={child}
              style={{ display: 'inline-block' }}
            >
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/plugMain.jpg"
            alt="Plug Logo"
            width={350}
            height={350}
            className="rounded-full shadow-xl border-4 border-black"
            priority
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col space-y-4 sm:space-y-6 mt-8"
        >
          <a
            href="#about"
            onClick={handleScroll}
            className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform text-center"
          >
            Discover Plug
          </a>

          <a
            href="https://pump.fun/coin/Cw5WAZfh3KD1Y63tAR7UMHtoX9QvNZPVWaawnVufpump"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform text-center"
          >
            Buy now
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

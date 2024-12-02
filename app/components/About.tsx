import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariant = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      x: 20
    },
    visible: {
      opacity: 0.8,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-between py-20 px-10 lg:px-20 gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="lg:w-1/2 text-center lg:text-left"
        variants={fadeInUp}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-purple-300 mb-4"
          variants={fadeIn}
        >
          Fueling Mystery on Solana
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400"
          variants={fadeIn}
        >
          Plug is a dark enigma: an onchain force that combines humor, power, and a touch of chaos. Own the legend.
        </motion.p>
      </motion.div>
      <motion.div 
        className="lg:w-1/2 w-full"
        variants={imageVariant}
      >
        <div className="relative w-full h-80 lg:h-96 float-animation">
          <Image
            src="/images/plugAbout2.png"
            alt="Plug Art"
            layout="fill"
            objectFit="cover"
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;

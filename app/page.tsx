"use client";

import Navbar from "./components/Navbar";
import "./globals.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Links from "./components/Links";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-slate-800 to-black text-white min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Links />
        <Footer />
      </div>
    </>
  );
};

export default Home;

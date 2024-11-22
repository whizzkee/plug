"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./globals.css";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 5000); // Show loading for 5 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

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

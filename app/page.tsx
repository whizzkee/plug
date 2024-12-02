"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import QRCodeComponent from "./components/QRCode";
import About from "./components/About";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Tokenomics from "./components/Tokenomics";
import "./globals.css";

const Home = () => {
  //const [loading, setLoading] = useState<boolean>(true);

  //useEffect(() => {
    //const timeout = setTimeout(() => setLoading(false), 5000); // Show loading for 5 seconds
    //return () => clearTimeout(timeout);
  //}, []);

  //if (loading) {
    //return <Loading />;
  //}

  return (
    <>
      <div className="bg-gradient-to-b from-black via-slate-800 to-black text-white min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Tokenomics />
        {/* <QRCodeComponent /> */}
        <Links />
        <Footer />
      </div>
    </>
  );
};

export default Home;

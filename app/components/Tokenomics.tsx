"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { useState, useEffect } from "react";

interface TokenData {
  totalSupply?: string;
  price?: string;
  marketCap?: string;
  liquidity?: string;
  priceChange24h?: string;
}

const Tokenomics = () => {
  const [tokenData, setTokenData] = useState<TokenData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          "https://api.dexscreener.com/latest/dex/pairs/solana/5fkzvrrxhsstkgzms2t615yeb3k8wteuydzyleevefqi"
        );
        const data = await response.json();
        
        if (data.pairs && data.pairs[0]) {
          const pair = data.pairs[0];
          setTokenData({
            price: pair.priceUsd,
            marketCap: pair.fdv,
            liquidity: pair.liquidity?.usd,
            priceChange24h: pair.priceChange?.h24,
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching token data:", error);
        setLoading(false);
      }
    };

    fetchTokenData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchTokenData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num?: string | number) => {
    if (!num) return "N/A";
    const value = typeof num === "string" ? parseFloat(num) : num;
    if (isNaN(value)) return "N/A";
    
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(2)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  const formatPrice = (price?: string) => {
    if (!price) return "N/A";
    const value = parseFloat(price);
    if (isNaN(value)) return "N/A";
    
    // For very small numbers (less than 0.00001)
    if (value < 0.00001) {
      return `$${value.toExponential(2)}`;
    }
    // For small numbers (less than 0.01)
    else if (value < 0.01) {
      return `$${value.toFixed(8)}`;
    }
    // For regular numbers
    return `$${value.toFixed(4)}`;
  };

  const tokenomicsData = [
    {
      title: "Price",
      value: formatPrice(tokenData.price),
      description: `24h Change: ${tokenData.priceChange24h ? `${tokenData.priceChange24h}%` : "N/A"}`
    },
    {
      title: "Market Cap",
      value: formatNumber(tokenData.marketCap),
      description: "Fully Diluted Valuation"
    },
    {
      title: "Liquidity",
      value: formatNumber(tokenData.liquidity),
      description: "Total Liquidity"
    },
    {
      title: "Contract",
      value: "Renounced",
      description: "Contract ownership renounced"
    }
  ];

  return (
    <section id="tokenomics" className="py-20 px-10 lg:px-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-400">
          Tokenomics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                {item.title}
              </h3>
              <p className={`text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent ${loading ? 'opacity-50' : ''}`}>
                {loading ? "Loading..." : item.value}
              </p>
              <p className="text-gray-400 text-sm">
                {loading ? "Loading..." : item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Tokenomics;

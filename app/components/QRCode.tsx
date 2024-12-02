"use client";

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
  const walletAddress = "Cw5WAZfh3KD1Y63tAR7UMHtoX9QvNZPVWaawnVufpump";
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-white p-2 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      title="Click to copy address"
    >
      <QRCodeSVG
        value={walletAddress}
        size={120}
        level="H"
        includeMargin={true}
      />
      
      {/* Hover overlay with copy text */}
      <div 
        className={`absolute inset-0 bg-black/10 flex items-center justify-center rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="text-xs text-black font-medium">Click to copy</span>
      </div>

      {/* Copy feedback overlay */}
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg text-white font-semibold animate-fade-out">
          Copied!
        </div>
      )}

      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
    </button>
  );
};

export default QRCodeComponent;

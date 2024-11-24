"use client";

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
  const walletAddress = "Cw5WAZfh3KD1Y63tAR7UMHtoX9QvNZPVWaawnVufpump";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-300 mb-8">$PLUG</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* QR Code */}
          <div className="bg-white p-4 rounded-lg">
            <QRCodeSVG
              value={walletAddress}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
          
          {/* Wallet Address and Copy Button */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-black/50 p-4 rounded-lg max-w-full overflow-hidden">
              <p className="text-gray-300 font-mono break-all">{walletAddress}</p>
            </div>
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              {copied ? 'Copied!' : 'Copy Address'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeComponent;

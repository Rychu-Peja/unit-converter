"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const HomeLook = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          What would you like to convert today?
        </h1>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Units</h2>
            <p className="text-gray-400 mb-6">
              Convert imperial and metric units to make your life easier.
            </p>
            <Link
              href="/Unit"
              className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-3 px-4 rounded-md shadow-md hover:opacity-90 focus:opacity-90 active:scale-95 transition-transform duration-200"
            >
              Convert
            </Link>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Area</h2>
            <p className="text-gray-400 mb-6">
              Calculate those pesky area measurements.
            </p>
            <Link
              href="/Area"
              className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-3 px-4 rounded-md shadow-md hover:opacity-90 focus:opacity-90 active:scale-95 transition-transform duration-200"
            >
              Convert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLook;

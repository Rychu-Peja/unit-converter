"use client";

import Converter from "./Converter";

export default function ConverterPage() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/mathbg.png')",
      }}
    >
      <div className="w-full max-w-md bg-gray-900 bg-opacity-90 rounded-lg shadow-lg p-6">
        <Converter />
      </div>
    </div>
  );
}
"use client";

import Area from "./Area";

export default function AreaPage() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/areabg.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-gray-900 bg-opacity-90 rounded-lg shadow-lg p-6">
        <Area />
      </div>
    </div>
  );
}
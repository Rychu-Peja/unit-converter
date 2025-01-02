'use client';

import { useState } from "react";

export default function Converter() {
  const [inputValue, setInputValue] = useState("");
  const [unit, setUnit] = useState("mileToKm");
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    let conversion = 0;
    switch (unit) {
      case "mileToKm":
        conversion = parseFloat(inputValue) * 1.60934;
        break;
      case "poundToKg":
        conversion = parseFloat(inputValue) * 0.453592;
        break;
      case "gallonToLiter":
        conversion = parseFloat(inputValue) * 3.78541;
        break;
      default:
        conversion = 0;
    }
    setResult(conversion.toFixed(2));
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Unit Converter</h1>
      <input
        type="number"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="mileToKm">Miles to Kilometers</option>
        <option value="poundToKg">Pounds to Kilograms</option>
        <option value="gallonToLiter">Gallons to Liters</option>
      </select>
      <button
        onClick={handleConvert}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>
      {result && (
        <div className="mt-4 text-center">
          <p className="text-lg font-bold">Result: {result}</p>
        </div>
      )}
    </div>
  );
}

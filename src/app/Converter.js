'use client';

import { useState } from "react";

export default function Converter() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("mile");
  const [toUnit, setToUnit] = useState("km");
  const [result, setResult] = useState(null);

  const unitCategories = {
    length: ["mile", "km", "foot", "inch"],
    mass: ["kg", "pound", "gram", "ounce", "dag"],
    volume: ["liter", "milliliter", "gallon"]
  };

  const pluralize = (value, unit) => {
    if (value === 1) return unit; // Liczba pojedyncza
    if (unit === "mile") return "miles";
    if (unit === "foot") return "feet";
    if (unit === "inch") return "inches";
    if (unit === "pound") return "pounds";
    if (unit === "ounce") return "ounces";
    if (unit === "liter") return "liters";
    if (unit === "milliliter") return "milliliters";
    if (unit === "gallon") return "gallons";
    if (unit === "gram") return "grams";
    if (unit === "dag") return "dekagrams";
    if (unit === "kg") return "kilograms";
    if (unit === "km") return "kilometers";
    return unit; // Domyślnie zwróć jednostkę
  };

  const handleConvert = () => {
    let conversion = 0;

    // Konwersje długości
    if (fromUnit === "mile" && toUnit === "km") conversion = parseFloat(inputValue) * 1.60934;
    else if (fromUnit === "km" && toUnit === "mile") conversion = parseFloat(inputValue) / 1.60934;
    else if (fromUnit === "foot" && toUnit === "inch") conversion = parseFloat(inputValue) * 12;
    else if (fromUnit === "inch" && toUnit === "foot") conversion = parseFloat(inputValue) / 12;

    // Konwersje masy
    else if (fromUnit === "kg" && toUnit === "pound") conversion = parseFloat(inputValue) * 2.20462;
    else if (fromUnit === "pound" && toUnit === "kg") conversion = parseFloat(inputValue) / 2.20462;
    else if (fromUnit === "gram" && toUnit === "ounce") conversion = parseFloat(inputValue) / 28.3495;
    else if (fromUnit === "ounce" && toUnit === "gram") conversion = parseFloat(inputValue) * 28.3495;
    else if (fromUnit === "dag" && toUnit === "gram") conversion = parseFloat(inputValue) * 10;
    else if (fromUnit === "gram" && toUnit === "dag") conversion = parseFloat(inputValue) / 10;

    // Konwersje objętości
    else if (fromUnit === "liter" && toUnit === "milliliter") conversion = parseFloat(inputValue) * 1000;
    else if (fromUnit === "milliliter" && toUnit === "liter") conversion = parseFloat(inputValue) / 1000;
    else if (fromUnit === "gallon" && toUnit === "liter") conversion = parseFloat(inputValue) * 3.78541;
    else if (fromUnit === "liter" && toUnit === "gallon") conversion = parseFloat(inputValue) / 3.78541;

    else conversion = inputValue; // Gdy jednostki są takie same

    setResult(conversion.toFixed(2));
  };

  const handleFromUnitChange = (value) => {
    setFromUnit(value);
    const category = Object.entries(unitCategories).find(([_, units]) => units.includes(value))[0];
    setToUnit(unitCategories[category][0]);
  };

  return (
    <div className="bg-gray p-8 rounded shadow-md w-full max-w-md mx-auto text-gray-400">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-200">Unit Converter</h1>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
        />
        <div className="flex justify-between">
          <select
            value={fromUnit}
            onChange={(e) => handleFromUnitChange(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded text-black mr-2"
          >
            {Object.values(unitCategories).flat().map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded text-black"
          >
            {unitCategories[
              Object.entries(unitCategories).find(([_, units]) => units.includes(fromUnit))[0]
            ].map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleConvert}
        className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-600 text-black"
      >
        Convert
      </button>
      {result && (
        <div className="mt-4 text-center">
          <p className="text-lg font-bold">
            {inputValue} {pluralize(inputValue, fromUnit)} is equal to {result} {pluralize(result, toUnit)}
          </p>
        </div>
      )}
    </div>
  );
}

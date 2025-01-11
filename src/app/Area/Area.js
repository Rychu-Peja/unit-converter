import React, { useState } from "react";

const Area = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [fromUnit, setFromUnit] = useState("Square Meter"); 
  const [toUnit, setToUnit] = useState("Hectare"); 
  const [result, setResult] = useState(null);

  // Mapowanie jednostek z czytelnymi nazwami dla użytkownika
  const unitNames = {
    "Square Meter": "Square Meter",
    "Hectare": "Hectare",
    "Are": "Are",
    "Square Kilometer": "Square Kilometer",
    "Square Mile": "Square Mile",
    "Square Foot": "Square Foot",
    "Square Yard": "Square Yard",
    "Square Inch": "Square Inch",
    "Acre": "Acre",
    "Square Centimeter": "Square Centimeter",
    "Square Millimeter": "Square Millimeter",
  };

  const conversionTable = {
    "Square Meter": {
      "Square Meter": 1,
      "Hectare": 0.0001,
      "Are": 0.01,
      "Square Kilometer": 0.000001,
      "Square Mile": 3.861e-7,
      "Square Foot": 10.7639,
      "Square Yard": 1.19599,
      "Square Inch": 1550,
      "Acre": 0.000247105,
      "Square Centimeter": 10000,
      "Square Millimeter": 1000000,
    },
    "Hectare": {
      "Square Meter": 10000,
      "Hectare": 1,
      "Are": 100,
      "Square Kilometer": 0.01,
      "Square Mile": 0.00386102,
      "Square Foot": 107639.1,
      "Square Yard": 11959.9,
      "Square Inch": 15500031,
      "Acre": 2.47105,
      "Square Centimeter": 100000000,
      "Square Millimeter": 10000000000,
    },
    "Are": {
      "Square Meter": 100,
      "Hectare": 0.01,
      "Are": 1,
      "Square Kilometer": 0.0001,
      "Square Mile": 0.0000386102,
      "Square Foot": 1076.39,
      "Square Yard": 119.599,
      "Square Inch": 155000.31,
      "Acre": 0.0247105,
      "Square Centimeter": 1000000,
      "Square Millimeter": 100000000,
    },
    "Square Kilometer": {
      "Square Meter": 1000000,
      "Hectare": 100,
      "Are": 10000,
      "Square Kilometer": 1,
      "Square Mile": 0.386102,
      "Square Foot": 10763910,
      "Square Yard": 1195990,
      "Square Inch": 1550003100,
      "Acre": 2471.05,
      "Square Centimeter": 10000000000,
      "Square Millimeter": 1000000000000,
    },
    "Square Mile": {
      "Square Meter": 2589988.11,
      "Hectare": 258.998811,
      "Are": 25899.8811,
      "Square Kilometer": 2.58998811,
      "Square Mile": 1,
      "Square Foot": 27878400,
      "Square Yard": 3097600,
      "Square Inch": 4014489600,
      "Acre": 640,
      "Square Centimeter": 25899881100,
      "Square Millimeter": 2589988110000,
    },
    "Square Foot": {
      "Square Meter": 0.092903,
      "Hectare": 0.0000092903,
      "Are": 0.00092903,
      "Square Kilometer": 0.000000092903,
      "Square Mile": 0.00000003587,
      "Square Foot": 1,
      "Square Yard": 0.111111,
      "Square Inch": 144,
      "Acre": 0.000022957,
      "Square Centimeter": 929.03,
      "Square Millimeter": 92903,
    },
    "Square Yard": {
      "Square Meter": 0.836127,
      "Hectare": 0.0000836127,
      "Are": 0.00836127,
      "Square Kilometer": 0.000000836127,
      "Square Mile": 0.000000322831,
      "Square Foot": 9,
      "Square Yard": 1,
      "Square Inch": 1296,
      "Acre": 0.000206612,
      "Square Centimeter": 8361.27,
      "Square Millimeter": 836127,
    },
    "Square Inch": {
      "Square Meter": 0.00064516,
      "Hectare": 0.000000064516,
      "Are": 0.000064516,
      "Square Kilometer": 0.00000000064516,
      "Square Mile": 0.0000000002491,
      "Square Foot": 0.00694444,
      "Square Yard": 0.000771605,
      "Square Inch": 1,
      "Acre": 0.000000159422,
      "Square Centimeter": 6.4516,
      "Square Millimeter": 645.16,
    },
    "Acre": {
      "Square Meter": 4046.86,
      "Hectare": 0.404686,
      "Are": 40.4686,
      "Square Kilometer": 0.00404686,
      "Square Mile": 0.0015625,
      "Square Foot": 43560,
      "Square Yard": 4840,
      "Square Inch": 6272640,
      "Acre": 1,
      "Square Centimeter": 40468600,
      "Square Millimeter": 4046860000,
    },
    "Square Centimeter": {
      "Square Meter": 0.0001,
      "Hectare": 0.00000001,
      "Are": 0.00001,
      "Square Kilometer": 0.0000000001,
      "Square Mile": 0.00000000003861,
      "Square Foot": 0.00107639,
      "Square Yard": 0.000119599,
      "Square Inch": 0.155,
      "Acre": 0.0000000247105,
      "Square Centimeter": 1,
      "Square Millimeter": 100,
    },
    "Square Millimeter": {
      "Square Meter": 0.000001,
      "Hectare": 0.0000000001,
      "Are": 0.0000001,
      "Square Kilometer": 0.000000000001,
      "Square Mile": 0.0000000000003861,
      "Square Foot": 0.0000107639,
      "Square Yard": 0.00000119599,
      "Square Inch": 0.00155,
      "Acre": 0.000000000247105,
      "Square Centimeter": 0.01,
      "Square Millimeter": 1,
    },
  };

  const handleConvert = (e) => {
    e.preventDefault(); // Zapobiega odświeżeniu strony

    if (!inputValue || isNaN(inputValue)) {
      setResult("Invalid input, please enter a valid number.");
      return;
    }

    const value = parseFloat(inputValue);
    const converted = value * conversionTable[fromUnit][toUnit];

    setResult(
      `${value} ${fromUnit} is equal to ${converted.toFixed(3)} ${toUnit}`
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Area Converter</h1>
      <form className="space-y-6" onSubmit={handleConvert}>
        <div>
          <label className="block mb-1 text-sm font-semibold" htmlFor="value">
            Enter Value:
          </label>
          <input
            id="value"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
            placeholder="Enter a number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-semibold" htmlFor="fromUnit">
              Convert From:
            </label>
            <select
              id="fromUnit"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
            >
              {Object.keys(unitNames).map((unit) => (
                <option key={unit} value={unit}>
                  {unitNames[unit]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold" htmlFor="toUnit">
              Convert To:
            </label>
            <select
              id="toUnit"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
            >
              {Object.keys(unitNames).map((unit) => (
                <option key={unit} value={unit}>
                  {unitNames[unit]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-3 px-4 rounded-md shadow-md hover:opacity-80 focus:opacity-80 active:scale-95 transition-transform duration-200"
        >
          Convert
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 text-center rounded-md bg-gray-700 text-gray-100">
          <p className="text-lg font-semibold">{result}</p>
        </div>
      )}
    </div>
  );
};

export default Area;

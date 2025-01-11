import React, { useState } from "react";

const Converter = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [category, setCategory] = useState("length"); 
  const [fromUnit, setFromUnit] = useState("mile"); 
  const [toUnit, setToUnit] = useState("km"); 
  const [result, setResult] = useState(null); 

  const units = {
    length: {
      kilometer: {
        kilometer: 1,
        meter: 1000,
        centimeter: 100000,
        millimeter: 1000000,
        mile: 0.621371,
        yard: 1093.61,
        foot: 3280.84,
        inch: 39370.1,
      },
      meter: {
        kilometer: 0.001,
        meter: 1,
        centimeter: 100,
        millimeter: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701,
      },
      centimeter: {
        kilometer: 0.00001,
        meter: 0.01,
        centimeter: 1,
        millimeter: 10,
        mile: 0.0000062137,
        yard: 0.0109361,
        foot: 0.0328084,
        inch: 0.393701,
      },
      millimeter: {
        kilometer: 0.000001,
        meter: 0.001,
        centimeter: 0.1,
        millimeter: 1,
        mile: 0.000000621371,
        yard: 0.00109361,
        foot: 0.00328084,
        inch: 0.0393701,
      },
      mile: {
        kilometer: 1.60934,
        meter: 1609.34,
        centimeter: 160934,
        millimeter: 1609340,
        mile: 1,
        yard: 1760,
        foot: 5280,
        inch: 63360,
      },
      yard: {
        kilometer: 0.0009144,
        meter: 0.9144,
        centimeter: 91.44,
        millimeter: 914.4,
        mile: 0.000568182,
        yard: 1,
        foot: 3,
        inch: 36,
      },
      foot: {
        kilometer: 0.0003048,
        meter: 0.3048,
        centimeter: 30.48,
        millimeter: 304.8,
        mile: 0.000189394,
        yard: 0.333333,
        foot: 1,
        inch: 12,
      },
      inch: {
        kilometer: 0.0000254,
        meter: 0.0254,
        centimeter: 2.54,
        millimeter: 25.4,
        mile: 0.0000157828,
        yard: 0.0277778,
        foot: 0.0833333,
        inch: 1,
      },
    },
    volume: {
      liter: {
        liter: 1,
        milliliter: 1000,
        gallon: 0.264172,
        quart: 1.05669,
        pint: 2.11338,
        fluidOunce: 33.814,
        tablespoon: 67.628,
        teaspoon: 202.884,
      },
      milliliter: {
        liter: 0.001,
        milliliter: 1,
        gallon: 0.000264172,
        quart: 0.00105669,
        pint: 0.00211338,
        fluidOunce: 0.033814,
        tablespoon: 0.067628,
        teaspoon: 0.202884,
      },
      gallon: {
        liter: 3.78541,
        milliliter: 3785.41,
        gallon: 1,
        quart: 4,
        pint: 8,
        fluidOunce: 128,
        tablespoon: 256,
        teaspoon: 768,
      },
      quart: {
        liter: 0.946353,
        milliliter: 946.353,
        gallon: 0.25,
        quart: 1,
        pint: 2,
        fluidOunce: 32,
        tablespoon: 64,
        teaspoon: 192,
      },
      pint: {
        liter: 0.473176,
        milliliter: 473.176,
        gallon: 0.125,
        quart: 0.5,
        pint: 1,
        fluidOunce: 16,
        tablespoon: 32,
        teaspoon: 96,
      },
      fluidOunce: {
        liter: 0.0295735,
        milliliter: 29.5735,
        gallon: 0.0078125,
        quart: 0.03125,
        pint: 0.0625,
        fluidOunce: 1,
        tablespoon: 2,
        teaspoon: 6,
      },
      tablespoon: {
        liter: 0.0147868,
        milliliter: 14.7868,
        gallon: 0.00390625,
        quart: 0.015625,
        pint: 0.03125,
        fluidOunce: 0.5,
        tablespoon: 1,
        teaspoon: 3,
      },
      teaspoon: {
        liter: 0.00492892,
        milliliter: 4.92892,
        gallon: 0.00130208,
        quart: 0.00520833,
        pint: 0.0104167,
        fluidOunce: 0.166667,
        tablespoon: 0.333333,
        teaspoon: 1,
      },
    },
    mass: {
      kilogram: {
        kilogram: 1,
        gram: 1000,
        milligram: 1000000,
        pound: 2.20462,
        ounce: 35.274,
        stone: 0.157473,
      },
      gram: {
        kilogram: 0.001,
        gram: 1,
        milligram: 1000,
        pound: 0.00220462,
        ounce: 0.035274,
        stone: 0.000157473,
      },
      milligram: {
        kilogram: 0.000001,
        gram: 0.001,
        milligram: 1,
        pound: 0.00000220462,
        ounce: 0.000035274,
        stone: 0.000000157473,
      },
      pound: {
        kilogram: 0.453592,
        gram: 453.592,
        milligram: 453592,
        pound: 1,
        ounce: 16,
        stone: 0.0714286,
      },
      ounce: {
        kilogram: 0.0283495,
        gram: 28.3495,
        milligram: 28349.5,
        pound: 0.0625,
        ounce: 1,
        stone: 0.00446429,
      },
      stone: {
        kilogram: 6.35029,
        gram: 6350.29,
        milligram: 6350290,
        pound: 14,
        ounce: 224,
        stone: 1,
      },
    },
  };
  
  const handleConvert = (e) => {
    e.preventDefault(); // Zapobiega odświeżeniu strony
  
    if (!inputValue || isNaN(inputValue)) {
      setResult("Invalid input, please enter a valid number.");
      return;
    }
  
    const value = parseFloat(inputValue);
  
  
    const fromRate = units[category][fromUnit][fromUnit];
    const toRate = units[category][fromUnit][toUnit];
  
    if (typeof toRate === "undefined") {
      setResult("Conversion rate not found for the selected units.");
      return;
    }
  
    const converted = value * toRate;
  
    setResult(`${value} ${fromUnit} is equal to ${converted.toFixed(3)} ${toUnit}`);
  };  

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Unit Converter</h1>
      <form className="space-y-6" onSubmit={handleConvert}>
        <div>
          <label className="block mb-1 text-sm font-semibold" htmlFor="category">
            Select Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              const firstUnit = Object.keys(units[e.target.value])[0];
              setFromUnit(firstUnit);
              setToUnit(firstUnit);
              setResult(null); // Reset wyniku
            }}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
          >
            {Object.keys(units).map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

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
              {Object.keys(units[category]).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
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
              {Object.keys(units[category]).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 px-4 rounded-md shadow-md hover:opacity-80 focus:opacity-80 active:scale-95 transition-transform duration-200"
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

export default Converter;

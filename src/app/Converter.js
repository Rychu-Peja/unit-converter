import React, { useState } from "react";

const Converter = () => {
  const [inputValue, setInputValue] = useState(""); // Wartość wejściowa
  const [fromUnit, setFromUnit] = useState("mile"); // Jednostka początkowa
  const [toUnit, setToUnit] = useState("km"); // Jednostka docelowa
  const [result, setResult] = useState(null); // Wynik

  // Rozszerzona lista współczynników konwersji
  const conversionRates = {
    mile: 1,          // baza (mile)
    km: 1.60934,      // ile km w 1 mili
    meter: 1609.34,
    foot: 5280,
    yard: 1760,
    inch: 63360,
    centimeter: 160934,
    millimeter: 1609340,
    nauticalmile: 0.868976,
  };

  const handleConvert = (e) => {
    e.preventDefault(); // Zapobiega odświeżeniu strony

    // Sprawdzenie poprawności wejścia
    if (!inputValue || isNaN(inputValue)) {
      setResult("Invalid input, please enter a valid number.");
      return;
    }

    const value = parseFloat(inputValue);
    const fromRate = conversionRates[fromUnit];
    const toRate = conversionRates[toUnit];

    if (!fromRate || !toRate) {
      setResult("Conversion rate not found for the selected units.");
      return;
    }

    // Obliczenie wyniku
    const converted = (value * fromRate) / toRate;

    // Ustawienie wyniku z większą liczbą miejsc po przecinku (5 miejsc)
    setResult(`${value} ${fromUnit} is equal to ${converted.toFixed(5)} ${toUnit}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Unit Converter</h1>
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
              {Object.keys(conversionRates).map((unit) => (
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
              {Object.keys(conversionRates).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-3 px-4 rounded-md shadow-md hover:opacity-80 focus:opacity-80 active:scale-95 transition-transform duration-200"
        >
          Convert
        </button>
      </form>
      {/* Wyświetlenie wyniku */}
      {result && (
        <div className="mt-4 p-4 text-center rounded-md bg-gray-700 text-gray-100">
          <p className="text-lg font-semibold">{result}</p>
        </div>
      )}
    </div>
  );
};

export default Converter;

"use client"; // Konieczne dla komponentów z React Hooks

// Import komponentu Converter
import Converter from './Converter'; // Ścieżka do Twojego komponentu `Converter.js`

// Główny komponent Home
export default function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/background.jpg')", // Ścieżka do Twojego tła
      }}
    >
      {/* Wstawienie komponentu Converter */}
      <div className="w-full max-w-md bg-gray-900 bg-opacity-90 rounded-lg shadow-lg p-6">
        <Converter />
      </div>
    </div>
  );
}

import React, { useState } from 'react';

function App() {
  const [noStep, setNoStep] = useState(-1);
  const [yesPressed, setYesPressed] = useState(false);
  const [yesSize, setYesSize] = useState(16); // Starting size

  const noTexts = [
    "No",
    "Are you sure? 🥺",
    "Really sure?? 💔",
    "Think again✨",
    "Last chance! 🌹",
    "Pachhtao ge! 😭",
    "Ek baar aur soch lo... Plsss",
  ];

  const handleNoClick = () => {
    setNoStep((prev) => (prev + 1) % noTexts.length);
    // Size ko +20 ki jagah +5 kar diya hai taaki control mein rahe
    setYesSize((prev) => prev + 5); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 p-4 overflow-hidden relative">
      
      {/* Decorative Hearts */}
      <div className="absolute top-10 left-10 text-pink-300 text-4xl animate-pulse">❤️</div>
      <div className="absolute bottom-10 right-10 text-rose-300 text-4xl animate-bounce">💖</div>

      {yesPressed ? (
        <div className="text-center transition-all duration-500 transform scale-110">
          <div className="text-9xl mb-6 animate-bounce">❤️🔥</div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-rose-600 drop-shadow-lg">
            I Love You Too!
          </h1>
          <p className="mt-6 text-xl text-gray-700 italic font-serif">
            "You are the best thing that ever happened to me..." 💍
          </p>
          <div className="mt-10 flex justify-center">
             <div className="bg-white p-4 rounded-full shadow-2xl">
                <span className="text-5xl">👩‍❤️‍👨</span>
             </div>
          </div>
        </div>
      ) : (
        <div className="text-center z-10">
          <div className="text-7xl mb-6 drop-shadow-md">🧸</div>
          <h2 className="text-4xl md:text-6xl font-bold text-rose-500 mb-12 font-serif">
            Do you love me?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Yes Button */}
            <button
              onClick={() => setYesPressed(true)}
              style={{ fontSize: `${yesSize}px` }}
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-10 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95"
            >
              Yes, I do! 💍
            </button>

            {/* No Button */}
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all whitespace-nowrap"
            >
              {noStep === -1 ? "No" : noTexts[noStep]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
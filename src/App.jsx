import React, { useState } from 'react';

function App() {
  const [noStep, setNoStep] = useState(-1);
  const [yesPressed, setYesPressed] = useState(false);
  const [yesSize, setYesSize] = useState(16);

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
    setYesSize((prev) => prev + 8); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 p-4 overflow-hidden relative">
      
      {/* --- Floating Roses Background --- */}
      <div className="absolute top-5 left-10 text-4xl animate-bounce">🌹</div>
      <div className="absolute top-20 right-20 text-5xl animate-pulse delay-75">🌹</div>
      <div className="absolute bottom-20 left-1/4 text-3xl animate-bounce delay-150">🌹</div>
      <div className="absolute top-1/2 right-10 text-4xl animate-pulse">🌹</div>
      
      {/* Decorative Hearts */}
      <div className="absolute top-10 left-1/2 text-pink-300 text-4xl animate-pulse">❤️</div>
      <div className="absolute bottom-10 right-10 text-rose-300 text-4xl animate-bounce">💖</div>

      {yesPressed ? (
        <div className="text-center transition-all duration-500 transform scale-110">
          {/* Success Roses Bloom */}
          <div className="text-7xl mb-4">🌹🌷🌹</div>
          <div className="text-9xl mb-6 animate-bounce">❤️🔥</div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-rose-600 drop-shadow-lg">
            I Love You Too!
          </h1>
          <p className="mt-6 text-xl text-gray-700 italic font-serif">
            "You are the best thing that ever happened to me..." 💍
          </p>
          <div className="mt-10 flex justify-center">
             <div className="bg-white p-4 rounded-full shadow-2xl flex gap-2">
                <span className="text-5xl">🌹</span>
                <span className="text-5xl">👩‍❤️‍👨</span>
                <span className="text-5xl">🌹</span>
             </div>
          </div>
        </div>
      ) : (
        <div className="text-center z-10">
          {/* Animated Teddy with Roses */}
          <div className="text-8xl mb-6 drop-shadow-md animate-swing">
             <span>🌹</span>🧸<span>🌹</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-rose-500 mb-12 font-serif">
            Do you love me?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Yes Button with Rose */}
            <button
              onClick={() => setYesPressed(true)}
              style={{ fontSize: `${yesSize}px` }}
              className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3 px-10 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Yes, I do! 🌹
            </button>

            {/* No Button */}
            <button
              onClick={handleNoClick}
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all whitespace-nowrap"
            >
              {noStep === -1 ? "No" : noTexts[noStep]}
            </button>
          </div>
          
          {/* Bottom Rose Petals hint */}
          <p className="mt-8 text-rose-400 italic">Accept this rose? 🥀</p>
        </div>
      )}
    </div>
  );
}

export default App;
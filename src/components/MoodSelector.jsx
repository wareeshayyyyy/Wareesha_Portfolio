import React, { useState } from 'react';

export default function MoodSelector() {
  const [mood, setMood] = useState('😊');

  const moodList = ['😊', '😢', '😡', '😎', '🤓', '😍'];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">Select Your Mood</h1>
      <div className="text-6xl mb-4">{mood}</div>
      <div className="flex flex-wrap justify-center gap-2">
        {moodList.map((m, index) => (
          <button
            key={index}
            onClick={() => setMood(m)}
            className={`text-2xl px-4 py-2 rounded-full transition-all hover:scale-110 ${
              mood === m ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function CounterCard() {
  // Step 1: Create a state variable "count" and a function "setCount" to update it.
  const [count, setCount] = useState(0); // Default value = 0

  // Step 2: Event handler functions
  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">🔢 Counter Example (useState)</h2>
      <p className="text-4xl font-bold text-gray-800 mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleIncrement}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl"
        >
          Increment
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

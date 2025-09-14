import React, { useRef } from 'react';

export default function FocusInputCard() {
  const inputRef = useRef(null); // 🧠 Step 1: Create a ref for the input element

  // 🧠 Step 2: Focus the input when button is clicked
  const handleFocus = () => {
    inputRef.current.focus(); // .current points to the input element
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">🎯 useRef Example</h2>
      <input
        type="text"
        ref={inputRef} // 🧠 Step 3: Attach the ref to the input
        placeholder="Click the button to focus me!"
        className="w-full p-3 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
      />
      <button
        onClick={handleFocus}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl"
      >
        Focus Input
      </button>
    </div>
  );
}

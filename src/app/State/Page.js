'use client'
import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
     
      <div className="text-xl mb-4">Count: {count}</div>
      <div className="flex gap-4">
        <button
         onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-600 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

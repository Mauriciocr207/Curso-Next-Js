'use client'
import { useState } from "react";

export default function CartCounter() {
    const [count, setCount] = useState(10);
  return (
    <>
      <span className="text-7xl">{count}</span>

      <div className="flex gap-4 mt-5">
        <button
          onClick={() => setCount(count - 1)}
          className="p-2 rounded-lg hover:bg-blue-700 bg-blue-500 w-16 text-white transition-colors"
        >
          -1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="p-2 rounded-lg hover:bg-blue-700 bg-blue-500 w-16 text-white transition-colors"
        >
          +1
        </button>
      </div>
    </>
  );
}
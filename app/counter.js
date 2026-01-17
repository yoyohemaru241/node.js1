"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "3px solid red", padding: "20px" }}>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントを増やす</button>
    </div>
  );
}

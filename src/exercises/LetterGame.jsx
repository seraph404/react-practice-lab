import { useState } from "react";

function LetterGame() {
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);

  function handleClick(letter) {
    // Your job:
    // 1. Check if `letter` is already in `history`
    if (!history.includes(letter)) {
      // 2. If not → increase score, add to history
      setScore((prev) => prev + 1);
      setHistory((prev) => [...prev, letter]);
    } else {
      // 3. If duplicate → reset score and clear history
      setScore(0);
      setHistory([]);
    }
  }

  return (
    <div>
      <h2>Score: {score}</h2>
      <div>
        <button onClick={() => handleClick("A")}>A</button>
        <button onClick={() => handleClick("B")}>B</button>
        <button onClick={() => handleClick("C")}>C</button>
      </div>
      <p>Click History: {history.join(", ")}</p>
    </div>
  );
}

export default LetterGame;

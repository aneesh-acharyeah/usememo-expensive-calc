import './App.css';
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    console.log("⏳ Calculating...");

    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;

  }

  const doubleNumber = useMemo(() => slowFunction(number, [number]));

  const themeStyles = {
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "2rem",
    textAlign: "center",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  }
  return (
    <div style={themeStyles} className="App">
      <h1>Expensive Calculation</h1>
      <input style={{ fontSize: "1.2rem", padding: "0.5rem", width: "80px" }} onChange={(e) => setNumber(parseInt(e.target.value))} type="number" value={number} />
      <br /><br />
      <button onClick={() => setDark(prev => !prev)}>
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>
      <h2>Result: {doubleNumber}</h2>
    </div>
  );
}

export default App;

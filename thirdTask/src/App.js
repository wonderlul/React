import React, { useState, useEffect } from "react";
import "./App.css";
import Clicker from "./components/clicker";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div>
      {showCounter ? <Clicker /> : null}
      <div>
        <button onClick={() => setShowCounter(true)}>Show Clicker</button>
        <button onClick={() => setShowCounter(false)}>Hide Clicker</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

function Clicker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.document.title = `Counter: ${count}`;
  }, [count]); //ten useEffect będzie się wykonywał za każdym razem, jak będzie zmieniać się wartość 'count'

  useEffect(() => {
    return () => (window.document.title = `Counter: 0`);
  }, []); //ten useEffect wykonuje się tylko podczas montowania i odmontowywania komponentu (przy odmontowaniu trzeba użyć return)

  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)} disabled={count === 20}>
        Click
      </button>
    </div>
  );
}

export default Clicker;

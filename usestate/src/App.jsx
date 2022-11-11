import './App.css'

import { useState } from "react";

// useState serve para gerenciar o estado de algum valor
// getter setter

function App() {
  const [name, setName] = useState("Margarete");
  const [number, setNumber] = useState(1)

  console.log(name);

  const changeNumber = () => {
    // previous value - valor anterior
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="App">
      <h2>Meu nome é: {name}</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>
        <p>Número: {number}</p>
        <button onClick={changeNumber}>Mudar número!</button>
      </div>
    </div>
  );
}

export default App;

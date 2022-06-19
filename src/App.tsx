import React, {useState} from 'react';
import {Title} from './components/Title';

let count = 0;

function App() {
  const [count, setCount] = useState(0); // hook - gerencia estados do componente
  return (
    <div>
      <Title color='red' variant='sm'>Live de React.js e TypeScript do FullCycle</Title>
      <p>Contador de cliques: {count}</p>
      <button onClick={(e) => {
        setCount(count + 1);
      }}>Me clique! </button>
    </div>
  );
}

export default App;
